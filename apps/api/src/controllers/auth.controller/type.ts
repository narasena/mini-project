export interface IAuthController {
    email: string;
    isEmailVerified: boolean;
    countryPhoneId: number;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    sex: string;
    termsPrivacyAccepted: boolean;
    personalDataConsentAccepted: boolean;
    eventPromoAccepted: boolean;
}