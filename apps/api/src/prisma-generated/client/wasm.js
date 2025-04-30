
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CountryPhoneScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  mobileCode: 'mobileCode',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.MemberScalarFieldEnum = {
  id: 'id',
  email: 'email',
  countryPhoneId: 'countryPhoneId',
  phoneNumber: 'phoneNumber',
  firstName: 'firstName',
  lastName: 'lastName',
  birthDate: 'birthDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  eventPromoAccepted: 'eventPromoAccepted',
  personalDataConsentAccepted: 'personalDataConsentAccepted',
  termsPrivacyAccepted: 'termsPrivacyAccepted',
  sex: 'sex',
  isEmailVerified: 'isEmailVerified'
};

exports.Prisma.VerificationCodeScalarFieldEnum = {
  id: 'id',
  code: 'code',
  email: 'email',
  type: 'type',
  expiredAt: 'expiredAt',
  isUsed: 'isUsed',
  attempts: 'attempts',
  memberId: 'memberId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.CreatorProfileScalarFieldEnum = {
  id: 'id',
  memberId: 'memberId',
  bannerImgUrl: 'bannerImgUrl',
  logoImgUrl: 'logoImgUrl',
  profileLinkUrl: 'profileLinkUrl',
  countryPhoneId: 'countryPhoneId',
  creatorPhoneNumber: 'creatorPhoneNumber',
  address: 'address',
  aboutUsInfo: 'aboutUsInfo',
  xUserName: 'xUserName',
  igUserName: 'igUserName',
  fbProfileUrl: 'fbProfileUrl',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.EventScalarFieldEnum = {
  id: 'id',
  creatorId: 'creatorId',
  eventName: 'eventName',
  eventFormatId: 'eventFormatId',
  eventTopicId: 'eventTopicId',
  organizerName: 'organizerName',
  organizerLogoImgUrl: 'organizerLogoImgUrl',
  eventDate: 'eventDate',
  eventTime: 'eventTime',
  eventLocation: 'eventLocation',
  eventDesc: 'eventDesc',
  ticketType: 'ticketType',
  ticketName: 'ticketName',
  ticketQty: 'ticketQty',
  ticketPrice: 'ticketPrice',
  ticketDesc: 'ticketDesc',
  ticketTermsAndCondition: 'ticketTermsAndCondition',
  ticketStartDate: 'ticketStartDate',
  ticketEndDate: 'ticketEndDate',
  eventCPName: 'eventCPName',
  eventCPEmail: 'eventCPEmail',
  eventCountryPhoneId: 'eventCountryPhoneId',
  ticketDataFormType: 'ticketDataFormType',
  maxTicketPerTransaction: 'maxTicketPerTransaction',
  oneEmailOneTransaction: 'oneEmailOneTransaction',
  ticketDataFormUnique: 'ticketDataFormUnique',
  isDraft: 'isDraft',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.EventFormatScalarFieldEnum = {
  id: 'id',
  formatName: 'formatName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.EventTopicScalarFieldEnum = {
  id: 'id',
  topicName: 'topicName',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.TicketTransactionScalarFieldEnum = {
  id: 'id',
  eventId: 'eventId',
  memberId: 'memberId',
  ticketCode: 'ticketCode',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.TicketTransactionDetailScalarFieldEnum = {
  id: 'id',
  ticketTransactionId: 'ticketTransactionId',
  orderName: 'orderName',
  orderCountryPhoneId: 'orderCountryPhoneId',
  orderEmail: 'orderEmail',
  orderBirthDate: 'orderBirthDate',
  orderSex: 'orderSex',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Sex = exports.$Enums.Sex = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER',
  PREFER_NOT_TO_SAY: 'PREFER_NOT_TO_SAY'
};

exports.CodeType = exports.$Enums.CodeType = {
  REGISTRATION: 'REGISTRATION',
  LOGIN: 'LOGIN'
};

exports.TicketType = exports.$Enums.TicketType = {
  BERBAYAR: 'BERBAYAR',
  BAYAR_SESUKAMU: 'BAYAR_SESUKAMU',
  GRATIS: 'GRATIS'
};

exports.TicketDataFormType = exports.$Enums.TicketDataFormType = {
  NO_ID: 'NO_ID',
  WITH_ID: 'WITH_ID'
};

exports.Prisma.ModelName = {
  CountryPhone: 'CountryPhone',
  Member: 'Member',
  VerificationCode: 'VerificationCode',
  CreatorProfile: 'CreatorProfile',
  Event: 'Event',
  EventFormat: 'EventFormat',
  EventTopic: 'EventTopic',
  TicketTransaction: 'TicketTransaction',
  TicketTransactionDetail: 'TicketTransactionDetail'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
