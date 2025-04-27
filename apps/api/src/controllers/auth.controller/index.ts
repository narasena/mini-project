import { NextFunction, Request, Response } from 'express';
import { IAuthController } from './type';

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

export async function verifyEmail(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
      const { email, type } = req.body;
      const
  } catch (error) {
    next(error);
  }
}
