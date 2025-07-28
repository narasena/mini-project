import { Sex } from "../prisma-generated/client";

export interface IMember {
    id: string;
    email: string
    countryPhoneId: number
    phoneNumber: string
    firstName: string
    lastName: string
    birthDate: Date
    sex: Sex
    eventPromoAccepted: boolean
    personalDataConsentAccepted: boolean
    termsPrivactyAccepted: boolean
    isEmailVerified: boolean

}