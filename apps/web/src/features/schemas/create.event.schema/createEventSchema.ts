import * as Yup from 'yup';
export const createEventSchema = Yup.object({
  creatorId: Yup.string().required('Creator ID is required'),
  eventName: Yup.string().required('Event name is required'),
  eventFormatId: Yup.number().required('Event Format must be selected'),
  eventTopicId: Yup.number().required('Event Topic must be selected'),
  eventTag: Yup.string().notRequired(),
  isPrivateEvent: Yup.boolean().required('Privacy status is required'),
  organizerName: Yup.string().required('Organizer name can not be empty'),
  organizerLogoImgUrl: Yup.string()
    .url('Please enter a valid URL format')
    .notRequired(),
  bannerImgUrl: Yup.string()
    .url('Please enter a valid URL format')
    .notRequired(),
  eventStartDate: Yup.string()
    .required('Event start date is required')
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format'),
  eventEndDate: Yup.string()
    .required('Event end date is required')
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format')
    .test(
      'is-after-start',
      'End date must be after start date',
      function (value) {
        const { eventStartDate } = this.parent;
        return (
          !eventStartDate ||
          !value ||
          new Date(value) >= new Date(eventStartDate)
        );
      },
    ),
  eventStartTime: Yup.string()
    .required('Event start time is required')
    .matches(/^([01][0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format'),
  eventEndTime: Yup.string()
    .required('Event end time is required')
    .matches(/^([01][0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format'),
  eventLocation: Yup.string().required('Event location is required'),
  eventDesc: Yup.string().notRequired(),
  ticketType: Yup.string().required('Please select one of the ticket type'),
  ticketName: Yup.string().required('Ticket name is required'),
  ticketQty: Yup.number()
    .required('Ticket quantity is required')
    .min(1, 'At least 1 ticket must be available'),
  ticketPrice: Yup.number().required('Ticket price is required'),
  ticketDesc: Yup.string().notRequired(),
  ticketTermsAndCondition: Yup.string().notRequired(),
  ticketStartDate: Yup.string()
    .required('Ticket start date is required')
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format'),
  ticketEndDate: Yup.string()
    .required('Ticket start date is required')
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format'),
  eventCPName: Yup.string().required('Event contact person name is required'),
  eventCPEmail: Yup.string()
    .email()
    .required('Event contact person email is required'),
  eventCPCountryPhoneId: Yup.number().required(
    'Event contact person country phone ID is required',
  ),
  eventCPPhone: Yup.string()
  .required('Phone number is required')
  .test(
    'phone-format',
    'Invalid phone number (e.g., 0811 123 456 or 0812-3456-78901)',
    (value) => {
      if (!value) return false;

      // Remove all non-digit characters
      const digitsOnly = value.replace(/\D/g, '');

      // Validate for Indonesian numbers WITHOUT country code (+62)
      return (
        digitsOnly.startsWith('0') && // Must start with 0
        digitsOnly.length >= 9 &&     // Min: 0 + 8 digits = 9
        digitsOnly.length <= 13       // Max: 0 + 12 digits = 13
      );
    }
  ),
  idCardStatus: Yup.string().oneOf(
    ['NO_ID', 'WITH_ID'],
    'ID card status must be NO_ID or WITH_ID',
  ),
  maxTicketPerTransaction: Yup.number().required(
    'Max ticket per transaction is required',
  ),
  oneEmailOneTransaction: Yup.boolean(),
  ticketDataFormUnique: Yup.boolean().required(
    'Ticket data uniqueness must be specified',
  ),
  isDraft: Yup.boolean(),
});