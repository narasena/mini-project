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
    const existingMember = await prisma.member.findUnique({
      where: {
        email,
      },
    });
     const { type } = req.body;
    
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


export async function registerMemberCheck (
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { email } = req.body
    const existingMember = await prisma.member.findUnique({
      where: {
        email,
      },
    });
    if (existingMember && existingMember.isEmailVerified===true) {
      return res.status(400).json({
        success: false,
        isVerified:true,
        message: 'Email already registered',
        data: null,
      });
    }
    if (existingMember && existingMember.isEmailVerified===false) {
      return res.status(400).json({
        success: false,
        isVerified:false,
        message: 'Email is not yet verified, please verify email with request new OTP',
        email: email,
      });
    }
    res.status(200).json({
      success: true,
      isVerified:false,
      message: 'Email is eligible to register',
      data: null,
    });
  } catch (error) {
    next(error)
    
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
        data: null
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
    const verificationCode = 
      (await generateEmailVerificationCode(email, type)).code;
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

      if(!emailSent|| !emailSent.messageId){
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
      
    } catch (emailError:any) {
      console.error('Email sending error:', emailError);
      res.status(500).json({
        success: false,
        message: 'Failed to send email verification code',
        error: emailError.message,
      });
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

    res.status(200).json({
      success: true,
      message: 'OTP verified successfully',
      data: {
        result,
      },
    });
  } catch (error: any) {
    const { email, code } = req.body;
    await increaseAttemptCount(code, email);
    next(error);
    res.status(400).json({ succes:false, message: 'Invalid OTP' });
  }
}

async function createAuthToken(member: any) {
  const tokenPayload:IJwtPayload = {
    id: member.id,
    email: member.email,
    activeRole: 'BUYER',
    verification: {
      isPhoneVerified: member.isPhoneVerified,
      isProfileDataProvided: member.isProfileDataProvided,
    }
  }
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
    await verifyEmailVerificationCode(req, res, next);

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

    res.status(200).json({
      success: true,
      message: 'Login verified successfully',
      data: {
        email,
        code,
        type,
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
    await verifyEmailVerificationCode(req, res, next);
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
    res.status(200).json({
      success: true,
      message: 'New member verified successfully',
      data: {
        email,
        code,
        type,
      },
    });
  } catch (error) {
    next(error);
  }
}

export async function sessionLoginMember(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    
  } catch (error) {
    next(error);
    
  }
}