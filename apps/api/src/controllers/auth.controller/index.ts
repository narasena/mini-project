import { NextFunction, Request, Response } from 'express';
import { IAuthController } from './type';
import { generateEmailVerificationCode } from '@/services/email.verification/generateVerificationCode';

export async function registerMember(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const {
      email,
      isEmailVerified,
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
  } catch (error) {
    next(error);
  }
}

export async function sendEmailVerificationCode (
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { email, type } = req.body
    const verificationCode = await generateEmailVerificationCode(email, type)
  } catch (error) {
    next(error);
    
  }
}
