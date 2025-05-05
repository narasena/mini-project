import { NextFunction, Request, response, Response } from 'express';
import { IAuthController } from './type';
import { generateEmailVerificationCode } from '@/services/email.verification/generateVerificationCode';
import fs from 'fs';
import { compile } from 'handlebars';
import { transporter } from '@/utils/mailer/transporter.mailer';
import { increaseAttemptCount } from '@/services/email.verification/attemptIncrement';
import { verifyCode } from '@/services/email.verification/verifyVerificationCode';
import { prisma } from '@/prisma';
import { Sex } from '@/prisma-generated/client';
import { IJwtPayload, jwtSign } from '@/utils/jwt/jwt.sign';
import { generateCodeEightCharsMix } from '@/utils/code.generator/codeGeneratorEightCharsMix';
import { generateCodeTenChars } from '@/utils/code.generator/codeGeneratorTenChars';

export async function registerMember(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const {
      email,
      countryPhoneId,
      phoneNumber,
      firstName,
      lastName,
      birthDate,
      sex,
      termsPrivacyAccepted,
      personalDataConsentAccepted,
      eventPromoAccepted,
    }: IAuthController = req.body;
    const referralNumber = generateCodeTenChars();
    const referralExpiryDate = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000); // 90 days from now
    const newMember = await prisma.member.create({
      data: {
        email,
        countryPhoneId,
        phoneNumber,
        firstName,
        lastName,
        birthDate,
        sex: sex as Sex,
        termsPrivacyAccepted,
        personalDataConsentAccepted,
        eventPromoAccepted,
        referralNumber,
        referralExpiryDate,
      },
    });
    await sendEmailVerificationCode(req, res, next);
    res.status(200).json({
      success: true,
      message: 'Member created successfully please verify email',
      data: newMember,
    });
  } catch (error) {
    next(error);
  }
}

export async function registerMemberCheck(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { email } = req.body;
    const existingMember = await prisma.member.findUnique({
      where: {
        email,
      },
    });
    if (existingMember && existingMember.isEmailVerified === true) {
      return res.status(400).json({
        success: false,
        isVerified: true,
        message: 'Email already registered',
        data: null,
      });
    }
    if (existingMember && existingMember.isEmailVerified === false) {
      return res.status(400).json({
        success: false,
        isVerified: false,
        message:
          'Email is not yet verified, please verify email with request new OTP',
        email: email,
      });
    }
    res.status(200).json({
      success: true,
      isVerified: false,
      message: 'Email is eligible to register',
      data: null,
    });
  } catch (error) {
    next(error);
  }
}

export async function loginMember(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.header('Access-Control-Allow-Origin', '*');
  try {
    const { email, type } = req.body;
    const existingMember = await prisma.member.findUnique({
      where: {
        email,
      },
    });
    if (!existingMember) {
      return res.status(400).json({
        success: false,
        message: 'Email not registered',
        data: null,
      });
    }
    if (existingMember.isEmailVerified === false) {
      return res.status(400).json({
        success: false,
        message: 'Email not verified',
        pushToRegister: true,
        data: null,
      });
    }

    await sendEmailVerificationCode(req, res, next);
    res.status(200).json({
      success: true,
      message: 'OTP sent successfully',
      data: {
        email,
        type,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function sendEmailVerificationCode(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log('Received request for send-otp:', req.body);
  res.header('Access-Control-Allow-Origin', '*');
  try {
    const { email, type } = req.body;
    const verificationCode = (await generateEmailVerificationCode(email, type))
      .code;
    console.log(verificationCode);

    const verifyEmailTemplate = fs.readFileSync(
      './src/public/verify-email-template.html',
      'utf-8',
    );

    let verifyEmailTemplateCompiled: any = compile(verifyEmailTemplate);
    verifyEmailTemplateCompiled = verifyEmailTemplateCompiled({
      email: email,
      code: verificationCode,
    });
    try {
      const emailSent = await transporter.sendMail({
        to: email,
        subject: `Permintaan Kode OTP Anda pada ${new Date()}`,
        html: verifyEmailTemplateCompiled,
      });

      if (!emailSent || !emailSent.messageId) {
        throw new Error('Email failed to send');
      }

      res.status(200).json({
        success: true,
        message: `OTP sent to your email successfully.\nPlease check your inbox.`,
        data: {
          email,
          type,
          verificationCode,
        },
      });
    } catch (emailError: any) {
      console.error('Email sending error:', emailError);
      next(emailError);
    }
  } catch (error) {
    next(error);
  }
}

export async function verifyEmailVerificationCode(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.header('Access-Control-Allow-Origin', '*');
  try {
    const { email, code, type } = req.body;
    console.log(req.body);
    const result = await verifyCode(email, code, type);

    req.body.verified = true;
    next();
  } catch (error: any) {
    const { email, code } = req.body;
    await increaseAttemptCount(code, email);
    next(error);
  }
}

function createAuthToken(member: any, activeRole: 'BUYER' | 'EVENT_CREATOR') {
  const tokenPayload: IJwtPayload = {
    id: member.id,
    email: member.email,
    activeRole: activeRole,
    firstName: member.firstName,
  };
  return jwtSign(tokenPayload);
}

export async function verifyLogin(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.header('Access-Control-Allow-Origin', '*');
  try {
    const { email, code, type } = req.body;

    const member = await prisma.member.findUnique({
      where: {
        email,
        isEmailVerified: true,
      },
    });
    if (!member) {
      throw {
        isExpose: true,
        status: 400,
        message: 'Member not found',
      };
    }
    const token = createAuthToken(member, 'BUYER');

    res.status(200).json({
      success: true,
      message: 'Login verified successfully',
      data: {
        token,
        member: {
          id: member.id,
          email: member.email,
          activeRole: 'BUYER',
          firstName: member.firstName,
        },
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function verifyNewMember(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { email, code, type } = req.body;

    const member = await prisma.member.findUnique({
      where: {
        email,
        isEmailVerified: false,
      },
    });
    console.log(member);
    await prisma.member.update({
      where: {
        email: member!.email,
      },
      data: {
        isEmailVerified: true,
      },
    });

    const codeProfileLink = generateCodeEightCharsMix();
    const newCreator = await prisma.creatorProfile.create({
      data: {
        memberId: member!.id,
        profileLinkUrl: codeProfileLink,
      },
    });
    const token = createAuthToken(member, 'BUYER');

    res.status(200).json({
      success: true,
      message: 'New member verified successfully',
      data: {
        token,
        member: {
          id: member?.id,
          email: member?.email,
          activeRole: 'BUYER',
          firstName: member?.firstName,
        },
      },
    });
  } catch (error) {
    next(error);
  }
}

type TUserRole = 'BUYER' | 'EVENT_CREATOR';

export async function sessionLoginMember(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { payload, activeRole } = req.body;
    const member = await prisma.member.findUnique({
      where: { id: payload.id },
      include: {
        creatorProfile: true,
      },
    });
    if (!member) {
      throw {
        isExpose: true,
        status: 400,
        message: 'Member not found',
      };
    }
    const desiredRole = activeRole as TUserRole;
    const newToken = createAuthToken(member, desiredRole);
    res.status(200).json({
      success: true,
      message: 'Session login verified successfully',
      token: newToken,
      member: {
        id: member?.id,
        email: member?.email,
        activeRole: desiredRole,
        firstName: member?.firstName,
      },
    });
  } catch (error) {
    next(error);
  }
}
