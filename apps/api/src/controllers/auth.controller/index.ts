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
