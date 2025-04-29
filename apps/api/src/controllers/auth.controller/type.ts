export interface IAuthController {
    email: string;
    isEmailVerified: boolean;
    countryPhoneId: number;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    sex: string;
    termsPrivacyAccepted: boolean;
    personalDataConsentAccepted: boolean;
    eventPromoAccepted: boolean;
}