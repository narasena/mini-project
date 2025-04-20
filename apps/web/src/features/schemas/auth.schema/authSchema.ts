import * as Yup from 'yup';

export const emailValidationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
});

export const registerValidationSchema = Yup.object({
  countryPhoneId: Yup.number().required('Country phone ID is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  birthDate: Yup.string().required('Birth date is required'),
  sex: Yup.string()
    .oneOf(['MALE', 'FEMALE'], 'Please select your gender')
    .required('Gender selection is required'),
  termsPrivacyAccepted: Yup.boolean()
    .oneOf([true], 'You must accept the terms and privacy policy')
    .required('You must accept the terms and privacy policy'),
  personalDataConsentAccepted: Yup.boolean()
    .oneOf([true], 'You must accept the personal data consent')
    .required('You must accept the personal data consent'),
  eventPromoAccepted: Yup.boolean(),
});