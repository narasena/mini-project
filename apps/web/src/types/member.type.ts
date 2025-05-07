
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

enum Sex {
  MALE,
  FEMALE,
  OTHER,
  PREFER_NOT_TO_SAY
}
