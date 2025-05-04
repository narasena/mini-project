
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CountryPhone
 * 
 */
export type CountryPhone = $Result.DefaultSelection<Prisma.$CountryPhonePayload>
/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model VerificationCode
 * 
 */
export type VerificationCode = $Result.DefaultSelection<Prisma.$VerificationCodePayload>
/**
 * Model CreatorProfile
 * 
 */
export type CreatorProfile = $Result.DefaultSelection<Prisma.$CreatorProfilePayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventFormat
 * 
 */
export type EventFormat = $Result.DefaultSelection<Prisma.$EventFormatPayload>
/**
 * Model EventTopic
 * 
 */
export type EventTopic = $Result.DefaultSelection<Prisma.$EventTopicPayload>
/**
 * Model TicketTransaction
 * 
 */
export type TicketTransaction = $Result.DefaultSelection<Prisma.$TicketTransactionPayload>
/**
 * Model TicketTransactionDetail
 * 
 */
export type TicketTransactionDetail = $Result.DefaultSelection<Prisma.$TicketTransactionDetailPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Sex: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER',
  PREFER_NOT_TO_SAY: 'PREFER_NOT_TO_SAY'
};

export type Sex = (typeof Sex)[keyof typeof Sex]


export const CodeType: {
  REGISTRATION: 'REGISTRATION',
  LOGIN: 'LOGIN'
};

export type CodeType = (typeof CodeType)[keyof typeof CodeType]


export const TicketType: {
  BERBAYAR: 'BERBAYAR',
  BAYAR_SESUKAMU: 'BAYAR_SESUKAMU',
  GRATIS: 'GRATIS'
};

export type TicketType = (typeof TicketType)[keyof typeof TicketType]


export const TicketIDCard: {
  NO_ID: 'NO_ID',
  WITH_ID: 'WITH_ID'
};

export type TicketIDCard = (typeof TicketIDCard)[keyof typeof TicketIDCard]

}

export type Sex = $Enums.Sex

export const Sex: typeof $Enums.Sex

export type CodeType = $Enums.CodeType

export const CodeType: typeof $Enums.CodeType

export type TicketType = $Enums.TicketType

export const TicketType: typeof $Enums.TicketType

export type TicketIDCard = $Enums.TicketIDCard

export const TicketIDCard: typeof $Enums.TicketIDCard

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CountryPhones
 * const countryPhones = await prisma.countryPhone.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CountryPhones
   * const countryPhones = await prisma.countryPhone.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.countryPhone`: Exposes CRUD operations for the **CountryPhone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CountryPhones
    * const countryPhones = await prisma.countryPhone.findMany()
    * ```
    */
  get countryPhone(): Prisma.CountryPhoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationCode`: Exposes CRUD operations for the **VerificationCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationCodes
    * const verificationCodes = await prisma.verificationCode.findMany()
    * ```
    */
  get verificationCode(): Prisma.VerificationCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creatorProfile`: Exposes CRUD operations for the **CreatorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreatorProfiles
    * const creatorProfiles = await prisma.creatorProfile.findMany()
    * ```
    */
  get creatorProfile(): Prisma.CreatorProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventFormat`: Exposes CRUD operations for the **EventFormat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventFormats
    * const eventFormats = await prisma.eventFormat.findMany()
    * ```
    */
  get eventFormat(): Prisma.EventFormatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventTopic`: Exposes CRUD operations for the **EventTopic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventTopics
    * const eventTopics = await prisma.eventTopic.findMany()
    * ```
    */
  get eventTopic(): Prisma.EventTopicDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketTransaction`: Exposes CRUD operations for the **TicketTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketTransactions
    * const ticketTransactions = await prisma.ticketTransaction.findMany()
    * ```
    */
  get ticketTransaction(): Prisma.TicketTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketTransactionDetail`: Exposes CRUD operations for the **TicketTransactionDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketTransactionDetails
    * const ticketTransactionDetails = await prisma.ticketTransactionDetail.findMany()
    * ```
    */
  get ticketTransactionDetail(): Prisma.TicketTransactionDetailDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "countryPhone" | "member" | "verificationCode" | "creatorProfile" | "event" | "eventFormat" | "eventTopic" | "ticketTransaction" | "ticketTransactionDetail"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CountryPhone: {
        payload: Prisma.$CountryPhonePayload<ExtArgs>
        fields: Prisma.CountryPhoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryPhoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPhonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryPhoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPhonePayload>
          }
          findFirst: {
            args: Prisma.CountryPhoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPhonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryPhoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPhonePayload>
          }
          findMany: {
            args: Prisma.CountryPhoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPhonePayload>[]
          }
          create: {
            args: Prisma.CountryPhoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPhonePayload>
          }
          createMany: {
            args: Prisma.CountryPhoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryPhoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPhonePayload>[]
          }
          delete: {
            args: Prisma.CountryPhoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPhonePayload>
          }
          update: {
            args: Prisma.CountryPhoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPhonePayload>
          }
          deleteMany: {
            args: Prisma.CountryPhoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryPhoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CountryPhoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPhonePayload>[]
          }
          upsert: {
            args: Prisma.CountryPhoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPhonePayload>
          }
          aggregate: {
            args: Prisma.CountryPhoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountryPhone>
          }
          groupBy: {
            args: Prisma.CountryPhoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryPhoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryPhoneCountArgs<ExtArgs>
            result: $Utils.Optional<CountryPhoneCountAggregateOutputType> | number
          }
        }
      }
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      VerificationCode: {
        payload: Prisma.$VerificationCodePayload<ExtArgs>
        fields: Prisma.VerificationCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          findFirst: {
            args: Prisma.VerificationCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          findMany: {
            args: Prisma.VerificationCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>[]
          }
          create: {
            args: Prisma.VerificationCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          createMany: {
            args: Prisma.VerificationCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>[]
          }
          delete: {
            args: Prisma.VerificationCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          update: {
            args: Prisma.VerificationCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          deleteMany: {
            args: Prisma.VerificationCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>[]
          }
          upsert: {
            args: Prisma.VerificationCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationCodePayload>
          }
          aggregate: {
            args: Prisma.VerificationCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationCode>
          }
          groupBy: {
            args: Prisma.VerificationCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCodeCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCodeCountAggregateOutputType> | number
          }
        }
      }
      CreatorProfile: {
        payload: Prisma.$CreatorProfilePayload<ExtArgs>
        fields: Prisma.CreatorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreatorProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreatorProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>
          }
          findFirst: {
            args: Prisma.CreatorProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreatorProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>
          }
          findMany: {
            args: Prisma.CreatorProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>[]
          }
          create: {
            args: Prisma.CreatorProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>
          }
          createMany: {
            args: Prisma.CreatorProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreatorProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>[]
          }
          delete: {
            args: Prisma.CreatorProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>
          }
          update: {
            args: Prisma.CreatorProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>
          }
          deleteMany: {
            args: Prisma.CreatorProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreatorProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreatorProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>[]
          }
          upsert: {
            args: Prisma.CreatorProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreatorProfilePayload>
          }
          aggregate: {
            args: Prisma.CreatorProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreatorProfile>
          }
          groupBy: {
            args: Prisma.CreatorProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreatorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreatorProfileCountArgs<ExtArgs>
            result: $Utils.Optional<CreatorProfileCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventFormat: {
        payload: Prisma.$EventFormatPayload<ExtArgs>
        fields: Prisma.EventFormatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFormatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFormatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormatPayload>
          }
          findFirst: {
            args: Prisma.EventFormatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFormatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormatPayload>
          }
          findMany: {
            args: Prisma.EventFormatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormatPayload>[]
          }
          create: {
            args: Prisma.EventFormatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormatPayload>
          }
          createMany: {
            args: Prisma.EventFormatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventFormatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormatPayload>[]
          }
          delete: {
            args: Prisma.EventFormatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormatPayload>
          }
          update: {
            args: Prisma.EventFormatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormatPayload>
          }
          deleteMany: {
            args: Prisma.EventFormatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventFormatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventFormatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormatPayload>[]
          }
          upsert: {
            args: Prisma.EventFormatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventFormatPayload>
          }
          aggregate: {
            args: Prisma.EventFormatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventFormat>
          }
          groupBy: {
            args: Prisma.EventFormatGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventFormatGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventFormatCountArgs<ExtArgs>
            result: $Utils.Optional<EventFormatCountAggregateOutputType> | number
          }
        }
      }
      EventTopic: {
        payload: Prisma.$EventTopicPayload<ExtArgs>
        fields: Prisma.EventTopicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventTopicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTopicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventTopicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTopicPayload>
          }
          findFirst: {
            args: Prisma.EventTopicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTopicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventTopicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTopicPayload>
          }
          findMany: {
            args: Prisma.EventTopicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTopicPayload>[]
          }
          create: {
            args: Prisma.EventTopicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTopicPayload>
          }
          createMany: {
            args: Prisma.EventTopicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventTopicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTopicPayload>[]
          }
          delete: {
            args: Prisma.EventTopicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTopicPayload>
          }
          update: {
            args: Prisma.EventTopicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTopicPayload>
          }
          deleteMany: {
            args: Prisma.EventTopicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventTopicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventTopicUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTopicPayload>[]
          }
          upsert: {
            args: Prisma.EventTopicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTopicPayload>
          }
          aggregate: {
            args: Prisma.EventTopicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventTopic>
          }
          groupBy: {
            args: Prisma.EventTopicGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventTopicGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventTopicCountArgs<ExtArgs>
            result: $Utils.Optional<EventTopicCountAggregateOutputType> | number
          }
        }
      }
      TicketTransaction: {
        payload: Prisma.$TicketTransactionPayload<ExtArgs>
        fields: Prisma.TicketTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTransactionPayload>
          }
          findFirst: {
            args: Prisma.TicketTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTransactionPayload>
          }
          findMany: {
            args: Prisma.TicketTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTransactionPayload>[]
          }
          create: {
            args: Prisma.TicketTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTransactionPayload>
          }
          createMany: {
            args: Prisma.TicketTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTransactionPayload>[]
          }
          delete: {
            args: Prisma.TicketTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTransactionPayload>
          }
          update: {
            args: Prisma.TicketTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTransactionPayload>
          }
          deleteMany: {
            args: Prisma.TicketTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTransactionPayload>[]
          }
          upsert: {
            args: Prisma.TicketTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTransactionPayload>
          }
          aggregate: {
            args: Prisma.TicketTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketTransaction>
          }
          groupBy: {
            args: Prisma.TicketTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TicketTransactionCountAggregateOutputType> | number
          }
        }
      }
      TicketTransactionDetail: {
        payload: Prisma.$TicketTransactionDetailPayload<ExtArgs>
        fields: Prisma.TicketTransactionDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketTransactionDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTransactionDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketTransactionDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTransactionDetailPayload>
          }
          findFirst: {
            args: Prisma.TicketTransactionDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTransactionDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketTransactionDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTransactionDetailPayload>
          }
          findMany: {
            args: Prisma.TicketTransactionDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTransactionDetailPayload>[]
          }
          create: {
            args: Prisma.TicketTransactionDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTransactionDetailPayload>
          }
          createMany: {
            args: Prisma.TicketTransactionDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketTransactionDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTransactionDetailPayload>[]
          }
          delete: {
            args: Prisma.TicketTransactionDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTransactionDetailPayload>
          }
          update: {
            args: Prisma.TicketTransactionDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTransactionDetailPayload>
          }
          deleteMany: {
            args: Prisma.TicketTransactionDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketTransactionDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketTransactionDetailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTransactionDetailPayload>[]
          }
          upsert: {
            args: Prisma.TicketTransactionDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketTransactionDetailPayload>
          }
          aggregate: {
            args: Prisma.TicketTransactionDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketTransactionDetail>
          }
          groupBy: {
            args: Prisma.TicketTransactionDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketTransactionDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketTransactionDetailCountArgs<ExtArgs>
            result: $Utils.Optional<TicketTransactionDetailCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    countryPhone?: CountryPhoneOmit
    member?: MemberOmit
    verificationCode?: VerificationCodeOmit
    creatorProfile?: CreatorProfileOmit
    event?: EventOmit
    eventFormat?: EventFormatOmit
    eventTopic?: EventTopicOmit
    ticketTransaction?: TicketTransactionOmit
    ticketTransactionDetail?: TicketTransactionDetailOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CountryPhoneCountOutputType
   */

  export type CountryPhoneCountOutputType = {
    members: number
    creatorProfile: number
    events: number
    ticketTransactionDetails: number
  }

  export type CountryPhoneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | CountryPhoneCountOutputTypeCountMembersArgs
    creatorProfile?: boolean | CountryPhoneCountOutputTypeCountCreatorProfileArgs
    events?: boolean | CountryPhoneCountOutputTypeCountEventsArgs
    ticketTransactionDetails?: boolean | CountryPhoneCountOutputTypeCountTicketTransactionDetailsArgs
  }

  // Custom InputTypes
  /**
   * CountryPhoneCountOutputType without action
   */
  export type CountryPhoneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryPhoneCountOutputType
     */
    select?: CountryPhoneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryPhoneCountOutputType without action
   */
  export type CountryPhoneCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }

  /**
   * CountryPhoneCountOutputType without action
   */
  export type CountryPhoneCountOutputTypeCountCreatorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreatorProfileWhereInput
  }

  /**
   * CountryPhoneCountOutputType without action
   */
  export type CountryPhoneCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * CountryPhoneCountOutputType without action
   */
  export type CountryPhoneCountOutputTypeCountTicketTransactionDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketTransactionDetailWhereInput
  }


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    verificationCodes: number
    ticketTransactions: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verificationCodes?: boolean | MemberCountOutputTypeCountVerificationCodesArgs
    ticketTransactions?: boolean | MemberCountOutputTypeCountTicketTransactionsArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountVerificationCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationCodeWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountTicketTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketTransactionWhereInput
  }


  /**
   * Count Type CreatorProfileCountOutputType
   */

  export type CreatorProfileCountOutputType = {
    event: number
  }

  export type CreatorProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | CreatorProfileCountOutputTypeCountEventArgs
  }

  // Custom InputTypes
  /**
   * CreatorProfileCountOutputType without action
   */
  export type CreatorProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfileCountOutputType
     */
    select?: CreatorProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CreatorProfileCountOutputType without action
   */
  export type CreatorProfileCountOutputTypeCountEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    ticketTransactions: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketTransactions?: boolean | EventCountOutputTypeCountTicketTransactionsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTicketTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketTransactionWhereInput
  }


  /**
   * Count Type EventFormatCountOutputType
   */

  export type EventFormatCountOutputType = {
    event: number
  }

  export type EventFormatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventFormatCountOutputTypeCountEventArgs
  }

  // Custom InputTypes
  /**
   * EventFormatCountOutputType without action
   */
  export type EventFormatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormatCountOutputType
     */
    select?: EventFormatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventFormatCountOutputType without action
   */
  export type EventFormatCountOutputTypeCountEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type EventTopicCountOutputType
   */

  export type EventTopicCountOutputType = {
    event: number
  }

  export type EventTopicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventTopicCountOutputTypeCountEventArgs
  }

  // Custom InputTypes
  /**
   * EventTopicCountOutputType without action
   */
  export type EventTopicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTopicCountOutputType
     */
    select?: EventTopicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventTopicCountOutputType without action
   */
  export type EventTopicCountOutputTypeCountEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type TicketTransactionCountOutputType
   */

  export type TicketTransactionCountOutputType = {
    ticketTransactionDetails: number
  }

  export type TicketTransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketTransactionDetails?: boolean | TicketTransactionCountOutputTypeCountTicketTransactionDetailsArgs
  }

  // Custom InputTypes
  /**
   * TicketTransactionCountOutputType without action
   */
  export type TicketTransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransactionCountOutputType
     */
    select?: TicketTransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketTransactionCountOutputType without action
   */
  export type TicketTransactionCountOutputTypeCountTicketTransactionDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketTransactionDetailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CountryPhone
   */

  export type AggregateCountryPhone = {
    _count: CountryPhoneCountAggregateOutputType | null
    _avg: CountryPhoneAvgAggregateOutputType | null
    _sum: CountryPhoneSumAggregateOutputType | null
    _min: CountryPhoneMinAggregateOutputType | null
    _max: CountryPhoneMaxAggregateOutputType | null
  }

  export type CountryPhoneAvgAggregateOutputType = {
    id: number | null
  }

  export type CountryPhoneSumAggregateOutputType = {
    id: number | null
  }

  export type CountryPhoneMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    mobileCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CountryPhoneMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    mobileCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CountryPhoneCountAggregateOutputType = {
    id: number
    name: number
    code: number
    mobileCode: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CountryPhoneAvgAggregateInputType = {
    id?: true
  }

  export type CountryPhoneSumAggregateInputType = {
    id?: true
  }

  export type CountryPhoneMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    mobileCode?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CountryPhoneMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    mobileCode?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CountryPhoneCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    mobileCode?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CountryPhoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CountryPhone to aggregate.
     */
    where?: CountryPhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountryPhones to fetch.
     */
    orderBy?: CountryPhoneOrderByWithRelationInput | CountryPhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryPhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountryPhones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountryPhones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CountryPhones
    **/
    _count?: true | CountryPhoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryPhoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountryPhoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryPhoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryPhoneMaxAggregateInputType
  }

  export type GetCountryPhoneAggregateType<T extends CountryPhoneAggregateArgs> = {
        [P in keyof T & keyof AggregateCountryPhone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountryPhone[P]>
      : GetScalarType<T[P], AggregateCountryPhone[P]>
  }




  export type CountryPhoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryPhoneWhereInput
    orderBy?: CountryPhoneOrderByWithAggregationInput | CountryPhoneOrderByWithAggregationInput[]
    by: CountryPhoneScalarFieldEnum[] | CountryPhoneScalarFieldEnum
    having?: CountryPhoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryPhoneCountAggregateInputType | true
    _avg?: CountryPhoneAvgAggregateInputType
    _sum?: CountryPhoneSumAggregateInputType
    _min?: CountryPhoneMinAggregateInputType
    _max?: CountryPhoneMaxAggregateInputType
  }

  export type CountryPhoneGroupByOutputType = {
    id: number
    name: string
    code: string
    mobileCode: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: CountryPhoneCountAggregateOutputType | null
    _avg: CountryPhoneAvgAggregateOutputType | null
    _sum: CountryPhoneSumAggregateOutputType | null
    _min: CountryPhoneMinAggregateOutputType | null
    _max: CountryPhoneMaxAggregateOutputType | null
  }

  type GetCountryPhoneGroupByPayload<T extends CountryPhoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryPhoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryPhoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryPhoneGroupByOutputType[P]>
            : GetScalarType<T[P], CountryPhoneGroupByOutputType[P]>
        }
      >
    >


  export type CountryPhoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    mobileCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    members?: boolean | CountryPhone$membersArgs<ExtArgs>
    creatorProfile?: boolean | CountryPhone$creatorProfileArgs<ExtArgs>
    events?: boolean | CountryPhone$eventsArgs<ExtArgs>
    ticketTransactionDetails?: boolean | CountryPhone$ticketTransactionDetailsArgs<ExtArgs>
    _count?: boolean | CountryPhoneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["countryPhone"]>

  export type CountryPhoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    mobileCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["countryPhone"]>

  export type CountryPhoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    mobileCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["countryPhone"]>

  export type CountryPhoneSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    mobileCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CountryPhoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "mobileCode" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["countryPhone"]>
  export type CountryPhoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | CountryPhone$membersArgs<ExtArgs>
    creatorProfile?: boolean | CountryPhone$creatorProfileArgs<ExtArgs>
    events?: boolean | CountryPhone$eventsArgs<ExtArgs>
    ticketTransactionDetails?: boolean | CountryPhone$ticketTransactionDetailsArgs<ExtArgs>
    _count?: boolean | CountryPhoneCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountryPhoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CountryPhoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CountryPhonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CountryPhone"
    objects: {
      members: Prisma.$MemberPayload<ExtArgs>[]
      creatorProfile: Prisma.$CreatorProfilePayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
      ticketTransactionDetails: Prisma.$TicketTransactionDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      code: string
      mobileCode: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["countryPhone"]>
    composites: {}
  }

  type CountryPhoneGetPayload<S extends boolean | null | undefined | CountryPhoneDefaultArgs> = $Result.GetResult<Prisma.$CountryPhonePayload, S>

  type CountryPhoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryPhoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryPhoneCountAggregateInputType | true
    }

  export interface CountryPhoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CountryPhone'], meta: { name: 'CountryPhone' } }
    /**
     * Find zero or one CountryPhone that matches the filter.
     * @param {CountryPhoneFindUniqueArgs} args - Arguments to find a CountryPhone
     * @example
     * // Get one CountryPhone
     * const countryPhone = await prisma.countryPhone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryPhoneFindUniqueArgs>(args: SelectSubset<T, CountryPhoneFindUniqueArgs<ExtArgs>>): Prisma__CountryPhoneClient<$Result.GetResult<Prisma.$CountryPhonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CountryPhone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryPhoneFindUniqueOrThrowArgs} args - Arguments to find a CountryPhone
     * @example
     * // Get one CountryPhone
     * const countryPhone = await prisma.countryPhone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryPhoneFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryPhoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryPhoneClient<$Result.GetResult<Prisma.$CountryPhonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CountryPhone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryPhoneFindFirstArgs} args - Arguments to find a CountryPhone
     * @example
     * // Get one CountryPhone
     * const countryPhone = await prisma.countryPhone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryPhoneFindFirstArgs>(args?: SelectSubset<T, CountryPhoneFindFirstArgs<ExtArgs>>): Prisma__CountryPhoneClient<$Result.GetResult<Prisma.$CountryPhonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CountryPhone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryPhoneFindFirstOrThrowArgs} args - Arguments to find a CountryPhone
     * @example
     * // Get one CountryPhone
     * const countryPhone = await prisma.countryPhone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryPhoneFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryPhoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryPhoneClient<$Result.GetResult<Prisma.$CountryPhonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CountryPhones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryPhoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CountryPhones
     * const countryPhones = await prisma.countryPhone.findMany()
     * 
     * // Get first 10 CountryPhones
     * const countryPhones = await prisma.countryPhone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryPhoneWithIdOnly = await prisma.countryPhone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryPhoneFindManyArgs>(args?: SelectSubset<T, CountryPhoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPhonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CountryPhone.
     * @param {CountryPhoneCreateArgs} args - Arguments to create a CountryPhone.
     * @example
     * // Create one CountryPhone
     * const CountryPhone = await prisma.countryPhone.create({
     *   data: {
     *     // ... data to create a CountryPhone
     *   }
     * })
     * 
     */
    create<T extends CountryPhoneCreateArgs>(args: SelectSubset<T, CountryPhoneCreateArgs<ExtArgs>>): Prisma__CountryPhoneClient<$Result.GetResult<Prisma.$CountryPhonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CountryPhones.
     * @param {CountryPhoneCreateManyArgs} args - Arguments to create many CountryPhones.
     * @example
     * // Create many CountryPhones
     * const countryPhone = await prisma.countryPhone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryPhoneCreateManyArgs>(args?: SelectSubset<T, CountryPhoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CountryPhones and returns the data saved in the database.
     * @param {CountryPhoneCreateManyAndReturnArgs} args - Arguments to create many CountryPhones.
     * @example
     * // Create many CountryPhones
     * const countryPhone = await prisma.countryPhone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CountryPhones and only return the `id`
     * const countryPhoneWithIdOnly = await prisma.countryPhone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryPhoneCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryPhoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPhonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CountryPhone.
     * @param {CountryPhoneDeleteArgs} args - Arguments to delete one CountryPhone.
     * @example
     * // Delete one CountryPhone
     * const CountryPhone = await prisma.countryPhone.delete({
     *   where: {
     *     // ... filter to delete one CountryPhone
     *   }
     * })
     * 
     */
    delete<T extends CountryPhoneDeleteArgs>(args: SelectSubset<T, CountryPhoneDeleteArgs<ExtArgs>>): Prisma__CountryPhoneClient<$Result.GetResult<Prisma.$CountryPhonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CountryPhone.
     * @param {CountryPhoneUpdateArgs} args - Arguments to update one CountryPhone.
     * @example
     * // Update one CountryPhone
     * const countryPhone = await prisma.countryPhone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryPhoneUpdateArgs>(args: SelectSubset<T, CountryPhoneUpdateArgs<ExtArgs>>): Prisma__CountryPhoneClient<$Result.GetResult<Prisma.$CountryPhonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CountryPhones.
     * @param {CountryPhoneDeleteManyArgs} args - Arguments to filter CountryPhones to delete.
     * @example
     * // Delete a few CountryPhones
     * const { count } = await prisma.countryPhone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryPhoneDeleteManyArgs>(args?: SelectSubset<T, CountryPhoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CountryPhones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryPhoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CountryPhones
     * const countryPhone = await prisma.countryPhone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryPhoneUpdateManyArgs>(args: SelectSubset<T, CountryPhoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CountryPhones and returns the data updated in the database.
     * @param {CountryPhoneUpdateManyAndReturnArgs} args - Arguments to update many CountryPhones.
     * @example
     * // Update many CountryPhones
     * const countryPhone = await prisma.countryPhone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CountryPhones and only return the `id`
     * const countryPhoneWithIdOnly = await prisma.countryPhone.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CountryPhoneUpdateManyAndReturnArgs>(args: SelectSubset<T, CountryPhoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPhonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CountryPhone.
     * @param {CountryPhoneUpsertArgs} args - Arguments to update or create a CountryPhone.
     * @example
     * // Update or create a CountryPhone
     * const countryPhone = await prisma.countryPhone.upsert({
     *   create: {
     *     // ... data to create a CountryPhone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CountryPhone we want to update
     *   }
     * })
     */
    upsert<T extends CountryPhoneUpsertArgs>(args: SelectSubset<T, CountryPhoneUpsertArgs<ExtArgs>>): Prisma__CountryPhoneClient<$Result.GetResult<Prisma.$CountryPhonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CountryPhones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryPhoneCountArgs} args - Arguments to filter CountryPhones to count.
     * @example
     * // Count the number of CountryPhones
     * const count = await prisma.countryPhone.count({
     *   where: {
     *     // ... the filter for the CountryPhones we want to count
     *   }
     * })
    **/
    count<T extends CountryPhoneCountArgs>(
      args?: Subset<T, CountryPhoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryPhoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CountryPhone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryPhoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountryPhoneAggregateArgs>(args: Subset<T, CountryPhoneAggregateArgs>): Prisma.PrismaPromise<GetCountryPhoneAggregateType<T>>

    /**
     * Group by CountryPhone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryPhoneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountryPhoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryPhoneGroupByArgs['orderBy'] }
        : { orderBy?: CountryPhoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountryPhoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryPhoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CountryPhone model
   */
  readonly fields: CountryPhoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CountryPhone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryPhoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends CountryPhone$membersArgs<ExtArgs> = {}>(args?: Subset<T, CountryPhone$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creatorProfile<T extends CountryPhone$creatorProfileArgs<ExtArgs> = {}>(args?: Subset<T, CountryPhone$creatorProfileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends CountryPhone$eventsArgs<ExtArgs> = {}>(args?: Subset<T, CountryPhone$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticketTransactionDetails<T extends CountryPhone$ticketTransactionDetailsArgs<ExtArgs> = {}>(args?: Subset<T, CountryPhone$ticketTransactionDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTransactionDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CountryPhone model
   */
  interface CountryPhoneFieldRefs {
    readonly id: FieldRef<"CountryPhone", 'Int'>
    readonly name: FieldRef<"CountryPhone", 'String'>
    readonly code: FieldRef<"CountryPhone", 'String'>
    readonly mobileCode: FieldRef<"CountryPhone", 'String'>
    readonly createdAt: FieldRef<"CountryPhone", 'DateTime'>
    readonly updatedAt: FieldRef<"CountryPhone", 'DateTime'>
    readonly deletedAt: FieldRef<"CountryPhone", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CountryPhone findUnique
   */
  export type CountryPhoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryPhone
     */
    select?: CountryPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryPhone
     */
    omit?: CountryPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryPhoneInclude<ExtArgs> | null
    /**
     * Filter, which CountryPhone to fetch.
     */
    where: CountryPhoneWhereUniqueInput
  }

  /**
   * CountryPhone findUniqueOrThrow
   */
  export type CountryPhoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryPhone
     */
    select?: CountryPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryPhone
     */
    omit?: CountryPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryPhoneInclude<ExtArgs> | null
    /**
     * Filter, which CountryPhone to fetch.
     */
    where: CountryPhoneWhereUniqueInput
  }

  /**
   * CountryPhone findFirst
   */
  export type CountryPhoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryPhone
     */
    select?: CountryPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryPhone
     */
    omit?: CountryPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryPhoneInclude<ExtArgs> | null
    /**
     * Filter, which CountryPhone to fetch.
     */
    where?: CountryPhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountryPhones to fetch.
     */
    orderBy?: CountryPhoneOrderByWithRelationInput | CountryPhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CountryPhones.
     */
    cursor?: CountryPhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountryPhones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountryPhones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CountryPhones.
     */
    distinct?: CountryPhoneScalarFieldEnum | CountryPhoneScalarFieldEnum[]
  }

  /**
   * CountryPhone findFirstOrThrow
   */
  export type CountryPhoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryPhone
     */
    select?: CountryPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryPhone
     */
    omit?: CountryPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryPhoneInclude<ExtArgs> | null
    /**
     * Filter, which CountryPhone to fetch.
     */
    where?: CountryPhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountryPhones to fetch.
     */
    orderBy?: CountryPhoneOrderByWithRelationInput | CountryPhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CountryPhones.
     */
    cursor?: CountryPhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountryPhones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountryPhones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CountryPhones.
     */
    distinct?: CountryPhoneScalarFieldEnum | CountryPhoneScalarFieldEnum[]
  }

  /**
   * CountryPhone findMany
   */
  export type CountryPhoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryPhone
     */
    select?: CountryPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryPhone
     */
    omit?: CountryPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryPhoneInclude<ExtArgs> | null
    /**
     * Filter, which CountryPhones to fetch.
     */
    where?: CountryPhoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CountryPhones to fetch.
     */
    orderBy?: CountryPhoneOrderByWithRelationInput | CountryPhoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CountryPhones.
     */
    cursor?: CountryPhoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CountryPhones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CountryPhones.
     */
    skip?: number
    distinct?: CountryPhoneScalarFieldEnum | CountryPhoneScalarFieldEnum[]
  }

  /**
   * CountryPhone create
   */
  export type CountryPhoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryPhone
     */
    select?: CountryPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryPhone
     */
    omit?: CountryPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryPhoneInclude<ExtArgs> | null
    /**
     * The data needed to create a CountryPhone.
     */
    data: XOR<CountryPhoneCreateInput, CountryPhoneUncheckedCreateInput>
  }

  /**
   * CountryPhone createMany
   */
  export type CountryPhoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CountryPhones.
     */
    data: CountryPhoneCreateManyInput | CountryPhoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CountryPhone createManyAndReturn
   */
  export type CountryPhoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryPhone
     */
    select?: CountryPhoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CountryPhone
     */
    omit?: CountryPhoneOmit<ExtArgs> | null
    /**
     * The data used to create many CountryPhones.
     */
    data: CountryPhoneCreateManyInput | CountryPhoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CountryPhone update
   */
  export type CountryPhoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryPhone
     */
    select?: CountryPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryPhone
     */
    omit?: CountryPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryPhoneInclude<ExtArgs> | null
    /**
     * The data needed to update a CountryPhone.
     */
    data: XOR<CountryPhoneUpdateInput, CountryPhoneUncheckedUpdateInput>
    /**
     * Choose, which CountryPhone to update.
     */
    where: CountryPhoneWhereUniqueInput
  }

  /**
   * CountryPhone updateMany
   */
  export type CountryPhoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CountryPhones.
     */
    data: XOR<CountryPhoneUpdateManyMutationInput, CountryPhoneUncheckedUpdateManyInput>
    /**
     * Filter which CountryPhones to update
     */
    where?: CountryPhoneWhereInput
    /**
     * Limit how many CountryPhones to update.
     */
    limit?: number
  }

  /**
   * CountryPhone updateManyAndReturn
   */
  export type CountryPhoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryPhone
     */
    select?: CountryPhoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CountryPhone
     */
    omit?: CountryPhoneOmit<ExtArgs> | null
    /**
     * The data used to update CountryPhones.
     */
    data: XOR<CountryPhoneUpdateManyMutationInput, CountryPhoneUncheckedUpdateManyInput>
    /**
     * Filter which CountryPhones to update
     */
    where?: CountryPhoneWhereInput
    /**
     * Limit how many CountryPhones to update.
     */
    limit?: number
  }

  /**
   * CountryPhone upsert
   */
  export type CountryPhoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryPhone
     */
    select?: CountryPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryPhone
     */
    omit?: CountryPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryPhoneInclude<ExtArgs> | null
    /**
     * The filter to search for the CountryPhone to update in case it exists.
     */
    where: CountryPhoneWhereUniqueInput
    /**
     * In case the CountryPhone found by the `where` argument doesn't exist, create a new CountryPhone with this data.
     */
    create: XOR<CountryPhoneCreateInput, CountryPhoneUncheckedCreateInput>
    /**
     * In case the CountryPhone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryPhoneUpdateInput, CountryPhoneUncheckedUpdateInput>
  }

  /**
   * CountryPhone delete
   */
  export type CountryPhoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryPhone
     */
    select?: CountryPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryPhone
     */
    omit?: CountryPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryPhoneInclude<ExtArgs> | null
    /**
     * Filter which CountryPhone to delete.
     */
    where: CountryPhoneWhereUniqueInput
  }

  /**
   * CountryPhone deleteMany
   */
  export type CountryPhoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CountryPhones to delete
     */
    where?: CountryPhoneWhereInput
    /**
     * Limit how many CountryPhones to delete.
     */
    limit?: number
  }

  /**
   * CountryPhone.members
   */
  export type CountryPhone$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * CountryPhone.creatorProfile
   */
  export type CountryPhone$creatorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileInclude<ExtArgs> | null
    where?: CreatorProfileWhereInput
    orderBy?: CreatorProfileOrderByWithRelationInput | CreatorProfileOrderByWithRelationInput[]
    cursor?: CreatorProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreatorProfileScalarFieldEnum | CreatorProfileScalarFieldEnum[]
  }

  /**
   * CountryPhone.events
   */
  export type CountryPhone$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * CountryPhone.ticketTransactionDetails
   */
  export type CountryPhone$ticketTransactionDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransactionDetail
     */
    select?: TicketTransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransactionDetail
     */
    omit?: TicketTransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionDetailInclude<ExtArgs> | null
    where?: TicketTransactionDetailWhereInput
    orderBy?: TicketTransactionDetailOrderByWithRelationInput | TicketTransactionDetailOrderByWithRelationInput[]
    cursor?: TicketTransactionDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketTransactionDetailScalarFieldEnum | TicketTransactionDetailScalarFieldEnum[]
  }

  /**
   * CountryPhone without action
   */
  export type CountryPhoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryPhone
     */
    select?: CountryPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryPhone
     */
    omit?: CountryPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryPhoneInclude<ExtArgs> | null
  }


  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberAvgAggregateOutputType = {
    countryPhoneId: number | null
  }

  export type MemberSumAggregateOutputType = {
    countryPhoneId: number | null
  }

  export type MemberMinAggregateOutputType = {
    id: string | null
    email: string | null
    countryPhoneId: number | null
    phoneNumber: string | null
    firstName: string | null
    lastName: string | null
    birthDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    eventPromoAccepted: boolean | null
    personalDataConsentAccepted: boolean | null
    termsPrivacyAccepted: boolean | null
    sex: $Enums.Sex | null
    isEmailVerified: boolean | null
  }

  export type MemberMaxAggregateOutputType = {
    id: string | null
    email: string | null
    countryPhoneId: number | null
    phoneNumber: string | null
    firstName: string | null
    lastName: string | null
    birthDate: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    eventPromoAccepted: boolean | null
    personalDataConsentAccepted: boolean | null
    termsPrivacyAccepted: boolean | null
    sex: $Enums.Sex | null
    isEmailVerified: boolean | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    email: number
    countryPhoneId: number
    phoneNumber: number
    firstName: number
    lastName: number
    birthDate: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    eventPromoAccepted: number
    personalDataConsentAccepted: number
    termsPrivacyAccepted: number
    sex: number
    isEmailVerified: number
    _all: number
  }


  export type MemberAvgAggregateInputType = {
    countryPhoneId?: true
  }

  export type MemberSumAggregateInputType = {
    countryPhoneId?: true
  }

  export type MemberMinAggregateInputType = {
    id?: true
    email?: true
    countryPhoneId?: true
    phoneNumber?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    eventPromoAccepted?: true
    personalDataConsentAccepted?: true
    termsPrivacyAccepted?: true
    sex?: true
    isEmailVerified?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    email?: true
    countryPhoneId?: true
    phoneNumber?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    eventPromoAccepted?: true
    personalDataConsentAccepted?: true
    termsPrivacyAccepted?: true
    sex?: true
    isEmailVerified?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    email?: true
    countryPhoneId?: true
    phoneNumber?: true
    firstName?: true
    lastName?: true
    birthDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    eventPromoAccepted?: true
    personalDataConsentAccepted?: true
    termsPrivacyAccepted?: true
    sex?: true
    isEmailVerified?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _avg?: MemberAvgAggregateInputType
    _sum?: MemberSumAggregateInputType
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: string
    email: string
    countryPhoneId: number
    phoneNumber: string
    firstName: string
    lastName: string | null
    birthDate: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    eventPromoAccepted: boolean
    personalDataConsentAccepted: boolean
    termsPrivacyAccepted: boolean
    sex: $Enums.Sex
    isEmailVerified: boolean
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    countryPhoneId?: boolean
    phoneNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    eventPromoAccepted?: boolean
    personalDataConsentAccepted?: boolean
    termsPrivacyAccepted?: boolean
    sex?: boolean
    isEmailVerified?: boolean
    countryPhone?: boolean | CountryPhoneDefaultArgs<ExtArgs>
    verificationCodes?: boolean | Member$verificationCodesArgs<ExtArgs>
    creatorProfile?: boolean | Member$creatorProfileArgs<ExtArgs>
    ticketTransactions?: boolean | Member$ticketTransactionsArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    countryPhoneId?: boolean
    phoneNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    eventPromoAccepted?: boolean
    personalDataConsentAccepted?: boolean
    termsPrivacyAccepted?: boolean
    sex?: boolean
    isEmailVerified?: boolean
    countryPhone?: boolean | CountryPhoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    countryPhoneId?: boolean
    phoneNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    eventPromoAccepted?: boolean
    personalDataConsentAccepted?: boolean
    termsPrivacyAccepted?: boolean
    sex?: boolean
    isEmailVerified?: boolean
    countryPhone?: boolean | CountryPhoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectScalar = {
    id?: boolean
    email?: boolean
    countryPhoneId?: boolean
    phoneNumber?: boolean
    firstName?: boolean
    lastName?: boolean
    birthDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    eventPromoAccepted?: boolean
    personalDataConsentAccepted?: boolean
    termsPrivacyAccepted?: boolean
    sex?: boolean
    isEmailVerified?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "countryPhoneId" | "phoneNumber" | "firstName" | "lastName" | "birthDate" | "createdAt" | "updatedAt" | "deletedAt" | "eventPromoAccepted" | "personalDataConsentAccepted" | "termsPrivacyAccepted" | "sex" | "isEmailVerified", ExtArgs["result"]["member"]>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    countryPhone?: boolean | CountryPhoneDefaultArgs<ExtArgs>
    verificationCodes?: boolean | Member$verificationCodesArgs<ExtArgs>
    creatorProfile?: boolean | Member$creatorProfileArgs<ExtArgs>
    ticketTransactions?: boolean | Member$ticketTransactionsArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    countryPhone?: boolean | CountryPhoneDefaultArgs<ExtArgs>
  }
  export type MemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    countryPhone?: boolean | CountryPhoneDefaultArgs<ExtArgs>
  }

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      countryPhone: Prisma.$CountryPhonePayload<ExtArgs>
      verificationCodes: Prisma.$VerificationCodePayload<ExtArgs>[]
      creatorProfile: Prisma.$CreatorProfilePayload<ExtArgs> | null
      ticketTransactions: Prisma.$TicketTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      countryPhoneId: number
      phoneNumber: string
      firstName: string
      lastName: string | null
      birthDate: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      eventPromoAccepted: boolean
      personalDataConsentAccepted: boolean
      termsPrivacyAccepted: boolean
      sex: $Enums.Sex
      isEmailVerified: boolean
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {MemberCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MemberCreateManyAndReturnArgs>(args?: SelectSubset<T, MemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members and returns the data updated in the database.
     * @param {MemberUpdateManyAndReturnArgs} args - Arguments to update many Members.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MemberUpdateManyAndReturnArgs>(args: SelectSubset<T, MemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    countryPhone<T extends CountryPhoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryPhoneDefaultArgs<ExtArgs>>): Prisma__CountryPhoneClient<$Result.GetResult<Prisma.$CountryPhonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    verificationCodes<T extends Member$verificationCodesArgs<ExtArgs> = {}>(args?: Subset<T, Member$verificationCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creatorProfile<T extends Member$creatorProfileArgs<ExtArgs> = {}>(args?: Subset<T, Member$creatorProfileArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ticketTransactions<T extends Member$ticketTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Member$ticketTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Member model
   */
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'String'>
    readonly email: FieldRef<"Member", 'String'>
    readonly countryPhoneId: FieldRef<"Member", 'Int'>
    readonly phoneNumber: FieldRef<"Member", 'String'>
    readonly firstName: FieldRef<"Member", 'String'>
    readonly lastName: FieldRef<"Member", 'String'>
    readonly birthDate: FieldRef<"Member", 'String'>
    readonly createdAt: FieldRef<"Member", 'DateTime'>
    readonly updatedAt: FieldRef<"Member", 'DateTime'>
    readonly deletedAt: FieldRef<"Member", 'DateTime'>
    readonly eventPromoAccepted: FieldRef<"Member", 'Boolean'>
    readonly personalDataConsentAccepted: FieldRef<"Member", 'Boolean'>
    readonly termsPrivacyAccepted: FieldRef<"Member", 'Boolean'>
    readonly sex: FieldRef<"Member", 'Sex'>
    readonly isEmailVerified: FieldRef<"Member", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member createManyAndReturn
   */
  export type MemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member updateManyAndReturn
   */
  export type MemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Member.verificationCodes
   */
  export type Member$verificationCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    where?: VerificationCodeWhereInput
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    cursor?: VerificationCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * Member.creatorProfile
   */
  export type Member$creatorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileInclude<ExtArgs> | null
    where?: CreatorProfileWhereInput
  }

  /**
   * Member.ticketTransactions
   */
  export type Member$ticketTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransaction
     */
    select?: TicketTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransaction
     */
    omit?: TicketTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionInclude<ExtArgs> | null
    where?: TicketTransactionWhereInput
    orderBy?: TicketTransactionOrderByWithRelationInput | TicketTransactionOrderByWithRelationInput[]
    cursor?: TicketTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketTransactionScalarFieldEnum | TicketTransactionScalarFieldEnum[]
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model VerificationCode
   */

  export type AggregateVerificationCode = {
    _count: VerificationCodeCountAggregateOutputType | null
    _avg: VerificationCodeAvgAggregateOutputType | null
    _sum: VerificationCodeSumAggregateOutputType | null
    _min: VerificationCodeMinAggregateOutputType | null
    _max: VerificationCodeMaxAggregateOutputType | null
  }

  export type VerificationCodeAvgAggregateOutputType = {
    attempts: number | null
  }

  export type VerificationCodeSumAggregateOutputType = {
    attempts: number | null
  }

  export type VerificationCodeMinAggregateOutputType = {
    id: string | null
    code: string | null
    email: string | null
    type: $Enums.CodeType | null
    expiredAt: Date | null
    isUsed: boolean | null
    attempts: number | null
    memberId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type VerificationCodeMaxAggregateOutputType = {
    id: string | null
    code: string | null
    email: string | null
    type: $Enums.CodeType | null
    expiredAt: Date | null
    isUsed: boolean | null
    attempts: number | null
    memberId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type VerificationCodeCountAggregateOutputType = {
    id: number
    code: number
    email: number
    type: number
    expiredAt: number
    isUsed: number
    attempts: number
    memberId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type VerificationCodeAvgAggregateInputType = {
    attempts?: true
  }

  export type VerificationCodeSumAggregateInputType = {
    attempts?: true
  }

  export type VerificationCodeMinAggregateInputType = {
    id?: true
    code?: true
    email?: true
    type?: true
    expiredAt?: true
    isUsed?: true
    attempts?: true
    memberId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type VerificationCodeMaxAggregateInputType = {
    id?: true
    code?: true
    email?: true
    type?: true
    expiredAt?: true
    isUsed?: true
    attempts?: true
    memberId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type VerificationCodeCountAggregateInputType = {
    id?: true
    code?: true
    email?: true
    type?: true
    expiredAt?: true
    isUsed?: true
    attempts?: true
    memberId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type VerificationCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCode to aggregate.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationCodes
    **/
    _count?: true | VerificationCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VerificationCodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VerificationCodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationCodeMaxAggregateInputType
  }

  export type GetVerificationCodeAggregateType<T extends VerificationCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationCode[P]>
      : GetScalarType<T[P], AggregateVerificationCode[P]>
  }




  export type VerificationCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationCodeWhereInput
    orderBy?: VerificationCodeOrderByWithAggregationInput | VerificationCodeOrderByWithAggregationInput[]
    by: VerificationCodeScalarFieldEnum[] | VerificationCodeScalarFieldEnum
    having?: VerificationCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCodeCountAggregateInputType | true
    _avg?: VerificationCodeAvgAggregateInputType
    _sum?: VerificationCodeSumAggregateInputType
    _min?: VerificationCodeMinAggregateInputType
    _max?: VerificationCodeMaxAggregateInputType
  }

  export type VerificationCodeGroupByOutputType = {
    id: string
    code: string
    email: string
    type: $Enums.CodeType
    expiredAt: Date
    isUsed: boolean
    attempts: number
    memberId: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: VerificationCodeCountAggregateOutputType | null
    _avg: VerificationCodeAvgAggregateOutputType | null
    _sum: VerificationCodeSumAggregateOutputType | null
    _min: VerificationCodeMinAggregateOutputType | null
    _max: VerificationCodeMaxAggregateOutputType | null
  }

  type GetVerificationCodeGroupByPayload<T extends VerificationCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationCodeGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationCodeGroupByOutputType[P]>
        }
      >
    >


  export type VerificationCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    email?: boolean
    type?: boolean
    expiredAt?: boolean
    isUsed?: boolean
    attempts?: boolean
    memberId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    member?: boolean | VerificationCode$memberArgs<ExtArgs>
  }, ExtArgs["result"]["verificationCode"]>

  export type VerificationCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    email?: boolean
    type?: boolean
    expiredAt?: boolean
    isUsed?: boolean
    attempts?: boolean
    memberId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    member?: boolean | VerificationCode$memberArgs<ExtArgs>
  }, ExtArgs["result"]["verificationCode"]>

  export type VerificationCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    email?: boolean
    type?: boolean
    expiredAt?: boolean
    isUsed?: boolean
    attempts?: boolean
    memberId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    member?: boolean | VerificationCode$memberArgs<ExtArgs>
  }, ExtArgs["result"]["verificationCode"]>

  export type VerificationCodeSelectScalar = {
    id?: boolean
    code?: boolean
    email?: boolean
    type?: boolean
    expiredAt?: boolean
    isUsed?: boolean
    attempts?: boolean
    memberId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type VerificationCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "email" | "type" | "expiredAt" | "isUsed" | "attempts" | "memberId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["verificationCode"]>
  export type VerificationCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | VerificationCode$memberArgs<ExtArgs>
  }
  export type VerificationCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | VerificationCode$memberArgs<ExtArgs>
  }
  export type VerificationCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | VerificationCode$memberArgs<ExtArgs>
  }

  export type $VerificationCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationCode"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      email: string
      type: $Enums.CodeType
      expiredAt: Date
      isUsed: boolean
      attempts: number
      memberId: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["verificationCode"]>
    composites: {}
  }

  type VerificationCodeGetPayload<S extends boolean | null | undefined | VerificationCodeDefaultArgs> = $Result.GetResult<Prisma.$VerificationCodePayload, S>

  type VerificationCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCodeCountAggregateInputType | true
    }

  export interface VerificationCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationCode'], meta: { name: 'VerificationCode' } }
    /**
     * Find zero or one VerificationCode that matches the filter.
     * @param {VerificationCodeFindUniqueArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationCodeFindUniqueArgs>(args: SelectSubset<T, VerificationCodeFindUniqueArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationCodeFindUniqueOrThrowArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindFirstArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationCodeFindFirstArgs>(args?: SelectSubset<T, VerificationCodeFindFirstArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindFirstOrThrowArgs} args - Arguments to find a VerificationCode
     * @example
     * // Get one VerificationCode
     * const verificationCode = await prisma.verificationCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationCodes
     * const verificationCodes = await prisma.verificationCode.findMany()
     * 
     * // Get first 10 VerificationCodes
     * const verificationCodes = await prisma.verificationCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationCodeWithIdOnly = await prisma.verificationCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationCodeFindManyArgs>(args?: SelectSubset<T, VerificationCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationCode.
     * @param {VerificationCodeCreateArgs} args - Arguments to create a VerificationCode.
     * @example
     * // Create one VerificationCode
     * const VerificationCode = await prisma.verificationCode.create({
     *   data: {
     *     // ... data to create a VerificationCode
     *   }
     * })
     * 
     */
    create<T extends VerificationCodeCreateArgs>(args: SelectSubset<T, VerificationCodeCreateArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationCodes.
     * @param {VerificationCodeCreateManyArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCode = await prisma.verificationCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCodeCreateManyArgs>(args?: SelectSubset<T, VerificationCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationCodes and returns the data saved in the database.
     * @param {VerificationCodeCreateManyAndReturnArgs} args - Arguments to create many VerificationCodes.
     * @example
     * // Create many VerificationCodes
     * const verificationCode = await prisma.verificationCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationCodes and only return the `id`
     * const verificationCodeWithIdOnly = await prisma.verificationCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationCode.
     * @param {VerificationCodeDeleteArgs} args - Arguments to delete one VerificationCode.
     * @example
     * // Delete one VerificationCode
     * const VerificationCode = await prisma.verificationCode.delete({
     *   where: {
     *     // ... filter to delete one VerificationCode
     *   }
     * })
     * 
     */
    delete<T extends VerificationCodeDeleteArgs>(args: SelectSubset<T, VerificationCodeDeleteArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationCode.
     * @param {VerificationCodeUpdateArgs} args - Arguments to update one VerificationCode.
     * @example
     * // Update one VerificationCode
     * const verificationCode = await prisma.verificationCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationCodeUpdateArgs>(args: SelectSubset<T, VerificationCodeUpdateArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationCodes.
     * @param {VerificationCodeDeleteManyArgs} args - Arguments to filter VerificationCodes to delete.
     * @example
     * // Delete a few VerificationCodes
     * const { count } = await prisma.verificationCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationCodeDeleteManyArgs>(args?: SelectSubset<T, VerificationCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationCodes
     * const verificationCode = await prisma.verificationCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationCodeUpdateManyArgs>(args: SelectSubset<T, VerificationCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationCodes and returns the data updated in the database.
     * @param {VerificationCodeUpdateManyAndReturnArgs} args - Arguments to update many VerificationCodes.
     * @example
     * // Update many VerificationCodes
     * const verificationCode = await prisma.verificationCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationCodes and only return the `id`
     * const verificationCodeWithIdOnly = await prisma.verificationCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationCode.
     * @param {VerificationCodeUpsertArgs} args - Arguments to update or create a VerificationCode.
     * @example
     * // Update or create a VerificationCode
     * const verificationCode = await prisma.verificationCode.upsert({
     *   create: {
     *     // ... data to create a VerificationCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationCode we want to update
     *   }
     * })
     */
    upsert<T extends VerificationCodeUpsertArgs>(args: SelectSubset<T, VerificationCodeUpsertArgs<ExtArgs>>): Prisma__VerificationCodeClient<$Result.GetResult<Prisma.$VerificationCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeCountArgs} args - Arguments to filter VerificationCodes to count.
     * @example
     * // Count the number of VerificationCodes
     * const count = await prisma.verificationCode.count({
     *   where: {
     *     // ... the filter for the VerificationCodes we want to count
     *   }
     * })
    **/
    count<T extends VerificationCodeCountArgs>(
      args?: Subset<T, VerificationCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationCodeAggregateArgs>(args: Subset<T, VerificationCodeAggregateArgs>): Prisma.PrismaPromise<GetVerificationCodeAggregateType<T>>

    /**
     * Group by VerificationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationCodeGroupByArgs['orderBy'] }
        : { orderBy?: VerificationCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationCode model
   */
  readonly fields: VerificationCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends VerificationCode$memberArgs<ExtArgs> = {}>(args?: Subset<T, VerificationCode$memberArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationCode model
   */
  interface VerificationCodeFieldRefs {
    readonly id: FieldRef<"VerificationCode", 'String'>
    readonly code: FieldRef<"VerificationCode", 'String'>
    readonly email: FieldRef<"VerificationCode", 'String'>
    readonly type: FieldRef<"VerificationCode", 'CodeType'>
    readonly expiredAt: FieldRef<"VerificationCode", 'DateTime'>
    readonly isUsed: FieldRef<"VerificationCode", 'Boolean'>
    readonly attempts: FieldRef<"VerificationCode", 'Int'>
    readonly memberId: FieldRef<"VerificationCode", 'String'>
    readonly createdAt: FieldRef<"VerificationCode", 'DateTime'>
    readonly updatedAt: FieldRef<"VerificationCode", 'DateTime'>
    readonly deletedAt: FieldRef<"VerificationCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationCode findUnique
   */
  export type VerificationCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode findUniqueOrThrow
   */
  export type VerificationCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode findFirst
   */
  export type VerificationCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode findFirstOrThrow
   */
  export type VerificationCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCode to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationCodes.
     */
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode findMany
   */
  export type VerificationCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter, which VerificationCodes to fetch.
     */
    where?: VerificationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationCodes to fetch.
     */
    orderBy?: VerificationCodeOrderByWithRelationInput | VerificationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationCodes.
     */
    cursor?: VerificationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationCodes.
     */
    skip?: number
    distinct?: VerificationCodeScalarFieldEnum | VerificationCodeScalarFieldEnum[]
  }

  /**
   * VerificationCode create
   */
  export type VerificationCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a VerificationCode.
     */
    data: XOR<VerificationCodeCreateInput, VerificationCodeUncheckedCreateInput>
  }

  /**
   * VerificationCode createMany
   */
  export type VerificationCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationCodes.
     */
    data: VerificationCodeCreateManyInput | VerificationCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationCode createManyAndReturn
   */
  export type VerificationCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationCodes.
     */
    data: VerificationCodeCreateManyInput | VerificationCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationCode update
   */
  export type VerificationCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a VerificationCode.
     */
    data: XOR<VerificationCodeUpdateInput, VerificationCodeUncheckedUpdateInput>
    /**
     * Choose, which VerificationCode to update.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode updateMany
   */
  export type VerificationCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationCodes.
     */
    data: XOR<VerificationCodeUpdateManyMutationInput, VerificationCodeUncheckedUpdateManyInput>
    /**
     * Filter which VerificationCodes to update
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to update.
     */
    limit?: number
  }

  /**
   * VerificationCode updateManyAndReturn
   */
  export type VerificationCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * The data used to update VerificationCodes.
     */
    data: XOR<VerificationCodeUpdateManyMutationInput, VerificationCodeUncheckedUpdateManyInput>
    /**
     * Filter which VerificationCodes to update
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationCode upsert
   */
  export type VerificationCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the VerificationCode to update in case it exists.
     */
    where: VerificationCodeWhereUniqueInput
    /**
     * In case the VerificationCode found by the `where` argument doesn't exist, create a new VerificationCode with this data.
     */
    create: XOR<VerificationCodeCreateInput, VerificationCodeUncheckedCreateInput>
    /**
     * In case the VerificationCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationCodeUpdateInput, VerificationCodeUncheckedUpdateInput>
  }

  /**
   * VerificationCode delete
   */
  export type VerificationCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
    /**
     * Filter which VerificationCode to delete.
     */
    where: VerificationCodeWhereUniqueInput
  }

  /**
   * VerificationCode deleteMany
   */
  export type VerificationCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationCodes to delete
     */
    where?: VerificationCodeWhereInput
    /**
     * Limit how many VerificationCodes to delete.
     */
    limit?: number
  }

  /**
   * VerificationCode.member
   */
  export type VerificationCode$memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }

  /**
   * VerificationCode without action
   */
  export type VerificationCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationCode
     */
    select?: VerificationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationCode
     */
    omit?: VerificationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationCodeInclude<ExtArgs> | null
  }


  /**
   * Model CreatorProfile
   */

  export type AggregateCreatorProfile = {
    _count: CreatorProfileCountAggregateOutputType | null
    _avg: CreatorProfileAvgAggregateOutputType | null
    _sum: CreatorProfileSumAggregateOutputType | null
    _min: CreatorProfileMinAggregateOutputType | null
    _max: CreatorProfileMaxAggregateOutputType | null
  }

  export type CreatorProfileAvgAggregateOutputType = {
    countryPhoneId: number | null
  }

  export type CreatorProfileSumAggregateOutputType = {
    countryPhoneId: number | null
  }

  export type CreatorProfileMinAggregateOutputType = {
    id: string | null
    memberId: string | null
    bannerImgUrl: string | null
    logoImgUrl: string | null
    profileLinkUrl: string | null
    countryPhoneId: number | null
    creatorPhoneNumber: string | null
    address: string | null
    aboutUsInfo: string | null
    xUserName: string | null
    igUserName: string | null
    fbProfileUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CreatorProfileMaxAggregateOutputType = {
    id: string | null
    memberId: string | null
    bannerImgUrl: string | null
    logoImgUrl: string | null
    profileLinkUrl: string | null
    countryPhoneId: number | null
    creatorPhoneNumber: string | null
    address: string | null
    aboutUsInfo: string | null
    xUserName: string | null
    igUserName: string | null
    fbProfileUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type CreatorProfileCountAggregateOutputType = {
    id: number
    memberId: number
    bannerImgUrl: number
    logoImgUrl: number
    profileLinkUrl: number
    countryPhoneId: number
    creatorPhoneNumber: number
    address: number
    aboutUsInfo: number
    xUserName: number
    igUserName: number
    fbProfileUrl: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type CreatorProfileAvgAggregateInputType = {
    countryPhoneId?: true
  }

  export type CreatorProfileSumAggregateInputType = {
    countryPhoneId?: true
  }

  export type CreatorProfileMinAggregateInputType = {
    id?: true
    memberId?: true
    bannerImgUrl?: true
    logoImgUrl?: true
    profileLinkUrl?: true
    countryPhoneId?: true
    creatorPhoneNumber?: true
    address?: true
    aboutUsInfo?: true
    xUserName?: true
    igUserName?: true
    fbProfileUrl?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CreatorProfileMaxAggregateInputType = {
    id?: true
    memberId?: true
    bannerImgUrl?: true
    logoImgUrl?: true
    profileLinkUrl?: true
    countryPhoneId?: true
    creatorPhoneNumber?: true
    address?: true
    aboutUsInfo?: true
    xUserName?: true
    igUserName?: true
    fbProfileUrl?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type CreatorProfileCountAggregateInputType = {
    id?: true
    memberId?: true
    bannerImgUrl?: true
    logoImgUrl?: true
    profileLinkUrl?: true
    countryPhoneId?: true
    creatorPhoneNumber?: true
    address?: true
    aboutUsInfo?: true
    xUserName?: true
    igUserName?: true
    fbProfileUrl?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type CreatorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreatorProfile to aggregate.
     */
    where?: CreatorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreatorProfiles to fetch.
     */
    orderBy?: CreatorProfileOrderByWithRelationInput | CreatorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreatorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreatorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreatorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreatorProfiles
    **/
    _count?: true | CreatorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreatorProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreatorProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreatorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreatorProfileMaxAggregateInputType
  }

  export type GetCreatorProfileAggregateType<T extends CreatorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateCreatorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreatorProfile[P]>
      : GetScalarType<T[P], AggregateCreatorProfile[P]>
  }




  export type CreatorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreatorProfileWhereInput
    orderBy?: CreatorProfileOrderByWithAggregationInput | CreatorProfileOrderByWithAggregationInput[]
    by: CreatorProfileScalarFieldEnum[] | CreatorProfileScalarFieldEnum
    having?: CreatorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreatorProfileCountAggregateInputType | true
    _avg?: CreatorProfileAvgAggregateInputType
    _sum?: CreatorProfileSumAggregateInputType
    _min?: CreatorProfileMinAggregateInputType
    _max?: CreatorProfileMaxAggregateInputType
  }

  export type CreatorProfileGroupByOutputType = {
    id: string
    memberId: string
    bannerImgUrl: string | null
    logoImgUrl: string | null
    profileLinkUrl: string
    countryPhoneId: number | null
    creatorPhoneNumber: string | null
    address: string | null
    aboutUsInfo: string | null
    xUserName: string | null
    igUserName: string | null
    fbProfileUrl: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: CreatorProfileCountAggregateOutputType | null
    _avg: CreatorProfileAvgAggregateOutputType | null
    _sum: CreatorProfileSumAggregateOutputType | null
    _min: CreatorProfileMinAggregateOutputType | null
    _max: CreatorProfileMaxAggregateOutputType | null
  }

  type GetCreatorProfileGroupByPayload<T extends CreatorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreatorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreatorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreatorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], CreatorProfileGroupByOutputType[P]>
        }
      >
    >


  export type CreatorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    bannerImgUrl?: boolean
    logoImgUrl?: boolean
    profileLinkUrl?: boolean
    countryPhoneId?: boolean
    creatorPhoneNumber?: boolean
    address?: boolean
    aboutUsInfo?: boolean
    xUserName?: boolean
    igUserName?: boolean
    fbProfileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    countryPhone?: boolean | CreatorProfile$countryPhoneArgs<ExtArgs>
    event?: boolean | CreatorProfile$eventArgs<ExtArgs>
    _count?: boolean | CreatorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creatorProfile"]>

  export type CreatorProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    bannerImgUrl?: boolean
    logoImgUrl?: boolean
    profileLinkUrl?: boolean
    countryPhoneId?: boolean
    creatorPhoneNumber?: boolean
    address?: boolean
    aboutUsInfo?: boolean
    xUserName?: boolean
    igUserName?: boolean
    fbProfileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    countryPhone?: boolean | CreatorProfile$countryPhoneArgs<ExtArgs>
  }, ExtArgs["result"]["creatorProfile"]>

  export type CreatorProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    bannerImgUrl?: boolean
    logoImgUrl?: boolean
    profileLinkUrl?: boolean
    countryPhoneId?: boolean
    creatorPhoneNumber?: boolean
    address?: boolean
    aboutUsInfo?: boolean
    xUserName?: boolean
    igUserName?: boolean
    fbProfileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    member?: boolean | MemberDefaultArgs<ExtArgs>
    countryPhone?: boolean | CreatorProfile$countryPhoneArgs<ExtArgs>
  }, ExtArgs["result"]["creatorProfile"]>

  export type CreatorProfileSelectScalar = {
    id?: boolean
    memberId?: boolean
    bannerImgUrl?: boolean
    logoImgUrl?: boolean
    profileLinkUrl?: boolean
    countryPhoneId?: boolean
    creatorPhoneNumber?: boolean
    address?: boolean
    aboutUsInfo?: boolean
    xUserName?: boolean
    igUserName?: boolean
    fbProfileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type CreatorProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "memberId" | "bannerImgUrl" | "logoImgUrl" | "profileLinkUrl" | "countryPhoneId" | "creatorPhoneNumber" | "address" | "aboutUsInfo" | "xUserName" | "igUserName" | "fbProfileUrl" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["creatorProfile"]>
  export type CreatorProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    countryPhone?: boolean | CreatorProfile$countryPhoneArgs<ExtArgs>
    event?: boolean | CreatorProfile$eventArgs<ExtArgs>
    _count?: boolean | CreatorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CreatorProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    countryPhone?: boolean | CreatorProfile$countryPhoneArgs<ExtArgs>
  }
  export type CreatorProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | MemberDefaultArgs<ExtArgs>
    countryPhone?: boolean | CreatorProfile$countryPhoneArgs<ExtArgs>
  }

  export type $CreatorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreatorProfile"
    objects: {
      member: Prisma.$MemberPayload<ExtArgs>
      countryPhone: Prisma.$CountryPhonePayload<ExtArgs> | null
      event: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      memberId: string
      bannerImgUrl: string | null
      logoImgUrl: string | null
      profileLinkUrl: string
      countryPhoneId: number | null
      creatorPhoneNumber: string | null
      address: string | null
      aboutUsInfo: string | null
      xUserName: string | null
      igUserName: string | null
      fbProfileUrl: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["creatorProfile"]>
    composites: {}
  }

  type CreatorProfileGetPayload<S extends boolean | null | undefined | CreatorProfileDefaultArgs> = $Result.GetResult<Prisma.$CreatorProfilePayload, S>

  type CreatorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreatorProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreatorProfileCountAggregateInputType | true
    }

  export interface CreatorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreatorProfile'], meta: { name: 'CreatorProfile' } }
    /**
     * Find zero or one CreatorProfile that matches the filter.
     * @param {CreatorProfileFindUniqueArgs} args - Arguments to find a CreatorProfile
     * @example
     * // Get one CreatorProfile
     * const creatorProfile = await prisma.creatorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreatorProfileFindUniqueArgs>(args: SelectSubset<T, CreatorProfileFindUniqueArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreatorProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreatorProfileFindUniqueOrThrowArgs} args - Arguments to find a CreatorProfile
     * @example
     * // Get one CreatorProfile
     * const creatorProfile = await prisma.creatorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreatorProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, CreatorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreatorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorProfileFindFirstArgs} args - Arguments to find a CreatorProfile
     * @example
     * // Get one CreatorProfile
     * const creatorProfile = await prisma.creatorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreatorProfileFindFirstArgs>(args?: SelectSubset<T, CreatorProfileFindFirstArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreatorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorProfileFindFirstOrThrowArgs} args - Arguments to find a CreatorProfile
     * @example
     * // Get one CreatorProfile
     * const creatorProfile = await prisma.creatorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreatorProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, CreatorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreatorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreatorProfiles
     * const creatorProfiles = await prisma.creatorProfile.findMany()
     * 
     * // Get first 10 CreatorProfiles
     * const creatorProfiles = await prisma.creatorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creatorProfileWithIdOnly = await prisma.creatorProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreatorProfileFindManyArgs>(args?: SelectSubset<T, CreatorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreatorProfile.
     * @param {CreatorProfileCreateArgs} args - Arguments to create a CreatorProfile.
     * @example
     * // Create one CreatorProfile
     * const CreatorProfile = await prisma.creatorProfile.create({
     *   data: {
     *     // ... data to create a CreatorProfile
     *   }
     * })
     * 
     */
    create<T extends CreatorProfileCreateArgs>(args: SelectSubset<T, CreatorProfileCreateArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreatorProfiles.
     * @param {CreatorProfileCreateManyArgs} args - Arguments to create many CreatorProfiles.
     * @example
     * // Create many CreatorProfiles
     * const creatorProfile = await prisma.creatorProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreatorProfileCreateManyArgs>(args?: SelectSubset<T, CreatorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreatorProfiles and returns the data saved in the database.
     * @param {CreatorProfileCreateManyAndReturnArgs} args - Arguments to create many CreatorProfiles.
     * @example
     * // Create many CreatorProfiles
     * const creatorProfile = await prisma.creatorProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreatorProfiles and only return the `id`
     * const creatorProfileWithIdOnly = await prisma.creatorProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreatorProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, CreatorProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CreatorProfile.
     * @param {CreatorProfileDeleteArgs} args - Arguments to delete one CreatorProfile.
     * @example
     * // Delete one CreatorProfile
     * const CreatorProfile = await prisma.creatorProfile.delete({
     *   where: {
     *     // ... filter to delete one CreatorProfile
     *   }
     * })
     * 
     */
    delete<T extends CreatorProfileDeleteArgs>(args: SelectSubset<T, CreatorProfileDeleteArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreatorProfile.
     * @param {CreatorProfileUpdateArgs} args - Arguments to update one CreatorProfile.
     * @example
     * // Update one CreatorProfile
     * const creatorProfile = await prisma.creatorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreatorProfileUpdateArgs>(args: SelectSubset<T, CreatorProfileUpdateArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreatorProfiles.
     * @param {CreatorProfileDeleteManyArgs} args - Arguments to filter CreatorProfiles to delete.
     * @example
     * // Delete a few CreatorProfiles
     * const { count } = await prisma.creatorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreatorProfileDeleteManyArgs>(args?: SelectSubset<T, CreatorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreatorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreatorProfiles
     * const creatorProfile = await prisma.creatorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreatorProfileUpdateManyArgs>(args: SelectSubset<T, CreatorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreatorProfiles and returns the data updated in the database.
     * @param {CreatorProfileUpdateManyAndReturnArgs} args - Arguments to update many CreatorProfiles.
     * @example
     * // Update many CreatorProfiles
     * const creatorProfile = await prisma.creatorProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CreatorProfiles and only return the `id`
     * const creatorProfileWithIdOnly = await prisma.creatorProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CreatorProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, CreatorProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CreatorProfile.
     * @param {CreatorProfileUpsertArgs} args - Arguments to update or create a CreatorProfile.
     * @example
     * // Update or create a CreatorProfile
     * const creatorProfile = await prisma.creatorProfile.upsert({
     *   create: {
     *     // ... data to create a CreatorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreatorProfile we want to update
     *   }
     * })
     */
    upsert<T extends CreatorProfileUpsertArgs>(args: SelectSubset<T, CreatorProfileUpsertArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreatorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorProfileCountArgs} args - Arguments to filter CreatorProfiles to count.
     * @example
     * // Count the number of CreatorProfiles
     * const count = await prisma.creatorProfile.count({
     *   where: {
     *     // ... the filter for the CreatorProfiles we want to count
     *   }
     * })
    **/
    count<T extends CreatorProfileCountArgs>(
      args?: Subset<T, CreatorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreatorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreatorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreatorProfileAggregateArgs>(args: Subset<T, CreatorProfileAggregateArgs>): Prisma.PrismaPromise<GetCreatorProfileAggregateType<T>>

    /**
     * Group by CreatorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CreatorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreatorProfileGroupByArgs['orderBy'] }
        : { orderBy?: CreatorProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CreatorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreatorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreatorProfile model
   */
  readonly fields: CreatorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreatorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreatorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    countryPhone<T extends CreatorProfile$countryPhoneArgs<ExtArgs> = {}>(args?: Subset<T, CreatorProfile$countryPhoneArgs<ExtArgs>>): Prisma__CountryPhoneClient<$Result.GetResult<Prisma.$CountryPhonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    event<T extends CreatorProfile$eventArgs<ExtArgs> = {}>(args?: Subset<T, CreatorProfile$eventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CreatorProfile model
   */
  interface CreatorProfileFieldRefs {
    readonly id: FieldRef<"CreatorProfile", 'String'>
    readonly memberId: FieldRef<"CreatorProfile", 'String'>
    readonly bannerImgUrl: FieldRef<"CreatorProfile", 'String'>
    readonly logoImgUrl: FieldRef<"CreatorProfile", 'String'>
    readonly profileLinkUrl: FieldRef<"CreatorProfile", 'String'>
    readonly countryPhoneId: FieldRef<"CreatorProfile", 'Int'>
    readonly creatorPhoneNumber: FieldRef<"CreatorProfile", 'String'>
    readonly address: FieldRef<"CreatorProfile", 'String'>
    readonly aboutUsInfo: FieldRef<"CreatorProfile", 'String'>
    readonly xUserName: FieldRef<"CreatorProfile", 'String'>
    readonly igUserName: FieldRef<"CreatorProfile", 'String'>
    readonly fbProfileUrl: FieldRef<"CreatorProfile", 'String'>
    readonly createdAt: FieldRef<"CreatorProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"CreatorProfile", 'DateTime'>
    readonly deletedAt: FieldRef<"CreatorProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreatorProfile findUnique
   */
  export type CreatorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileInclude<ExtArgs> | null
    /**
     * Filter, which CreatorProfile to fetch.
     */
    where: CreatorProfileWhereUniqueInput
  }

  /**
   * CreatorProfile findUniqueOrThrow
   */
  export type CreatorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileInclude<ExtArgs> | null
    /**
     * Filter, which CreatorProfile to fetch.
     */
    where: CreatorProfileWhereUniqueInput
  }

  /**
   * CreatorProfile findFirst
   */
  export type CreatorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileInclude<ExtArgs> | null
    /**
     * Filter, which CreatorProfile to fetch.
     */
    where?: CreatorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreatorProfiles to fetch.
     */
    orderBy?: CreatorProfileOrderByWithRelationInput | CreatorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreatorProfiles.
     */
    cursor?: CreatorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreatorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreatorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreatorProfiles.
     */
    distinct?: CreatorProfileScalarFieldEnum | CreatorProfileScalarFieldEnum[]
  }

  /**
   * CreatorProfile findFirstOrThrow
   */
  export type CreatorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileInclude<ExtArgs> | null
    /**
     * Filter, which CreatorProfile to fetch.
     */
    where?: CreatorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreatorProfiles to fetch.
     */
    orderBy?: CreatorProfileOrderByWithRelationInput | CreatorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreatorProfiles.
     */
    cursor?: CreatorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreatorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreatorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreatorProfiles.
     */
    distinct?: CreatorProfileScalarFieldEnum | CreatorProfileScalarFieldEnum[]
  }

  /**
   * CreatorProfile findMany
   */
  export type CreatorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileInclude<ExtArgs> | null
    /**
     * Filter, which CreatorProfiles to fetch.
     */
    where?: CreatorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreatorProfiles to fetch.
     */
    orderBy?: CreatorProfileOrderByWithRelationInput | CreatorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreatorProfiles.
     */
    cursor?: CreatorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreatorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreatorProfiles.
     */
    skip?: number
    distinct?: CreatorProfileScalarFieldEnum | CreatorProfileScalarFieldEnum[]
  }

  /**
   * CreatorProfile create
   */
  export type CreatorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a CreatorProfile.
     */
    data: XOR<CreatorProfileCreateInput, CreatorProfileUncheckedCreateInput>
  }

  /**
   * CreatorProfile createMany
   */
  export type CreatorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreatorProfiles.
     */
    data: CreatorProfileCreateManyInput | CreatorProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreatorProfile createManyAndReturn
   */
  export type CreatorProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * The data used to create many CreatorProfiles.
     */
    data: CreatorProfileCreateManyInput | CreatorProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreatorProfile update
   */
  export type CreatorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a CreatorProfile.
     */
    data: XOR<CreatorProfileUpdateInput, CreatorProfileUncheckedUpdateInput>
    /**
     * Choose, which CreatorProfile to update.
     */
    where: CreatorProfileWhereUniqueInput
  }

  /**
   * CreatorProfile updateMany
   */
  export type CreatorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreatorProfiles.
     */
    data: XOR<CreatorProfileUpdateManyMutationInput, CreatorProfileUncheckedUpdateManyInput>
    /**
     * Filter which CreatorProfiles to update
     */
    where?: CreatorProfileWhereInput
    /**
     * Limit how many CreatorProfiles to update.
     */
    limit?: number
  }

  /**
   * CreatorProfile updateManyAndReturn
   */
  export type CreatorProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * The data used to update CreatorProfiles.
     */
    data: XOR<CreatorProfileUpdateManyMutationInput, CreatorProfileUncheckedUpdateManyInput>
    /**
     * Filter which CreatorProfiles to update
     */
    where?: CreatorProfileWhereInput
    /**
     * Limit how many CreatorProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreatorProfile upsert
   */
  export type CreatorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the CreatorProfile to update in case it exists.
     */
    where: CreatorProfileWhereUniqueInput
    /**
     * In case the CreatorProfile found by the `where` argument doesn't exist, create a new CreatorProfile with this data.
     */
    create: XOR<CreatorProfileCreateInput, CreatorProfileUncheckedCreateInput>
    /**
     * In case the CreatorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreatorProfileUpdateInput, CreatorProfileUncheckedUpdateInput>
  }

  /**
   * CreatorProfile delete
   */
  export type CreatorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileInclude<ExtArgs> | null
    /**
     * Filter which CreatorProfile to delete.
     */
    where: CreatorProfileWhereUniqueInput
  }

  /**
   * CreatorProfile deleteMany
   */
  export type CreatorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreatorProfiles to delete
     */
    where?: CreatorProfileWhereInput
    /**
     * Limit how many CreatorProfiles to delete.
     */
    limit?: number
  }

  /**
   * CreatorProfile.countryPhone
   */
  export type CreatorProfile$countryPhoneArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryPhone
     */
    select?: CountryPhoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CountryPhone
     */
    omit?: CountryPhoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryPhoneInclude<ExtArgs> | null
    where?: CountryPhoneWhereInput
  }

  /**
   * CreatorProfile.event
   */
  export type CreatorProfile$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * CreatorProfile without action
   */
  export type CreatorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorProfile
     */
    select?: CreatorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreatorProfile
     */
    omit?: CreatorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreatorProfileInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    eventFormatId: number | null
    eventTopicId: number | null
    ticketQty: number | null
    ticketPrice: number | null
    eventCPCountryPhoneId: number | null
    maxTicketPerTransaction: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    eventFormatId: number | null
    eventTopicId: number | null
    ticketQty: number | null
    ticketPrice: number | null
    eventCPCountryPhoneId: number | null
    maxTicketPerTransaction: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    creatorId: string | null
    eventName: string | null
    eventFormatId: number | null
    eventTopicId: number | null
    eventTag: string | null
    isPrivateEvent: boolean | null
    organizerName: string | null
    organizerLogoImgUrl: string | null
    bannerImgUrl: string | null
    eventStartDate: string | null
    eventEndDate: string | null
    eventStartTime: string | null
    eventEndTime: string | null
    eventLocation: string | null
    eventDesc: string | null
    ticketType: $Enums.TicketType | null
    ticketName: string | null
    ticketQty: number | null
    ticketPrice: number | null
    ticketDesc: string | null
    ticketTermsAndCondition: string | null
    ticketStartDate: string | null
    ticketEndDate: string | null
    eventCPName: string | null
    eventCPEmail: string | null
    eventCPCountryPhoneId: number | null
    eventCPPhone: string | null
    idCardStatus: $Enums.TicketIDCard | null
    maxTicketPerTransaction: number | null
    oneEmailOneTransaction: boolean | null
    ticketDataFormUnique: boolean | null
    isDraft: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    creatorId: string | null
    eventName: string | null
    eventFormatId: number | null
    eventTopicId: number | null
    eventTag: string | null
    isPrivateEvent: boolean | null
    organizerName: string | null
    organizerLogoImgUrl: string | null
    bannerImgUrl: string | null
    eventStartDate: string | null
    eventEndDate: string | null
    eventStartTime: string | null
    eventEndTime: string | null
    eventLocation: string | null
    eventDesc: string | null
    ticketType: $Enums.TicketType | null
    ticketName: string | null
    ticketQty: number | null
    ticketPrice: number | null
    ticketDesc: string | null
    ticketTermsAndCondition: string | null
    ticketStartDate: string | null
    ticketEndDate: string | null
    eventCPName: string | null
    eventCPEmail: string | null
    eventCPCountryPhoneId: number | null
    eventCPPhone: string | null
    idCardStatus: $Enums.TicketIDCard | null
    maxTicketPerTransaction: number | null
    oneEmailOneTransaction: boolean | null
    ticketDataFormUnique: boolean | null
    isDraft: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    creatorId: number
    eventName: number
    eventFormatId: number
    eventTopicId: number
    eventTag: number
    isPrivateEvent: number
    organizerName: number
    organizerLogoImgUrl: number
    bannerImgUrl: number
    eventStartDate: number
    eventEndDate: number
    eventStartTime: number
    eventEndTime: number
    eventLocation: number
    eventDesc: number
    ticketType: number
    ticketName: number
    ticketQty: number
    ticketPrice: number
    ticketDesc: number
    ticketTermsAndCondition: number
    ticketStartDate: number
    ticketEndDate: number
    eventCPName: number
    eventCPEmail: number
    eventCPCountryPhoneId: number
    eventCPPhone: number
    idCardStatus: number
    maxTicketPerTransaction: number
    oneEmailOneTransaction: number
    ticketDataFormUnique: number
    isDraft: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    eventFormatId?: true
    eventTopicId?: true
    ticketQty?: true
    ticketPrice?: true
    eventCPCountryPhoneId?: true
    maxTicketPerTransaction?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    eventFormatId?: true
    eventTopicId?: true
    ticketQty?: true
    ticketPrice?: true
    eventCPCountryPhoneId?: true
    maxTicketPerTransaction?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    creatorId?: true
    eventName?: true
    eventFormatId?: true
    eventTopicId?: true
    eventTag?: true
    isPrivateEvent?: true
    organizerName?: true
    organizerLogoImgUrl?: true
    bannerImgUrl?: true
    eventStartDate?: true
    eventEndDate?: true
    eventStartTime?: true
    eventEndTime?: true
    eventLocation?: true
    eventDesc?: true
    ticketType?: true
    ticketName?: true
    ticketQty?: true
    ticketPrice?: true
    ticketDesc?: true
    ticketTermsAndCondition?: true
    ticketStartDate?: true
    ticketEndDate?: true
    eventCPName?: true
    eventCPEmail?: true
    eventCPCountryPhoneId?: true
    eventCPPhone?: true
    idCardStatus?: true
    maxTicketPerTransaction?: true
    oneEmailOneTransaction?: true
    ticketDataFormUnique?: true
    isDraft?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    creatorId?: true
    eventName?: true
    eventFormatId?: true
    eventTopicId?: true
    eventTag?: true
    isPrivateEvent?: true
    organizerName?: true
    organizerLogoImgUrl?: true
    bannerImgUrl?: true
    eventStartDate?: true
    eventEndDate?: true
    eventStartTime?: true
    eventEndTime?: true
    eventLocation?: true
    eventDesc?: true
    ticketType?: true
    ticketName?: true
    ticketQty?: true
    ticketPrice?: true
    ticketDesc?: true
    ticketTermsAndCondition?: true
    ticketStartDate?: true
    ticketEndDate?: true
    eventCPName?: true
    eventCPEmail?: true
    eventCPCountryPhoneId?: true
    eventCPPhone?: true
    idCardStatus?: true
    maxTicketPerTransaction?: true
    oneEmailOneTransaction?: true
    ticketDataFormUnique?: true
    isDraft?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    creatorId?: true
    eventName?: true
    eventFormatId?: true
    eventTopicId?: true
    eventTag?: true
    isPrivateEvent?: true
    organizerName?: true
    organizerLogoImgUrl?: true
    bannerImgUrl?: true
    eventStartDate?: true
    eventEndDate?: true
    eventStartTime?: true
    eventEndTime?: true
    eventLocation?: true
    eventDesc?: true
    ticketType?: true
    ticketName?: true
    ticketQty?: true
    ticketPrice?: true
    ticketDesc?: true
    ticketTermsAndCondition?: true
    ticketStartDate?: true
    ticketEndDate?: true
    eventCPName?: true
    eventCPEmail?: true
    eventCPCountryPhoneId?: true
    eventCPPhone?: true
    idCardStatus?: true
    maxTicketPerTransaction?: true
    oneEmailOneTransaction?: true
    ticketDataFormUnique?: true
    isDraft?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    creatorId: string
    eventName: string
    eventFormatId: number
    eventTopicId: number
    eventTag: string | null
    isPrivateEvent: boolean
    organizerName: string
    organizerLogoImgUrl: string | null
    bannerImgUrl: string | null
    eventStartDate: string
    eventEndDate: string
    eventStartTime: string
    eventEndTime: string
    eventLocation: string
    eventDesc: string | null
    ticketType: $Enums.TicketType
    ticketName: string
    ticketQty: number
    ticketPrice: number
    ticketDesc: string | null
    ticketTermsAndCondition: string | null
    ticketStartDate: string
    ticketEndDate: string
    eventCPName: string
    eventCPEmail: string
    eventCPCountryPhoneId: number
    eventCPPhone: string
    idCardStatus: $Enums.TicketIDCard
    maxTicketPerTransaction: number
    oneEmailOneTransaction: boolean
    ticketDataFormUnique: boolean
    isDraft: boolean | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    eventName?: boolean
    eventFormatId?: boolean
    eventTopicId?: boolean
    eventTag?: boolean
    isPrivateEvent?: boolean
    organizerName?: boolean
    organizerLogoImgUrl?: boolean
    bannerImgUrl?: boolean
    eventStartDate?: boolean
    eventEndDate?: boolean
    eventStartTime?: boolean
    eventEndTime?: boolean
    eventLocation?: boolean
    eventDesc?: boolean
    ticketType?: boolean
    ticketName?: boolean
    ticketQty?: boolean
    ticketPrice?: boolean
    ticketDesc?: boolean
    ticketTermsAndCondition?: boolean
    ticketStartDate?: boolean
    ticketEndDate?: boolean
    eventCPName?: boolean
    eventCPEmail?: boolean
    eventCPCountryPhoneId?: boolean
    eventCPPhone?: boolean
    idCardStatus?: boolean
    maxTicketPerTransaction?: boolean
    oneEmailOneTransaction?: boolean
    ticketDataFormUnique?: boolean
    isDraft?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    creator?: boolean | CreatorProfileDefaultArgs<ExtArgs>
    eventFormat?: boolean | EventFormatDefaultArgs<ExtArgs>
    eventTopic?: boolean | EventTopicDefaultArgs<ExtArgs>
    eventCPCountryPhone?: boolean | CountryPhoneDefaultArgs<ExtArgs>
    ticketTransactions?: boolean | Event$ticketTransactionsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    eventName?: boolean
    eventFormatId?: boolean
    eventTopicId?: boolean
    eventTag?: boolean
    isPrivateEvent?: boolean
    organizerName?: boolean
    organizerLogoImgUrl?: boolean
    bannerImgUrl?: boolean
    eventStartDate?: boolean
    eventEndDate?: boolean
    eventStartTime?: boolean
    eventEndTime?: boolean
    eventLocation?: boolean
    eventDesc?: boolean
    ticketType?: boolean
    ticketName?: boolean
    ticketQty?: boolean
    ticketPrice?: boolean
    ticketDesc?: boolean
    ticketTermsAndCondition?: boolean
    ticketStartDate?: boolean
    ticketEndDate?: boolean
    eventCPName?: boolean
    eventCPEmail?: boolean
    eventCPCountryPhoneId?: boolean
    eventCPPhone?: boolean
    idCardStatus?: boolean
    maxTicketPerTransaction?: boolean
    oneEmailOneTransaction?: boolean
    ticketDataFormUnique?: boolean
    isDraft?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    creator?: boolean | CreatorProfileDefaultArgs<ExtArgs>
    eventFormat?: boolean | EventFormatDefaultArgs<ExtArgs>
    eventTopic?: boolean | EventTopicDefaultArgs<ExtArgs>
    eventCPCountryPhone?: boolean | CountryPhoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creatorId?: boolean
    eventName?: boolean
    eventFormatId?: boolean
    eventTopicId?: boolean
    eventTag?: boolean
    isPrivateEvent?: boolean
    organizerName?: boolean
    organizerLogoImgUrl?: boolean
    bannerImgUrl?: boolean
    eventStartDate?: boolean
    eventEndDate?: boolean
    eventStartTime?: boolean
    eventEndTime?: boolean
    eventLocation?: boolean
    eventDesc?: boolean
    ticketType?: boolean
    ticketName?: boolean
    ticketQty?: boolean
    ticketPrice?: boolean
    ticketDesc?: boolean
    ticketTermsAndCondition?: boolean
    ticketStartDate?: boolean
    ticketEndDate?: boolean
    eventCPName?: boolean
    eventCPEmail?: boolean
    eventCPCountryPhoneId?: boolean
    eventCPPhone?: boolean
    idCardStatus?: boolean
    maxTicketPerTransaction?: boolean
    oneEmailOneTransaction?: boolean
    ticketDataFormUnique?: boolean
    isDraft?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    creator?: boolean | CreatorProfileDefaultArgs<ExtArgs>
    eventFormat?: boolean | EventFormatDefaultArgs<ExtArgs>
    eventTopic?: boolean | EventTopicDefaultArgs<ExtArgs>
    eventCPCountryPhone?: boolean | CountryPhoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    creatorId?: boolean
    eventName?: boolean
    eventFormatId?: boolean
    eventTopicId?: boolean
    eventTag?: boolean
    isPrivateEvent?: boolean
    organizerName?: boolean
    organizerLogoImgUrl?: boolean
    bannerImgUrl?: boolean
    eventStartDate?: boolean
    eventEndDate?: boolean
    eventStartTime?: boolean
    eventEndTime?: boolean
    eventLocation?: boolean
    eventDesc?: boolean
    ticketType?: boolean
    ticketName?: boolean
    ticketQty?: boolean
    ticketPrice?: boolean
    ticketDesc?: boolean
    ticketTermsAndCondition?: boolean
    ticketStartDate?: boolean
    ticketEndDate?: boolean
    eventCPName?: boolean
    eventCPEmail?: boolean
    eventCPCountryPhoneId?: boolean
    eventCPPhone?: boolean
    idCardStatus?: boolean
    maxTicketPerTransaction?: boolean
    oneEmailOneTransaction?: boolean
    ticketDataFormUnique?: boolean
    isDraft?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creatorId" | "eventName" | "eventFormatId" | "eventTopicId" | "eventTag" | "isPrivateEvent" | "organizerName" | "organizerLogoImgUrl" | "bannerImgUrl" | "eventStartDate" | "eventEndDate" | "eventStartTime" | "eventEndTime" | "eventLocation" | "eventDesc" | "ticketType" | "ticketName" | "ticketQty" | "ticketPrice" | "ticketDesc" | "ticketTermsAndCondition" | "ticketStartDate" | "ticketEndDate" | "eventCPName" | "eventCPEmail" | "eventCPCountryPhoneId" | "eventCPPhone" | "idCardStatus" | "maxTicketPerTransaction" | "oneEmailOneTransaction" | "ticketDataFormUnique" | "isDraft" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | CreatorProfileDefaultArgs<ExtArgs>
    eventFormat?: boolean | EventFormatDefaultArgs<ExtArgs>
    eventTopic?: boolean | EventTopicDefaultArgs<ExtArgs>
    eventCPCountryPhone?: boolean | CountryPhoneDefaultArgs<ExtArgs>
    ticketTransactions?: boolean | Event$ticketTransactionsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | CreatorProfileDefaultArgs<ExtArgs>
    eventFormat?: boolean | EventFormatDefaultArgs<ExtArgs>
    eventTopic?: boolean | EventTopicDefaultArgs<ExtArgs>
    eventCPCountryPhone?: boolean | CountryPhoneDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | CreatorProfileDefaultArgs<ExtArgs>
    eventFormat?: boolean | EventFormatDefaultArgs<ExtArgs>
    eventTopic?: boolean | EventTopicDefaultArgs<ExtArgs>
    eventCPCountryPhone?: boolean | CountryPhoneDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      creator: Prisma.$CreatorProfilePayload<ExtArgs>
      eventFormat: Prisma.$EventFormatPayload<ExtArgs>
      eventTopic: Prisma.$EventTopicPayload<ExtArgs>
      eventCPCountryPhone: Prisma.$CountryPhonePayload<ExtArgs>
      ticketTransactions: Prisma.$TicketTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      creatorId: string
      eventName: string
      eventFormatId: number
      eventTopicId: number
      eventTag: string | null
      isPrivateEvent: boolean
      organizerName: string
      organizerLogoImgUrl: string | null
      bannerImgUrl: string | null
      eventStartDate: string
      eventEndDate: string
      eventStartTime: string
      eventEndTime: string
      eventLocation: string
      eventDesc: string | null
      ticketType: $Enums.TicketType
      ticketName: string
      ticketQty: number
      ticketPrice: number
      ticketDesc: string | null
      ticketTermsAndCondition: string | null
      ticketStartDate: string
      ticketEndDate: string
      eventCPName: string
      eventCPEmail: string
      eventCPCountryPhoneId: number
      eventCPPhone: string
      idCardStatus: $Enums.TicketIDCard
      maxTicketPerTransaction: number
      oneEmailOneTransaction: boolean
      ticketDataFormUnique: boolean
      isDraft: boolean | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends CreatorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CreatorProfileDefaultArgs<ExtArgs>>): Prisma__CreatorProfileClient<$Result.GetResult<Prisma.$CreatorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    eventFormat<T extends EventFormatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventFormatDefaultArgs<ExtArgs>>): Prisma__EventFormatClient<$Result.GetResult<Prisma.$EventFormatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    eventTopic<T extends EventTopicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventTopicDefaultArgs<ExtArgs>>): Prisma__EventTopicClient<$Result.GetResult<Prisma.$EventTopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    eventCPCountryPhone<T extends CountryPhoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryPhoneDefaultArgs<ExtArgs>>): Prisma__CountryPhoneClient<$Result.GetResult<Prisma.$CountryPhonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticketTransactions<T extends Event$ticketTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, Event$ticketTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly creatorId: FieldRef<"Event", 'String'>
    readonly eventName: FieldRef<"Event", 'String'>
    readonly eventFormatId: FieldRef<"Event", 'Int'>
    readonly eventTopicId: FieldRef<"Event", 'Int'>
    readonly eventTag: FieldRef<"Event", 'String'>
    readonly isPrivateEvent: FieldRef<"Event", 'Boolean'>
    readonly organizerName: FieldRef<"Event", 'String'>
    readonly organizerLogoImgUrl: FieldRef<"Event", 'String'>
    readonly bannerImgUrl: FieldRef<"Event", 'String'>
    readonly eventStartDate: FieldRef<"Event", 'String'>
    readonly eventEndDate: FieldRef<"Event", 'String'>
    readonly eventStartTime: FieldRef<"Event", 'String'>
    readonly eventEndTime: FieldRef<"Event", 'String'>
    readonly eventLocation: FieldRef<"Event", 'String'>
    readonly eventDesc: FieldRef<"Event", 'String'>
    readonly ticketType: FieldRef<"Event", 'TicketType'>
    readonly ticketName: FieldRef<"Event", 'String'>
    readonly ticketQty: FieldRef<"Event", 'Int'>
    readonly ticketPrice: FieldRef<"Event", 'Int'>
    readonly ticketDesc: FieldRef<"Event", 'String'>
    readonly ticketTermsAndCondition: FieldRef<"Event", 'String'>
    readonly ticketStartDate: FieldRef<"Event", 'String'>
    readonly ticketEndDate: FieldRef<"Event", 'String'>
    readonly eventCPName: FieldRef<"Event", 'String'>
    readonly eventCPEmail: FieldRef<"Event", 'String'>
    readonly eventCPCountryPhoneId: FieldRef<"Event", 'Int'>
    readonly eventCPPhone: FieldRef<"Event", 'String'>
    readonly idCardStatus: FieldRef<"Event", 'TicketIDCard'>
    readonly maxTicketPerTransaction: FieldRef<"Event", 'Int'>
    readonly oneEmailOneTransaction: FieldRef<"Event", 'Boolean'>
    readonly ticketDataFormUnique: FieldRef<"Event", 'Boolean'>
    readonly isDraft: FieldRef<"Event", 'Boolean'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
    readonly deletedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.ticketTransactions
   */
  export type Event$ticketTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransaction
     */
    select?: TicketTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransaction
     */
    omit?: TicketTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionInclude<ExtArgs> | null
    where?: TicketTransactionWhereInput
    orderBy?: TicketTransactionOrderByWithRelationInput | TicketTransactionOrderByWithRelationInput[]
    cursor?: TicketTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketTransactionScalarFieldEnum | TicketTransactionScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventFormat
   */

  export type AggregateEventFormat = {
    _count: EventFormatCountAggregateOutputType | null
    _avg: EventFormatAvgAggregateOutputType | null
    _sum: EventFormatSumAggregateOutputType | null
    _min: EventFormatMinAggregateOutputType | null
    _max: EventFormatMaxAggregateOutputType | null
  }

  export type EventFormatAvgAggregateOutputType = {
    id: number | null
  }

  export type EventFormatSumAggregateOutputType = {
    id: number | null
  }

  export type EventFormatMinAggregateOutputType = {
    id: number | null
    formatName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type EventFormatMaxAggregateOutputType = {
    id: number | null
    formatName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type EventFormatCountAggregateOutputType = {
    id: number
    formatName: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type EventFormatAvgAggregateInputType = {
    id?: true
  }

  export type EventFormatSumAggregateInputType = {
    id?: true
  }

  export type EventFormatMinAggregateInputType = {
    id?: true
    formatName?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type EventFormatMaxAggregateInputType = {
    id?: true
    formatName?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type EventFormatCountAggregateInputType = {
    id?: true
    formatName?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type EventFormatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventFormat to aggregate.
     */
    where?: EventFormatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventFormats to fetch.
     */
    orderBy?: EventFormatOrderByWithRelationInput | EventFormatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventFormatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventFormats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventFormats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventFormats
    **/
    _count?: true | EventFormatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventFormatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventFormatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventFormatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventFormatMaxAggregateInputType
  }

  export type GetEventFormatAggregateType<T extends EventFormatAggregateArgs> = {
        [P in keyof T & keyof AggregateEventFormat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventFormat[P]>
      : GetScalarType<T[P], AggregateEventFormat[P]>
  }




  export type EventFormatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventFormatWhereInput
    orderBy?: EventFormatOrderByWithAggregationInput | EventFormatOrderByWithAggregationInput[]
    by: EventFormatScalarFieldEnum[] | EventFormatScalarFieldEnum
    having?: EventFormatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventFormatCountAggregateInputType | true
    _avg?: EventFormatAvgAggregateInputType
    _sum?: EventFormatSumAggregateInputType
    _min?: EventFormatMinAggregateInputType
    _max?: EventFormatMaxAggregateInputType
  }

  export type EventFormatGroupByOutputType = {
    id: number
    formatName: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: EventFormatCountAggregateOutputType | null
    _avg: EventFormatAvgAggregateOutputType | null
    _sum: EventFormatSumAggregateOutputType | null
    _min: EventFormatMinAggregateOutputType | null
    _max: EventFormatMaxAggregateOutputType | null
  }

  type GetEventFormatGroupByPayload<T extends EventFormatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventFormatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventFormatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventFormatGroupByOutputType[P]>
            : GetScalarType<T[P], EventFormatGroupByOutputType[P]>
        }
      >
    >


  export type EventFormatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formatName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    event?: boolean | EventFormat$eventArgs<ExtArgs>
    _count?: boolean | EventFormatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventFormat"]>

  export type EventFormatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formatName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["eventFormat"]>

  export type EventFormatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formatName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["eventFormat"]>

  export type EventFormatSelectScalar = {
    id?: boolean
    formatName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type EventFormatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "formatName" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["eventFormat"]>
  export type EventFormatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventFormat$eventArgs<ExtArgs>
    _count?: boolean | EventFormatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventFormatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventFormatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventFormatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventFormat"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      formatName: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["eventFormat"]>
    composites: {}
  }

  type EventFormatGetPayload<S extends boolean | null | undefined | EventFormatDefaultArgs> = $Result.GetResult<Prisma.$EventFormatPayload, S>

  type EventFormatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFormatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventFormatCountAggregateInputType | true
    }

  export interface EventFormatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventFormat'], meta: { name: 'EventFormat' } }
    /**
     * Find zero or one EventFormat that matches the filter.
     * @param {EventFormatFindUniqueArgs} args - Arguments to find a EventFormat
     * @example
     * // Get one EventFormat
     * const eventFormat = await prisma.eventFormat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFormatFindUniqueArgs>(args: SelectSubset<T, EventFormatFindUniqueArgs<ExtArgs>>): Prisma__EventFormatClient<$Result.GetResult<Prisma.$EventFormatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventFormat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFormatFindUniqueOrThrowArgs} args - Arguments to find a EventFormat
     * @example
     * // Get one EventFormat
     * const eventFormat = await prisma.eventFormat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFormatFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFormatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventFormatClient<$Result.GetResult<Prisma.$EventFormatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventFormat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormatFindFirstArgs} args - Arguments to find a EventFormat
     * @example
     * // Get one EventFormat
     * const eventFormat = await prisma.eventFormat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFormatFindFirstArgs>(args?: SelectSubset<T, EventFormatFindFirstArgs<ExtArgs>>): Prisma__EventFormatClient<$Result.GetResult<Prisma.$EventFormatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventFormat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormatFindFirstOrThrowArgs} args - Arguments to find a EventFormat
     * @example
     * // Get one EventFormat
     * const eventFormat = await prisma.eventFormat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFormatFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFormatFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventFormatClient<$Result.GetResult<Prisma.$EventFormatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventFormats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventFormats
     * const eventFormats = await prisma.eventFormat.findMany()
     * 
     * // Get first 10 EventFormats
     * const eventFormats = await prisma.eventFormat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventFormatWithIdOnly = await prisma.eventFormat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFormatFindManyArgs>(args?: SelectSubset<T, EventFormatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventFormatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventFormat.
     * @param {EventFormatCreateArgs} args - Arguments to create a EventFormat.
     * @example
     * // Create one EventFormat
     * const EventFormat = await prisma.eventFormat.create({
     *   data: {
     *     // ... data to create a EventFormat
     *   }
     * })
     * 
     */
    create<T extends EventFormatCreateArgs>(args: SelectSubset<T, EventFormatCreateArgs<ExtArgs>>): Prisma__EventFormatClient<$Result.GetResult<Prisma.$EventFormatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventFormats.
     * @param {EventFormatCreateManyArgs} args - Arguments to create many EventFormats.
     * @example
     * // Create many EventFormats
     * const eventFormat = await prisma.eventFormat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventFormatCreateManyArgs>(args?: SelectSubset<T, EventFormatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventFormats and returns the data saved in the database.
     * @param {EventFormatCreateManyAndReturnArgs} args - Arguments to create many EventFormats.
     * @example
     * // Create many EventFormats
     * const eventFormat = await prisma.eventFormat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventFormats and only return the `id`
     * const eventFormatWithIdOnly = await prisma.eventFormat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventFormatCreateManyAndReturnArgs>(args?: SelectSubset<T, EventFormatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventFormatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventFormat.
     * @param {EventFormatDeleteArgs} args - Arguments to delete one EventFormat.
     * @example
     * // Delete one EventFormat
     * const EventFormat = await prisma.eventFormat.delete({
     *   where: {
     *     // ... filter to delete one EventFormat
     *   }
     * })
     * 
     */
    delete<T extends EventFormatDeleteArgs>(args: SelectSubset<T, EventFormatDeleteArgs<ExtArgs>>): Prisma__EventFormatClient<$Result.GetResult<Prisma.$EventFormatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventFormat.
     * @param {EventFormatUpdateArgs} args - Arguments to update one EventFormat.
     * @example
     * // Update one EventFormat
     * const eventFormat = await prisma.eventFormat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventFormatUpdateArgs>(args: SelectSubset<T, EventFormatUpdateArgs<ExtArgs>>): Prisma__EventFormatClient<$Result.GetResult<Prisma.$EventFormatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventFormats.
     * @param {EventFormatDeleteManyArgs} args - Arguments to filter EventFormats to delete.
     * @example
     * // Delete a few EventFormats
     * const { count } = await prisma.eventFormat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventFormatDeleteManyArgs>(args?: SelectSubset<T, EventFormatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventFormats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventFormats
     * const eventFormat = await prisma.eventFormat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventFormatUpdateManyArgs>(args: SelectSubset<T, EventFormatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventFormats and returns the data updated in the database.
     * @param {EventFormatUpdateManyAndReturnArgs} args - Arguments to update many EventFormats.
     * @example
     * // Update many EventFormats
     * const eventFormat = await prisma.eventFormat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventFormats and only return the `id`
     * const eventFormatWithIdOnly = await prisma.eventFormat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventFormatUpdateManyAndReturnArgs>(args: SelectSubset<T, EventFormatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventFormatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventFormat.
     * @param {EventFormatUpsertArgs} args - Arguments to update or create a EventFormat.
     * @example
     * // Update or create a EventFormat
     * const eventFormat = await prisma.eventFormat.upsert({
     *   create: {
     *     // ... data to create a EventFormat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventFormat we want to update
     *   }
     * })
     */
    upsert<T extends EventFormatUpsertArgs>(args: SelectSubset<T, EventFormatUpsertArgs<ExtArgs>>): Prisma__EventFormatClient<$Result.GetResult<Prisma.$EventFormatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventFormats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormatCountArgs} args - Arguments to filter EventFormats to count.
     * @example
     * // Count the number of EventFormats
     * const count = await prisma.eventFormat.count({
     *   where: {
     *     // ... the filter for the EventFormats we want to count
     *   }
     * })
    **/
    count<T extends EventFormatCountArgs>(
      args?: Subset<T, EventFormatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventFormatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventFormat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventFormatAggregateArgs>(args: Subset<T, EventFormatAggregateArgs>): Prisma.PrismaPromise<GetEventFormatAggregateType<T>>

    /**
     * Group by EventFormat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFormatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventFormatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventFormatGroupByArgs['orderBy'] }
        : { orderBy?: EventFormatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventFormatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventFormatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventFormat model
   */
  readonly fields: EventFormatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventFormat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventFormatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventFormat$eventArgs<ExtArgs> = {}>(args?: Subset<T, EventFormat$eventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventFormat model
   */
  interface EventFormatFieldRefs {
    readonly id: FieldRef<"EventFormat", 'Int'>
    readonly formatName: FieldRef<"EventFormat", 'String'>
    readonly createdAt: FieldRef<"EventFormat", 'DateTime'>
    readonly updatedAt: FieldRef<"EventFormat", 'DateTime'>
    readonly deletedAt: FieldRef<"EventFormat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventFormat findUnique
   */
  export type EventFormatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormat
     */
    select?: EventFormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormat
     */
    omit?: EventFormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormatInclude<ExtArgs> | null
    /**
     * Filter, which EventFormat to fetch.
     */
    where: EventFormatWhereUniqueInput
  }

  /**
   * EventFormat findUniqueOrThrow
   */
  export type EventFormatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormat
     */
    select?: EventFormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormat
     */
    omit?: EventFormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormatInclude<ExtArgs> | null
    /**
     * Filter, which EventFormat to fetch.
     */
    where: EventFormatWhereUniqueInput
  }

  /**
   * EventFormat findFirst
   */
  export type EventFormatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormat
     */
    select?: EventFormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormat
     */
    omit?: EventFormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormatInclude<ExtArgs> | null
    /**
     * Filter, which EventFormat to fetch.
     */
    where?: EventFormatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventFormats to fetch.
     */
    orderBy?: EventFormatOrderByWithRelationInput | EventFormatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventFormats.
     */
    cursor?: EventFormatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventFormats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventFormats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventFormats.
     */
    distinct?: EventFormatScalarFieldEnum | EventFormatScalarFieldEnum[]
  }

  /**
   * EventFormat findFirstOrThrow
   */
  export type EventFormatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormat
     */
    select?: EventFormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormat
     */
    omit?: EventFormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormatInclude<ExtArgs> | null
    /**
     * Filter, which EventFormat to fetch.
     */
    where?: EventFormatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventFormats to fetch.
     */
    orderBy?: EventFormatOrderByWithRelationInput | EventFormatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventFormats.
     */
    cursor?: EventFormatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventFormats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventFormats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventFormats.
     */
    distinct?: EventFormatScalarFieldEnum | EventFormatScalarFieldEnum[]
  }

  /**
   * EventFormat findMany
   */
  export type EventFormatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormat
     */
    select?: EventFormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormat
     */
    omit?: EventFormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormatInclude<ExtArgs> | null
    /**
     * Filter, which EventFormats to fetch.
     */
    where?: EventFormatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventFormats to fetch.
     */
    orderBy?: EventFormatOrderByWithRelationInput | EventFormatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventFormats.
     */
    cursor?: EventFormatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventFormats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventFormats.
     */
    skip?: number
    distinct?: EventFormatScalarFieldEnum | EventFormatScalarFieldEnum[]
  }

  /**
   * EventFormat create
   */
  export type EventFormatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormat
     */
    select?: EventFormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormat
     */
    omit?: EventFormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormatInclude<ExtArgs> | null
    /**
     * The data needed to create a EventFormat.
     */
    data: XOR<EventFormatCreateInput, EventFormatUncheckedCreateInput>
  }

  /**
   * EventFormat createMany
   */
  export type EventFormatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventFormats.
     */
    data: EventFormatCreateManyInput | EventFormatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventFormat createManyAndReturn
   */
  export type EventFormatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormat
     */
    select?: EventFormatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormat
     */
    omit?: EventFormatOmit<ExtArgs> | null
    /**
     * The data used to create many EventFormats.
     */
    data: EventFormatCreateManyInput | EventFormatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventFormat update
   */
  export type EventFormatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormat
     */
    select?: EventFormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormat
     */
    omit?: EventFormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormatInclude<ExtArgs> | null
    /**
     * The data needed to update a EventFormat.
     */
    data: XOR<EventFormatUpdateInput, EventFormatUncheckedUpdateInput>
    /**
     * Choose, which EventFormat to update.
     */
    where: EventFormatWhereUniqueInput
  }

  /**
   * EventFormat updateMany
   */
  export type EventFormatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventFormats.
     */
    data: XOR<EventFormatUpdateManyMutationInput, EventFormatUncheckedUpdateManyInput>
    /**
     * Filter which EventFormats to update
     */
    where?: EventFormatWhereInput
    /**
     * Limit how many EventFormats to update.
     */
    limit?: number
  }

  /**
   * EventFormat updateManyAndReturn
   */
  export type EventFormatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormat
     */
    select?: EventFormatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormat
     */
    omit?: EventFormatOmit<ExtArgs> | null
    /**
     * The data used to update EventFormats.
     */
    data: XOR<EventFormatUpdateManyMutationInput, EventFormatUncheckedUpdateManyInput>
    /**
     * Filter which EventFormats to update
     */
    where?: EventFormatWhereInput
    /**
     * Limit how many EventFormats to update.
     */
    limit?: number
  }

  /**
   * EventFormat upsert
   */
  export type EventFormatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormat
     */
    select?: EventFormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormat
     */
    omit?: EventFormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormatInclude<ExtArgs> | null
    /**
     * The filter to search for the EventFormat to update in case it exists.
     */
    where: EventFormatWhereUniqueInput
    /**
     * In case the EventFormat found by the `where` argument doesn't exist, create a new EventFormat with this data.
     */
    create: XOR<EventFormatCreateInput, EventFormatUncheckedCreateInput>
    /**
     * In case the EventFormat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventFormatUpdateInput, EventFormatUncheckedUpdateInput>
  }

  /**
   * EventFormat delete
   */
  export type EventFormatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormat
     */
    select?: EventFormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormat
     */
    omit?: EventFormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormatInclude<ExtArgs> | null
    /**
     * Filter which EventFormat to delete.
     */
    where: EventFormatWhereUniqueInput
  }

  /**
   * EventFormat deleteMany
   */
  export type EventFormatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventFormats to delete
     */
    where?: EventFormatWhereInput
    /**
     * Limit how many EventFormats to delete.
     */
    limit?: number
  }

  /**
   * EventFormat.event
   */
  export type EventFormat$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * EventFormat without action
   */
  export type EventFormatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventFormat
     */
    select?: EventFormatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventFormat
     */
    omit?: EventFormatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventFormatInclude<ExtArgs> | null
  }


  /**
   * Model EventTopic
   */

  export type AggregateEventTopic = {
    _count: EventTopicCountAggregateOutputType | null
    _avg: EventTopicAvgAggregateOutputType | null
    _sum: EventTopicSumAggregateOutputType | null
    _min: EventTopicMinAggregateOutputType | null
    _max: EventTopicMaxAggregateOutputType | null
  }

  export type EventTopicAvgAggregateOutputType = {
    id: number | null
  }

  export type EventTopicSumAggregateOutputType = {
    id: number | null
  }

  export type EventTopicMinAggregateOutputType = {
    id: number | null
    topicName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type EventTopicMaxAggregateOutputType = {
    id: number | null
    topicName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type EventTopicCountAggregateOutputType = {
    id: number
    topicName: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type EventTopicAvgAggregateInputType = {
    id?: true
  }

  export type EventTopicSumAggregateInputType = {
    id?: true
  }

  export type EventTopicMinAggregateInputType = {
    id?: true
    topicName?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type EventTopicMaxAggregateInputType = {
    id?: true
    topicName?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type EventTopicCountAggregateInputType = {
    id?: true
    topicName?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type EventTopicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventTopic to aggregate.
     */
    where?: EventTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTopics to fetch.
     */
    orderBy?: EventTopicOrderByWithRelationInput | EventTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventTopics
    **/
    _count?: true | EventTopicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventTopicAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventTopicSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventTopicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventTopicMaxAggregateInputType
  }

  export type GetEventTopicAggregateType<T extends EventTopicAggregateArgs> = {
        [P in keyof T & keyof AggregateEventTopic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventTopic[P]>
      : GetScalarType<T[P], AggregateEventTopic[P]>
  }




  export type EventTopicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventTopicWhereInput
    orderBy?: EventTopicOrderByWithAggregationInput | EventTopicOrderByWithAggregationInput[]
    by: EventTopicScalarFieldEnum[] | EventTopicScalarFieldEnum
    having?: EventTopicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventTopicCountAggregateInputType | true
    _avg?: EventTopicAvgAggregateInputType
    _sum?: EventTopicSumAggregateInputType
    _min?: EventTopicMinAggregateInputType
    _max?: EventTopicMaxAggregateInputType
  }

  export type EventTopicGroupByOutputType = {
    id: number
    topicName: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: EventTopicCountAggregateOutputType | null
    _avg: EventTopicAvgAggregateOutputType | null
    _sum: EventTopicSumAggregateOutputType | null
    _min: EventTopicMinAggregateOutputType | null
    _max: EventTopicMaxAggregateOutputType | null
  }

  type GetEventTopicGroupByPayload<T extends EventTopicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventTopicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventTopicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventTopicGroupByOutputType[P]>
            : GetScalarType<T[P], EventTopicGroupByOutputType[P]>
        }
      >
    >


  export type EventTopicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topicName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    event?: boolean | EventTopic$eventArgs<ExtArgs>
    _count?: boolean | EventTopicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventTopic"]>

  export type EventTopicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topicName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["eventTopic"]>

  export type EventTopicSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    topicName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["eventTopic"]>

  export type EventTopicSelectScalar = {
    id?: boolean
    topicName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type EventTopicOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "topicName" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["eventTopic"]>
  export type EventTopicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventTopic$eventArgs<ExtArgs>
    _count?: boolean | EventTopicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventTopicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventTopicIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventTopicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventTopic"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      topicName: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["eventTopic"]>
    composites: {}
  }

  type EventTopicGetPayload<S extends boolean | null | undefined | EventTopicDefaultArgs> = $Result.GetResult<Prisma.$EventTopicPayload, S>

  type EventTopicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventTopicFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventTopicCountAggregateInputType | true
    }

  export interface EventTopicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventTopic'], meta: { name: 'EventTopic' } }
    /**
     * Find zero or one EventTopic that matches the filter.
     * @param {EventTopicFindUniqueArgs} args - Arguments to find a EventTopic
     * @example
     * // Get one EventTopic
     * const eventTopic = await prisma.eventTopic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventTopicFindUniqueArgs>(args: SelectSubset<T, EventTopicFindUniqueArgs<ExtArgs>>): Prisma__EventTopicClient<$Result.GetResult<Prisma.$EventTopicPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventTopic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventTopicFindUniqueOrThrowArgs} args - Arguments to find a EventTopic
     * @example
     * // Get one EventTopic
     * const eventTopic = await prisma.eventTopic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventTopicFindUniqueOrThrowArgs>(args: SelectSubset<T, EventTopicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventTopicClient<$Result.GetResult<Prisma.$EventTopicPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventTopic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTopicFindFirstArgs} args - Arguments to find a EventTopic
     * @example
     * // Get one EventTopic
     * const eventTopic = await prisma.eventTopic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventTopicFindFirstArgs>(args?: SelectSubset<T, EventTopicFindFirstArgs<ExtArgs>>): Prisma__EventTopicClient<$Result.GetResult<Prisma.$EventTopicPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventTopic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTopicFindFirstOrThrowArgs} args - Arguments to find a EventTopic
     * @example
     * // Get one EventTopic
     * const eventTopic = await prisma.eventTopic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventTopicFindFirstOrThrowArgs>(args?: SelectSubset<T, EventTopicFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventTopicClient<$Result.GetResult<Prisma.$EventTopicPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventTopics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTopicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventTopics
     * const eventTopics = await prisma.eventTopic.findMany()
     * 
     * // Get first 10 EventTopics
     * const eventTopics = await prisma.eventTopic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventTopicWithIdOnly = await prisma.eventTopic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventTopicFindManyArgs>(args?: SelectSubset<T, EventTopicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTopicPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventTopic.
     * @param {EventTopicCreateArgs} args - Arguments to create a EventTopic.
     * @example
     * // Create one EventTopic
     * const EventTopic = await prisma.eventTopic.create({
     *   data: {
     *     // ... data to create a EventTopic
     *   }
     * })
     * 
     */
    create<T extends EventTopicCreateArgs>(args: SelectSubset<T, EventTopicCreateArgs<ExtArgs>>): Prisma__EventTopicClient<$Result.GetResult<Prisma.$EventTopicPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventTopics.
     * @param {EventTopicCreateManyArgs} args - Arguments to create many EventTopics.
     * @example
     * // Create many EventTopics
     * const eventTopic = await prisma.eventTopic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventTopicCreateManyArgs>(args?: SelectSubset<T, EventTopicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventTopics and returns the data saved in the database.
     * @param {EventTopicCreateManyAndReturnArgs} args - Arguments to create many EventTopics.
     * @example
     * // Create many EventTopics
     * const eventTopic = await prisma.eventTopic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventTopics and only return the `id`
     * const eventTopicWithIdOnly = await prisma.eventTopic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventTopicCreateManyAndReturnArgs>(args?: SelectSubset<T, EventTopicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTopicPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventTopic.
     * @param {EventTopicDeleteArgs} args - Arguments to delete one EventTopic.
     * @example
     * // Delete one EventTopic
     * const EventTopic = await prisma.eventTopic.delete({
     *   where: {
     *     // ... filter to delete one EventTopic
     *   }
     * })
     * 
     */
    delete<T extends EventTopicDeleteArgs>(args: SelectSubset<T, EventTopicDeleteArgs<ExtArgs>>): Prisma__EventTopicClient<$Result.GetResult<Prisma.$EventTopicPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventTopic.
     * @param {EventTopicUpdateArgs} args - Arguments to update one EventTopic.
     * @example
     * // Update one EventTopic
     * const eventTopic = await prisma.eventTopic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventTopicUpdateArgs>(args: SelectSubset<T, EventTopicUpdateArgs<ExtArgs>>): Prisma__EventTopicClient<$Result.GetResult<Prisma.$EventTopicPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventTopics.
     * @param {EventTopicDeleteManyArgs} args - Arguments to filter EventTopics to delete.
     * @example
     * // Delete a few EventTopics
     * const { count } = await prisma.eventTopic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventTopicDeleteManyArgs>(args?: SelectSubset<T, EventTopicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTopicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventTopics
     * const eventTopic = await prisma.eventTopic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventTopicUpdateManyArgs>(args: SelectSubset<T, EventTopicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventTopics and returns the data updated in the database.
     * @param {EventTopicUpdateManyAndReturnArgs} args - Arguments to update many EventTopics.
     * @example
     * // Update many EventTopics
     * const eventTopic = await prisma.eventTopic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventTopics and only return the `id`
     * const eventTopicWithIdOnly = await prisma.eventTopic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventTopicUpdateManyAndReturnArgs>(args: SelectSubset<T, EventTopicUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTopicPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventTopic.
     * @param {EventTopicUpsertArgs} args - Arguments to update or create a EventTopic.
     * @example
     * // Update or create a EventTopic
     * const eventTopic = await prisma.eventTopic.upsert({
     *   create: {
     *     // ... data to create a EventTopic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventTopic we want to update
     *   }
     * })
     */
    upsert<T extends EventTopicUpsertArgs>(args: SelectSubset<T, EventTopicUpsertArgs<ExtArgs>>): Prisma__EventTopicClient<$Result.GetResult<Prisma.$EventTopicPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventTopics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTopicCountArgs} args - Arguments to filter EventTopics to count.
     * @example
     * // Count the number of EventTopics
     * const count = await prisma.eventTopic.count({
     *   where: {
     *     // ... the filter for the EventTopics we want to count
     *   }
     * })
    **/
    count<T extends EventTopicCountArgs>(
      args?: Subset<T, EventTopicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventTopicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTopicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventTopicAggregateArgs>(args: Subset<T, EventTopicAggregateArgs>): Prisma.PrismaPromise<GetEventTopicAggregateType<T>>

    /**
     * Group by EventTopic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTopicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventTopicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventTopicGroupByArgs['orderBy'] }
        : { orderBy?: EventTopicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventTopicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventTopicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventTopic model
   */
  readonly fields: EventTopicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventTopic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventTopicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventTopic$eventArgs<ExtArgs> = {}>(args?: Subset<T, EventTopic$eventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventTopic model
   */
  interface EventTopicFieldRefs {
    readonly id: FieldRef<"EventTopic", 'Int'>
    readonly topicName: FieldRef<"EventTopic", 'String'>
    readonly createdAt: FieldRef<"EventTopic", 'DateTime'>
    readonly updatedAt: FieldRef<"EventTopic", 'DateTime'>
    readonly deletedAt: FieldRef<"EventTopic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventTopic findUnique
   */
  export type EventTopicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTopic
     */
    select?: EventTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTopic
     */
    omit?: EventTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTopicInclude<ExtArgs> | null
    /**
     * Filter, which EventTopic to fetch.
     */
    where: EventTopicWhereUniqueInput
  }

  /**
   * EventTopic findUniqueOrThrow
   */
  export type EventTopicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTopic
     */
    select?: EventTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTopic
     */
    omit?: EventTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTopicInclude<ExtArgs> | null
    /**
     * Filter, which EventTopic to fetch.
     */
    where: EventTopicWhereUniqueInput
  }

  /**
   * EventTopic findFirst
   */
  export type EventTopicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTopic
     */
    select?: EventTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTopic
     */
    omit?: EventTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTopicInclude<ExtArgs> | null
    /**
     * Filter, which EventTopic to fetch.
     */
    where?: EventTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTopics to fetch.
     */
    orderBy?: EventTopicOrderByWithRelationInput | EventTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTopics.
     */
    cursor?: EventTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTopics.
     */
    distinct?: EventTopicScalarFieldEnum | EventTopicScalarFieldEnum[]
  }

  /**
   * EventTopic findFirstOrThrow
   */
  export type EventTopicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTopic
     */
    select?: EventTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTopic
     */
    omit?: EventTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTopicInclude<ExtArgs> | null
    /**
     * Filter, which EventTopic to fetch.
     */
    where?: EventTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTopics to fetch.
     */
    orderBy?: EventTopicOrderByWithRelationInput | EventTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTopics.
     */
    cursor?: EventTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTopics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTopics.
     */
    distinct?: EventTopicScalarFieldEnum | EventTopicScalarFieldEnum[]
  }

  /**
   * EventTopic findMany
   */
  export type EventTopicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTopic
     */
    select?: EventTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTopic
     */
    omit?: EventTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTopicInclude<ExtArgs> | null
    /**
     * Filter, which EventTopics to fetch.
     */
    where?: EventTopicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTopics to fetch.
     */
    orderBy?: EventTopicOrderByWithRelationInput | EventTopicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventTopics.
     */
    cursor?: EventTopicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTopics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTopics.
     */
    skip?: number
    distinct?: EventTopicScalarFieldEnum | EventTopicScalarFieldEnum[]
  }

  /**
   * EventTopic create
   */
  export type EventTopicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTopic
     */
    select?: EventTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTopic
     */
    omit?: EventTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTopicInclude<ExtArgs> | null
    /**
     * The data needed to create a EventTopic.
     */
    data: XOR<EventTopicCreateInput, EventTopicUncheckedCreateInput>
  }

  /**
   * EventTopic createMany
   */
  export type EventTopicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventTopics.
     */
    data: EventTopicCreateManyInput | EventTopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventTopic createManyAndReturn
   */
  export type EventTopicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTopic
     */
    select?: EventTopicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventTopic
     */
    omit?: EventTopicOmit<ExtArgs> | null
    /**
     * The data used to create many EventTopics.
     */
    data: EventTopicCreateManyInput | EventTopicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventTopic update
   */
  export type EventTopicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTopic
     */
    select?: EventTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTopic
     */
    omit?: EventTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTopicInclude<ExtArgs> | null
    /**
     * The data needed to update a EventTopic.
     */
    data: XOR<EventTopicUpdateInput, EventTopicUncheckedUpdateInput>
    /**
     * Choose, which EventTopic to update.
     */
    where: EventTopicWhereUniqueInput
  }

  /**
   * EventTopic updateMany
   */
  export type EventTopicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventTopics.
     */
    data: XOR<EventTopicUpdateManyMutationInput, EventTopicUncheckedUpdateManyInput>
    /**
     * Filter which EventTopics to update
     */
    where?: EventTopicWhereInput
    /**
     * Limit how many EventTopics to update.
     */
    limit?: number
  }

  /**
   * EventTopic updateManyAndReturn
   */
  export type EventTopicUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTopic
     */
    select?: EventTopicSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventTopic
     */
    omit?: EventTopicOmit<ExtArgs> | null
    /**
     * The data used to update EventTopics.
     */
    data: XOR<EventTopicUpdateManyMutationInput, EventTopicUncheckedUpdateManyInput>
    /**
     * Filter which EventTopics to update
     */
    where?: EventTopicWhereInput
    /**
     * Limit how many EventTopics to update.
     */
    limit?: number
  }

  /**
   * EventTopic upsert
   */
  export type EventTopicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTopic
     */
    select?: EventTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTopic
     */
    omit?: EventTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTopicInclude<ExtArgs> | null
    /**
     * The filter to search for the EventTopic to update in case it exists.
     */
    where: EventTopicWhereUniqueInput
    /**
     * In case the EventTopic found by the `where` argument doesn't exist, create a new EventTopic with this data.
     */
    create: XOR<EventTopicCreateInput, EventTopicUncheckedCreateInput>
    /**
     * In case the EventTopic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventTopicUpdateInput, EventTopicUncheckedUpdateInput>
  }

  /**
   * EventTopic delete
   */
  export type EventTopicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTopic
     */
    select?: EventTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTopic
     */
    omit?: EventTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTopicInclude<ExtArgs> | null
    /**
     * Filter which EventTopic to delete.
     */
    where: EventTopicWhereUniqueInput
  }

  /**
   * EventTopic deleteMany
   */
  export type EventTopicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventTopics to delete
     */
    where?: EventTopicWhereInput
    /**
     * Limit how many EventTopics to delete.
     */
    limit?: number
  }

  /**
   * EventTopic.event
   */
  export type EventTopic$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * EventTopic without action
   */
  export type EventTopicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTopic
     */
    select?: EventTopicSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTopic
     */
    omit?: EventTopicOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTopicInclude<ExtArgs> | null
  }


  /**
   * Model TicketTransaction
   */

  export type AggregateTicketTransaction = {
    _count: TicketTransactionCountAggregateOutputType | null
    _avg: TicketTransactionAvgAggregateOutputType | null
    _sum: TicketTransactionSumAggregateOutputType | null
    _min: TicketTransactionMinAggregateOutputType | null
    _max: TicketTransactionMaxAggregateOutputType | null
  }

  export type TicketTransactionAvgAggregateOutputType = {
    id: number | null
    eventId: number | null
  }

  export type TicketTransactionSumAggregateOutputType = {
    id: number | null
    eventId: number | null
  }

  export type TicketTransactionMinAggregateOutputType = {
    id: number | null
    eventId: number | null
    memberId: string | null
    ticketCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TicketTransactionMaxAggregateOutputType = {
    id: number | null
    eventId: number | null
    memberId: string | null
    ticketCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TicketTransactionCountAggregateOutputType = {
    id: number
    eventId: number
    memberId: number
    ticketCode: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type TicketTransactionAvgAggregateInputType = {
    id?: true
    eventId?: true
  }

  export type TicketTransactionSumAggregateInputType = {
    id?: true
    eventId?: true
  }

  export type TicketTransactionMinAggregateInputType = {
    id?: true
    eventId?: true
    memberId?: true
    ticketCode?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TicketTransactionMaxAggregateInputType = {
    id?: true
    eventId?: true
    memberId?: true
    ticketCode?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TicketTransactionCountAggregateInputType = {
    id?: true
    eventId?: true
    memberId?: true
    ticketCode?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type TicketTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketTransaction to aggregate.
     */
    where?: TicketTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTransactions to fetch.
     */
    orderBy?: TicketTransactionOrderByWithRelationInput | TicketTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketTransactions
    **/
    _count?: true | TicketTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketTransactionMaxAggregateInputType
  }

  export type GetTicketTransactionAggregateType<T extends TicketTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketTransaction[P]>
      : GetScalarType<T[P], AggregateTicketTransaction[P]>
  }




  export type TicketTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketTransactionWhereInput
    orderBy?: TicketTransactionOrderByWithAggregationInput | TicketTransactionOrderByWithAggregationInput[]
    by: TicketTransactionScalarFieldEnum[] | TicketTransactionScalarFieldEnum
    having?: TicketTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketTransactionCountAggregateInputType | true
    _avg?: TicketTransactionAvgAggregateInputType
    _sum?: TicketTransactionSumAggregateInputType
    _min?: TicketTransactionMinAggregateInputType
    _max?: TicketTransactionMaxAggregateInputType
  }

  export type TicketTransactionGroupByOutputType = {
    id: number
    eventId: number
    memberId: string
    ticketCode: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: TicketTransactionCountAggregateOutputType | null
    _avg: TicketTransactionAvgAggregateOutputType | null
    _sum: TicketTransactionSumAggregateOutputType | null
    _min: TicketTransactionMinAggregateOutputType | null
    _max: TicketTransactionMaxAggregateOutputType | null
  }

  type GetTicketTransactionGroupByPayload<T extends TicketTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TicketTransactionGroupByOutputType[P]>
        }
      >
    >


  export type TicketTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    memberId?: boolean
    ticketCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
    ticketTransactionDetails?: boolean | TicketTransaction$ticketTransactionDetailsArgs<ExtArgs>
    _count?: boolean | TicketTransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketTransaction"]>

  export type TicketTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    memberId?: boolean
    ticketCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketTransaction"]>

  export type TicketTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    memberId?: boolean
    ticketCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketTransaction"]>

  export type TicketTransactionSelectScalar = {
    id?: boolean
    eventId?: boolean
    memberId?: boolean
    ticketCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type TicketTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "memberId" | "ticketCode" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["ticketTransaction"]>
  export type TicketTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
    ticketTransactionDetails?: boolean | TicketTransaction$ticketTransactionDetailsArgs<ExtArgs>
    _count?: boolean | TicketTransactionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }
  export type TicketTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    member?: boolean | MemberDefaultArgs<ExtArgs>
  }

  export type $TicketTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketTransaction"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      member: Prisma.$MemberPayload<ExtArgs>
      ticketTransactionDetails: Prisma.$TicketTransactionDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventId: number
      memberId: string
      ticketCode: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["ticketTransaction"]>
    composites: {}
  }

  type TicketTransactionGetPayload<S extends boolean | null | undefined | TicketTransactionDefaultArgs> = $Result.GetResult<Prisma.$TicketTransactionPayload, S>

  type TicketTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketTransactionCountAggregateInputType | true
    }

  export interface TicketTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketTransaction'], meta: { name: 'TicketTransaction' } }
    /**
     * Find zero or one TicketTransaction that matches the filter.
     * @param {TicketTransactionFindUniqueArgs} args - Arguments to find a TicketTransaction
     * @example
     * // Get one TicketTransaction
     * const ticketTransaction = await prisma.ticketTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketTransactionFindUniqueArgs>(args: SelectSubset<T, TicketTransactionFindUniqueArgs<ExtArgs>>): Prisma__TicketTransactionClient<$Result.GetResult<Prisma.$TicketTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketTransactionFindUniqueOrThrowArgs} args - Arguments to find a TicketTransaction
     * @example
     * // Get one TicketTransaction
     * const ticketTransaction = await prisma.ticketTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketTransactionClient<$Result.GetResult<Prisma.$TicketTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTransactionFindFirstArgs} args - Arguments to find a TicketTransaction
     * @example
     * // Get one TicketTransaction
     * const ticketTransaction = await prisma.ticketTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketTransactionFindFirstArgs>(args?: SelectSubset<T, TicketTransactionFindFirstArgs<ExtArgs>>): Prisma__TicketTransactionClient<$Result.GetResult<Prisma.$TicketTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTransactionFindFirstOrThrowArgs} args - Arguments to find a TicketTransaction
     * @example
     * // Get one TicketTransaction
     * const ticketTransaction = await prisma.ticketTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketTransactionClient<$Result.GetResult<Prisma.$TicketTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketTransactions
     * const ticketTransactions = await prisma.ticketTransaction.findMany()
     * 
     * // Get first 10 TicketTransactions
     * const ticketTransactions = await prisma.ticketTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketTransactionWithIdOnly = await prisma.ticketTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketTransactionFindManyArgs>(args?: SelectSubset<T, TicketTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketTransaction.
     * @param {TicketTransactionCreateArgs} args - Arguments to create a TicketTransaction.
     * @example
     * // Create one TicketTransaction
     * const TicketTransaction = await prisma.ticketTransaction.create({
     *   data: {
     *     // ... data to create a TicketTransaction
     *   }
     * })
     * 
     */
    create<T extends TicketTransactionCreateArgs>(args: SelectSubset<T, TicketTransactionCreateArgs<ExtArgs>>): Prisma__TicketTransactionClient<$Result.GetResult<Prisma.$TicketTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketTransactions.
     * @param {TicketTransactionCreateManyArgs} args - Arguments to create many TicketTransactions.
     * @example
     * // Create many TicketTransactions
     * const ticketTransaction = await prisma.ticketTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketTransactionCreateManyArgs>(args?: SelectSubset<T, TicketTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketTransactions and returns the data saved in the database.
     * @param {TicketTransactionCreateManyAndReturnArgs} args - Arguments to create many TicketTransactions.
     * @example
     * // Create many TicketTransactions
     * const ticketTransaction = await prisma.ticketTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketTransactions and only return the `id`
     * const ticketTransactionWithIdOnly = await prisma.ticketTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketTransaction.
     * @param {TicketTransactionDeleteArgs} args - Arguments to delete one TicketTransaction.
     * @example
     * // Delete one TicketTransaction
     * const TicketTransaction = await prisma.ticketTransaction.delete({
     *   where: {
     *     // ... filter to delete one TicketTransaction
     *   }
     * })
     * 
     */
    delete<T extends TicketTransactionDeleteArgs>(args: SelectSubset<T, TicketTransactionDeleteArgs<ExtArgs>>): Prisma__TicketTransactionClient<$Result.GetResult<Prisma.$TicketTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketTransaction.
     * @param {TicketTransactionUpdateArgs} args - Arguments to update one TicketTransaction.
     * @example
     * // Update one TicketTransaction
     * const ticketTransaction = await prisma.ticketTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketTransactionUpdateArgs>(args: SelectSubset<T, TicketTransactionUpdateArgs<ExtArgs>>): Prisma__TicketTransactionClient<$Result.GetResult<Prisma.$TicketTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketTransactions.
     * @param {TicketTransactionDeleteManyArgs} args - Arguments to filter TicketTransactions to delete.
     * @example
     * // Delete a few TicketTransactions
     * const { count } = await prisma.ticketTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketTransactionDeleteManyArgs>(args?: SelectSubset<T, TicketTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketTransactions
     * const ticketTransaction = await prisma.ticketTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketTransactionUpdateManyArgs>(args: SelectSubset<T, TicketTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketTransactions and returns the data updated in the database.
     * @param {TicketTransactionUpdateManyAndReturnArgs} args - Arguments to update many TicketTransactions.
     * @example
     * // Update many TicketTransactions
     * const ticketTransaction = await prisma.ticketTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketTransactions and only return the `id`
     * const ticketTransactionWithIdOnly = await prisma.ticketTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketTransaction.
     * @param {TicketTransactionUpsertArgs} args - Arguments to update or create a TicketTransaction.
     * @example
     * // Update or create a TicketTransaction
     * const ticketTransaction = await prisma.ticketTransaction.upsert({
     *   create: {
     *     // ... data to create a TicketTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketTransaction we want to update
     *   }
     * })
     */
    upsert<T extends TicketTransactionUpsertArgs>(args: SelectSubset<T, TicketTransactionUpsertArgs<ExtArgs>>): Prisma__TicketTransactionClient<$Result.GetResult<Prisma.$TicketTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTransactionCountArgs} args - Arguments to filter TicketTransactions to count.
     * @example
     * // Count the number of TicketTransactions
     * const count = await prisma.ticketTransaction.count({
     *   where: {
     *     // ... the filter for the TicketTransactions we want to count
     *   }
     * })
    **/
    count<T extends TicketTransactionCountArgs>(
      args?: Subset<T, TicketTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketTransactionAggregateArgs>(args: Subset<T, TicketTransactionAggregateArgs>): Prisma.PrismaPromise<GetTicketTransactionAggregateType<T>>

    /**
     * Group by TicketTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketTransactionGroupByArgs['orderBy'] }
        : { orderBy?: TicketTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketTransaction model
   */
  readonly fields: TicketTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticketTransactionDetails<T extends TicketTransaction$ticketTransactionDetailsArgs<ExtArgs> = {}>(args?: Subset<T, TicketTransaction$ticketTransactionDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTransactionDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TicketTransaction model
   */
  interface TicketTransactionFieldRefs {
    readonly id: FieldRef<"TicketTransaction", 'Int'>
    readonly eventId: FieldRef<"TicketTransaction", 'Int'>
    readonly memberId: FieldRef<"TicketTransaction", 'String'>
    readonly ticketCode: FieldRef<"TicketTransaction", 'String'>
    readonly createdAt: FieldRef<"TicketTransaction", 'DateTime'>
    readonly updatedAt: FieldRef<"TicketTransaction", 'DateTime'>
    readonly deletedAt: FieldRef<"TicketTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketTransaction findUnique
   */
  export type TicketTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransaction
     */
    select?: TicketTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransaction
     */
    omit?: TicketTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionInclude<ExtArgs> | null
    /**
     * Filter, which TicketTransaction to fetch.
     */
    where: TicketTransactionWhereUniqueInput
  }

  /**
   * TicketTransaction findUniqueOrThrow
   */
  export type TicketTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransaction
     */
    select?: TicketTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransaction
     */
    omit?: TicketTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionInclude<ExtArgs> | null
    /**
     * Filter, which TicketTransaction to fetch.
     */
    where: TicketTransactionWhereUniqueInput
  }

  /**
   * TicketTransaction findFirst
   */
  export type TicketTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransaction
     */
    select?: TicketTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransaction
     */
    omit?: TicketTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionInclude<ExtArgs> | null
    /**
     * Filter, which TicketTransaction to fetch.
     */
    where?: TicketTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTransactions to fetch.
     */
    orderBy?: TicketTransactionOrderByWithRelationInput | TicketTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketTransactions.
     */
    cursor?: TicketTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketTransactions.
     */
    distinct?: TicketTransactionScalarFieldEnum | TicketTransactionScalarFieldEnum[]
  }

  /**
   * TicketTransaction findFirstOrThrow
   */
  export type TicketTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransaction
     */
    select?: TicketTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransaction
     */
    omit?: TicketTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionInclude<ExtArgs> | null
    /**
     * Filter, which TicketTransaction to fetch.
     */
    where?: TicketTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTransactions to fetch.
     */
    orderBy?: TicketTransactionOrderByWithRelationInput | TicketTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketTransactions.
     */
    cursor?: TicketTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketTransactions.
     */
    distinct?: TicketTransactionScalarFieldEnum | TicketTransactionScalarFieldEnum[]
  }

  /**
   * TicketTransaction findMany
   */
  export type TicketTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransaction
     */
    select?: TicketTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransaction
     */
    omit?: TicketTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionInclude<ExtArgs> | null
    /**
     * Filter, which TicketTransactions to fetch.
     */
    where?: TicketTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTransactions to fetch.
     */
    orderBy?: TicketTransactionOrderByWithRelationInput | TicketTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketTransactions.
     */
    cursor?: TicketTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTransactions.
     */
    skip?: number
    distinct?: TicketTransactionScalarFieldEnum | TicketTransactionScalarFieldEnum[]
  }

  /**
   * TicketTransaction create
   */
  export type TicketTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransaction
     */
    select?: TicketTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransaction
     */
    omit?: TicketTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketTransaction.
     */
    data: XOR<TicketTransactionCreateInput, TicketTransactionUncheckedCreateInput>
  }

  /**
   * TicketTransaction createMany
   */
  export type TicketTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketTransactions.
     */
    data: TicketTransactionCreateManyInput | TicketTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketTransaction createManyAndReturn
   */
  export type TicketTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransaction
     */
    select?: TicketTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransaction
     */
    omit?: TicketTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many TicketTransactions.
     */
    data: TicketTransactionCreateManyInput | TicketTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketTransaction update
   */
  export type TicketTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransaction
     */
    select?: TicketTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransaction
     */
    omit?: TicketTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketTransaction.
     */
    data: XOR<TicketTransactionUpdateInput, TicketTransactionUncheckedUpdateInput>
    /**
     * Choose, which TicketTransaction to update.
     */
    where: TicketTransactionWhereUniqueInput
  }

  /**
   * TicketTransaction updateMany
   */
  export type TicketTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketTransactions.
     */
    data: XOR<TicketTransactionUpdateManyMutationInput, TicketTransactionUncheckedUpdateManyInput>
    /**
     * Filter which TicketTransactions to update
     */
    where?: TicketTransactionWhereInput
    /**
     * Limit how many TicketTransactions to update.
     */
    limit?: number
  }

  /**
   * TicketTransaction updateManyAndReturn
   */
  export type TicketTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransaction
     */
    select?: TicketTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransaction
     */
    omit?: TicketTransactionOmit<ExtArgs> | null
    /**
     * The data used to update TicketTransactions.
     */
    data: XOR<TicketTransactionUpdateManyMutationInput, TicketTransactionUncheckedUpdateManyInput>
    /**
     * Filter which TicketTransactions to update
     */
    where?: TicketTransactionWhereInput
    /**
     * Limit how many TicketTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketTransaction upsert
   */
  export type TicketTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransaction
     */
    select?: TicketTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransaction
     */
    omit?: TicketTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketTransaction to update in case it exists.
     */
    where: TicketTransactionWhereUniqueInput
    /**
     * In case the TicketTransaction found by the `where` argument doesn't exist, create a new TicketTransaction with this data.
     */
    create: XOR<TicketTransactionCreateInput, TicketTransactionUncheckedCreateInput>
    /**
     * In case the TicketTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketTransactionUpdateInput, TicketTransactionUncheckedUpdateInput>
  }

  /**
   * TicketTransaction delete
   */
  export type TicketTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransaction
     */
    select?: TicketTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransaction
     */
    omit?: TicketTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionInclude<ExtArgs> | null
    /**
     * Filter which TicketTransaction to delete.
     */
    where: TicketTransactionWhereUniqueInput
  }

  /**
   * TicketTransaction deleteMany
   */
  export type TicketTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketTransactions to delete
     */
    where?: TicketTransactionWhereInput
    /**
     * Limit how many TicketTransactions to delete.
     */
    limit?: number
  }

  /**
   * TicketTransaction.ticketTransactionDetails
   */
  export type TicketTransaction$ticketTransactionDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransactionDetail
     */
    select?: TicketTransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransactionDetail
     */
    omit?: TicketTransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionDetailInclude<ExtArgs> | null
    where?: TicketTransactionDetailWhereInput
    orderBy?: TicketTransactionDetailOrderByWithRelationInput | TicketTransactionDetailOrderByWithRelationInput[]
    cursor?: TicketTransactionDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketTransactionDetailScalarFieldEnum | TicketTransactionDetailScalarFieldEnum[]
  }

  /**
   * TicketTransaction without action
   */
  export type TicketTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransaction
     */
    select?: TicketTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransaction
     */
    omit?: TicketTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionInclude<ExtArgs> | null
  }


  /**
   * Model TicketTransactionDetail
   */

  export type AggregateTicketTransactionDetail = {
    _count: TicketTransactionDetailCountAggregateOutputType | null
    _avg: TicketTransactionDetailAvgAggregateOutputType | null
    _sum: TicketTransactionDetailSumAggregateOutputType | null
    _min: TicketTransactionDetailMinAggregateOutputType | null
    _max: TicketTransactionDetailMaxAggregateOutputType | null
  }

  export type TicketTransactionDetailAvgAggregateOutputType = {
    id: number | null
    ticketTransactionId: number | null
    orderCountryPhoneId: number | null
  }

  export type TicketTransactionDetailSumAggregateOutputType = {
    id: number | null
    ticketTransactionId: number | null
    orderCountryPhoneId: number | null
  }

  export type TicketTransactionDetailMinAggregateOutputType = {
    id: number | null
    ticketTransactionId: number | null
    orderName: string | null
    orderCountryPhoneId: number | null
    orderEmail: string | null
    orderBirthDate: string | null
    orderSex: $Enums.Sex | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TicketTransactionDetailMaxAggregateOutputType = {
    id: number | null
    ticketTransactionId: number | null
    orderName: string | null
    orderCountryPhoneId: number | null
    orderEmail: string | null
    orderBirthDate: string | null
    orderSex: $Enums.Sex | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type TicketTransactionDetailCountAggregateOutputType = {
    id: number
    ticketTransactionId: number
    orderName: number
    orderCountryPhoneId: number
    orderEmail: number
    orderBirthDate: number
    orderSex: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type TicketTransactionDetailAvgAggregateInputType = {
    id?: true
    ticketTransactionId?: true
    orderCountryPhoneId?: true
  }

  export type TicketTransactionDetailSumAggregateInputType = {
    id?: true
    ticketTransactionId?: true
    orderCountryPhoneId?: true
  }

  export type TicketTransactionDetailMinAggregateInputType = {
    id?: true
    ticketTransactionId?: true
    orderName?: true
    orderCountryPhoneId?: true
    orderEmail?: true
    orderBirthDate?: true
    orderSex?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TicketTransactionDetailMaxAggregateInputType = {
    id?: true
    ticketTransactionId?: true
    orderName?: true
    orderCountryPhoneId?: true
    orderEmail?: true
    orderBirthDate?: true
    orderSex?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type TicketTransactionDetailCountAggregateInputType = {
    id?: true
    ticketTransactionId?: true
    orderName?: true
    orderCountryPhoneId?: true
    orderEmail?: true
    orderBirthDate?: true
    orderSex?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type TicketTransactionDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketTransactionDetail to aggregate.
     */
    where?: TicketTransactionDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTransactionDetails to fetch.
     */
    orderBy?: TicketTransactionDetailOrderByWithRelationInput | TicketTransactionDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketTransactionDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTransactionDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTransactionDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketTransactionDetails
    **/
    _count?: true | TicketTransactionDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketTransactionDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketTransactionDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketTransactionDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketTransactionDetailMaxAggregateInputType
  }

  export type GetTicketTransactionDetailAggregateType<T extends TicketTransactionDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketTransactionDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketTransactionDetail[P]>
      : GetScalarType<T[P], AggregateTicketTransactionDetail[P]>
  }




  export type TicketTransactionDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketTransactionDetailWhereInput
    orderBy?: TicketTransactionDetailOrderByWithAggregationInput | TicketTransactionDetailOrderByWithAggregationInput[]
    by: TicketTransactionDetailScalarFieldEnum[] | TicketTransactionDetailScalarFieldEnum
    having?: TicketTransactionDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketTransactionDetailCountAggregateInputType | true
    _avg?: TicketTransactionDetailAvgAggregateInputType
    _sum?: TicketTransactionDetailSumAggregateInputType
    _min?: TicketTransactionDetailMinAggregateInputType
    _max?: TicketTransactionDetailMaxAggregateInputType
  }

  export type TicketTransactionDetailGroupByOutputType = {
    id: number
    ticketTransactionId: number
    orderName: string
    orderCountryPhoneId: number
    orderEmail: string
    orderBirthDate: string
    orderSex: $Enums.Sex
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: TicketTransactionDetailCountAggregateOutputType | null
    _avg: TicketTransactionDetailAvgAggregateOutputType | null
    _sum: TicketTransactionDetailSumAggregateOutputType | null
    _min: TicketTransactionDetailMinAggregateOutputType | null
    _max: TicketTransactionDetailMaxAggregateOutputType | null
  }

  type GetTicketTransactionDetailGroupByPayload<T extends TicketTransactionDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketTransactionDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketTransactionDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketTransactionDetailGroupByOutputType[P]>
            : GetScalarType<T[P], TicketTransactionDetailGroupByOutputType[P]>
        }
      >
    >


  export type TicketTransactionDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketTransactionId?: boolean
    orderName?: boolean
    orderCountryPhoneId?: boolean
    orderEmail?: boolean
    orderBirthDate?: boolean
    orderSex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    ticketTransactions?: boolean | TicketTransactionDefaultArgs<ExtArgs>
    orderCountryPhone?: boolean | CountryPhoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketTransactionDetail"]>

  export type TicketTransactionDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketTransactionId?: boolean
    orderName?: boolean
    orderCountryPhoneId?: boolean
    orderEmail?: boolean
    orderBirthDate?: boolean
    orderSex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    ticketTransactions?: boolean | TicketTransactionDefaultArgs<ExtArgs>
    orderCountryPhone?: boolean | CountryPhoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketTransactionDetail"]>

  export type TicketTransactionDetailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketTransactionId?: boolean
    orderName?: boolean
    orderCountryPhoneId?: boolean
    orderEmail?: boolean
    orderBirthDate?: boolean
    orderSex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    ticketTransactions?: boolean | TicketTransactionDefaultArgs<ExtArgs>
    orderCountryPhone?: boolean | CountryPhoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketTransactionDetail"]>

  export type TicketTransactionDetailSelectScalar = {
    id?: boolean
    ticketTransactionId?: boolean
    orderName?: boolean
    orderCountryPhoneId?: boolean
    orderEmail?: boolean
    orderBirthDate?: boolean
    orderSex?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type TicketTransactionDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketTransactionId" | "orderName" | "orderCountryPhoneId" | "orderEmail" | "orderBirthDate" | "orderSex" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["ticketTransactionDetail"]>
  export type TicketTransactionDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketTransactions?: boolean | TicketTransactionDefaultArgs<ExtArgs>
    orderCountryPhone?: boolean | CountryPhoneDefaultArgs<ExtArgs>
  }
  export type TicketTransactionDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketTransactions?: boolean | TicketTransactionDefaultArgs<ExtArgs>
    orderCountryPhone?: boolean | CountryPhoneDefaultArgs<ExtArgs>
  }
  export type TicketTransactionDetailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketTransactions?: boolean | TicketTransactionDefaultArgs<ExtArgs>
    orderCountryPhone?: boolean | CountryPhoneDefaultArgs<ExtArgs>
  }

  export type $TicketTransactionDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketTransactionDetail"
    objects: {
      ticketTransactions: Prisma.$TicketTransactionPayload<ExtArgs>
      orderCountryPhone: Prisma.$CountryPhonePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ticketTransactionId: number
      orderName: string
      orderCountryPhoneId: number
      orderEmail: string
      orderBirthDate: string
      orderSex: $Enums.Sex
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["ticketTransactionDetail"]>
    composites: {}
  }

  type TicketTransactionDetailGetPayload<S extends boolean | null | undefined | TicketTransactionDetailDefaultArgs> = $Result.GetResult<Prisma.$TicketTransactionDetailPayload, S>

  type TicketTransactionDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketTransactionDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketTransactionDetailCountAggregateInputType | true
    }

  export interface TicketTransactionDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketTransactionDetail'], meta: { name: 'TicketTransactionDetail' } }
    /**
     * Find zero or one TicketTransactionDetail that matches the filter.
     * @param {TicketTransactionDetailFindUniqueArgs} args - Arguments to find a TicketTransactionDetail
     * @example
     * // Get one TicketTransactionDetail
     * const ticketTransactionDetail = await prisma.ticketTransactionDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketTransactionDetailFindUniqueArgs>(args: SelectSubset<T, TicketTransactionDetailFindUniqueArgs<ExtArgs>>): Prisma__TicketTransactionDetailClient<$Result.GetResult<Prisma.$TicketTransactionDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketTransactionDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketTransactionDetailFindUniqueOrThrowArgs} args - Arguments to find a TicketTransactionDetail
     * @example
     * // Get one TicketTransactionDetail
     * const ticketTransactionDetail = await prisma.ticketTransactionDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketTransactionDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketTransactionDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketTransactionDetailClient<$Result.GetResult<Prisma.$TicketTransactionDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketTransactionDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTransactionDetailFindFirstArgs} args - Arguments to find a TicketTransactionDetail
     * @example
     * // Get one TicketTransactionDetail
     * const ticketTransactionDetail = await prisma.ticketTransactionDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketTransactionDetailFindFirstArgs>(args?: SelectSubset<T, TicketTransactionDetailFindFirstArgs<ExtArgs>>): Prisma__TicketTransactionDetailClient<$Result.GetResult<Prisma.$TicketTransactionDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketTransactionDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTransactionDetailFindFirstOrThrowArgs} args - Arguments to find a TicketTransactionDetail
     * @example
     * // Get one TicketTransactionDetail
     * const ticketTransactionDetail = await prisma.ticketTransactionDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketTransactionDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketTransactionDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketTransactionDetailClient<$Result.GetResult<Prisma.$TicketTransactionDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketTransactionDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTransactionDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketTransactionDetails
     * const ticketTransactionDetails = await prisma.ticketTransactionDetail.findMany()
     * 
     * // Get first 10 TicketTransactionDetails
     * const ticketTransactionDetails = await prisma.ticketTransactionDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketTransactionDetailWithIdOnly = await prisma.ticketTransactionDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketTransactionDetailFindManyArgs>(args?: SelectSubset<T, TicketTransactionDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTransactionDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketTransactionDetail.
     * @param {TicketTransactionDetailCreateArgs} args - Arguments to create a TicketTransactionDetail.
     * @example
     * // Create one TicketTransactionDetail
     * const TicketTransactionDetail = await prisma.ticketTransactionDetail.create({
     *   data: {
     *     // ... data to create a TicketTransactionDetail
     *   }
     * })
     * 
     */
    create<T extends TicketTransactionDetailCreateArgs>(args: SelectSubset<T, TicketTransactionDetailCreateArgs<ExtArgs>>): Prisma__TicketTransactionDetailClient<$Result.GetResult<Prisma.$TicketTransactionDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketTransactionDetails.
     * @param {TicketTransactionDetailCreateManyArgs} args - Arguments to create many TicketTransactionDetails.
     * @example
     * // Create many TicketTransactionDetails
     * const ticketTransactionDetail = await prisma.ticketTransactionDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketTransactionDetailCreateManyArgs>(args?: SelectSubset<T, TicketTransactionDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketTransactionDetails and returns the data saved in the database.
     * @param {TicketTransactionDetailCreateManyAndReturnArgs} args - Arguments to create many TicketTransactionDetails.
     * @example
     * // Create many TicketTransactionDetails
     * const ticketTransactionDetail = await prisma.ticketTransactionDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketTransactionDetails and only return the `id`
     * const ticketTransactionDetailWithIdOnly = await prisma.ticketTransactionDetail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketTransactionDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketTransactionDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTransactionDetailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketTransactionDetail.
     * @param {TicketTransactionDetailDeleteArgs} args - Arguments to delete one TicketTransactionDetail.
     * @example
     * // Delete one TicketTransactionDetail
     * const TicketTransactionDetail = await prisma.ticketTransactionDetail.delete({
     *   where: {
     *     // ... filter to delete one TicketTransactionDetail
     *   }
     * })
     * 
     */
    delete<T extends TicketTransactionDetailDeleteArgs>(args: SelectSubset<T, TicketTransactionDetailDeleteArgs<ExtArgs>>): Prisma__TicketTransactionDetailClient<$Result.GetResult<Prisma.$TicketTransactionDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketTransactionDetail.
     * @param {TicketTransactionDetailUpdateArgs} args - Arguments to update one TicketTransactionDetail.
     * @example
     * // Update one TicketTransactionDetail
     * const ticketTransactionDetail = await prisma.ticketTransactionDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketTransactionDetailUpdateArgs>(args: SelectSubset<T, TicketTransactionDetailUpdateArgs<ExtArgs>>): Prisma__TicketTransactionDetailClient<$Result.GetResult<Prisma.$TicketTransactionDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketTransactionDetails.
     * @param {TicketTransactionDetailDeleteManyArgs} args - Arguments to filter TicketTransactionDetails to delete.
     * @example
     * // Delete a few TicketTransactionDetails
     * const { count } = await prisma.ticketTransactionDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketTransactionDetailDeleteManyArgs>(args?: SelectSubset<T, TicketTransactionDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketTransactionDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTransactionDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketTransactionDetails
     * const ticketTransactionDetail = await prisma.ticketTransactionDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketTransactionDetailUpdateManyArgs>(args: SelectSubset<T, TicketTransactionDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketTransactionDetails and returns the data updated in the database.
     * @param {TicketTransactionDetailUpdateManyAndReturnArgs} args - Arguments to update many TicketTransactionDetails.
     * @example
     * // Update many TicketTransactionDetails
     * const ticketTransactionDetail = await prisma.ticketTransactionDetail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketTransactionDetails and only return the `id`
     * const ticketTransactionDetailWithIdOnly = await prisma.ticketTransactionDetail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketTransactionDetailUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketTransactionDetailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketTransactionDetailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketTransactionDetail.
     * @param {TicketTransactionDetailUpsertArgs} args - Arguments to update or create a TicketTransactionDetail.
     * @example
     * // Update or create a TicketTransactionDetail
     * const ticketTransactionDetail = await prisma.ticketTransactionDetail.upsert({
     *   create: {
     *     // ... data to create a TicketTransactionDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketTransactionDetail we want to update
     *   }
     * })
     */
    upsert<T extends TicketTransactionDetailUpsertArgs>(args: SelectSubset<T, TicketTransactionDetailUpsertArgs<ExtArgs>>): Prisma__TicketTransactionDetailClient<$Result.GetResult<Prisma.$TicketTransactionDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketTransactionDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTransactionDetailCountArgs} args - Arguments to filter TicketTransactionDetails to count.
     * @example
     * // Count the number of TicketTransactionDetails
     * const count = await prisma.ticketTransactionDetail.count({
     *   where: {
     *     // ... the filter for the TicketTransactionDetails we want to count
     *   }
     * })
    **/
    count<T extends TicketTransactionDetailCountArgs>(
      args?: Subset<T, TicketTransactionDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketTransactionDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketTransactionDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTransactionDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketTransactionDetailAggregateArgs>(args: Subset<T, TicketTransactionDetailAggregateArgs>): Prisma.PrismaPromise<GetTicketTransactionDetailAggregateType<T>>

    /**
     * Group by TicketTransactionDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketTransactionDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketTransactionDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketTransactionDetailGroupByArgs['orderBy'] }
        : { orderBy?: TicketTransactionDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketTransactionDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketTransactionDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketTransactionDetail model
   */
  readonly fields: TicketTransactionDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketTransactionDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketTransactionDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticketTransactions<T extends TicketTransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketTransactionDefaultArgs<ExtArgs>>): Prisma__TicketTransactionClient<$Result.GetResult<Prisma.$TicketTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderCountryPhone<T extends CountryPhoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryPhoneDefaultArgs<ExtArgs>>): Prisma__CountryPhoneClient<$Result.GetResult<Prisma.$CountryPhonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TicketTransactionDetail model
   */
  interface TicketTransactionDetailFieldRefs {
    readonly id: FieldRef<"TicketTransactionDetail", 'Int'>
    readonly ticketTransactionId: FieldRef<"TicketTransactionDetail", 'Int'>
    readonly orderName: FieldRef<"TicketTransactionDetail", 'String'>
    readonly orderCountryPhoneId: FieldRef<"TicketTransactionDetail", 'Int'>
    readonly orderEmail: FieldRef<"TicketTransactionDetail", 'String'>
    readonly orderBirthDate: FieldRef<"TicketTransactionDetail", 'String'>
    readonly orderSex: FieldRef<"TicketTransactionDetail", 'Sex'>
    readonly createdAt: FieldRef<"TicketTransactionDetail", 'DateTime'>
    readonly updatedAt: FieldRef<"TicketTransactionDetail", 'DateTime'>
    readonly deletedAt: FieldRef<"TicketTransactionDetail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketTransactionDetail findUnique
   */
  export type TicketTransactionDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransactionDetail
     */
    select?: TicketTransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransactionDetail
     */
    omit?: TicketTransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionDetailInclude<ExtArgs> | null
    /**
     * Filter, which TicketTransactionDetail to fetch.
     */
    where: TicketTransactionDetailWhereUniqueInput
  }

  /**
   * TicketTransactionDetail findUniqueOrThrow
   */
  export type TicketTransactionDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransactionDetail
     */
    select?: TicketTransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransactionDetail
     */
    omit?: TicketTransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionDetailInclude<ExtArgs> | null
    /**
     * Filter, which TicketTransactionDetail to fetch.
     */
    where: TicketTransactionDetailWhereUniqueInput
  }

  /**
   * TicketTransactionDetail findFirst
   */
  export type TicketTransactionDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransactionDetail
     */
    select?: TicketTransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransactionDetail
     */
    omit?: TicketTransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionDetailInclude<ExtArgs> | null
    /**
     * Filter, which TicketTransactionDetail to fetch.
     */
    where?: TicketTransactionDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTransactionDetails to fetch.
     */
    orderBy?: TicketTransactionDetailOrderByWithRelationInput | TicketTransactionDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketTransactionDetails.
     */
    cursor?: TicketTransactionDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTransactionDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTransactionDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketTransactionDetails.
     */
    distinct?: TicketTransactionDetailScalarFieldEnum | TicketTransactionDetailScalarFieldEnum[]
  }

  /**
   * TicketTransactionDetail findFirstOrThrow
   */
  export type TicketTransactionDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransactionDetail
     */
    select?: TicketTransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransactionDetail
     */
    omit?: TicketTransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionDetailInclude<ExtArgs> | null
    /**
     * Filter, which TicketTransactionDetail to fetch.
     */
    where?: TicketTransactionDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTransactionDetails to fetch.
     */
    orderBy?: TicketTransactionDetailOrderByWithRelationInput | TicketTransactionDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketTransactionDetails.
     */
    cursor?: TicketTransactionDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTransactionDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTransactionDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketTransactionDetails.
     */
    distinct?: TicketTransactionDetailScalarFieldEnum | TicketTransactionDetailScalarFieldEnum[]
  }

  /**
   * TicketTransactionDetail findMany
   */
  export type TicketTransactionDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransactionDetail
     */
    select?: TicketTransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransactionDetail
     */
    omit?: TicketTransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionDetailInclude<ExtArgs> | null
    /**
     * Filter, which TicketTransactionDetails to fetch.
     */
    where?: TicketTransactionDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketTransactionDetails to fetch.
     */
    orderBy?: TicketTransactionDetailOrderByWithRelationInput | TicketTransactionDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketTransactionDetails.
     */
    cursor?: TicketTransactionDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketTransactionDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketTransactionDetails.
     */
    skip?: number
    distinct?: TicketTransactionDetailScalarFieldEnum | TicketTransactionDetailScalarFieldEnum[]
  }

  /**
   * TicketTransactionDetail create
   */
  export type TicketTransactionDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransactionDetail
     */
    select?: TicketTransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransactionDetail
     */
    omit?: TicketTransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketTransactionDetail.
     */
    data: XOR<TicketTransactionDetailCreateInput, TicketTransactionDetailUncheckedCreateInput>
  }

  /**
   * TicketTransactionDetail createMany
   */
  export type TicketTransactionDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketTransactionDetails.
     */
    data: TicketTransactionDetailCreateManyInput | TicketTransactionDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketTransactionDetail createManyAndReturn
   */
  export type TicketTransactionDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransactionDetail
     */
    select?: TicketTransactionDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransactionDetail
     */
    omit?: TicketTransactionDetailOmit<ExtArgs> | null
    /**
     * The data used to create many TicketTransactionDetails.
     */
    data: TicketTransactionDetailCreateManyInput | TicketTransactionDetailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketTransactionDetail update
   */
  export type TicketTransactionDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransactionDetail
     */
    select?: TicketTransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransactionDetail
     */
    omit?: TicketTransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketTransactionDetail.
     */
    data: XOR<TicketTransactionDetailUpdateInput, TicketTransactionDetailUncheckedUpdateInput>
    /**
     * Choose, which TicketTransactionDetail to update.
     */
    where: TicketTransactionDetailWhereUniqueInput
  }

  /**
   * TicketTransactionDetail updateMany
   */
  export type TicketTransactionDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketTransactionDetails.
     */
    data: XOR<TicketTransactionDetailUpdateManyMutationInput, TicketTransactionDetailUncheckedUpdateManyInput>
    /**
     * Filter which TicketTransactionDetails to update
     */
    where?: TicketTransactionDetailWhereInput
    /**
     * Limit how many TicketTransactionDetails to update.
     */
    limit?: number
  }

  /**
   * TicketTransactionDetail updateManyAndReturn
   */
  export type TicketTransactionDetailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransactionDetail
     */
    select?: TicketTransactionDetailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransactionDetail
     */
    omit?: TicketTransactionDetailOmit<ExtArgs> | null
    /**
     * The data used to update TicketTransactionDetails.
     */
    data: XOR<TicketTransactionDetailUpdateManyMutationInput, TicketTransactionDetailUncheckedUpdateManyInput>
    /**
     * Filter which TicketTransactionDetails to update
     */
    where?: TicketTransactionDetailWhereInput
    /**
     * Limit how many TicketTransactionDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionDetailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketTransactionDetail upsert
   */
  export type TicketTransactionDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransactionDetail
     */
    select?: TicketTransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransactionDetail
     */
    omit?: TicketTransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketTransactionDetail to update in case it exists.
     */
    where: TicketTransactionDetailWhereUniqueInput
    /**
     * In case the TicketTransactionDetail found by the `where` argument doesn't exist, create a new TicketTransactionDetail with this data.
     */
    create: XOR<TicketTransactionDetailCreateInput, TicketTransactionDetailUncheckedCreateInput>
    /**
     * In case the TicketTransactionDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketTransactionDetailUpdateInput, TicketTransactionDetailUncheckedUpdateInput>
  }

  /**
   * TicketTransactionDetail delete
   */
  export type TicketTransactionDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransactionDetail
     */
    select?: TicketTransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransactionDetail
     */
    omit?: TicketTransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionDetailInclude<ExtArgs> | null
    /**
     * Filter which TicketTransactionDetail to delete.
     */
    where: TicketTransactionDetailWhereUniqueInput
  }

  /**
   * TicketTransactionDetail deleteMany
   */
  export type TicketTransactionDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketTransactionDetails to delete
     */
    where?: TicketTransactionDetailWhereInput
    /**
     * Limit how many TicketTransactionDetails to delete.
     */
    limit?: number
  }

  /**
   * TicketTransactionDetail without action
   */
  export type TicketTransactionDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketTransactionDetail
     */
    select?: TicketTransactionDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketTransactionDetail
     */
    omit?: TicketTransactionDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketTransactionDetailInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CountryPhoneScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    mobileCode: 'mobileCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type CountryPhoneScalarFieldEnum = (typeof CountryPhoneScalarFieldEnum)[keyof typeof CountryPhoneScalarFieldEnum]


  export const MemberScalarFieldEnum: {
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

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const VerificationCodeScalarFieldEnum: {
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

  export type VerificationCodeScalarFieldEnum = (typeof VerificationCodeScalarFieldEnum)[keyof typeof VerificationCodeScalarFieldEnum]


  export const CreatorProfileScalarFieldEnum: {
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

  export type CreatorProfileScalarFieldEnum = (typeof CreatorProfileScalarFieldEnum)[keyof typeof CreatorProfileScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    creatorId: 'creatorId',
    eventName: 'eventName',
    eventFormatId: 'eventFormatId',
    eventTopicId: 'eventTopicId',
    eventTag: 'eventTag',
    isPrivateEvent: 'isPrivateEvent',
    organizerName: 'organizerName',
    organizerLogoImgUrl: 'organizerLogoImgUrl',
    bannerImgUrl: 'bannerImgUrl',
    eventStartDate: 'eventStartDate',
    eventEndDate: 'eventEndDate',
    eventStartTime: 'eventStartTime',
    eventEndTime: 'eventEndTime',
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
    eventCPCountryPhoneId: 'eventCPCountryPhoneId',
    eventCPPhone: 'eventCPPhone',
    idCardStatus: 'idCardStatus',
    maxTicketPerTransaction: 'maxTicketPerTransaction',
    oneEmailOneTransaction: 'oneEmailOneTransaction',
    ticketDataFormUnique: 'ticketDataFormUnique',
    isDraft: 'isDraft',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventFormatScalarFieldEnum: {
    id: 'id',
    formatName: 'formatName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type EventFormatScalarFieldEnum = (typeof EventFormatScalarFieldEnum)[keyof typeof EventFormatScalarFieldEnum]


  export const EventTopicScalarFieldEnum: {
    id: 'id',
    topicName: 'topicName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type EventTopicScalarFieldEnum = (typeof EventTopicScalarFieldEnum)[keyof typeof EventTopicScalarFieldEnum]


  export const TicketTransactionScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    memberId: 'memberId',
    ticketCode: 'ticketCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type TicketTransactionScalarFieldEnum = (typeof TicketTransactionScalarFieldEnum)[keyof typeof TicketTransactionScalarFieldEnum]


  export const TicketTransactionDetailScalarFieldEnum: {
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

  export type TicketTransactionDetailScalarFieldEnum = (typeof TicketTransactionDetailScalarFieldEnum)[keyof typeof TicketTransactionDetailScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Sex'
   */
  export type EnumSexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sex'>
    


  /**
   * Reference to a field of type 'Sex[]'
   */
  export type ListEnumSexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sex[]'>
    


  /**
   * Reference to a field of type 'CodeType'
   */
  export type EnumCodeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CodeType'>
    


  /**
   * Reference to a field of type 'CodeType[]'
   */
  export type ListEnumCodeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CodeType[]'>
    


  /**
   * Reference to a field of type 'TicketType'
   */
  export type EnumTicketTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketType'>
    


  /**
   * Reference to a field of type 'TicketType[]'
   */
  export type ListEnumTicketTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketType[]'>
    


  /**
   * Reference to a field of type 'TicketIDCard'
   */
  export type EnumTicketIDCardFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketIDCard'>
    


  /**
   * Reference to a field of type 'TicketIDCard[]'
   */
  export type ListEnumTicketIDCardFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketIDCard[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CountryPhoneWhereInput = {
    AND?: CountryPhoneWhereInput | CountryPhoneWhereInput[]
    OR?: CountryPhoneWhereInput[]
    NOT?: CountryPhoneWhereInput | CountryPhoneWhereInput[]
    id?: IntFilter<"CountryPhone"> | number
    name?: StringFilter<"CountryPhone"> | string
    code?: StringFilter<"CountryPhone"> | string
    mobileCode?: StringFilter<"CountryPhone"> | string
    createdAt?: DateTimeFilter<"CountryPhone"> | Date | string
    updatedAt?: DateTimeFilter<"CountryPhone"> | Date | string
    deletedAt?: DateTimeNullableFilter<"CountryPhone"> | Date | string | null
    members?: MemberListRelationFilter
    creatorProfile?: CreatorProfileListRelationFilter
    events?: EventListRelationFilter
    ticketTransactionDetails?: TicketTransactionDetailListRelationFilter
  }

  export type CountryPhoneOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    mobileCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    members?: MemberOrderByRelationAggregateInput
    creatorProfile?: CreatorProfileOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
    ticketTransactionDetails?: TicketTransactionDetailOrderByRelationAggregateInput
  }

  export type CountryPhoneWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    code?: string
    AND?: CountryPhoneWhereInput | CountryPhoneWhereInput[]
    OR?: CountryPhoneWhereInput[]
    NOT?: CountryPhoneWhereInput | CountryPhoneWhereInput[]
    mobileCode?: StringFilter<"CountryPhone"> | string
    createdAt?: DateTimeFilter<"CountryPhone"> | Date | string
    updatedAt?: DateTimeFilter<"CountryPhone"> | Date | string
    deletedAt?: DateTimeNullableFilter<"CountryPhone"> | Date | string | null
    members?: MemberListRelationFilter
    creatorProfile?: CreatorProfileListRelationFilter
    events?: EventListRelationFilter
    ticketTransactionDetails?: TicketTransactionDetailListRelationFilter
  }, "id" | "name" | "code">

  export type CountryPhoneOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    mobileCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CountryPhoneCountOrderByAggregateInput
    _avg?: CountryPhoneAvgOrderByAggregateInput
    _max?: CountryPhoneMaxOrderByAggregateInput
    _min?: CountryPhoneMinOrderByAggregateInput
    _sum?: CountryPhoneSumOrderByAggregateInput
  }

  export type CountryPhoneScalarWhereWithAggregatesInput = {
    AND?: CountryPhoneScalarWhereWithAggregatesInput | CountryPhoneScalarWhereWithAggregatesInput[]
    OR?: CountryPhoneScalarWhereWithAggregatesInput[]
    NOT?: CountryPhoneScalarWhereWithAggregatesInput | CountryPhoneScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CountryPhone"> | number
    name?: StringWithAggregatesFilter<"CountryPhone"> | string
    code?: StringWithAggregatesFilter<"CountryPhone"> | string
    mobileCode?: StringWithAggregatesFilter<"CountryPhone"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CountryPhone"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CountryPhone"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"CountryPhone"> | Date | string | null
  }

  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: StringFilter<"Member"> | string
    email?: StringFilter<"Member"> | string
    countryPhoneId?: IntFilter<"Member"> | number
    phoneNumber?: StringFilter<"Member"> | string
    firstName?: StringFilter<"Member"> | string
    lastName?: StringNullableFilter<"Member"> | string | null
    birthDate?: StringFilter<"Member"> | string
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Member"> | Date | string | null
    eventPromoAccepted?: BoolFilter<"Member"> | boolean
    personalDataConsentAccepted?: BoolFilter<"Member"> | boolean
    termsPrivacyAccepted?: BoolFilter<"Member"> | boolean
    sex?: EnumSexFilter<"Member"> | $Enums.Sex
    isEmailVerified?: BoolFilter<"Member"> | boolean
    countryPhone?: XOR<CountryPhoneScalarRelationFilter, CountryPhoneWhereInput>
    verificationCodes?: VerificationCodeListRelationFilter
    creatorProfile?: XOR<CreatorProfileNullableScalarRelationFilter, CreatorProfileWhereInput> | null
    ticketTransactions?: TicketTransactionListRelationFilter
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    countryPhoneId?: SortOrder
    phoneNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    birthDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    eventPromoAccepted?: SortOrder
    personalDataConsentAccepted?: SortOrder
    termsPrivacyAccepted?: SortOrder
    sex?: SortOrder
    isEmailVerified?: SortOrder
    countryPhone?: CountryPhoneOrderByWithRelationInput
    verificationCodes?: VerificationCodeOrderByRelationAggregateInput
    creatorProfile?: CreatorProfileOrderByWithRelationInput
    ticketTransactions?: TicketTransactionOrderByRelationAggregateInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phoneNumber?: string
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    countryPhoneId?: IntFilter<"Member"> | number
    firstName?: StringFilter<"Member"> | string
    lastName?: StringNullableFilter<"Member"> | string | null
    birthDate?: StringFilter<"Member"> | string
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Member"> | Date | string | null
    eventPromoAccepted?: BoolFilter<"Member"> | boolean
    personalDataConsentAccepted?: BoolFilter<"Member"> | boolean
    termsPrivacyAccepted?: BoolFilter<"Member"> | boolean
    sex?: EnumSexFilter<"Member"> | $Enums.Sex
    isEmailVerified?: BoolFilter<"Member"> | boolean
    countryPhone?: XOR<CountryPhoneScalarRelationFilter, CountryPhoneWhereInput>
    verificationCodes?: VerificationCodeListRelationFilter
    creatorProfile?: XOR<CreatorProfileNullableScalarRelationFilter, CreatorProfileWhereInput> | null
    ticketTransactions?: TicketTransactionListRelationFilter
  }, "id" | "email" | "phoneNumber">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    countryPhoneId?: SortOrder
    phoneNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    birthDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    eventPromoAccepted?: SortOrder
    personalDataConsentAccepted?: SortOrder
    termsPrivacyAccepted?: SortOrder
    sex?: SortOrder
    isEmailVerified?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _avg?: MemberAvgOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
    _sum?: MemberSumOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Member"> | string
    email?: StringWithAggregatesFilter<"Member"> | string
    countryPhoneId?: IntWithAggregatesFilter<"Member"> | number
    phoneNumber?: StringWithAggregatesFilter<"Member"> | string
    firstName?: StringWithAggregatesFilter<"Member"> | string
    lastName?: StringNullableWithAggregatesFilter<"Member"> | string | null
    birthDate?: StringWithAggregatesFilter<"Member"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Member"> | Date | string | null
    eventPromoAccepted?: BoolWithAggregatesFilter<"Member"> | boolean
    personalDataConsentAccepted?: BoolWithAggregatesFilter<"Member"> | boolean
    termsPrivacyAccepted?: BoolWithAggregatesFilter<"Member"> | boolean
    sex?: EnumSexWithAggregatesFilter<"Member"> | $Enums.Sex
    isEmailVerified?: BoolWithAggregatesFilter<"Member"> | boolean
  }

  export type VerificationCodeWhereInput = {
    AND?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    OR?: VerificationCodeWhereInput[]
    NOT?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    id?: StringFilter<"VerificationCode"> | string
    code?: StringFilter<"VerificationCode"> | string
    email?: StringFilter<"VerificationCode"> | string
    type?: EnumCodeTypeFilter<"VerificationCode"> | $Enums.CodeType
    expiredAt?: DateTimeFilter<"VerificationCode"> | Date | string
    isUsed?: BoolFilter<"VerificationCode"> | boolean
    attempts?: IntFilter<"VerificationCode"> | number
    memberId?: StringNullableFilter<"VerificationCode"> | string | null
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
    updatedAt?: DateTimeFilter<"VerificationCode"> | Date | string
    deletedAt?: DateTimeNullableFilter<"VerificationCode"> | Date | string | null
    member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
  }

  export type VerificationCodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    email?: SortOrder
    type?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    attempts?: SortOrder
    memberId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    member?: MemberOrderByWithRelationInput
  }

  export type VerificationCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    OR?: VerificationCodeWhereInput[]
    NOT?: VerificationCodeWhereInput | VerificationCodeWhereInput[]
    code?: StringFilter<"VerificationCode"> | string
    email?: StringFilter<"VerificationCode"> | string
    type?: EnumCodeTypeFilter<"VerificationCode"> | $Enums.CodeType
    expiredAt?: DateTimeFilter<"VerificationCode"> | Date | string
    isUsed?: BoolFilter<"VerificationCode"> | boolean
    attempts?: IntFilter<"VerificationCode"> | number
    memberId?: StringNullableFilter<"VerificationCode"> | string | null
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
    updatedAt?: DateTimeFilter<"VerificationCode"> | Date | string
    deletedAt?: DateTimeNullableFilter<"VerificationCode"> | Date | string | null
    member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
  }, "id">

  export type VerificationCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    email?: SortOrder
    type?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    attempts?: SortOrder
    memberId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: VerificationCodeCountOrderByAggregateInput
    _avg?: VerificationCodeAvgOrderByAggregateInput
    _max?: VerificationCodeMaxOrderByAggregateInput
    _min?: VerificationCodeMinOrderByAggregateInput
    _sum?: VerificationCodeSumOrderByAggregateInput
  }

  export type VerificationCodeScalarWhereWithAggregatesInput = {
    AND?: VerificationCodeScalarWhereWithAggregatesInput | VerificationCodeScalarWhereWithAggregatesInput[]
    OR?: VerificationCodeScalarWhereWithAggregatesInput[]
    NOT?: VerificationCodeScalarWhereWithAggregatesInput | VerificationCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationCode"> | string
    code?: StringWithAggregatesFilter<"VerificationCode"> | string
    email?: StringWithAggregatesFilter<"VerificationCode"> | string
    type?: EnumCodeTypeWithAggregatesFilter<"VerificationCode"> | $Enums.CodeType
    expiredAt?: DateTimeWithAggregatesFilter<"VerificationCode"> | Date | string
    isUsed?: BoolWithAggregatesFilter<"VerificationCode"> | boolean
    attempts?: IntWithAggregatesFilter<"VerificationCode"> | number
    memberId?: StringNullableWithAggregatesFilter<"VerificationCode"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"VerificationCode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VerificationCode"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"VerificationCode"> | Date | string | null
  }

  export type CreatorProfileWhereInput = {
    AND?: CreatorProfileWhereInput | CreatorProfileWhereInput[]
    OR?: CreatorProfileWhereInput[]
    NOT?: CreatorProfileWhereInput | CreatorProfileWhereInput[]
    id?: StringFilter<"CreatorProfile"> | string
    memberId?: StringFilter<"CreatorProfile"> | string
    bannerImgUrl?: StringNullableFilter<"CreatorProfile"> | string | null
    logoImgUrl?: StringNullableFilter<"CreatorProfile"> | string | null
    profileLinkUrl?: StringFilter<"CreatorProfile"> | string
    countryPhoneId?: IntNullableFilter<"CreatorProfile"> | number | null
    creatorPhoneNumber?: StringNullableFilter<"CreatorProfile"> | string | null
    address?: StringNullableFilter<"CreatorProfile"> | string | null
    aboutUsInfo?: StringNullableFilter<"CreatorProfile"> | string | null
    xUserName?: StringNullableFilter<"CreatorProfile"> | string | null
    igUserName?: StringNullableFilter<"CreatorProfile"> | string | null
    fbProfileUrl?: StringNullableFilter<"CreatorProfile"> | string | null
    createdAt?: DateTimeFilter<"CreatorProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CreatorProfile"> | Date | string
    deletedAt?: DateTimeNullableFilter<"CreatorProfile"> | Date | string | null
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    countryPhone?: XOR<CountryPhoneNullableScalarRelationFilter, CountryPhoneWhereInput> | null
    event?: EventListRelationFilter
  }

  export type CreatorProfileOrderByWithRelationInput = {
    id?: SortOrder
    memberId?: SortOrder
    bannerImgUrl?: SortOrderInput | SortOrder
    logoImgUrl?: SortOrderInput | SortOrder
    profileLinkUrl?: SortOrder
    countryPhoneId?: SortOrderInput | SortOrder
    creatorPhoneNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    aboutUsInfo?: SortOrderInput | SortOrder
    xUserName?: SortOrderInput | SortOrder
    igUserName?: SortOrderInput | SortOrder
    fbProfileUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    member?: MemberOrderByWithRelationInput
    countryPhone?: CountryPhoneOrderByWithRelationInput
    event?: EventOrderByRelationAggregateInput
  }

  export type CreatorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    memberId?: string
    profileLinkUrl?: string
    AND?: CreatorProfileWhereInput | CreatorProfileWhereInput[]
    OR?: CreatorProfileWhereInput[]
    NOT?: CreatorProfileWhereInput | CreatorProfileWhereInput[]
    bannerImgUrl?: StringNullableFilter<"CreatorProfile"> | string | null
    logoImgUrl?: StringNullableFilter<"CreatorProfile"> | string | null
    countryPhoneId?: IntNullableFilter<"CreatorProfile"> | number | null
    creatorPhoneNumber?: StringNullableFilter<"CreatorProfile"> | string | null
    address?: StringNullableFilter<"CreatorProfile"> | string | null
    aboutUsInfo?: StringNullableFilter<"CreatorProfile"> | string | null
    xUserName?: StringNullableFilter<"CreatorProfile"> | string | null
    igUserName?: StringNullableFilter<"CreatorProfile"> | string | null
    fbProfileUrl?: StringNullableFilter<"CreatorProfile"> | string | null
    createdAt?: DateTimeFilter<"CreatorProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CreatorProfile"> | Date | string
    deletedAt?: DateTimeNullableFilter<"CreatorProfile"> | Date | string | null
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    countryPhone?: XOR<CountryPhoneNullableScalarRelationFilter, CountryPhoneWhereInput> | null
    event?: EventListRelationFilter
  }, "id" | "memberId" | "profileLinkUrl">

  export type CreatorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrder
    bannerImgUrl?: SortOrderInput | SortOrder
    logoImgUrl?: SortOrderInput | SortOrder
    profileLinkUrl?: SortOrder
    countryPhoneId?: SortOrderInput | SortOrder
    creatorPhoneNumber?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    aboutUsInfo?: SortOrderInput | SortOrder
    xUserName?: SortOrderInput | SortOrder
    igUserName?: SortOrderInput | SortOrder
    fbProfileUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: CreatorProfileCountOrderByAggregateInput
    _avg?: CreatorProfileAvgOrderByAggregateInput
    _max?: CreatorProfileMaxOrderByAggregateInput
    _min?: CreatorProfileMinOrderByAggregateInput
    _sum?: CreatorProfileSumOrderByAggregateInput
  }

  export type CreatorProfileScalarWhereWithAggregatesInput = {
    AND?: CreatorProfileScalarWhereWithAggregatesInput | CreatorProfileScalarWhereWithAggregatesInput[]
    OR?: CreatorProfileScalarWhereWithAggregatesInput[]
    NOT?: CreatorProfileScalarWhereWithAggregatesInput | CreatorProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreatorProfile"> | string
    memberId?: StringWithAggregatesFilter<"CreatorProfile"> | string
    bannerImgUrl?: StringNullableWithAggregatesFilter<"CreatorProfile"> | string | null
    logoImgUrl?: StringNullableWithAggregatesFilter<"CreatorProfile"> | string | null
    profileLinkUrl?: StringWithAggregatesFilter<"CreatorProfile"> | string
    countryPhoneId?: IntNullableWithAggregatesFilter<"CreatorProfile"> | number | null
    creatorPhoneNumber?: StringNullableWithAggregatesFilter<"CreatorProfile"> | string | null
    address?: StringNullableWithAggregatesFilter<"CreatorProfile"> | string | null
    aboutUsInfo?: StringNullableWithAggregatesFilter<"CreatorProfile"> | string | null
    xUserName?: StringNullableWithAggregatesFilter<"CreatorProfile"> | string | null
    igUserName?: StringNullableWithAggregatesFilter<"CreatorProfile"> | string | null
    fbProfileUrl?: StringNullableWithAggregatesFilter<"CreatorProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CreatorProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CreatorProfile"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"CreatorProfile"> | Date | string | null
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    creatorId?: StringFilter<"Event"> | string
    eventName?: StringFilter<"Event"> | string
    eventFormatId?: IntFilter<"Event"> | number
    eventTopicId?: IntFilter<"Event"> | number
    eventTag?: StringNullableFilter<"Event"> | string | null
    isPrivateEvent?: BoolFilter<"Event"> | boolean
    organizerName?: StringFilter<"Event"> | string
    organizerLogoImgUrl?: StringNullableFilter<"Event"> | string | null
    bannerImgUrl?: StringNullableFilter<"Event"> | string | null
    eventStartDate?: StringFilter<"Event"> | string
    eventEndDate?: StringFilter<"Event"> | string
    eventStartTime?: StringFilter<"Event"> | string
    eventEndTime?: StringFilter<"Event"> | string
    eventLocation?: StringFilter<"Event"> | string
    eventDesc?: StringNullableFilter<"Event"> | string | null
    ticketType?: EnumTicketTypeFilter<"Event"> | $Enums.TicketType
    ticketName?: StringFilter<"Event"> | string
    ticketQty?: IntFilter<"Event"> | number
    ticketPrice?: IntFilter<"Event"> | number
    ticketDesc?: StringNullableFilter<"Event"> | string | null
    ticketTermsAndCondition?: StringNullableFilter<"Event"> | string | null
    ticketStartDate?: StringFilter<"Event"> | string
    ticketEndDate?: StringFilter<"Event"> | string
    eventCPName?: StringFilter<"Event"> | string
    eventCPEmail?: StringFilter<"Event"> | string
    eventCPCountryPhoneId?: IntFilter<"Event"> | number
    eventCPPhone?: StringFilter<"Event"> | string
    idCardStatus?: EnumTicketIDCardFilter<"Event"> | $Enums.TicketIDCard
    maxTicketPerTransaction?: IntFilter<"Event"> | number
    oneEmailOneTransaction?: BoolFilter<"Event"> | boolean
    ticketDataFormUnique?: BoolFilter<"Event"> | boolean
    isDraft?: BoolNullableFilter<"Event"> | boolean | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    creator?: XOR<CreatorProfileScalarRelationFilter, CreatorProfileWhereInput>
    eventFormat?: XOR<EventFormatScalarRelationFilter, EventFormatWhereInput>
    eventTopic?: XOR<EventTopicScalarRelationFilter, EventTopicWhereInput>
    eventCPCountryPhone?: XOR<CountryPhoneScalarRelationFilter, CountryPhoneWhereInput>
    ticketTransactions?: TicketTransactionListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    eventName?: SortOrder
    eventFormatId?: SortOrder
    eventTopicId?: SortOrder
    eventTag?: SortOrderInput | SortOrder
    isPrivateEvent?: SortOrder
    organizerName?: SortOrder
    organizerLogoImgUrl?: SortOrderInput | SortOrder
    bannerImgUrl?: SortOrderInput | SortOrder
    eventStartDate?: SortOrder
    eventEndDate?: SortOrder
    eventStartTime?: SortOrder
    eventEndTime?: SortOrder
    eventLocation?: SortOrder
    eventDesc?: SortOrderInput | SortOrder
    ticketType?: SortOrder
    ticketName?: SortOrder
    ticketQty?: SortOrder
    ticketPrice?: SortOrder
    ticketDesc?: SortOrderInput | SortOrder
    ticketTermsAndCondition?: SortOrderInput | SortOrder
    ticketStartDate?: SortOrder
    ticketEndDate?: SortOrder
    eventCPName?: SortOrder
    eventCPEmail?: SortOrder
    eventCPCountryPhoneId?: SortOrder
    eventCPPhone?: SortOrder
    idCardStatus?: SortOrder
    maxTicketPerTransaction?: SortOrder
    oneEmailOneTransaction?: SortOrder
    ticketDataFormUnique?: SortOrder
    isDraft?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    creator?: CreatorProfileOrderByWithRelationInput
    eventFormat?: EventFormatOrderByWithRelationInput
    eventTopic?: EventTopicOrderByWithRelationInput
    eventCPCountryPhone?: CountryPhoneOrderByWithRelationInput
    ticketTransactions?: TicketTransactionOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    creatorId?: StringFilter<"Event"> | string
    eventName?: StringFilter<"Event"> | string
    eventFormatId?: IntFilter<"Event"> | number
    eventTopicId?: IntFilter<"Event"> | number
    eventTag?: StringNullableFilter<"Event"> | string | null
    isPrivateEvent?: BoolFilter<"Event"> | boolean
    organizerName?: StringFilter<"Event"> | string
    organizerLogoImgUrl?: StringNullableFilter<"Event"> | string | null
    bannerImgUrl?: StringNullableFilter<"Event"> | string | null
    eventStartDate?: StringFilter<"Event"> | string
    eventEndDate?: StringFilter<"Event"> | string
    eventStartTime?: StringFilter<"Event"> | string
    eventEndTime?: StringFilter<"Event"> | string
    eventLocation?: StringFilter<"Event"> | string
    eventDesc?: StringNullableFilter<"Event"> | string | null
    ticketType?: EnumTicketTypeFilter<"Event"> | $Enums.TicketType
    ticketName?: StringFilter<"Event"> | string
    ticketQty?: IntFilter<"Event"> | number
    ticketPrice?: IntFilter<"Event"> | number
    ticketDesc?: StringNullableFilter<"Event"> | string | null
    ticketTermsAndCondition?: StringNullableFilter<"Event"> | string | null
    ticketStartDate?: StringFilter<"Event"> | string
    ticketEndDate?: StringFilter<"Event"> | string
    eventCPName?: StringFilter<"Event"> | string
    eventCPEmail?: StringFilter<"Event"> | string
    eventCPCountryPhoneId?: IntFilter<"Event"> | number
    eventCPPhone?: StringFilter<"Event"> | string
    idCardStatus?: EnumTicketIDCardFilter<"Event"> | $Enums.TicketIDCard
    maxTicketPerTransaction?: IntFilter<"Event"> | number
    oneEmailOneTransaction?: BoolFilter<"Event"> | boolean
    ticketDataFormUnique?: BoolFilter<"Event"> | boolean
    isDraft?: BoolNullableFilter<"Event"> | boolean | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
    creator?: XOR<CreatorProfileScalarRelationFilter, CreatorProfileWhereInput>
    eventFormat?: XOR<EventFormatScalarRelationFilter, EventFormatWhereInput>
    eventTopic?: XOR<EventTopicScalarRelationFilter, EventTopicWhereInput>
    eventCPCountryPhone?: XOR<CountryPhoneScalarRelationFilter, CountryPhoneWhereInput>
    ticketTransactions?: TicketTransactionListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    creatorId?: SortOrder
    eventName?: SortOrder
    eventFormatId?: SortOrder
    eventTopicId?: SortOrder
    eventTag?: SortOrderInput | SortOrder
    isPrivateEvent?: SortOrder
    organizerName?: SortOrder
    organizerLogoImgUrl?: SortOrderInput | SortOrder
    bannerImgUrl?: SortOrderInput | SortOrder
    eventStartDate?: SortOrder
    eventEndDate?: SortOrder
    eventStartTime?: SortOrder
    eventEndTime?: SortOrder
    eventLocation?: SortOrder
    eventDesc?: SortOrderInput | SortOrder
    ticketType?: SortOrder
    ticketName?: SortOrder
    ticketQty?: SortOrder
    ticketPrice?: SortOrder
    ticketDesc?: SortOrderInput | SortOrder
    ticketTermsAndCondition?: SortOrderInput | SortOrder
    ticketStartDate?: SortOrder
    ticketEndDate?: SortOrder
    eventCPName?: SortOrder
    eventCPEmail?: SortOrder
    eventCPCountryPhoneId?: SortOrder
    eventCPPhone?: SortOrder
    idCardStatus?: SortOrder
    maxTicketPerTransaction?: SortOrder
    oneEmailOneTransaction?: SortOrder
    ticketDataFormUnique?: SortOrder
    isDraft?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    creatorId?: StringWithAggregatesFilter<"Event"> | string
    eventName?: StringWithAggregatesFilter<"Event"> | string
    eventFormatId?: IntWithAggregatesFilter<"Event"> | number
    eventTopicId?: IntWithAggregatesFilter<"Event"> | number
    eventTag?: StringNullableWithAggregatesFilter<"Event"> | string | null
    isPrivateEvent?: BoolWithAggregatesFilter<"Event"> | boolean
    organizerName?: StringWithAggregatesFilter<"Event"> | string
    organizerLogoImgUrl?: StringNullableWithAggregatesFilter<"Event"> | string | null
    bannerImgUrl?: StringNullableWithAggregatesFilter<"Event"> | string | null
    eventStartDate?: StringWithAggregatesFilter<"Event"> | string
    eventEndDate?: StringWithAggregatesFilter<"Event"> | string
    eventStartTime?: StringWithAggregatesFilter<"Event"> | string
    eventEndTime?: StringWithAggregatesFilter<"Event"> | string
    eventLocation?: StringWithAggregatesFilter<"Event"> | string
    eventDesc?: StringNullableWithAggregatesFilter<"Event"> | string | null
    ticketType?: EnumTicketTypeWithAggregatesFilter<"Event"> | $Enums.TicketType
    ticketName?: StringWithAggregatesFilter<"Event"> | string
    ticketQty?: IntWithAggregatesFilter<"Event"> | number
    ticketPrice?: IntWithAggregatesFilter<"Event"> | number
    ticketDesc?: StringNullableWithAggregatesFilter<"Event"> | string | null
    ticketTermsAndCondition?: StringNullableWithAggregatesFilter<"Event"> | string | null
    ticketStartDate?: StringWithAggregatesFilter<"Event"> | string
    ticketEndDate?: StringWithAggregatesFilter<"Event"> | string
    eventCPName?: StringWithAggregatesFilter<"Event"> | string
    eventCPEmail?: StringWithAggregatesFilter<"Event"> | string
    eventCPCountryPhoneId?: IntWithAggregatesFilter<"Event"> | number
    eventCPPhone?: StringWithAggregatesFilter<"Event"> | string
    idCardStatus?: EnumTicketIDCardWithAggregatesFilter<"Event"> | $Enums.TicketIDCard
    maxTicketPerTransaction?: IntWithAggregatesFilter<"Event"> | number
    oneEmailOneTransaction?: BoolWithAggregatesFilter<"Event"> | boolean
    ticketDataFormUnique?: BoolWithAggregatesFilter<"Event"> | boolean
    isDraft?: BoolNullableWithAggregatesFilter<"Event"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
  }

  export type EventFormatWhereInput = {
    AND?: EventFormatWhereInput | EventFormatWhereInput[]
    OR?: EventFormatWhereInput[]
    NOT?: EventFormatWhereInput | EventFormatWhereInput[]
    id?: IntFilter<"EventFormat"> | number
    formatName?: StringFilter<"EventFormat"> | string
    createdAt?: DateTimeFilter<"EventFormat"> | Date | string
    updatedAt?: DateTimeFilter<"EventFormat"> | Date | string
    deletedAt?: DateTimeNullableFilter<"EventFormat"> | Date | string | null
    event?: EventListRelationFilter
  }

  export type EventFormatOrderByWithRelationInput = {
    id?: SortOrder
    formatName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    event?: EventOrderByRelationAggregateInput
  }

  export type EventFormatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventFormatWhereInput | EventFormatWhereInput[]
    OR?: EventFormatWhereInput[]
    NOT?: EventFormatWhereInput | EventFormatWhereInput[]
    formatName?: StringFilter<"EventFormat"> | string
    createdAt?: DateTimeFilter<"EventFormat"> | Date | string
    updatedAt?: DateTimeFilter<"EventFormat"> | Date | string
    deletedAt?: DateTimeNullableFilter<"EventFormat"> | Date | string | null
    event?: EventListRelationFilter
  }, "id">

  export type EventFormatOrderByWithAggregationInput = {
    id?: SortOrder
    formatName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: EventFormatCountOrderByAggregateInput
    _avg?: EventFormatAvgOrderByAggregateInput
    _max?: EventFormatMaxOrderByAggregateInput
    _min?: EventFormatMinOrderByAggregateInput
    _sum?: EventFormatSumOrderByAggregateInput
  }

  export type EventFormatScalarWhereWithAggregatesInput = {
    AND?: EventFormatScalarWhereWithAggregatesInput | EventFormatScalarWhereWithAggregatesInput[]
    OR?: EventFormatScalarWhereWithAggregatesInput[]
    NOT?: EventFormatScalarWhereWithAggregatesInput | EventFormatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EventFormat"> | number
    formatName?: StringWithAggregatesFilter<"EventFormat"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EventFormat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventFormat"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"EventFormat"> | Date | string | null
  }

  export type EventTopicWhereInput = {
    AND?: EventTopicWhereInput | EventTopicWhereInput[]
    OR?: EventTopicWhereInput[]
    NOT?: EventTopicWhereInput | EventTopicWhereInput[]
    id?: IntFilter<"EventTopic"> | number
    topicName?: StringFilter<"EventTopic"> | string
    createdAt?: DateTimeFilter<"EventTopic"> | Date | string
    updatedAt?: DateTimeFilter<"EventTopic"> | Date | string
    deletedAt?: DateTimeNullableFilter<"EventTopic"> | Date | string | null
    event?: EventListRelationFilter
  }

  export type EventTopicOrderByWithRelationInput = {
    id?: SortOrder
    topicName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    event?: EventOrderByRelationAggregateInput
  }

  export type EventTopicWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventTopicWhereInput | EventTopicWhereInput[]
    OR?: EventTopicWhereInput[]
    NOT?: EventTopicWhereInput | EventTopicWhereInput[]
    topicName?: StringFilter<"EventTopic"> | string
    createdAt?: DateTimeFilter<"EventTopic"> | Date | string
    updatedAt?: DateTimeFilter<"EventTopic"> | Date | string
    deletedAt?: DateTimeNullableFilter<"EventTopic"> | Date | string | null
    event?: EventListRelationFilter
  }, "id">

  export type EventTopicOrderByWithAggregationInput = {
    id?: SortOrder
    topicName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: EventTopicCountOrderByAggregateInput
    _avg?: EventTopicAvgOrderByAggregateInput
    _max?: EventTopicMaxOrderByAggregateInput
    _min?: EventTopicMinOrderByAggregateInput
    _sum?: EventTopicSumOrderByAggregateInput
  }

  export type EventTopicScalarWhereWithAggregatesInput = {
    AND?: EventTopicScalarWhereWithAggregatesInput | EventTopicScalarWhereWithAggregatesInput[]
    OR?: EventTopicScalarWhereWithAggregatesInput[]
    NOT?: EventTopicScalarWhereWithAggregatesInput | EventTopicScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EventTopic"> | number
    topicName?: StringWithAggregatesFilter<"EventTopic"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EventTopic"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventTopic"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"EventTopic"> | Date | string | null
  }

  export type TicketTransactionWhereInput = {
    AND?: TicketTransactionWhereInput | TicketTransactionWhereInput[]
    OR?: TicketTransactionWhereInput[]
    NOT?: TicketTransactionWhereInput | TicketTransactionWhereInput[]
    id?: IntFilter<"TicketTransaction"> | number
    eventId?: IntFilter<"TicketTransaction"> | number
    memberId?: StringFilter<"TicketTransaction"> | string
    ticketCode?: StringFilter<"TicketTransaction"> | string
    createdAt?: DateTimeFilter<"TicketTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"TicketTransaction"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TicketTransaction"> | Date | string | null
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    ticketTransactionDetails?: TicketTransactionDetailListRelationFilter
  }

  export type TicketTransactionOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    memberId?: SortOrder
    ticketCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    event?: EventOrderByWithRelationInput
    member?: MemberOrderByWithRelationInput
    ticketTransactionDetails?: TicketTransactionDetailOrderByRelationAggregateInput
  }

  export type TicketTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ticketCode?: string
    AND?: TicketTransactionWhereInput | TicketTransactionWhereInput[]
    OR?: TicketTransactionWhereInput[]
    NOT?: TicketTransactionWhereInput | TicketTransactionWhereInput[]
    eventId?: IntFilter<"TicketTransaction"> | number
    memberId?: StringFilter<"TicketTransaction"> | string
    createdAt?: DateTimeFilter<"TicketTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"TicketTransaction"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TicketTransaction"> | Date | string | null
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    ticketTransactionDetails?: TicketTransactionDetailListRelationFilter
  }, "id" | "ticketCode">

  export type TicketTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    memberId?: SortOrder
    ticketCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: TicketTransactionCountOrderByAggregateInput
    _avg?: TicketTransactionAvgOrderByAggregateInput
    _max?: TicketTransactionMaxOrderByAggregateInput
    _min?: TicketTransactionMinOrderByAggregateInput
    _sum?: TicketTransactionSumOrderByAggregateInput
  }

  export type TicketTransactionScalarWhereWithAggregatesInput = {
    AND?: TicketTransactionScalarWhereWithAggregatesInput | TicketTransactionScalarWhereWithAggregatesInput[]
    OR?: TicketTransactionScalarWhereWithAggregatesInput[]
    NOT?: TicketTransactionScalarWhereWithAggregatesInput | TicketTransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TicketTransaction"> | number
    eventId?: IntWithAggregatesFilter<"TicketTransaction"> | number
    memberId?: StringWithAggregatesFilter<"TicketTransaction"> | string
    ticketCode?: StringWithAggregatesFilter<"TicketTransaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TicketTransaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TicketTransaction"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"TicketTransaction"> | Date | string | null
  }

  export type TicketTransactionDetailWhereInput = {
    AND?: TicketTransactionDetailWhereInput | TicketTransactionDetailWhereInput[]
    OR?: TicketTransactionDetailWhereInput[]
    NOT?: TicketTransactionDetailWhereInput | TicketTransactionDetailWhereInput[]
    id?: IntFilter<"TicketTransactionDetail"> | number
    ticketTransactionId?: IntFilter<"TicketTransactionDetail"> | number
    orderName?: StringFilter<"TicketTransactionDetail"> | string
    orderCountryPhoneId?: IntFilter<"TicketTransactionDetail"> | number
    orderEmail?: StringFilter<"TicketTransactionDetail"> | string
    orderBirthDate?: StringFilter<"TicketTransactionDetail"> | string
    orderSex?: EnumSexFilter<"TicketTransactionDetail"> | $Enums.Sex
    createdAt?: DateTimeFilter<"TicketTransactionDetail"> | Date | string
    updatedAt?: DateTimeFilter<"TicketTransactionDetail"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TicketTransactionDetail"> | Date | string | null
    ticketTransactions?: XOR<TicketTransactionScalarRelationFilter, TicketTransactionWhereInput>
    orderCountryPhone?: XOR<CountryPhoneScalarRelationFilter, CountryPhoneWhereInput>
  }

  export type TicketTransactionDetailOrderByWithRelationInput = {
    id?: SortOrder
    ticketTransactionId?: SortOrder
    orderName?: SortOrder
    orderCountryPhoneId?: SortOrder
    orderEmail?: SortOrder
    orderBirthDate?: SortOrder
    orderSex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    ticketTransactions?: TicketTransactionOrderByWithRelationInput
    orderCountryPhone?: CountryPhoneOrderByWithRelationInput
  }

  export type TicketTransactionDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketTransactionDetailWhereInput | TicketTransactionDetailWhereInput[]
    OR?: TicketTransactionDetailWhereInput[]
    NOT?: TicketTransactionDetailWhereInput | TicketTransactionDetailWhereInput[]
    ticketTransactionId?: IntFilter<"TicketTransactionDetail"> | number
    orderName?: StringFilter<"TicketTransactionDetail"> | string
    orderCountryPhoneId?: IntFilter<"TicketTransactionDetail"> | number
    orderEmail?: StringFilter<"TicketTransactionDetail"> | string
    orderBirthDate?: StringFilter<"TicketTransactionDetail"> | string
    orderSex?: EnumSexFilter<"TicketTransactionDetail"> | $Enums.Sex
    createdAt?: DateTimeFilter<"TicketTransactionDetail"> | Date | string
    updatedAt?: DateTimeFilter<"TicketTransactionDetail"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TicketTransactionDetail"> | Date | string | null
    ticketTransactions?: XOR<TicketTransactionScalarRelationFilter, TicketTransactionWhereInput>
    orderCountryPhone?: XOR<CountryPhoneScalarRelationFilter, CountryPhoneWhereInput>
  }, "id">

  export type TicketTransactionDetailOrderByWithAggregationInput = {
    id?: SortOrder
    ticketTransactionId?: SortOrder
    orderName?: SortOrder
    orderCountryPhoneId?: SortOrder
    orderEmail?: SortOrder
    orderBirthDate?: SortOrder
    orderSex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: TicketTransactionDetailCountOrderByAggregateInput
    _avg?: TicketTransactionDetailAvgOrderByAggregateInput
    _max?: TicketTransactionDetailMaxOrderByAggregateInput
    _min?: TicketTransactionDetailMinOrderByAggregateInput
    _sum?: TicketTransactionDetailSumOrderByAggregateInput
  }

  export type TicketTransactionDetailScalarWhereWithAggregatesInput = {
    AND?: TicketTransactionDetailScalarWhereWithAggregatesInput | TicketTransactionDetailScalarWhereWithAggregatesInput[]
    OR?: TicketTransactionDetailScalarWhereWithAggregatesInput[]
    NOT?: TicketTransactionDetailScalarWhereWithAggregatesInput | TicketTransactionDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TicketTransactionDetail"> | number
    ticketTransactionId?: IntWithAggregatesFilter<"TicketTransactionDetail"> | number
    orderName?: StringWithAggregatesFilter<"TicketTransactionDetail"> | string
    orderCountryPhoneId?: IntWithAggregatesFilter<"TicketTransactionDetail"> | number
    orderEmail?: StringWithAggregatesFilter<"TicketTransactionDetail"> | string
    orderBirthDate?: StringWithAggregatesFilter<"TicketTransactionDetail"> | string
    orderSex?: EnumSexWithAggregatesFilter<"TicketTransactionDetail"> | $Enums.Sex
    createdAt?: DateTimeWithAggregatesFilter<"TicketTransactionDetail"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TicketTransactionDetail"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"TicketTransactionDetail"> | Date | string | null
  }

  export type CountryPhoneCreateInput = {
    name: string
    code: string
    mobileCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    members?: MemberCreateNestedManyWithoutCountryPhoneInput
    creatorProfile?: CreatorProfileCreateNestedManyWithoutCountryPhoneInput
    events?: EventCreateNestedManyWithoutEventCPCountryPhoneInput
    ticketTransactionDetails?: TicketTransactionDetailCreateNestedManyWithoutOrderCountryPhoneInput
  }

  export type CountryPhoneUncheckedCreateInput = {
    id?: number
    name: string
    code: string
    mobileCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    members?: MemberUncheckedCreateNestedManyWithoutCountryPhoneInput
    creatorProfile?: CreatorProfileUncheckedCreateNestedManyWithoutCountryPhoneInput
    events?: EventUncheckedCreateNestedManyWithoutEventCPCountryPhoneInput
    ticketTransactionDetails?: TicketTransactionDetailUncheckedCreateNestedManyWithoutOrderCountryPhoneInput
  }

  export type CountryPhoneUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mobileCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: MemberUpdateManyWithoutCountryPhoneNestedInput
    creatorProfile?: CreatorProfileUpdateManyWithoutCountryPhoneNestedInput
    events?: EventUpdateManyWithoutEventCPCountryPhoneNestedInput
    ticketTransactionDetails?: TicketTransactionDetailUpdateManyWithoutOrderCountryPhoneNestedInput
  }

  export type CountryPhoneUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mobileCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: MemberUncheckedUpdateManyWithoutCountryPhoneNestedInput
    creatorProfile?: CreatorProfileUncheckedUpdateManyWithoutCountryPhoneNestedInput
    events?: EventUncheckedUpdateManyWithoutEventCPCountryPhoneNestedInput
    ticketTransactionDetails?: TicketTransactionDetailUncheckedUpdateManyWithoutOrderCountryPhoneNestedInput
  }

  export type CountryPhoneCreateManyInput = {
    id?: number
    name: string
    code: string
    mobileCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CountryPhoneUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mobileCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CountryPhoneUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mobileCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MemberCreateInput = {
    id?: string
    email: string
    phoneNumber: string
    firstName: string
    lastName?: string | null
    birthDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    eventPromoAccepted?: boolean
    personalDataConsentAccepted: boolean
    termsPrivacyAccepted: boolean
    sex: $Enums.Sex
    isEmailVerified?: boolean
    countryPhone: CountryPhoneCreateNestedOneWithoutMembersInput
    verificationCodes?: VerificationCodeCreateNestedManyWithoutMemberInput
    creatorProfile?: CreatorProfileCreateNestedOneWithoutMemberInput
    ticketTransactions?: TicketTransactionCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateInput = {
    id?: string
    email: string
    countryPhoneId: number
    phoneNumber: string
    firstName: string
    lastName?: string | null
    birthDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    eventPromoAccepted?: boolean
    personalDataConsentAccepted: boolean
    termsPrivacyAccepted: boolean
    sex: $Enums.Sex
    isEmailVerified?: boolean
    verificationCodes?: VerificationCodeUncheckedCreateNestedManyWithoutMemberInput
    creatorProfile?: CreatorProfileUncheckedCreateNestedOneWithoutMemberInput
    ticketTransactions?: TicketTransactionUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventPromoAccepted?: BoolFieldUpdateOperationsInput | boolean
    personalDataConsentAccepted?: BoolFieldUpdateOperationsInput | boolean
    termsPrivacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    countryPhone?: CountryPhoneUpdateOneRequiredWithoutMembersNestedInput
    verificationCodes?: VerificationCodeUpdateManyWithoutMemberNestedInput
    creatorProfile?: CreatorProfileUpdateOneWithoutMemberNestedInput
    ticketTransactions?: TicketTransactionUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    countryPhoneId?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventPromoAccepted?: BoolFieldUpdateOperationsInput | boolean
    personalDataConsentAccepted?: BoolFieldUpdateOperationsInput | boolean
    termsPrivacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationCodes?: VerificationCodeUncheckedUpdateManyWithoutMemberNestedInput
    creatorProfile?: CreatorProfileUncheckedUpdateOneWithoutMemberNestedInput
    ticketTransactions?: TicketTransactionUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateManyInput = {
    id?: string
    email: string
    countryPhoneId: number
    phoneNumber: string
    firstName: string
    lastName?: string | null
    birthDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    eventPromoAccepted?: boolean
    personalDataConsentAccepted: boolean
    termsPrivacyAccepted: boolean
    sex: $Enums.Sex
    isEmailVerified?: boolean
  }

  export type MemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventPromoAccepted?: BoolFieldUpdateOperationsInput | boolean
    personalDataConsentAccepted?: BoolFieldUpdateOperationsInput | boolean
    termsPrivacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    countryPhoneId?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventPromoAccepted?: BoolFieldUpdateOperationsInput | boolean
    personalDataConsentAccepted?: BoolFieldUpdateOperationsInput | boolean
    termsPrivacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VerificationCodeCreateInput = {
    id?: string
    code: string
    email: string
    type: $Enums.CodeType
    expiredAt: Date | string
    isUsed?: boolean
    attempts?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    member?: MemberCreateNestedOneWithoutVerificationCodesInput
  }

  export type VerificationCodeUncheckedCreateInput = {
    id?: string
    code: string
    email: string
    type: $Enums.CodeType
    expiredAt: Date | string
    isUsed?: boolean
    attempts?: number
    memberId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type VerificationCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumCodeTypeFieldUpdateOperationsInput | $Enums.CodeType
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: MemberUpdateOneWithoutVerificationCodesNestedInput
  }

  export type VerificationCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumCodeTypeFieldUpdateOperationsInput | $Enums.CodeType
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCodeCreateManyInput = {
    id?: string
    code: string
    email: string
    type: $Enums.CodeType
    expiredAt: Date | string
    isUsed?: boolean
    attempts?: number
    memberId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type VerificationCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumCodeTypeFieldUpdateOperationsInput | $Enums.CodeType
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumCodeTypeFieldUpdateOperationsInput | $Enums.CodeType
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    memberId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CreatorProfileCreateInput = {
    id?: string
    bannerImgUrl?: string | null
    logoImgUrl?: string | null
    profileLinkUrl: string
    creatorPhoneNumber?: string | null
    address?: string | null
    aboutUsInfo?: string | null
    xUserName?: string | null
    igUserName?: string | null
    fbProfileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    member: MemberCreateNestedOneWithoutCreatorProfileInput
    countryPhone?: CountryPhoneCreateNestedOneWithoutCreatorProfileInput
    event?: EventCreateNestedManyWithoutCreatorInput
  }

  export type CreatorProfileUncheckedCreateInput = {
    id?: string
    memberId: string
    bannerImgUrl?: string | null
    logoImgUrl?: string | null
    profileLinkUrl: string
    countryPhoneId?: number | null
    creatorPhoneNumber?: string | null
    address?: string | null
    aboutUsInfo?: string | null
    xUserName?: string | null
    igUserName?: string | null
    fbProfileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    event?: EventUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type CreatorProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileLinkUrl?: StringFieldUpdateOperationsInput | string
    creatorPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    aboutUsInfo?: NullableStringFieldUpdateOperationsInput | string | null
    xUserName?: NullableStringFieldUpdateOperationsInput | string | null
    igUserName?: NullableStringFieldUpdateOperationsInput | string | null
    fbProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: MemberUpdateOneRequiredWithoutCreatorProfileNestedInput
    countryPhone?: CountryPhoneUpdateOneWithoutCreatorProfileNestedInput
    event?: EventUpdateManyWithoutCreatorNestedInput
  }

  export type CreatorProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileLinkUrl?: StringFieldUpdateOperationsInput | string
    countryPhoneId?: NullableIntFieldUpdateOperationsInput | number | null
    creatorPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    aboutUsInfo?: NullableStringFieldUpdateOperationsInput | string | null
    xUserName?: NullableStringFieldUpdateOperationsInput | string | null
    igUserName?: NullableStringFieldUpdateOperationsInput | string | null
    fbProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type CreatorProfileCreateManyInput = {
    id?: string
    memberId: string
    bannerImgUrl?: string | null
    logoImgUrl?: string | null
    profileLinkUrl: string
    countryPhoneId?: number | null
    creatorPhoneNumber?: string | null
    address?: string | null
    aboutUsInfo?: string | null
    xUserName?: string | null
    igUserName?: string | null
    fbProfileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CreatorProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileLinkUrl?: StringFieldUpdateOperationsInput | string
    creatorPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    aboutUsInfo?: NullableStringFieldUpdateOperationsInput | string | null
    xUserName?: NullableStringFieldUpdateOperationsInput | string | null
    igUserName?: NullableStringFieldUpdateOperationsInput | string | null
    fbProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CreatorProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileLinkUrl?: StringFieldUpdateOperationsInput | string
    countryPhoneId?: NullableIntFieldUpdateOperationsInput | number | null
    creatorPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    aboutUsInfo?: NullableStringFieldUpdateOperationsInput | string | null
    xUserName?: NullableStringFieldUpdateOperationsInput | string | null
    igUserName?: NullableStringFieldUpdateOperationsInput | string | null
    fbProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventCreateInput = {
    eventName: string
    eventTag?: string | null
    isPrivateEvent?: boolean
    organizerName: string
    organizerLogoImgUrl?: string | null
    bannerImgUrl?: string | null
    eventStartDate: string
    eventEndDate: string
    eventStartTime: string
    eventEndTime: string
    eventLocation: string
    eventDesc?: string | null
    ticketType: $Enums.TicketType
    ticketName: string
    ticketQty: number
    ticketPrice?: number
    ticketDesc?: string | null
    ticketTermsAndCondition?: string | null
    ticketStartDate: string
    ticketEndDate: string
    eventCPName: string
    eventCPEmail: string
    eventCPPhone: string
    idCardStatus?: $Enums.TicketIDCard
    maxTicketPerTransaction: number
    oneEmailOneTransaction?: boolean
    ticketDataFormUnique?: boolean
    isDraft?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    creator: CreatorProfileCreateNestedOneWithoutEventInput
    eventFormat: EventFormatCreateNestedOneWithoutEventInput
    eventTopic: EventTopicCreateNestedOneWithoutEventInput
    eventCPCountryPhone: CountryPhoneCreateNestedOneWithoutEventsInput
    ticketTransactions?: TicketTransactionCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    creatorId: string
    eventName: string
    eventFormatId: number
    eventTopicId: number
    eventTag?: string | null
    isPrivateEvent?: boolean
    organizerName: string
    organizerLogoImgUrl?: string | null
    bannerImgUrl?: string | null
    eventStartDate: string
    eventEndDate: string
    eventStartTime: string
    eventEndTime: string
    eventLocation: string
    eventDesc?: string | null
    ticketType: $Enums.TicketType
    ticketName: string
    ticketQty: number
    ticketPrice?: number
    ticketDesc?: string | null
    ticketTermsAndCondition?: string | null
    ticketStartDate: string
    ticketEndDate: string
    eventCPName: string
    eventCPEmail: string
    eventCPCountryPhoneId: number
    eventCPPhone: string
    idCardStatus?: $Enums.TicketIDCard
    maxTicketPerTransaction: number
    oneEmailOneTransaction?: boolean
    ticketDataFormUnique?: boolean
    isDraft?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ticketTransactions?: TicketTransactionUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    eventName?: StringFieldUpdateOperationsInput | string
    eventTag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivateEvent?: BoolFieldUpdateOperationsInput | boolean
    organizerName?: StringFieldUpdateOperationsInput | string
    organizerLogoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: StringFieldUpdateOperationsInput | string
    eventEndDate?: StringFieldUpdateOperationsInput | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    eventDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketName?: StringFieldUpdateOperationsInput | string
    ticketQty?: IntFieldUpdateOperationsInput | number
    ticketPrice?: IntFieldUpdateOperationsInput | number
    ticketDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketTermsAndCondition?: NullableStringFieldUpdateOperationsInput | string | null
    ticketStartDate?: StringFieldUpdateOperationsInput | string
    ticketEndDate?: StringFieldUpdateOperationsInput | string
    eventCPName?: StringFieldUpdateOperationsInput | string
    eventCPEmail?: StringFieldUpdateOperationsInput | string
    eventCPPhone?: StringFieldUpdateOperationsInput | string
    idCardStatus?: EnumTicketIDCardFieldUpdateOperationsInput | $Enums.TicketIDCard
    maxTicketPerTransaction?: IntFieldUpdateOperationsInput | number
    oneEmailOneTransaction?: BoolFieldUpdateOperationsInput | boolean
    ticketDataFormUnique?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: CreatorProfileUpdateOneRequiredWithoutEventNestedInput
    eventFormat?: EventFormatUpdateOneRequiredWithoutEventNestedInput
    eventTopic?: EventTopicUpdateOneRequiredWithoutEventNestedInput
    eventCPCountryPhone?: CountryPhoneUpdateOneRequiredWithoutEventsNestedInput
    ticketTransactions?: TicketTransactionUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    eventFormatId?: IntFieldUpdateOperationsInput | number
    eventTopicId?: IntFieldUpdateOperationsInput | number
    eventTag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivateEvent?: BoolFieldUpdateOperationsInput | boolean
    organizerName?: StringFieldUpdateOperationsInput | string
    organizerLogoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: StringFieldUpdateOperationsInput | string
    eventEndDate?: StringFieldUpdateOperationsInput | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    eventDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketName?: StringFieldUpdateOperationsInput | string
    ticketQty?: IntFieldUpdateOperationsInput | number
    ticketPrice?: IntFieldUpdateOperationsInput | number
    ticketDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketTermsAndCondition?: NullableStringFieldUpdateOperationsInput | string | null
    ticketStartDate?: StringFieldUpdateOperationsInput | string
    ticketEndDate?: StringFieldUpdateOperationsInput | string
    eventCPName?: StringFieldUpdateOperationsInput | string
    eventCPEmail?: StringFieldUpdateOperationsInput | string
    eventCPCountryPhoneId?: IntFieldUpdateOperationsInput | number
    eventCPPhone?: StringFieldUpdateOperationsInput | string
    idCardStatus?: EnumTicketIDCardFieldUpdateOperationsInput | $Enums.TicketIDCard
    maxTicketPerTransaction?: IntFieldUpdateOperationsInput | number
    oneEmailOneTransaction?: BoolFieldUpdateOperationsInput | boolean
    ticketDataFormUnique?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticketTransactions?: TicketTransactionUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: number
    creatorId: string
    eventName: string
    eventFormatId: number
    eventTopicId: number
    eventTag?: string | null
    isPrivateEvent?: boolean
    organizerName: string
    organizerLogoImgUrl?: string | null
    bannerImgUrl?: string | null
    eventStartDate: string
    eventEndDate: string
    eventStartTime: string
    eventEndTime: string
    eventLocation: string
    eventDesc?: string | null
    ticketType: $Enums.TicketType
    ticketName: string
    ticketQty: number
    ticketPrice?: number
    ticketDesc?: string | null
    ticketTermsAndCondition?: string | null
    ticketStartDate: string
    ticketEndDate: string
    eventCPName: string
    eventCPEmail: string
    eventCPCountryPhoneId: number
    eventCPPhone: string
    idCardStatus?: $Enums.TicketIDCard
    maxTicketPerTransaction: number
    oneEmailOneTransaction?: boolean
    ticketDataFormUnique?: boolean
    isDraft?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EventUpdateManyMutationInput = {
    eventName?: StringFieldUpdateOperationsInput | string
    eventTag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivateEvent?: BoolFieldUpdateOperationsInput | boolean
    organizerName?: StringFieldUpdateOperationsInput | string
    organizerLogoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: StringFieldUpdateOperationsInput | string
    eventEndDate?: StringFieldUpdateOperationsInput | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    eventDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketName?: StringFieldUpdateOperationsInput | string
    ticketQty?: IntFieldUpdateOperationsInput | number
    ticketPrice?: IntFieldUpdateOperationsInput | number
    ticketDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketTermsAndCondition?: NullableStringFieldUpdateOperationsInput | string | null
    ticketStartDate?: StringFieldUpdateOperationsInput | string
    ticketEndDate?: StringFieldUpdateOperationsInput | string
    eventCPName?: StringFieldUpdateOperationsInput | string
    eventCPEmail?: StringFieldUpdateOperationsInput | string
    eventCPPhone?: StringFieldUpdateOperationsInput | string
    idCardStatus?: EnumTicketIDCardFieldUpdateOperationsInput | $Enums.TicketIDCard
    maxTicketPerTransaction?: IntFieldUpdateOperationsInput | number
    oneEmailOneTransaction?: BoolFieldUpdateOperationsInput | boolean
    ticketDataFormUnique?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    eventFormatId?: IntFieldUpdateOperationsInput | number
    eventTopicId?: IntFieldUpdateOperationsInput | number
    eventTag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivateEvent?: BoolFieldUpdateOperationsInput | boolean
    organizerName?: StringFieldUpdateOperationsInput | string
    organizerLogoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: StringFieldUpdateOperationsInput | string
    eventEndDate?: StringFieldUpdateOperationsInput | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    eventDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketName?: StringFieldUpdateOperationsInput | string
    ticketQty?: IntFieldUpdateOperationsInput | number
    ticketPrice?: IntFieldUpdateOperationsInput | number
    ticketDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketTermsAndCondition?: NullableStringFieldUpdateOperationsInput | string | null
    ticketStartDate?: StringFieldUpdateOperationsInput | string
    ticketEndDate?: StringFieldUpdateOperationsInput | string
    eventCPName?: StringFieldUpdateOperationsInput | string
    eventCPEmail?: StringFieldUpdateOperationsInput | string
    eventCPCountryPhoneId?: IntFieldUpdateOperationsInput | number
    eventCPPhone?: StringFieldUpdateOperationsInput | string
    idCardStatus?: EnumTicketIDCardFieldUpdateOperationsInput | $Enums.TicketIDCard
    maxTicketPerTransaction?: IntFieldUpdateOperationsInput | number
    oneEmailOneTransaction?: BoolFieldUpdateOperationsInput | boolean
    ticketDataFormUnique?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventFormatCreateInput = {
    formatName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    event?: EventCreateNestedManyWithoutEventFormatInput
  }

  export type EventFormatUncheckedCreateInput = {
    id?: number
    formatName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    event?: EventUncheckedCreateNestedManyWithoutEventFormatInput
  }

  export type EventFormatUpdateInput = {
    formatName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUpdateManyWithoutEventFormatNestedInput
  }

  export type EventFormatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    formatName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUncheckedUpdateManyWithoutEventFormatNestedInput
  }

  export type EventFormatCreateManyInput = {
    id?: number
    formatName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EventFormatUpdateManyMutationInput = {
    formatName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventFormatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    formatName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventTopicCreateInput = {
    topicName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    event?: EventCreateNestedManyWithoutEventTopicInput
  }

  export type EventTopicUncheckedCreateInput = {
    id?: number
    topicName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    event?: EventUncheckedCreateNestedManyWithoutEventTopicInput
  }

  export type EventTopicUpdateInput = {
    topicName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUpdateManyWithoutEventTopicNestedInput
  }

  export type EventTopicUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    topicName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUncheckedUpdateManyWithoutEventTopicNestedInput
  }

  export type EventTopicCreateManyInput = {
    id?: number
    topicName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EventTopicUpdateManyMutationInput = {
    topicName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventTopicUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    topicName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketTransactionCreateInput = {
    ticketCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    event: EventCreateNestedOneWithoutTicketTransactionsInput
    member: MemberCreateNestedOneWithoutTicketTransactionsInput
    ticketTransactionDetails?: TicketTransactionDetailCreateNestedManyWithoutTicketTransactionsInput
  }

  export type TicketTransactionUncheckedCreateInput = {
    id?: number
    eventId: number
    memberId: string
    ticketCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ticketTransactionDetails?: TicketTransactionDetailUncheckedCreateNestedManyWithoutTicketTransactionsInput
  }

  export type TicketTransactionUpdateInput = {
    ticketCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUpdateOneRequiredWithoutTicketTransactionsNestedInput
    member?: MemberUpdateOneRequiredWithoutTicketTransactionsNestedInput
    ticketTransactionDetails?: TicketTransactionDetailUpdateManyWithoutTicketTransactionsNestedInput
  }

  export type TicketTransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    memberId?: StringFieldUpdateOperationsInput | string
    ticketCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticketTransactionDetails?: TicketTransactionDetailUncheckedUpdateManyWithoutTicketTransactionsNestedInput
  }

  export type TicketTransactionCreateManyInput = {
    id?: number
    eventId: number
    memberId: string
    ticketCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TicketTransactionUpdateManyMutationInput = {
    ticketCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketTransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    memberId?: StringFieldUpdateOperationsInput | string
    ticketCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketTransactionDetailCreateInput = {
    orderName: string
    orderEmail: string
    orderBirthDate: string
    orderSex: $Enums.Sex
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ticketTransactions: TicketTransactionCreateNestedOneWithoutTicketTransactionDetailsInput
    orderCountryPhone: CountryPhoneCreateNestedOneWithoutTicketTransactionDetailsInput
  }

  export type TicketTransactionDetailUncheckedCreateInput = {
    id?: number
    ticketTransactionId: number
    orderName: string
    orderCountryPhoneId: number
    orderEmail: string
    orderBirthDate: string
    orderSex: $Enums.Sex
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TicketTransactionDetailUpdateInput = {
    orderName?: StringFieldUpdateOperationsInput | string
    orderEmail?: StringFieldUpdateOperationsInput | string
    orderBirthDate?: StringFieldUpdateOperationsInput | string
    orderSex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticketTransactions?: TicketTransactionUpdateOneRequiredWithoutTicketTransactionDetailsNestedInput
    orderCountryPhone?: CountryPhoneUpdateOneRequiredWithoutTicketTransactionDetailsNestedInput
  }

  export type TicketTransactionDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketTransactionId?: IntFieldUpdateOperationsInput | number
    orderName?: StringFieldUpdateOperationsInput | string
    orderCountryPhoneId?: IntFieldUpdateOperationsInput | number
    orderEmail?: StringFieldUpdateOperationsInput | string
    orderBirthDate?: StringFieldUpdateOperationsInput | string
    orderSex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketTransactionDetailCreateManyInput = {
    id?: number
    ticketTransactionId: number
    orderName: string
    orderCountryPhoneId: number
    orderEmail: string
    orderBirthDate: string
    orderSex: $Enums.Sex
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TicketTransactionDetailUpdateManyMutationInput = {
    orderName?: StringFieldUpdateOperationsInput | string
    orderEmail?: StringFieldUpdateOperationsInput | string
    orderBirthDate?: StringFieldUpdateOperationsInput | string
    orderSex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketTransactionDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketTransactionId?: IntFieldUpdateOperationsInput | number
    orderName?: StringFieldUpdateOperationsInput | string
    orderCountryPhoneId?: IntFieldUpdateOperationsInput | number
    orderEmail?: StringFieldUpdateOperationsInput | string
    orderBirthDate?: StringFieldUpdateOperationsInput | string
    orderSex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MemberListRelationFilter = {
    every?: MemberWhereInput
    some?: MemberWhereInput
    none?: MemberWhereInput
  }

  export type CreatorProfileListRelationFilter = {
    every?: CreatorProfileWhereInput
    some?: CreatorProfileWhereInput
    none?: CreatorProfileWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type TicketTransactionDetailListRelationFilter = {
    every?: TicketTransactionDetailWhereInput
    some?: TicketTransactionDetailWhereInput
    none?: TicketTransactionDetailWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreatorProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketTransactionDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryPhoneCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    mobileCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CountryPhoneAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountryPhoneMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    mobileCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CountryPhoneMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    mobileCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CountryPhoneSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumSexFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    not?: NestedEnumSexFilter<$PrismaModel> | $Enums.Sex
  }

  export type CountryPhoneScalarRelationFilter = {
    is?: CountryPhoneWhereInput
    isNot?: CountryPhoneWhereInput
  }

  export type VerificationCodeListRelationFilter = {
    every?: VerificationCodeWhereInput
    some?: VerificationCodeWhereInput
    none?: VerificationCodeWhereInput
  }

  export type CreatorProfileNullableScalarRelationFilter = {
    is?: CreatorProfileWhereInput | null
    isNot?: CreatorProfileWhereInput | null
  }

  export type TicketTransactionListRelationFilter = {
    every?: TicketTransactionWhereInput
    some?: TicketTransactionWhereInput
    none?: TicketTransactionWhereInput
  }

  export type VerificationCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    countryPhoneId?: SortOrder
    phoneNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    eventPromoAccepted?: SortOrder
    personalDataConsentAccepted?: SortOrder
    termsPrivacyAccepted?: SortOrder
    sex?: SortOrder
    isEmailVerified?: SortOrder
  }

  export type MemberAvgOrderByAggregateInput = {
    countryPhoneId?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    countryPhoneId?: SortOrder
    phoneNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    eventPromoAccepted?: SortOrder
    personalDataConsentAccepted?: SortOrder
    termsPrivacyAccepted?: SortOrder
    sex?: SortOrder
    isEmailVerified?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    countryPhoneId?: SortOrder
    phoneNumber?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    birthDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    eventPromoAccepted?: SortOrder
    personalDataConsentAccepted?: SortOrder
    termsPrivacyAccepted?: SortOrder
    sex?: SortOrder
    isEmailVerified?: SortOrder
  }

  export type MemberSumOrderByAggregateInput = {
    countryPhoneId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumSexWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    not?: NestedEnumSexWithAggregatesFilter<$PrismaModel> | $Enums.Sex
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexFilter<$PrismaModel>
    _max?: NestedEnumSexFilter<$PrismaModel>
  }

  export type EnumCodeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CodeType | EnumCodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CodeType[] | ListEnumCodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CodeType[] | ListEnumCodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCodeTypeFilter<$PrismaModel> | $Enums.CodeType
  }

  export type MemberNullableScalarRelationFilter = {
    is?: MemberWhereInput | null
    isNot?: MemberWhereInput | null
  }

  export type VerificationCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    email?: SortOrder
    type?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    attempts?: SortOrder
    memberId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type VerificationCodeAvgOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type VerificationCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    email?: SortOrder
    type?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    attempts?: SortOrder
    memberId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type VerificationCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    email?: SortOrder
    type?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    attempts?: SortOrder
    memberId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type VerificationCodeSumOrderByAggregateInput = {
    attempts?: SortOrder
  }

  export type EnumCodeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CodeType | EnumCodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CodeType[] | ListEnumCodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CodeType[] | ListEnumCodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCodeTypeWithAggregatesFilter<$PrismaModel> | $Enums.CodeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCodeTypeFilter<$PrismaModel>
    _max?: NestedEnumCodeTypeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MemberScalarRelationFilter = {
    is?: MemberWhereInput
    isNot?: MemberWhereInput
  }

  export type CountryPhoneNullableScalarRelationFilter = {
    is?: CountryPhoneWhereInput | null
    isNot?: CountryPhoneWhereInput | null
  }

  export type CreatorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    bannerImgUrl?: SortOrder
    logoImgUrl?: SortOrder
    profileLinkUrl?: SortOrder
    countryPhoneId?: SortOrder
    creatorPhoneNumber?: SortOrder
    address?: SortOrder
    aboutUsInfo?: SortOrder
    xUserName?: SortOrder
    igUserName?: SortOrder
    fbProfileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CreatorProfileAvgOrderByAggregateInput = {
    countryPhoneId?: SortOrder
  }

  export type CreatorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    bannerImgUrl?: SortOrder
    logoImgUrl?: SortOrder
    profileLinkUrl?: SortOrder
    countryPhoneId?: SortOrder
    creatorPhoneNumber?: SortOrder
    address?: SortOrder
    aboutUsInfo?: SortOrder
    xUserName?: SortOrder
    igUserName?: SortOrder
    fbProfileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CreatorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    bannerImgUrl?: SortOrder
    logoImgUrl?: SortOrder
    profileLinkUrl?: SortOrder
    countryPhoneId?: SortOrder
    creatorPhoneNumber?: SortOrder
    address?: SortOrder
    aboutUsInfo?: SortOrder
    xUserName?: SortOrder
    igUserName?: SortOrder
    fbProfileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type CreatorProfileSumOrderByAggregateInput = {
    countryPhoneId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumTicketTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketType | EnumTicketTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TicketType[] | ListEnumTicketTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketType[] | ListEnumTicketTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketTypeFilter<$PrismaModel> | $Enums.TicketType
  }

  export type EnumTicketIDCardFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketIDCard | EnumTicketIDCardFieldRefInput<$PrismaModel>
    in?: $Enums.TicketIDCard[] | ListEnumTicketIDCardFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketIDCard[] | ListEnumTicketIDCardFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketIDCardFilter<$PrismaModel> | $Enums.TicketIDCard
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type CreatorProfileScalarRelationFilter = {
    is?: CreatorProfileWhereInput
    isNot?: CreatorProfileWhereInput
  }

  export type EventFormatScalarRelationFilter = {
    is?: EventFormatWhereInput
    isNot?: EventFormatWhereInput
  }

  export type EventTopicScalarRelationFilter = {
    is?: EventTopicWhereInput
    isNot?: EventTopicWhereInput
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    eventName?: SortOrder
    eventFormatId?: SortOrder
    eventTopicId?: SortOrder
    eventTag?: SortOrder
    isPrivateEvent?: SortOrder
    organizerName?: SortOrder
    organizerLogoImgUrl?: SortOrder
    bannerImgUrl?: SortOrder
    eventStartDate?: SortOrder
    eventEndDate?: SortOrder
    eventStartTime?: SortOrder
    eventEndTime?: SortOrder
    eventLocation?: SortOrder
    eventDesc?: SortOrder
    ticketType?: SortOrder
    ticketName?: SortOrder
    ticketQty?: SortOrder
    ticketPrice?: SortOrder
    ticketDesc?: SortOrder
    ticketTermsAndCondition?: SortOrder
    ticketStartDate?: SortOrder
    ticketEndDate?: SortOrder
    eventCPName?: SortOrder
    eventCPEmail?: SortOrder
    eventCPCountryPhoneId?: SortOrder
    eventCPPhone?: SortOrder
    idCardStatus?: SortOrder
    maxTicketPerTransaction?: SortOrder
    oneEmailOneTransaction?: SortOrder
    ticketDataFormUnique?: SortOrder
    isDraft?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    eventFormatId?: SortOrder
    eventTopicId?: SortOrder
    ticketQty?: SortOrder
    ticketPrice?: SortOrder
    eventCPCountryPhoneId?: SortOrder
    maxTicketPerTransaction?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    eventName?: SortOrder
    eventFormatId?: SortOrder
    eventTopicId?: SortOrder
    eventTag?: SortOrder
    isPrivateEvent?: SortOrder
    organizerName?: SortOrder
    organizerLogoImgUrl?: SortOrder
    bannerImgUrl?: SortOrder
    eventStartDate?: SortOrder
    eventEndDate?: SortOrder
    eventStartTime?: SortOrder
    eventEndTime?: SortOrder
    eventLocation?: SortOrder
    eventDesc?: SortOrder
    ticketType?: SortOrder
    ticketName?: SortOrder
    ticketQty?: SortOrder
    ticketPrice?: SortOrder
    ticketDesc?: SortOrder
    ticketTermsAndCondition?: SortOrder
    ticketStartDate?: SortOrder
    ticketEndDate?: SortOrder
    eventCPName?: SortOrder
    eventCPEmail?: SortOrder
    eventCPCountryPhoneId?: SortOrder
    eventCPPhone?: SortOrder
    idCardStatus?: SortOrder
    maxTicketPerTransaction?: SortOrder
    oneEmailOneTransaction?: SortOrder
    ticketDataFormUnique?: SortOrder
    isDraft?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
    eventName?: SortOrder
    eventFormatId?: SortOrder
    eventTopicId?: SortOrder
    eventTag?: SortOrder
    isPrivateEvent?: SortOrder
    organizerName?: SortOrder
    organizerLogoImgUrl?: SortOrder
    bannerImgUrl?: SortOrder
    eventStartDate?: SortOrder
    eventEndDate?: SortOrder
    eventStartTime?: SortOrder
    eventEndTime?: SortOrder
    eventLocation?: SortOrder
    eventDesc?: SortOrder
    ticketType?: SortOrder
    ticketName?: SortOrder
    ticketQty?: SortOrder
    ticketPrice?: SortOrder
    ticketDesc?: SortOrder
    ticketTermsAndCondition?: SortOrder
    ticketStartDate?: SortOrder
    ticketEndDate?: SortOrder
    eventCPName?: SortOrder
    eventCPEmail?: SortOrder
    eventCPCountryPhoneId?: SortOrder
    eventCPPhone?: SortOrder
    idCardStatus?: SortOrder
    maxTicketPerTransaction?: SortOrder
    oneEmailOneTransaction?: SortOrder
    ticketDataFormUnique?: SortOrder
    isDraft?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    eventFormatId?: SortOrder
    eventTopicId?: SortOrder
    ticketQty?: SortOrder
    ticketPrice?: SortOrder
    eventCPCountryPhoneId?: SortOrder
    maxTicketPerTransaction?: SortOrder
  }

  export type EnumTicketTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketType | EnumTicketTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TicketType[] | ListEnumTicketTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketType[] | ListEnumTicketTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketTypeWithAggregatesFilter<$PrismaModel> | $Enums.TicketType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketTypeFilter<$PrismaModel>
    _max?: NestedEnumTicketTypeFilter<$PrismaModel>
  }

  export type EnumTicketIDCardWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketIDCard | EnumTicketIDCardFieldRefInput<$PrismaModel>
    in?: $Enums.TicketIDCard[] | ListEnumTicketIDCardFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketIDCard[] | ListEnumTicketIDCardFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketIDCardWithAggregatesFilter<$PrismaModel> | $Enums.TicketIDCard
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketIDCardFilter<$PrismaModel>
    _max?: NestedEnumTicketIDCardFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EventFormatCountOrderByAggregateInput = {
    id?: SortOrder
    formatName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EventFormatAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventFormatMaxOrderByAggregateInput = {
    id?: SortOrder
    formatName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EventFormatMinOrderByAggregateInput = {
    id?: SortOrder
    formatName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EventFormatSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventTopicCountOrderByAggregateInput = {
    id?: SortOrder
    topicName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EventTopicAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventTopicMaxOrderByAggregateInput = {
    id?: SortOrder
    topicName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EventTopicMinOrderByAggregateInput = {
    id?: SortOrder
    topicName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type EventTopicSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type TicketTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    memberId?: SortOrder
    ticketCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TicketTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
  }

  export type TicketTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    memberId?: SortOrder
    ticketCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TicketTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    memberId?: SortOrder
    ticketCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TicketTransactionSumOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
  }

  export type TicketTransactionScalarRelationFilter = {
    is?: TicketTransactionWhereInput
    isNot?: TicketTransactionWhereInput
  }

  export type TicketTransactionDetailCountOrderByAggregateInput = {
    id?: SortOrder
    ticketTransactionId?: SortOrder
    orderName?: SortOrder
    orderCountryPhoneId?: SortOrder
    orderEmail?: SortOrder
    orderBirthDate?: SortOrder
    orderSex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TicketTransactionDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    ticketTransactionId?: SortOrder
    orderCountryPhoneId?: SortOrder
  }

  export type TicketTransactionDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketTransactionId?: SortOrder
    orderName?: SortOrder
    orderCountryPhoneId?: SortOrder
    orderEmail?: SortOrder
    orderBirthDate?: SortOrder
    orderSex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TicketTransactionDetailMinOrderByAggregateInput = {
    id?: SortOrder
    ticketTransactionId?: SortOrder
    orderName?: SortOrder
    orderCountryPhoneId?: SortOrder
    orderEmail?: SortOrder
    orderBirthDate?: SortOrder
    orderSex?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type TicketTransactionDetailSumOrderByAggregateInput = {
    id?: SortOrder
    ticketTransactionId?: SortOrder
    orderCountryPhoneId?: SortOrder
  }

  export type MemberCreateNestedManyWithoutCountryPhoneInput = {
    create?: XOR<MemberCreateWithoutCountryPhoneInput, MemberUncheckedCreateWithoutCountryPhoneInput> | MemberCreateWithoutCountryPhoneInput[] | MemberUncheckedCreateWithoutCountryPhoneInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutCountryPhoneInput | MemberCreateOrConnectWithoutCountryPhoneInput[]
    createMany?: MemberCreateManyCountryPhoneInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type CreatorProfileCreateNestedManyWithoutCountryPhoneInput = {
    create?: XOR<CreatorProfileCreateWithoutCountryPhoneInput, CreatorProfileUncheckedCreateWithoutCountryPhoneInput> | CreatorProfileCreateWithoutCountryPhoneInput[] | CreatorProfileUncheckedCreateWithoutCountryPhoneInput[]
    connectOrCreate?: CreatorProfileCreateOrConnectWithoutCountryPhoneInput | CreatorProfileCreateOrConnectWithoutCountryPhoneInput[]
    createMany?: CreatorProfileCreateManyCountryPhoneInputEnvelope
    connect?: CreatorProfileWhereUniqueInput | CreatorProfileWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutEventCPCountryPhoneInput = {
    create?: XOR<EventCreateWithoutEventCPCountryPhoneInput, EventUncheckedCreateWithoutEventCPCountryPhoneInput> | EventCreateWithoutEventCPCountryPhoneInput[] | EventUncheckedCreateWithoutEventCPCountryPhoneInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEventCPCountryPhoneInput | EventCreateOrConnectWithoutEventCPCountryPhoneInput[]
    createMany?: EventCreateManyEventCPCountryPhoneInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type TicketTransactionDetailCreateNestedManyWithoutOrderCountryPhoneInput = {
    create?: XOR<TicketTransactionDetailCreateWithoutOrderCountryPhoneInput, TicketTransactionDetailUncheckedCreateWithoutOrderCountryPhoneInput> | TicketTransactionDetailCreateWithoutOrderCountryPhoneInput[] | TicketTransactionDetailUncheckedCreateWithoutOrderCountryPhoneInput[]
    connectOrCreate?: TicketTransactionDetailCreateOrConnectWithoutOrderCountryPhoneInput | TicketTransactionDetailCreateOrConnectWithoutOrderCountryPhoneInput[]
    createMany?: TicketTransactionDetailCreateManyOrderCountryPhoneInputEnvelope
    connect?: TicketTransactionDetailWhereUniqueInput | TicketTransactionDetailWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutCountryPhoneInput = {
    create?: XOR<MemberCreateWithoutCountryPhoneInput, MemberUncheckedCreateWithoutCountryPhoneInput> | MemberCreateWithoutCountryPhoneInput[] | MemberUncheckedCreateWithoutCountryPhoneInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutCountryPhoneInput | MemberCreateOrConnectWithoutCountryPhoneInput[]
    createMany?: MemberCreateManyCountryPhoneInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type CreatorProfileUncheckedCreateNestedManyWithoutCountryPhoneInput = {
    create?: XOR<CreatorProfileCreateWithoutCountryPhoneInput, CreatorProfileUncheckedCreateWithoutCountryPhoneInput> | CreatorProfileCreateWithoutCountryPhoneInput[] | CreatorProfileUncheckedCreateWithoutCountryPhoneInput[]
    connectOrCreate?: CreatorProfileCreateOrConnectWithoutCountryPhoneInput | CreatorProfileCreateOrConnectWithoutCountryPhoneInput[]
    createMany?: CreatorProfileCreateManyCountryPhoneInputEnvelope
    connect?: CreatorProfileWhereUniqueInput | CreatorProfileWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutEventCPCountryPhoneInput = {
    create?: XOR<EventCreateWithoutEventCPCountryPhoneInput, EventUncheckedCreateWithoutEventCPCountryPhoneInput> | EventCreateWithoutEventCPCountryPhoneInput[] | EventUncheckedCreateWithoutEventCPCountryPhoneInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEventCPCountryPhoneInput | EventCreateOrConnectWithoutEventCPCountryPhoneInput[]
    createMany?: EventCreateManyEventCPCountryPhoneInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type TicketTransactionDetailUncheckedCreateNestedManyWithoutOrderCountryPhoneInput = {
    create?: XOR<TicketTransactionDetailCreateWithoutOrderCountryPhoneInput, TicketTransactionDetailUncheckedCreateWithoutOrderCountryPhoneInput> | TicketTransactionDetailCreateWithoutOrderCountryPhoneInput[] | TicketTransactionDetailUncheckedCreateWithoutOrderCountryPhoneInput[]
    connectOrCreate?: TicketTransactionDetailCreateOrConnectWithoutOrderCountryPhoneInput | TicketTransactionDetailCreateOrConnectWithoutOrderCountryPhoneInput[]
    createMany?: TicketTransactionDetailCreateManyOrderCountryPhoneInputEnvelope
    connect?: TicketTransactionDetailWhereUniqueInput | TicketTransactionDetailWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MemberUpdateManyWithoutCountryPhoneNestedInput = {
    create?: XOR<MemberCreateWithoutCountryPhoneInput, MemberUncheckedCreateWithoutCountryPhoneInput> | MemberCreateWithoutCountryPhoneInput[] | MemberUncheckedCreateWithoutCountryPhoneInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutCountryPhoneInput | MemberCreateOrConnectWithoutCountryPhoneInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutCountryPhoneInput | MemberUpsertWithWhereUniqueWithoutCountryPhoneInput[]
    createMany?: MemberCreateManyCountryPhoneInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutCountryPhoneInput | MemberUpdateWithWhereUniqueWithoutCountryPhoneInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutCountryPhoneInput | MemberUpdateManyWithWhereWithoutCountryPhoneInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type CreatorProfileUpdateManyWithoutCountryPhoneNestedInput = {
    create?: XOR<CreatorProfileCreateWithoutCountryPhoneInput, CreatorProfileUncheckedCreateWithoutCountryPhoneInput> | CreatorProfileCreateWithoutCountryPhoneInput[] | CreatorProfileUncheckedCreateWithoutCountryPhoneInput[]
    connectOrCreate?: CreatorProfileCreateOrConnectWithoutCountryPhoneInput | CreatorProfileCreateOrConnectWithoutCountryPhoneInput[]
    upsert?: CreatorProfileUpsertWithWhereUniqueWithoutCountryPhoneInput | CreatorProfileUpsertWithWhereUniqueWithoutCountryPhoneInput[]
    createMany?: CreatorProfileCreateManyCountryPhoneInputEnvelope
    set?: CreatorProfileWhereUniqueInput | CreatorProfileWhereUniqueInput[]
    disconnect?: CreatorProfileWhereUniqueInput | CreatorProfileWhereUniqueInput[]
    delete?: CreatorProfileWhereUniqueInput | CreatorProfileWhereUniqueInput[]
    connect?: CreatorProfileWhereUniqueInput | CreatorProfileWhereUniqueInput[]
    update?: CreatorProfileUpdateWithWhereUniqueWithoutCountryPhoneInput | CreatorProfileUpdateWithWhereUniqueWithoutCountryPhoneInput[]
    updateMany?: CreatorProfileUpdateManyWithWhereWithoutCountryPhoneInput | CreatorProfileUpdateManyWithWhereWithoutCountryPhoneInput[]
    deleteMany?: CreatorProfileScalarWhereInput | CreatorProfileScalarWhereInput[]
  }

  export type EventUpdateManyWithoutEventCPCountryPhoneNestedInput = {
    create?: XOR<EventCreateWithoutEventCPCountryPhoneInput, EventUncheckedCreateWithoutEventCPCountryPhoneInput> | EventCreateWithoutEventCPCountryPhoneInput[] | EventUncheckedCreateWithoutEventCPCountryPhoneInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEventCPCountryPhoneInput | EventCreateOrConnectWithoutEventCPCountryPhoneInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutEventCPCountryPhoneInput | EventUpsertWithWhereUniqueWithoutEventCPCountryPhoneInput[]
    createMany?: EventCreateManyEventCPCountryPhoneInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutEventCPCountryPhoneInput | EventUpdateWithWhereUniqueWithoutEventCPCountryPhoneInput[]
    updateMany?: EventUpdateManyWithWhereWithoutEventCPCountryPhoneInput | EventUpdateManyWithWhereWithoutEventCPCountryPhoneInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type TicketTransactionDetailUpdateManyWithoutOrderCountryPhoneNestedInput = {
    create?: XOR<TicketTransactionDetailCreateWithoutOrderCountryPhoneInput, TicketTransactionDetailUncheckedCreateWithoutOrderCountryPhoneInput> | TicketTransactionDetailCreateWithoutOrderCountryPhoneInput[] | TicketTransactionDetailUncheckedCreateWithoutOrderCountryPhoneInput[]
    connectOrCreate?: TicketTransactionDetailCreateOrConnectWithoutOrderCountryPhoneInput | TicketTransactionDetailCreateOrConnectWithoutOrderCountryPhoneInput[]
    upsert?: TicketTransactionDetailUpsertWithWhereUniqueWithoutOrderCountryPhoneInput | TicketTransactionDetailUpsertWithWhereUniqueWithoutOrderCountryPhoneInput[]
    createMany?: TicketTransactionDetailCreateManyOrderCountryPhoneInputEnvelope
    set?: TicketTransactionDetailWhereUniqueInput | TicketTransactionDetailWhereUniqueInput[]
    disconnect?: TicketTransactionDetailWhereUniqueInput | TicketTransactionDetailWhereUniqueInput[]
    delete?: TicketTransactionDetailWhereUniqueInput | TicketTransactionDetailWhereUniqueInput[]
    connect?: TicketTransactionDetailWhereUniqueInput | TicketTransactionDetailWhereUniqueInput[]
    update?: TicketTransactionDetailUpdateWithWhereUniqueWithoutOrderCountryPhoneInput | TicketTransactionDetailUpdateWithWhereUniqueWithoutOrderCountryPhoneInput[]
    updateMany?: TicketTransactionDetailUpdateManyWithWhereWithoutOrderCountryPhoneInput | TicketTransactionDetailUpdateManyWithWhereWithoutOrderCountryPhoneInput[]
    deleteMany?: TicketTransactionDetailScalarWhereInput | TicketTransactionDetailScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MemberUncheckedUpdateManyWithoutCountryPhoneNestedInput = {
    create?: XOR<MemberCreateWithoutCountryPhoneInput, MemberUncheckedCreateWithoutCountryPhoneInput> | MemberCreateWithoutCountryPhoneInput[] | MemberUncheckedCreateWithoutCountryPhoneInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutCountryPhoneInput | MemberCreateOrConnectWithoutCountryPhoneInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutCountryPhoneInput | MemberUpsertWithWhereUniqueWithoutCountryPhoneInput[]
    createMany?: MemberCreateManyCountryPhoneInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutCountryPhoneInput | MemberUpdateWithWhereUniqueWithoutCountryPhoneInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutCountryPhoneInput | MemberUpdateManyWithWhereWithoutCountryPhoneInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type CreatorProfileUncheckedUpdateManyWithoutCountryPhoneNestedInput = {
    create?: XOR<CreatorProfileCreateWithoutCountryPhoneInput, CreatorProfileUncheckedCreateWithoutCountryPhoneInput> | CreatorProfileCreateWithoutCountryPhoneInput[] | CreatorProfileUncheckedCreateWithoutCountryPhoneInput[]
    connectOrCreate?: CreatorProfileCreateOrConnectWithoutCountryPhoneInput | CreatorProfileCreateOrConnectWithoutCountryPhoneInput[]
    upsert?: CreatorProfileUpsertWithWhereUniqueWithoutCountryPhoneInput | CreatorProfileUpsertWithWhereUniqueWithoutCountryPhoneInput[]
    createMany?: CreatorProfileCreateManyCountryPhoneInputEnvelope
    set?: CreatorProfileWhereUniqueInput | CreatorProfileWhereUniqueInput[]
    disconnect?: CreatorProfileWhereUniqueInput | CreatorProfileWhereUniqueInput[]
    delete?: CreatorProfileWhereUniqueInput | CreatorProfileWhereUniqueInput[]
    connect?: CreatorProfileWhereUniqueInput | CreatorProfileWhereUniqueInput[]
    update?: CreatorProfileUpdateWithWhereUniqueWithoutCountryPhoneInput | CreatorProfileUpdateWithWhereUniqueWithoutCountryPhoneInput[]
    updateMany?: CreatorProfileUpdateManyWithWhereWithoutCountryPhoneInput | CreatorProfileUpdateManyWithWhereWithoutCountryPhoneInput[]
    deleteMany?: CreatorProfileScalarWhereInput | CreatorProfileScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutEventCPCountryPhoneNestedInput = {
    create?: XOR<EventCreateWithoutEventCPCountryPhoneInput, EventUncheckedCreateWithoutEventCPCountryPhoneInput> | EventCreateWithoutEventCPCountryPhoneInput[] | EventUncheckedCreateWithoutEventCPCountryPhoneInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEventCPCountryPhoneInput | EventCreateOrConnectWithoutEventCPCountryPhoneInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutEventCPCountryPhoneInput | EventUpsertWithWhereUniqueWithoutEventCPCountryPhoneInput[]
    createMany?: EventCreateManyEventCPCountryPhoneInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutEventCPCountryPhoneInput | EventUpdateWithWhereUniqueWithoutEventCPCountryPhoneInput[]
    updateMany?: EventUpdateManyWithWhereWithoutEventCPCountryPhoneInput | EventUpdateManyWithWhereWithoutEventCPCountryPhoneInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type TicketTransactionDetailUncheckedUpdateManyWithoutOrderCountryPhoneNestedInput = {
    create?: XOR<TicketTransactionDetailCreateWithoutOrderCountryPhoneInput, TicketTransactionDetailUncheckedCreateWithoutOrderCountryPhoneInput> | TicketTransactionDetailCreateWithoutOrderCountryPhoneInput[] | TicketTransactionDetailUncheckedCreateWithoutOrderCountryPhoneInput[]
    connectOrCreate?: TicketTransactionDetailCreateOrConnectWithoutOrderCountryPhoneInput | TicketTransactionDetailCreateOrConnectWithoutOrderCountryPhoneInput[]
    upsert?: TicketTransactionDetailUpsertWithWhereUniqueWithoutOrderCountryPhoneInput | TicketTransactionDetailUpsertWithWhereUniqueWithoutOrderCountryPhoneInput[]
    createMany?: TicketTransactionDetailCreateManyOrderCountryPhoneInputEnvelope
    set?: TicketTransactionDetailWhereUniqueInput | TicketTransactionDetailWhereUniqueInput[]
    disconnect?: TicketTransactionDetailWhereUniqueInput | TicketTransactionDetailWhereUniqueInput[]
    delete?: TicketTransactionDetailWhereUniqueInput | TicketTransactionDetailWhereUniqueInput[]
    connect?: TicketTransactionDetailWhereUniqueInput | TicketTransactionDetailWhereUniqueInput[]
    update?: TicketTransactionDetailUpdateWithWhereUniqueWithoutOrderCountryPhoneInput | TicketTransactionDetailUpdateWithWhereUniqueWithoutOrderCountryPhoneInput[]
    updateMany?: TicketTransactionDetailUpdateManyWithWhereWithoutOrderCountryPhoneInput | TicketTransactionDetailUpdateManyWithWhereWithoutOrderCountryPhoneInput[]
    deleteMany?: TicketTransactionDetailScalarWhereInput | TicketTransactionDetailScalarWhereInput[]
  }

  export type CountryPhoneCreateNestedOneWithoutMembersInput = {
    create?: XOR<CountryPhoneCreateWithoutMembersInput, CountryPhoneUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CountryPhoneCreateOrConnectWithoutMembersInput
    connect?: CountryPhoneWhereUniqueInput
  }

  export type VerificationCodeCreateNestedManyWithoutMemberInput = {
    create?: XOR<VerificationCodeCreateWithoutMemberInput, VerificationCodeUncheckedCreateWithoutMemberInput> | VerificationCodeCreateWithoutMemberInput[] | VerificationCodeUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: VerificationCodeCreateOrConnectWithoutMemberInput | VerificationCodeCreateOrConnectWithoutMemberInput[]
    createMany?: VerificationCodeCreateManyMemberInputEnvelope
    connect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
  }

  export type CreatorProfileCreateNestedOneWithoutMemberInput = {
    create?: XOR<CreatorProfileCreateWithoutMemberInput, CreatorProfileUncheckedCreateWithoutMemberInput>
    connectOrCreate?: CreatorProfileCreateOrConnectWithoutMemberInput
    connect?: CreatorProfileWhereUniqueInput
  }

  export type TicketTransactionCreateNestedManyWithoutMemberInput = {
    create?: XOR<TicketTransactionCreateWithoutMemberInput, TicketTransactionUncheckedCreateWithoutMemberInput> | TicketTransactionCreateWithoutMemberInput[] | TicketTransactionUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: TicketTransactionCreateOrConnectWithoutMemberInput | TicketTransactionCreateOrConnectWithoutMemberInput[]
    createMany?: TicketTransactionCreateManyMemberInputEnvelope
    connect?: TicketTransactionWhereUniqueInput | TicketTransactionWhereUniqueInput[]
  }

  export type VerificationCodeUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<VerificationCodeCreateWithoutMemberInput, VerificationCodeUncheckedCreateWithoutMemberInput> | VerificationCodeCreateWithoutMemberInput[] | VerificationCodeUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: VerificationCodeCreateOrConnectWithoutMemberInput | VerificationCodeCreateOrConnectWithoutMemberInput[]
    createMany?: VerificationCodeCreateManyMemberInputEnvelope
    connect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
  }

  export type CreatorProfileUncheckedCreateNestedOneWithoutMemberInput = {
    create?: XOR<CreatorProfileCreateWithoutMemberInput, CreatorProfileUncheckedCreateWithoutMemberInput>
    connectOrCreate?: CreatorProfileCreateOrConnectWithoutMemberInput
    connect?: CreatorProfileWhereUniqueInput
  }

  export type TicketTransactionUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<TicketTransactionCreateWithoutMemberInput, TicketTransactionUncheckedCreateWithoutMemberInput> | TicketTransactionCreateWithoutMemberInput[] | TicketTransactionUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: TicketTransactionCreateOrConnectWithoutMemberInput | TicketTransactionCreateOrConnectWithoutMemberInput[]
    createMany?: TicketTransactionCreateManyMemberInputEnvelope
    connect?: TicketTransactionWhereUniqueInput | TicketTransactionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumSexFieldUpdateOperationsInput = {
    set?: $Enums.Sex
  }

  export type CountryPhoneUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<CountryPhoneCreateWithoutMembersInput, CountryPhoneUncheckedCreateWithoutMembersInput>
    connectOrCreate?: CountryPhoneCreateOrConnectWithoutMembersInput
    upsert?: CountryPhoneUpsertWithoutMembersInput
    connect?: CountryPhoneWhereUniqueInput
    update?: XOR<XOR<CountryPhoneUpdateToOneWithWhereWithoutMembersInput, CountryPhoneUpdateWithoutMembersInput>, CountryPhoneUncheckedUpdateWithoutMembersInput>
  }

  export type VerificationCodeUpdateManyWithoutMemberNestedInput = {
    create?: XOR<VerificationCodeCreateWithoutMemberInput, VerificationCodeUncheckedCreateWithoutMemberInput> | VerificationCodeCreateWithoutMemberInput[] | VerificationCodeUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: VerificationCodeCreateOrConnectWithoutMemberInput | VerificationCodeCreateOrConnectWithoutMemberInput[]
    upsert?: VerificationCodeUpsertWithWhereUniqueWithoutMemberInput | VerificationCodeUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: VerificationCodeCreateManyMemberInputEnvelope
    set?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    disconnect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    delete?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    connect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    update?: VerificationCodeUpdateWithWhereUniqueWithoutMemberInput | VerificationCodeUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: VerificationCodeUpdateManyWithWhereWithoutMemberInput | VerificationCodeUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: VerificationCodeScalarWhereInput | VerificationCodeScalarWhereInput[]
  }

  export type CreatorProfileUpdateOneWithoutMemberNestedInput = {
    create?: XOR<CreatorProfileCreateWithoutMemberInput, CreatorProfileUncheckedCreateWithoutMemberInput>
    connectOrCreate?: CreatorProfileCreateOrConnectWithoutMemberInput
    upsert?: CreatorProfileUpsertWithoutMemberInput
    disconnect?: CreatorProfileWhereInput | boolean
    delete?: CreatorProfileWhereInput | boolean
    connect?: CreatorProfileWhereUniqueInput
    update?: XOR<XOR<CreatorProfileUpdateToOneWithWhereWithoutMemberInput, CreatorProfileUpdateWithoutMemberInput>, CreatorProfileUncheckedUpdateWithoutMemberInput>
  }

  export type TicketTransactionUpdateManyWithoutMemberNestedInput = {
    create?: XOR<TicketTransactionCreateWithoutMemberInput, TicketTransactionUncheckedCreateWithoutMemberInput> | TicketTransactionCreateWithoutMemberInput[] | TicketTransactionUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: TicketTransactionCreateOrConnectWithoutMemberInput | TicketTransactionCreateOrConnectWithoutMemberInput[]
    upsert?: TicketTransactionUpsertWithWhereUniqueWithoutMemberInput | TicketTransactionUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: TicketTransactionCreateManyMemberInputEnvelope
    set?: TicketTransactionWhereUniqueInput | TicketTransactionWhereUniqueInput[]
    disconnect?: TicketTransactionWhereUniqueInput | TicketTransactionWhereUniqueInput[]
    delete?: TicketTransactionWhereUniqueInput | TicketTransactionWhereUniqueInput[]
    connect?: TicketTransactionWhereUniqueInput | TicketTransactionWhereUniqueInput[]
    update?: TicketTransactionUpdateWithWhereUniqueWithoutMemberInput | TicketTransactionUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: TicketTransactionUpdateManyWithWhereWithoutMemberInput | TicketTransactionUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: TicketTransactionScalarWhereInput | TicketTransactionScalarWhereInput[]
  }

  export type VerificationCodeUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<VerificationCodeCreateWithoutMemberInput, VerificationCodeUncheckedCreateWithoutMemberInput> | VerificationCodeCreateWithoutMemberInput[] | VerificationCodeUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: VerificationCodeCreateOrConnectWithoutMemberInput | VerificationCodeCreateOrConnectWithoutMemberInput[]
    upsert?: VerificationCodeUpsertWithWhereUniqueWithoutMemberInput | VerificationCodeUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: VerificationCodeCreateManyMemberInputEnvelope
    set?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    disconnect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    delete?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    connect?: VerificationCodeWhereUniqueInput | VerificationCodeWhereUniqueInput[]
    update?: VerificationCodeUpdateWithWhereUniqueWithoutMemberInput | VerificationCodeUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: VerificationCodeUpdateManyWithWhereWithoutMemberInput | VerificationCodeUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: VerificationCodeScalarWhereInput | VerificationCodeScalarWhereInput[]
  }

  export type CreatorProfileUncheckedUpdateOneWithoutMemberNestedInput = {
    create?: XOR<CreatorProfileCreateWithoutMemberInput, CreatorProfileUncheckedCreateWithoutMemberInput>
    connectOrCreate?: CreatorProfileCreateOrConnectWithoutMemberInput
    upsert?: CreatorProfileUpsertWithoutMemberInput
    disconnect?: CreatorProfileWhereInput | boolean
    delete?: CreatorProfileWhereInput | boolean
    connect?: CreatorProfileWhereUniqueInput
    update?: XOR<XOR<CreatorProfileUpdateToOneWithWhereWithoutMemberInput, CreatorProfileUpdateWithoutMemberInput>, CreatorProfileUncheckedUpdateWithoutMemberInput>
  }

  export type TicketTransactionUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<TicketTransactionCreateWithoutMemberInput, TicketTransactionUncheckedCreateWithoutMemberInput> | TicketTransactionCreateWithoutMemberInput[] | TicketTransactionUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: TicketTransactionCreateOrConnectWithoutMemberInput | TicketTransactionCreateOrConnectWithoutMemberInput[]
    upsert?: TicketTransactionUpsertWithWhereUniqueWithoutMemberInput | TicketTransactionUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: TicketTransactionCreateManyMemberInputEnvelope
    set?: TicketTransactionWhereUniqueInput | TicketTransactionWhereUniqueInput[]
    disconnect?: TicketTransactionWhereUniqueInput | TicketTransactionWhereUniqueInput[]
    delete?: TicketTransactionWhereUniqueInput | TicketTransactionWhereUniqueInput[]
    connect?: TicketTransactionWhereUniqueInput | TicketTransactionWhereUniqueInput[]
    update?: TicketTransactionUpdateWithWhereUniqueWithoutMemberInput | TicketTransactionUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: TicketTransactionUpdateManyWithWhereWithoutMemberInput | TicketTransactionUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: TicketTransactionScalarWhereInput | TicketTransactionScalarWhereInput[]
  }

  export type MemberCreateNestedOneWithoutVerificationCodesInput = {
    create?: XOR<MemberCreateWithoutVerificationCodesInput, MemberUncheckedCreateWithoutVerificationCodesInput>
    connectOrCreate?: MemberCreateOrConnectWithoutVerificationCodesInput
    connect?: MemberWhereUniqueInput
  }

  export type EnumCodeTypeFieldUpdateOperationsInput = {
    set?: $Enums.CodeType
  }

  export type MemberUpdateOneWithoutVerificationCodesNestedInput = {
    create?: XOR<MemberCreateWithoutVerificationCodesInput, MemberUncheckedCreateWithoutVerificationCodesInput>
    connectOrCreate?: MemberCreateOrConnectWithoutVerificationCodesInput
    upsert?: MemberUpsertWithoutVerificationCodesInput
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutVerificationCodesInput, MemberUpdateWithoutVerificationCodesInput>, MemberUncheckedUpdateWithoutVerificationCodesInput>
  }

  export type MemberCreateNestedOneWithoutCreatorProfileInput = {
    create?: XOR<MemberCreateWithoutCreatorProfileInput, MemberUncheckedCreateWithoutCreatorProfileInput>
    connectOrCreate?: MemberCreateOrConnectWithoutCreatorProfileInput
    connect?: MemberWhereUniqueInput
  }

  export type CountryPhoneCreateNestedOneWithoutCreatorProfileInput = {
    create?: XOR<CountryPhoneCreateWithoutCreatorProfileInput, CountryPhoneUncheckedCreateWithoutCreatorProfileInput>
    connectOrCreate?: CountryPhoneCreateOrConnectWithoutCreatorProfileInput
    connect?: CountryPhoneWhereUniqueInput
  }

  export type EventCreateNestedManyWithoutCreatorInput = {
    create?: XOR<EventCreateWithoutCreatorInput, EventUncheckedCreateWithoutCreatorInput> | EventCreateWithoutCreatorInput[] | EventUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatorInput | EventCreateOrConnectWithoutCreatorInput[]
    createMany?: EventCreateManyCreatorInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<EventCreateWithoutCreatorInput, EventUncheckedCreateWithoutCreatorInput> | EventCreateWithoutCreatorInput[] | EventUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatorInput | EventCreateOrConnectWithoutCreatorInput[]
    createMany?: EventCreateManyCreatorInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type MemberUpdateOneRequiredWithoutCreatorProfileNestedInput = {
    create?: XOR<MemberCreateWithoutCreatorProfileInput, MemberUncheckedCreateWithoutCreatorProfileInput>
    connectOrCreate?: MemberCreateOrConnectWithoutCreatorProfileInput
    upsert?: MemberUpsertWithoutCreatorProfileInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutCreatorProfileInput, MemberUpdateWithoutCreatorProfileInput>, MemberUncheckedUpdateWithoutCreatorProfileInput>
  }

  export type CountryPhoneUpdateOneWithoutCreatorProfileNestedInput = {
    create?: XOR<CountryPhoneCreateWithoutCreatorProfileInput, CountryPhoneUncheckedCreateWithoutCreatorProfileInput>
    connectOrCreate?: CountryPhoneCreateOrConnectWithoutCreatorProfileInput
    upsert?: CountryPhoneUpsertWithoutCreatorProfileInput
    disconnect?: CountryPhoneWhereInput | boolean
    delete?: CountryPhoneWhereInput | boolean
    connect?: CountryPhoneWhereUniqueInput
    update?: XOR<XOR<CountryPhoneUpdateToOneWithWhereWithoutCreatorProfileInput, CountryPhoneUpdateWithoutCreatorProfileInput>, CountryPhoneUncheckedUpdateWithoutCreatorProfileInput>
  }

  export type EventUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<EventCreateWithoutCreatorInput, EventUncheckedCreateWithoutCreatorInput> | EventCreateWithoutCreatorInput[] | EventUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatorInput | EventCreateOrConnectWithoutCreatorInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCreatorInput | EventUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: EventCreateManyCreatorInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCreatorInput | EventUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCreatorInput | EventUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<EventCreateWithoutCreatorInput, EventUncheckedCreateWithoutCreatorInput> | EventCreateWithoutCreatorInput[] | EventUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatorInput | EventCreateOrConnectWithoutCreatorInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCreatorInput | EventUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: EventCreateManyCreatorInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCreatorInput | EventUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCreatorInput | EventUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type CreatorProfileCreateNestedOneWithoutEventInput = {
    create?: XOR<CreatorProfileCreateWithoutEventInput, CreatorProfileUncheckedCreateWithoutEventInput>
    connectOrCreate?: CreatorProfileCreateOrConnectWithoutEventInput
    connect?: CreatorProfileWhereUniqueInput
  }

  export type EventFormatCreateNestedOneWithoutEventInput = {
    create?: XOR<EventFormatCreateWithoutEventInput, EventFormatUncheckedCreateWithoutEventInput>
    connectOrCreate?: EventFormatCreateOrConnectWithoutEventInput
    connect?: EventFormatWhereUniqueInput
  }

  export type EventTopicCreateNestedOneWithoutEventInput = {
    create?: XOR<EventTopicCreateWithoutEventInput, EventTopicUncheckedCreateWithoutEventInput>
    connectOrCreate?: EventTopicCreateOrConnectWithoutEventInput
    connect?: EventTopicWhereUniqueInput
  }

  export type CountryPhoneCreateNestedOneWithoutEventsInput = {
    create?: XOR<CountryPhoneCreateWithoutEventsInput, CountryPhoneUncheckedCreateWithoutEventsInput>
    connectOrCreate?: CountryPhoneCreateOrConnectWithoutEventsInput
    connect?: CountryPhoneWhereUniqueInput
  }

  export type TicketTransactionCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketTransactionCreateWithoutEventInput, TicketTransactionUncheckedCreateWithoutEventInput> | TicketTransactionCreateWithoutEventInput[] | TicketTransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketTransactionCreateOrConnectWithoutEventInput | TicketTransactionCreateOrConnectWithoutEventInput[]
    createMany?: TicketTransactionCreateManyEventInputEnvelope
    connect?: TicketTransactionWhereUniqueInput | TicketTransactionWhereUniqueInput[]
  }

  export type TicketTransactionUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketTransactionCreateWithoutEventInput, TicketTransactionUncheckedCreateWithoutEventInput> | TicketTransactionCreateWithoutEventInput[] | TicketTransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketTransactionCreateOrConnectWithoutEventInput | TicketTransactionCreateOrConnectWithoutEventInput[]
    createMany?: TicketTransactionCreateManyEventInputEnvelope
    connect?: TicketTransactionWhereUniqueInput | TicketTransactionWhereUniqueInput[]
  }

  export type EnumTicketTypeFieldUpdateOperationsInput = {
    set?: $Enums.TicketType
  }

  export type EnumTicketIDCardFieldUpdateOperationsInput = {
    set?: $Enums.TicketIDCard
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type CreatorProfileUpdateOneRequiredWithoutEventNestedInput = {
    create?: XOR<CreatorProfileCreateWithoutEventInput, CreatorProfileUncheckedCreateWithoutEventInput>
    connectOrCreate?: CreatorProfileCreateOrConnectWithoutEventInput
    upsert?: CreatorProfileUpsertWithoutEventInput
    connect?: CreatorProfileWhereUniqueInput
    update?: XOR<XOR<CreatorProfileUpdateToOneWithWhereWithoutEventInput, CreatorProfileUpdateWithoutEventInput>, CreatorProfileUncheckedUpdateWithoutEventInput>
  }

  export type EventFormatUpdateOneRequiredWithoutEventNestedInput = {
    create?: XOR<EventFormatCreateWithoutEventInput, EventFormatUncheckedCreateWithoutEventInput>
    connectOrCreate?: EventFormatCreateOrConnectWithoutEventInput
    upsert?: EventFormatUpsertWithoutEventInput
    connect?: EventFormatWhereUniqueInput
    update?: XOR<XOR<EventFormatUpdateToOneWithWhereWithoutEventInput, EventFormatUpdateWithoutEventInput>, EventFormatUncheckedUpdateWithoutEventInput>
  }

  export type EventTopicUpdateOneRequiredWithoutEventNestedInput = {
    create?: XOR<EventTopicCreateWithoutEventInput, EventTopicUncheckedCreateWithoutEventInput>
    connectOrCreate?: EventTopicCreateOrConnectWithoutEventInput
    upsert?: EventTopicUpsertWithoutEventInput
    connect?: EventTopicWhereUniqueInput
    update?: XOR<XOR<EventTopicUpdateToOneWithWhereWithoutEventInput, EventTopicUpdateWithoutEventInput>, EventTopicUncheckedUpdateWithoutEventInput>
  }

  export type CountryPhoneUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<CountryPhoneCreateWithoutEventsInput, CountryPhoneUncheckedCreateWithoutEventsInput>
    connectOrCreate?: CountryPhoneCreateOrConnectWithoutEventsInput
    upsert?: CountryPhoneUpsertWithoutEventsInput
    connect?: CountryPhoneWhereUniqueInput
    update?: XOR<XOR<CountryPhoneUpdateToOneWithWhereWithoutEventsInput, CountryPhoneUpdateWithoutEventsInput>, CountryPhoneUncheckedUpdateWithoutEventsInput>
  }

  export type TicketTransactionUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketTransactionCreateWithoutEventInput, TicketTransactionUncheckedCreateWithoutEventInput> | TicketTransactionCreateWithoutEventInput[] | TicketTransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketTransactionCreateOrConnectWithoutEventInput | TicketTransactionCreateOrConnectWithoutEventInput[]
    upsert?: TicketTransactionUpsertWithWhereUniqueWithoutEventInput | TicketTransactionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketTransactionCreateManyEventInputEnvelope
    set?: TicketTransactionWhereUniqueInput | TicketTransactionWhereUniqueInput[]
    disconnect?: TicketTransactionWhereUniqueInput | TicketTransactionWhereUniqueInput[]
    delete?: TicketTransactionWhereUniqueInput | TicketTransactionWhereUniqueInput[]
    connect?: TicketTransactionWhereUniqueInput | TicketTransactionWhereUniqueInput[]
    update?: TicketTransactionUpdateWithWhereUniqueWithoutEventInput | TicketTransactionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketTransactionUpdateManyWithWhereWithoutEventInput | TicketTransactionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketTransactionScalarWhereInput | TicketTransactionScalarWhereInput[]
  }

  export type TicketTransactionUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketTransactionCreateWithoutEventInput, TicketTransactionUncheckedCreateWithoutEventInput> | TicketTransactionCreateWithoutEventInput[] | TicketTransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketTransactionCreateOrConnectWithoutEventInput | TicketTransactionCreateOrConnectWithoutEventInput[]
    upsert?: TicketTransactionUpsertWithWhereUniqueWithoutEventInput | TicketTransactionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketTransactionCreateManyEventInputEnvelope
    set?: TicketTransactionWhereUniqueInput | TicketTransactionWhereUniqueInput[]
    disconnect?: TicketTransactionWhereUniqueInput | TicketTransactionWhereUniqueInput[]
    delete?: TicketTransactionWhereUniqueInput | TicketTransactionWhereUniqueInput[]
    connect?: TicketTransactionWhereUniqueInput | TicketTransactionWhereUniqueInput[]
    update?: TicketTransactionUpdateWithWhereUniqueWithoutEventInput | TicketTransactionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketTransactionUpdateManyWithWhereWithoutEventInput | TicketTransactionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketTransactionScalarWhereInput | TicketTransactionScalarWhereInput[]
  }

  export type EventCreateNestedManyWithoutEventFormatInput = {
    create?: XOR<EventCreateWithoutEventFormatInput, EventUncheckedCreateWithoutEventFormatInput> | EventCreateWithoutEventFormatInput[] | EventUncheckedCreateWithoutEventFormatInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEventFormatInput | EventCreateOrConnectWithoutEventFormatInput[]
    createMany?: EventCreateManyEventFormatInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutEventFormatInput = {
    create?: XOR<EventCreateWithoutEventFormatInput, EventUncheckedCreateWithoutEventFormatInput> | EventCreateWithoutEventFormatInput[] | EventUncheckedCreateWithoutEventFormatInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEventFormatInput | EventCreateOrConnectWithoutEventFormatInput[]
    createMany?: EventCreateManyEventFormatInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUpdateManyWithoutEventFormatNestedInput = {
    create?: XOR<EventCreateWithoutEventFormatInput, EventUncheckedCreateWithoutEventFormatInput> | EventCreateWithoutEventFormatInput[] | EventUncheckedCreateWithoutEventFormatInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEventFormatInput | EventCreateOrConnectWithoutEventFormatInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutEventFormatInput | EventUpsertWithWhereUniqueWithoutEventFormatInput[]
    createMany?: EventCreateManyEventFormatInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutEventFormatInput | EventUpdateWithWhereUniqueWithoutEventFormatInput[]
    updateMany?: EventUpdateManyWithWhereWithoutEventFormatInput | EventUpdateManyWithWhereWithoutEventFormatInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutEventFormatNestedInput = {
    create?: XOR<EventCreateWithoutEventFormatInput, EventUncheckedCreateWithoutEventFormatInput> | EventCreateWithoutEventFormatInput[] | EventUncheckedCreateWithoutEventFormatInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEventFormatInput | EventCreateOrConnectWithoutEventFormatInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutEventFormatInput | EventUpsertWithWhereUniqueWithoutEventFormatInput[]
    createMany?: EventCreateManyEventFormatInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutEventFormatInput | EventUpdateWithWhereUniqueWithoutEventFormatInput[]
    updateMany?: EventUpdateManyWithWhereWithoutEventFormatInput | EventUpdateManyWithWhereWithoutEventFormatInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventCreateNestedManyWithoutEventTopicInput = {
    create?: XOR<EventCreateWithoutEventTopicInput, EventUncheckedCreateWithoutEventTopicInput> | EventCreateWithoutEventTopicInput[] | EventUncheckedCreateWithoutEventTopicInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEventTopicInput | EventCreateOrConnectWithoutEventTopicInput[]
    createMany?: EventCreateManyEventTopicInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutEventTopicInput = {
    create?: XOR<EventCreateWithoutEventTopicInput, EventUncheckedCreateWithoutEventTopicInput> | EventCreateWithoutEventTopicInput[] | EventUncheckedCreateWithoutEventTopicInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEventTopicInput | EventCreateOrConnectWithoutEventTopicInput[]
    createMany?: EventCreateManyEventTopicInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUpdateManyWithoutEventTopicNestedInput = {
    create?: XOR<EventCreateWithoutEventTopicInput, EventUncheckedCreateWithoutEventTopicInput> | EventCreateWithoutEventTopicInput[] | EventUncheckedCreateWithoutEventTopicInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEventTopicInput | EventCreateOrConnectWithoutEventTopicInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutEventTopicInput | EventUpsertWithWhereUniqueWithoutEventTopicInput[]
    createMany?: EventCreateManyEventTopicInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutEventTopicInput | EventUpdateWithWhereUniqueWithoutEventTopicInput[]
    updateMany?: EventUpdateManyWithWhereWithoutEventTopicInput | EventUpdateManyWithWhereWithoutEventTopicInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutEventTopicNestedInput = {
    create?: XOR<EventCreateWithoutEventTopicInput, EventUncheckedCreateWithoutEventTopicInput> | EventCreateWithoutEventTopicInput[] | EventUncheckedCreateWithoutEventTopicInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEventTopicInput | EventCreateOrConnectWithoutEventTopicInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutEventTopicInput | EventUpsertWithWhereUniqueWithoutEventTopicInput[]
    createMany?: EventCreateManyEventTopicInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutEventTopicInput | EventUpdateWithWhereUniqueWithoutEventTopicInput[]
    updateMany?: EventUpdateManyWithWhereWithoutEventTopicInput | EventUpdateManyWithWhereWithoutEventTopicInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutTicketTransactionsInput = {
    create?: XOR<EventCreateWithoutTicketTransactionsInput, EventUncheckedCreateWithoutTicketTransactionsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketTransactionsInput
    connect?: EventWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutTicketTransactionsInput = {
    create?: XOR<MemberCreateWithoutTicketTransactionsInput, MemberUncheckedCreateWithoutTicketTransactionsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutTicketTransactionsInput
    connect?: MemberWhereUniqueInput
  }

  export type TicketTransactionDetailCreateNestedManyWithoutTicketTransactionsInput = {
    create?: XOR<TicketTransactionDetailCreateWithoutTicketTransactionsInput, TicketTransactionDetailUncheckedCreateWithoutTicketTransactionsInput> | TicketTransactionDetailCreateWithoutTicketTransactionsInput[] | TicketTransactionDetailUncheckedCreateWithoutTicketTransactionsInput[]
    connectOrCreate?: TicketTransactionDetailCreateOrConnectWithoutTicketTransactionsInput | TicketTransactionDetailCreateOrConnectWithoutTicketTransactionsInput[]
    createMany?: TicketTransactionDetailCreateManyTicketTransactionsInputEnvelope
    connect?: TicketTransactionDetailWhereUniqueInput | TicketTransactionDetailWhereUniqueInput[]
  }

  export type TicketTransactionDetailUncheckedCreateNestedManyWithoutTicketTransactionsInput = {
    create?: XOR<TicketTransactionDetailCreateWithoutTicketTransactionsInput, TicketTransactionDetailUncheckedCreateWithoutTicketTransactionsInput> | TicketTransactionDetailCreateWithoutTicketTransactionsInput[] | TicketTransactionDetailUncheckedCreateWithoutTicketTransactionsInput[]
    connectOrCreate?: TicketTransactionDetailCreateOrConnectWithoutTicketTransactionsInput | TicketTransactionDetailCreateOrConnectWithoutTicketTransactionsInput[]
    createMany?: TicketTransactionDetailCreateManyTicketTransactionsInputEnvelope
    connect?: TicketTransactionDetailWhereUniqueInput | TicketTransactionDetailWhereUniqueInput[]
  }

  export type EventUpdateOneRequiredWithoutTicketTransactionsNestedInput = {
    create?: XOR<EventCreateWithoutTicketTransactionsInput, EventUncheckedCreateWithoutTicketTransactionsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketTransactionsInput
    upsert?: EventUpsertWithoutTicketTransactionsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTicketTransactionsInput, EventUpdateWithoutTicketTransactionsInput>, EventUncheckedUpdateWithoutTicketTransactionsInput>
  }

  export type MemberUpdateOneRequiredWithoutTicketTransactionsNestedInput = {
    create?: XOR<MemberCreateWithoutTicketTransactionsInput, MemberUncheckedCreateWithoutTicketTransactionsInput>
    connectOrCreate?: MemberCreateOrConnectWithoutTicketTransactionsInput
    upsert?: MemberUpsertWithoutTicketTransactionsInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutTicketTransactionsInput, MemberUpdateWithoutTicketTransactionsInput>, MemberUncheckedUpdateWithoutTicketTransactionsInput>
  }

  export type TicketTransactionDetailUpdateManyWithoutTicketTransactionsNestedInput = {
    create?: XOR<TicketTransactionDetailCreateWithoutTicketTransactionsInput, TicketTransactionDetailUncheckedCreateWithoutTicketTransactionsInput> | TicketTransactionDetailCreateWithoutTicketTransactionsInput[] | TicketTransactionDetailUncheckedCreateWithoutTicketTransactionsInput[]
    connectOrCreate?: TicketTransactionDetailCreateOrConnectWithoutTicketTransactionsInput | TicketTransactionDetailCreateOrConnectWithoutTicketTransactionsInput[]
    upsert?: TicketTransactionDetailUpsertWithWhereUniqueWithoutTicketTransactionsInput | TicketTransactionDetailUpsertWithWhereUniqueWithoutTicketTransactionsInput[]
    createMany?: TicketTransactionDetailCreateManyTicketTransactionsInputEnvelope
    set?: TicketTransactionDetailWhereUniqueInput | TicketTransactionDetailWhereUniqueInput[]
    disconnect?: TicketTransactionDetailWhereUniqueInput | TicketTransactionDetailWhereUniqueInput[]
    delete?: TicketTransactionDetailWhereUniqueInput | TicketTransactionDetailWhereUniqueInput[]
    connect?: TicketTransactionDetailWhereUniqueInput | TicketTransactionDetailWhereUniqueInput[]
    update?: TicketTransactionDetailUpdateWithWhereUniqueWithoutTicketTransactionsInput | TicketTransactionDetailUpdateWithWhereUniqueWithoutTicketTransactionsInput[]
    updateMany?: TicketTransactionDetailUpdateManyWithWhereWithoutTicketTransactionsInput | TicketTransactionDetailUpdateManyWithWhereWithoutTicketTransactionsInput[]
    deleteMany?: TicketTransactionDetailScalarWhereInput | TicketTransactionDetailScalarWhereInput[]
  }

  export type TicketTransactionDetailUncheckedUpdateManyWithoutTicketTransactionsNestedInput = {
    create?: XOR<TicketTransactionDetailCreateWithoutTicketTransactionsInput, TicketTransactionDetailUncheckedCreateWithoutTicketTransactionsInput> | TicketTransactionDetailCreateWithoutTicketTransactionsInput[] | TicketTransactionDetailUncheckedCreateWithoutTicketTransactionsInput[]
    connectOrCreate?: TicketTransactionDetailCreateOrConnectWithoutTicketTransactionsInput | TicketTransactionDetailCreateOrConnectWithoutTicketTransactionsInput[]
    upsert?: TicketTransactionDetailUpsertWithWhereUniqueWithoutTicketTransactionsInput | TicketTransactionDetailUpsertWithWhereUniqueWithoutTicketTransactionsInput[]
    createMany?: TicketTransactionDetailCreateManyTicketTransactionsInputEnvelope
    set?: TicketTransactionDetailWhereUniqueInput | TicketTransactionDetailWhereUniqueInput[]
    disconnect?: TicketTransactionDetailWhereUniqueInput | TicketTransactionDetailWhereUniqueInput[]
    delete?: TicketTransactionDetailWhereUniqueInput | TicketTransactionDetailWhereUniqueInput[]
    connect?: TicketTransactionDetailWhereUniqueInput | TicketTransactionDetailWhereUniqueInput[]
    update?: TicketTransactionDetailUpdateWithWhereUniqueWithoutTicketTransactionsInput | TicketTransactionDetailUpdateWithWhereUniqueWithoutTicketTransactionsInput[]
    updateMany?: TicketTransactionDetailUpdateManyWithWhereWithoutTicketTransactionsInput | TicketTransactionDetailUpdateManyWithWhereWithoutTicketTransactionsInput[]
    deleteMany?: TicketTransactionDetailScalarWhereInput | TicketTransactionDetailScalarWhereInput[]
  }

  export type TicketTransactionCreateNestedOneWithoutTicketTransactionDetailsInput = {
    create?: XOR<TicketTransactionCreateWithoutTicketTransactionDetailsInput, TicketTransactionUncheckedCreateWithoutTicketTransactionDetailsInput>
    connectOrCreate?: TicketTransactionCreateOrConnectWithoutTicketTransactionDetailsInput
    connect?: TicketTransactionWhereUniqueInput
  }

  export type CountryPhoneCreateNestedOneWithoutTicketTransactionDetailsInput = {
    create?: XOR<CountryPhoneCreateWithoutTicketTransactionDetailsInput, CountryPhoneUncheckedCreateWithoutTicketTransactionDetailsInput>
    connectOrCreate?: CountryPhoneCreateOrConnectWithoutTicketTransactionDetailsInput
    connect?: CountryPhoneWhereUniqueInput
  }

  export type TicketTransactionUpdateOneRequiredWithoutTicketTransactionDetailsNestedInput = {
    create?: XOR<TicketTransactionCreateWithoutTicketTransactionDetailsInput, TicketTransactionUncheckedCreateWithoutTicketTransactionDetailsInput>
    connectOrCreate?: TicketTransactionCreateOrConnectWithoutTicketTransactionDetailsInput
    upsert?: TicketTransactionUpsertWithoutTicketTransactionDetailsInput
    connect?: TicketTransactionWhereUniqueInput
    update?: XOR<XOR<TicketTransactionUpdateToOneWithWhereWithoutTicketTransactionDetailsInput, TicketTransactionUpdateWithoutTicketTransactionDetailsInput>, TicketTransactionUncheckedUpdateWithoutTicketTransactionDetailsInput>
  }

  export type CountryPhoneUpdateOneRequiredWithoutTicketTransactionDetailsNestedInput = {
    create?: XOR<CountryPhoneCreateWithoutTicketTransactionDetailsInput, CountryPhoneUncheckedCreateWithoutTicketTransactionDetailsInput>
    connectOrCreate?: CountryPhoneCreateOrConnectWithoutTicketTransactionDetailsInput
    upsert?: CountryPhoneUpsertWithoutTicketTransactionDetailsInput
    connect?: CountryPhoneWhereUniqueInput
    update?: XOR<XOR<CountryPhoneUpdateToOneWithWhereWithoutTicketTransactionDetailsInput, CountryPhoneUpdateWithoutTicketTransactionDetailsInput>, CountryPhoneUncheckedUpdateWithoutTicketTransactionDetailsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumSexFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    not?: NestedEnumSexFilter<$PrismaModel> | $Enums.Sex
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumSexWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    not?: NestedEnumSexWithAggregatesFilter<$PrismaModel> | $Enums.Sex
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexFilter<$PrismaModel>
    _max?: NestedEnumSexFilter<$PrismaModel>
  }

  export type NestedEnumCodeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CodeType | EnumCodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CodeType[] | ListEnumCodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CodeType[] | ListEnumCodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCodeTypeFilter<$PrismaModel> | $Enums.CodeType
  }

  export type NestedEnumCodeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CodeType | EnumCodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CodeType[] | ListEnumCodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CodeType[] | ListEnumCodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCodeTypeWithAggregatesFilter<$PrismaModel> | $Enums.CodeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCodeTypeFilter<$PrismaModel>
    _max?: NestedEnumCodeTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTicketTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketType | EnumTicketTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TicketType[] | ListEnumTicketTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketType[] | ListEnumTicketTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketTypeFilter<$PrismaModel> | $Enums.TicketType
  }

  export type NestedEnumTicketIDCardFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketIDCard | EnumTicketIDCardFieldRefInput<$PrismaModel>
    in?: $Enums.TicketIDCard[] | ListEnumTicketIDCardFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketIDCard[] | ListEnumTicketIDCardFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketIDCardFilter<$PrismaModel> | $Enums.TicketIDCard
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumTicketTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketType | EnumTicketTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TicketType[] | ListEnumTicketTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketType[] | ListEnumTicketTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketTypeWithAggregatesFilter<$PrismaModel> | $Enums.TicketType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketTypeFilter<$PrismaModel>
    _max?: NestedEnumTicketTypeFilter<$PrismaModel>
  }

  export type NestedEnumTicketIDCardWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketIDCard | EnumTicketIDCardFieldRefInput<$PrismaModel>
    in?: $Enums.TicketIDCard[] | ListEnumTicketIDCardFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketIDCard[] | ListEnumTicketIDCardFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketIDCardWithAggregatesFilter<$PrismaModel> | $Enums.TicketIDCard
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketIDCardFilter<$PrismaModel>
    _max?: NestedEnumTicketIDCardFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type MemberCreateWithoutCountryPhoneInput = {
    id?: string
    email: string
    phoneNumber: string
    firstName: string
    lastName?: string | null
    birthDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    eventPromoAccepted?: boolean
    personalDataConsentAccepted: boolean
    termsPrivacyAccepted: boolean
    sex: $Enums.Sex
    isEmailVerified?: boolean
    verificationCodes?: VerificationCodeCreateNestedManyWithoutMemberInput
    creatorProfile?: CreatorProfileCreateNestedOneWithoutMemberInput
    ticketTransactions?: TicketTransactionCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutCountryPhoneInput = {
    id?: string
    email: string
    phoneNumber: string
    firstName: string
    lastName?: string | null
    birthDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    eventPromoAccepted?: boolean
    personalDataConsentAccepted: boolean
    termsPrivacyAccepted: boolean
    sex: $Enums.Sex
    isEmailVerified?: boolean
    verificationCodes?: VerificationCodeUncheckedCreateNestedManyWithoutMemberInput
    creatorProfile?: CreatorProfileUncheckedCreateNestedOneWithoutMemberInput
    ticketTransactions?: TicketTransactionUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutCountryPhoneInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutCountryPhoneInput, MemberUncheckedCreateWithoutCountryPhoneInput>
  }

  export type MemberCreateManyCountryPhoneInputEnvelope = {
    data: MemberCreateManyCountryPhoneInput | MemberCreateManyCountryPhoneInput[]
    skipDuplicates?: boolean
  }

  export type CreatorProfileCreateWithoutCountryPhoneInput = {
    id?: string
    bannerImgUrl?: string | null
    logoImgUrl?: string | null
    profileLinkUrl: string
    creatorPhoneNumber?: string | null
    address?: string | null
    aboutUsInfo?: string | null
    xUserName?: string | null
    igUserName?: string | null
    fbProfileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    member: MemberCreateNestedOneWithoutCreatorProfileInput
    event?: EventCreateNestedManyWithoutCreatorInput
  }

  export type CreatorProfileUncheckedCreateWithoutCountryPhoneInput = {
    id?: string
    memberId: string
    bannerImgUrl?: string | null
    logoImgUrl?: string | null
    profileLinkUrl: string
    creatorPhoneNumber?: string | null
    address?: string | null
    aboutUsInfo?: string | null
    xUserName?: string | null
    igUserName?: string | null
    fbProfileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    event?: EventUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type CreatorProfileCreateOrConnectWithoutCountryPhoneInput = {
    where: CreatorProfileWhereUniqueInput
    create: XOR<CreatorProfileCreateWithoutCountryPhoneInput, CreatorProfileUncheckedCreateWithoutCountryPhoneInput>
  }

  export type CreatorProfileCreateManyCountryPhoneInputEnvelope = {
    data: CreatorProfileCreateManyCountryPhoneInput | CreatorProfileCreateManyCountryPhoneInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutEventCPCountryPhoneInput = {
    eventName: string
    eventTag?: string | null
    isPrivateEvent?: boolean
    organizerName: string
    organizerLogoImgUrl?: string | null
    bannerImgUrl?: string | null
    eventStartDate: string
    eventEndDate: string
    eventStartTime: string
    eventEndTime: string
    eventLocation: string
    eventDesc?: string | null
    ticketType: $Enums.TicketType
    ticketName: string
    ticketQty: number
    ticketPrice?: number
    ticketDesc?: string | null
    ticketTermsAndCondition?: string | null
    ticketStartDate: string
    ticketEndDate: string
    eventCPName: string
    eventCPEmail: string
    eventCPPhone: string
    idCardStatus?: $Enums.TicketIDCard
    maxTicketPerTransaction: number
    oneEmailOneTransaction?: boolean
    ticketDataFormUnique?: boolean
    isDraft?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    creator: CreatorProfileCreateNestedOneWithoutEventInput
    eventFormat: EventFormatCreateNestedOneWithoutEventInput
    eventTopic: EventTopicCreateNestedOneWithoutEventInput
    ticketTransactions?: TicketTransactionCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutEventCPCountryPhoneInput = {
    id?: number
    creatorId: string
    eventName: string
    eventFormatId: number
    eventTopicId: number
    eventTag?: string | null
    isPrivateEvent?: boolean
    organizerName: string
    organizerLogoImgUrl?: string | null
    bannerImgUrl?: string | null
    eventStartDate: string
    eventEndDate: string
    eventStartTime: string
    eventEndTime: string
    eventLocation: string
    eventDesc?: string | null
    ticketType: $Enums.TicketType
    ticketName: string
    ticketQty: number
    ticketPrice?: number
    ticketDesc?: string | null
    ticketTermsAndCondition?: string | null
    ticketStartDate: string
    ticketEndDate: string
    eventCPName: string
    eventCPEmail: string
    eventCPPhone: string
    idCardStatus?: $Enums.TicketIDCard
    maxTicketPerTransaction: number
    oneEmailOneTransaction?: boolean
    ticketDataFormUnique?: boolean
    isDraft?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ticketTransactions?: TicketTransactionUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutEventCPCountryPhoneInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEventCPCountryPhoneInput, EventUncheckedCreateWithoutEventCPCountryPhoneInput>
  }

  export type EventCreateManyEventCPCountryPhoneInputEnvelope = {
    data: EventCreateManyEventCPCountryPhoneInput | EventCreateManyEventCPCountryPhoneInput[]
    skipDuplicates?: boolean
  }

  export type TicketTransactionDetailCreateWithoutOrderCountryPhoneInput = {
    orderName: string
    orderEmail: string
    orderBirthDate: string
    orderSex: $Enums.Sex
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ticketTransactions: TicketTransactionCreateNestedOneWithoutTicketTransactionDetailsInput
  }

  export type TicketTransactionDetailUncheckedCreateWithoutOrderCountryPhoneInput = {
    id?: number
    ticketTransactionId: number
    orderName: string
    orderEmail: string
    orderBirthDate: string
    orderSex: $Enums.Sex
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TicketTransactionDetailCreateOrConnectWithoutOrderCountryPhoneInput = {
    where: TicketTransactionDetailWhereUniqueInput
    create: XOR<TicketTransactionDetailCreateWithoutOrderCountryPhoneInput, TicketTransactionDetailUncheckedCreateWithoutOrderCountryPhoneInput>
  }

  export type TicketTransactionDetailCreateManyOrderCountryPhoneInputEnvelope = {
    data: TicketTransactionDetailCreateManyOrderCountryPhoneInput | TicketTransactionDetailCreateManyOrderCountryPhoneInput[]
    skipDuplicates?: boolean
  }

  export type MemberUpsertWithWhereUniqueWithoutCountryPhoneInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutCountryPhoneInput, MemberUncheckedUpdateWithoutCountryPhoneInput>
    create: XOR<MemberCreateWithoutCountryPhoneInput, MemberUncheckedCreateWithoutCountryPhoneInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutCountryPhoneInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutCountryPhoneInput, MemberUncheckedUpdateWithoutCountryPhoneInput>
  }

  export type MemberUpdateManyWithWhereWithoutCountryPhoneInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutCountryPhoneInput>
  }

  export type MemberScalarWhereInput = {
    AND?: MemberScalarWhereInput | MemberScalarWhereInput[]
    OR?: MemberScalarWhereInput[]
    NOT?: MemberScalarWhereInput | MemberScalarWhereInput[]
    id?: StringFilter<"Member"> | string
    email?: StringFilter<"Member"> | string
    countryPhoneId?: IntFilter<"Member"> | number
    phoneNumber?: StringFilter<"Member"> | string
    firstName?: StringFilter<"Member"> | string
    lastName?: StringNullableFilter<"Member"> | string | null
    birthDate?: StringFilter<"Member"> | string
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Member"> | Date | string | null
    eventPromoAccepted?: BoolFilter<"Member"> | boolean
    personalDataConsentAccepted?: BoolFilter<"Member"> | boolean
    termsPrivacyAccepted?: BoolFilter<"Member"> | boolean
    sex?: EnumSexFilter<"Member"> | $Enums.Sex
    isEmailVerified?: BoolFilter<"Member"> | boolean
  }

  export type CreatorProfileUpsertWithWhereUniqueWithoutCountryPhoneInput = {
    where: CreatorProfileWhereUniqueInput
    update: XOR<CreatorProfileUpdateWithoutCountryPhoneInput, CreatorProfileUncheckedUpdateWithoutCountryPhoneInput>
    create: XOR<CreatorProfileCreateWithoutCountryPhoneInput, CreatorProfileUncheckedCreateWithoutCountryPhoneInput>
  }

  export type CreatorProfileUpdateWithWhereUniqueWithoutCountryPhoneInput = {
    where: CreatorProfileWhereUniqueInput
    data: XOR<CreatorProfileUpdateWithoutCountryPhoneInput, CreatorProfileUncheckedUpdateWithoutCountryPhoneInput>
  }

  export type CreatorProfileUpdateManyWithWhereWithoutCountryPhoneInput = {
    where: CreatorProfileScalarWhereInput
    data: XOR<CreatorProfileUpdateManyMutationInput, CreatorProfileUncheckedUpdateManyWithoutCountryPhoneInput>
  }

  export type CreatorProfileScalarWhereInput = {
    AND?: CreatorProfileScalarWhereInput | CreatorProfileScalarWhereInput[]
    OR?: CreatorProfileScalarWhereInput[]
    NOT?: CreatorProfileScalarWhereInput | CreatorProfileScalarWhereInput[]
    id?: StringFilter<"CreatorProfile"> | string
    memberId?: StringFilter<"CreatorProfile"> | string
    bannerImgUrl?: StringNullableFilter<"CreatorProfile"> | string | null
    logoImgUrl?: StringNullableFilter<"CreatorProfile"> | string | null
    profileLinkUrl?: StringFilter<"CreatorProfile"> | string
    countryPhoneId?: IntNullableFilter<"CreatorProfile"> | number | null
    creatorPhoneNumber?: StringNullableFilter<"CreatorProfile"> | string | null
    address?: StringNullableFilter<"CreatorProfile"> | string | null
    aboutUsInfo?: StringNullableFilter<"CreatorProfile"> | string | null
    xUserName?: StringNullableFilter<"CreatorProfile"> | string | null
    igUserName?: StringNullableFilter<"CreatorProfile"> | string | null
    fbProfileUrl?: StringNullableFilter<"CreatorProfile"> | string | null
    createdAt?: DateTimeFilter<"CreatorProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CreatorProfile"> | Date | string
    deletedAt?: DateTimeNullableFilter<"CreatorProfile"> | Date | string | null
  }

  export type EventUpsertWithWhereUniqueWithoutEventCPCountryPhoneInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutEventCPCountryPhoneInput, EventUncheckedUpdateWithoutEventCPCountryPhoneInput>
    create: XOR<EventCreateWithoutEventCPCountryPhoneInput, EventUncheckedCreateWithoutEventCPCountryPhoneInput>
  }

  export type EventUpdateWithWhereUniqueWithoutEventCPCountryPhoneInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutEventCPCountryPhoneInput, EventUncheckedUpdateWithoutEventCPCountryPhoneInput>
  }

  export type EventUpdateManyWithWhereWithoutEventCPCountryPhoneInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutEventCPCountryPhoneInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: IntFilter<"Event"> | number
    creatorId?: StringFilter<"Event"> | string
    eventName?: StringFilter<"Event"> | string
    eventFormatId?: IntFilter<"Event"> | number
    eventTopicId?: IntFilter<"Event"> | number
    eventTag?: StringNullableFilter<"Event"> | string | null
    isPrivateEvent?: BoolFilter<"Event"> | boolean
    organizerName?: StringFilter<"Event"> | string
    organizerLogoImgUrl?: StringNullableFilter<"Event"> | string | null
    bannerImgUrl?: StringNullableFilter<"Event"> | string | null
    eventStartDate?: StringFilter<"Event"> | string
    eventEndDate?: StringFilter<"Event"> | string
    eventStartTime?: StringFilter<"Event"> | string
    eventEndTime?: StringFilter<"Event"> | string
    eventLocation?: StringFilter<"Event"> | string
    eventDesc?: StringNullableFilter<"Event"> | string | null
    ticketType?: EnumTicketTypeFilter<"Event"> | $Enums.TicketType
    ticketName?: StringFilter<"Event"> | string
    ticketQty?: IntFilter<"Event"> | number
    ticketPrice?: IntFilter<"Event"> | number
    ticketDesc?: StringNullableFilter<"Event"> | string | null
    ticketTermsAndCondition?: StringNullableFilter<"Event"> | string | null
    ticketStartDate?: StringFilter<"Event"> | string
    ticketEndDate?: StringFilter<"Event"> | string
    eventCPName?: StringFilter<"Event"> | string
    eventCPEmail?: StringFilter<"Event"> | string
    eventCPCountryPhoneId?: IntFilter<"Event"> | number
    eventCPPhone?: StringFilter<"Event"> | string
    idCardStatus?: EnumTicketIDCardFilter<"Event"> | $Enums.TicketIDCard
    maxTicketPerTransaction?: IntFilter<"Event"> | number
    oneEmailOneTransaction?: BoolFilter<"Event"> | boolean
    ticketDataFormUnique?: BoolFilter<"Event"> | boolean
    isDraft?: BoolNullableFilter<"Event"> | boolean | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Event"> | Date | string | null
  }

  export type TicketTransactionDetailUpsertWithWhereUniqueWithoutOrderCountryPhoneInput = {
    where: TicketTransactionDetailWhereUniqueInput
    update: XOR<TicketTransactionDetailUpdateWithoutOrderCountryPhoneInput, TicketTransactionDetailUncheckedUpdateWithoutOrderCountryPhoneInput>
    create: XOR<TicketTransactionDetailCreateWithoutOrderCountryPhoneInput, TicketTransactionDetailUncheckedCreateWithoutOrderCountryPhoneInput>
  }

  export type TicketTransactionDetailUpdateWithWhereUniqueWithoutOrderCountryPhoneInput = {
    where: TicketTransactionDetailWhereUniqueInput
    data: XOR<TicketTransactionDetailUpdateWithoutOrderCountryPhoneInput, TicketTransactionDetailUncheckedUpdateWithoutOrderCountryPhoneInput>
  }

  export type TicketTransactionDetailUpdateManyWithWhereWithoutOrderCountryPhoneInput = {
    where: TicketTransactionDetailScalarWhereInput
    data: XOR<TicketTransactionDetailUpdateManyMutationInput, TicketTransactionDetailUncheckedUpdateManyWithoutOrderCountryPhoneInput>
  }

  export type TicketTransactionDetailScalarWhereInput = {
    AND?: TicketTransactionDetailScalarWhereInput | TicketTransactionDetailScalarWhereInput[]
    OR?: TicketTransactionDetailScalarWhereInput[]
    NOT?: TicketTransactionDetailScalarWhereInput | TicketTransactionDetailScalarWhereInput[]
    id?: IntFilter<"TicketTransactionDetail"> | number
    ticketTransactionId?: IntFilter<"TicketTransactionDetail"> | number
    orderName?: StringFilter<"TicketTransactionDetail"> | string
    orderCountryPhoneId?: IntFilter<"TicketTransactionDetail"> | number
    orderEmail?: StringFilter<"TicketTransactionDetail"> | string
    orderBirthDate?: StringFilter<"TicketTransactionDetail"> | string
    orderSex?: EnumSexFilter<"TicketTransactionDetail"> | $Enums.Sex
    createdAt?: DateTimeFilter<"TicketTransactionDetail"> | Date | string
    updatedAt?: DateTimeFilter<"TicketTransactionDetail"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TicketTransactionDetail"> | Date | string | null
  }

  export type CountryPhoneCreateWithoutMembersInput = {
    name: string
    code: string
    mobileCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    creatorProfile?: CreatorProfileCreateNestedManyWithoutCountryPhoneInput
    events?: EventCreateNestedManyWithoutEventCPCountryPhoneInput
    ticketTransactionDetails?: TicketTransactionDetailCreateNestedManyWithoutOrderCountryPhoneInput
  }

  export type CountryPhoneUncheckedCreateWithoutMembersInput = {
    id?: number
    name: string
    code: string
    mobileCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    creatorProfile?: CreatorProfileUncheckedCreateNestedManyWithoutCountryPhoneInput
    events?: EventUncheckedCreateNestedManyWithoutEventCPCountryPhoneInput
    ticketTransactionDetails?: TicketTransactionDetailUncheckedCreateNestedManyWithoutOrderCountryPhoneInput
  }

  export type CountryPhoneCreateOrConnectWithoutMembersInput = {
    where: CountryPhoneWhereUniqueInput
    create: XOR<CountryPhoneCreateWithoutMembersInput, CountryPhoneUncheckedCreateWithoutMembersInput>
  }

  export type VerificationCodeCreateWithoutMemberInput = {
    id?: string
    code: string
    email: string
    type: $Enums.CodeType
    expiredAt: Date | string
    isUsed?: boolean
    attempts?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type VerificationCodeUncheckedCreateWithoutMemberInput = {
    id?: string
    code: string
    email: string
    type: $Enums.CodeType
    expiredAt: Date | string
    isUsed?: boolean
    attempts?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type VerificationCodeCreateOrConnectWithoutMemberInput = {
    where: VerificationCodeWhereUniqueInput
    create: XOR<VerificationCodeCreateWithoutMemberInput, VerificationCodeUncheckedCreateWithoutMemberInput>
  }

  export type VerificationCodeCreateManyMemberInputEnvelope = {
    data: VerificationCodeCreateManyMemberInput | VerificationCodeCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type CreatorProfileCreateWithoutMemberInput = {
    id?: string
    bannerImgUrl?: string | null
    logoImgUrl?: string | null
    profileLinkUrl: string
    creatorPhoneNumber?: string | null
    address?: string | null
    aboutUsInfo?: string | null
    xUserName?: string | null
    igUserName?: string | null
    fbProfileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    countryPhone?: CountryPhoneCreateNestedOneWithoutCreatorProfileInput
    event?: EventCreateNestedManyWithoutCreatorInput
  }

  export type CreatorProfileUncheckedCreateWithoutMemberInput = {
    id?: string
    bannerImgUrl?: string | null
    logoImgUrl?: string | null
    profileLinkUrl: string
    countryPhoneId?: number | null
    creatorPhoneNumber?: string | null
    address?: string | null
    aboutUsInfo?: string | null
    xUserName?: string | null
    igUserName?: string | null
    fbProfileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    event?: EventUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type CreatorProfileCreateOrConnectWithoutMemberInput = {
    where: CreatorProfileWhereUniqueInput
    create: XOR<CreatorProfileCreateWithoutMemberInput, CreatorProfileUncheckedCreateWithoutMemberInput>
  }

  export type TicketTransactionCreateWithoutMemberInput = {
    ticketCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    event: EventCreateNestedOneWithoutTicketTransactionsInput
    ticketTransactionDetails?: TicketTransactionDetailCreateNestedManyWithoutTicketTransactionsInput
  }

  export type TicketTransactionUncheckedCreateWithoutMemberInput = {
    id?: number
    eventId: number
    ticketCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ticketTransactionDetails?: TicketTransactionDetailUncheckedCreateNestedManyWithoutTicketTransactionsInput
  }

  export type TicketTransactionCreateOrConnectWithoutMemberInput = {
    where: TicketTransactionWhereUniqueInput
    create: XOR<TicketTransactionCreateWithoutMemberInput, TicketTransactionUncheckedCreateWithoutMemberInput>
  }

  export type TicketTransactionCreateManyMemberInputEnvelope = {
    data: TicketTransactionCreateManyMemberInput | TicketTransactionCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type CountryPhoneUpsertWithoutMembersInput = {
    update: XOR<CountryPhoneUpdateWithoutMembersInput, CountryPhoneUncheckedUpdateWithoutMembersInput>
    create: XOR<CountryPhoneCreateWithoutMembersInput, CountryPhoneUncheckedCreateWithoutMembersInput>
    where?: CountryPhoneWhereInput
  }

  export type CountryPhoneUpdateToOneWithWhereWithoutMembersInput = {
    where?: CountryPhoneWhereInput
    data: XOR<CountryPhoneUpdateWithoutMembersInput, CountryPhoneUncheckedUpdateWithoutMembersInput>
  }

  export type CountryPhoneUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mobileCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorProfile?: CreatorProfileUpdateManyWithoutCountryPhoneNestedInput
    events?: EventUpdateManyWithoutEventCPCountryPhoneNestedInput
    ticketTransactionDetails?: TicketTransactionDetailUpdateManyWithoutOrderCountryPhoneNestedInput
  }

  export type CountryPhoneUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mobileCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creatorProfile?: CreatorProfileUncheckedUpdateManyWithoutCountryPhoneNestedInput
    events?: EventUncheckedUpdateManyWithoutEventCPCountryPhoneNestedInput
    ticketTransactionDetails?: TicketTransactionDetailUncheckedUpdateManyWithoutOrderCountryPhoneNestedInput
  }

  export type VerificationCodeUpsertWithWhereUniqueWithoutMemberInput = {
    where: VerificationCodeWhereUniqueInput
    update: XOR<VerificationCodeUpdateWithoutMemberInput, VerificationCodeUncheckedUpdateWithoutMemberInput>
    create: XOR<VerificationCodeCreateWithoutMemberInput, VerificationCodeUncheckedCreateWithoutMemberInput>
  }

  export type VerificationCodeUpdateWithWhereUniqueWithoutMemberInput = {
    where: VerificationCodeWhereUniqueInput
    data: XOR<VerificationCodeUpdateWithoutMemberInput, VerificationCodeUncheckedUpdateWithoutMemberInput>
  }

  export type VerificationCodeUpdateManyWithWhereWithoutMemberInput = {
    where: VerificationCodeScalarWhereInput
    data: XOR<VerificationCodeUpdateManyMutationInput, VerificationCodeUncheckedUpdateManyWithoutMemberInput>
  }

  export type VerificationCodeScalarWhereInput = {
    AND?: VerificationCodeScalarWhereInput | VerificationCodeScalarWhereInput[]
    OR?: VerificationCodeScalarWhereInput[]
    NOT?: VerificationCodeScalarWhereInput | VerificationCodeScalarWhereInput[]
    id?: StringFilter<"VerificationCode"> | string
    code?: StringFilter<"VerificationCode"> | string
    email?: StringFilter<"VerificationCode"> | string
    type?: EnumCodeTypeFilter<"VerificationCode"> | $Enums.CodeType
    expiredAt?: DateTimeFilter<"VerificationCode"> | Date | string
    isUsed?: BoolFilter<"VerificationCode"> | boolean
    attempts?: IntFilter<"VerificationCode"> | number
    memberId?: StringNullableFilter<"VerificationCode"> | string | null
    createdAt?: DateTimeFilter<"VerificationCode"> | Date | string
    updatedAt?: DateTimeFilter<"VerificationCode"> | Date | string
    deletedAt?: DateTimeNullableFilter<"VerificationCode"> | Date | string | null
  }

  export type CreatorProfileUpsertWithoutMemberInput = {
    update: XOR<CreatorProfileUpdateWithoutMemberInput, CreatorProfileUncheckedUpdateWithoutMemberInput>
    create: XOR<CreatorProfileCreateWithoutMemberInput, CreatorProfileUncheckedCreateWithoutMemberInput>
    where?: CreatorProfileWhereInput
  }

  export type CreatorProfileUpdateToOneWithWhereWithoutMemberInput = {
    where?: CreatorProfileWhereInput
    data: XOR<CreatorProfileUpdateWithoutMemberInput, CreatorProfileUncheckedUpdateWithoutMemberInput>
  }

  export type CreatorProfileUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileLinkUrl?: StringFieldUpdateOperationsInput | string
    creatorPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    aboutUsInfo?: NullableStringFieldUpdateOperationsInput | string | null
    xUserName?: NullableStringFieldUpdateOperationsInput | string | null
    igUserName?: NullableStringFieldUpdateOperationsInput | string | null
    fbProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    countryPhone?: CountryPhoneUpdateOneWithoutCreatorProfileNestedInput
    event?: EventUpdateManyWithoutCreatorNestedInput
  }

  export type CreatorProfileUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileLinkUrl?: StringFieldUpdateOperationsInput | string
    countryPhoneId?: NullableIntFieldUpdateOperationsInput | number | null
    creatorPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    aboutUsInfo?: NullableStringFieldUpdateOperationsInput | string | null
    xUserName?: NullableStringFieldUpdateOperationsInput | string | null
    igUserName?: NullableStringFieldUpdateOperationsInput | string | null
    fbProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type TicketTransactionUpsertWithWhereUniqueWithoutMemberInput = {
    where: TicketTransactionWhereUniqueInput
    update: XOR<TicketTransactionUpdateWithoutMemberInput, TicketTransactionUncheckedUpdateWithoutMemberInput>
    create: XOR<TicketTransactionCreateWithoutMemberInput, TicketTransactionUncheckedCreateWithoutMemberInput>
  }

  export type TicketTransactionUpdateWithWhereUniqueWithoutMemberInput = {
    where: TicketTransactionWhereUniqueInput
    data: XOR<TicketTransactionUpdateWithoutMemberInput, TicketTransactionUncheckedUpdateWithoutMemberInput>
  }

  export type TicketTransactionUpdateManyWithWhereWithoutMemberInput = {
    where: TicketTransactionScalarWhereInput
    data: XOR<TicketTransactionUpdateManyMutationInput, TicketTransactionUncheckedUpdateManyWithoutMemberInput>
  }

  export type TicketTransactionScalarWhereInput = {
    AND?: TicketTransactionScalarWhereInput | TicketTransactionScalarWhereInput[]
    OR?: TicketTransactionScalarWhereInput[]
    NOT?: TicketTransactionScalarWhereInput | TicketTransactionScalarWhereInput[]
    id?: IntFilter<"TicketTransaction"> | number
    eventId?: IntFilter<"TicketTransaction"> | number
    memberId?: StringFilter<"TicketTransaction"> | string
    ticketCode?: StringFilter<"TicketTransaction"> | string
    createdAt?: DateTimeFilter<"TicketTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"TicketTransaction"> | Date | string
    deletedAt?: DateTimeNullableFilter<"TicketTransaction"> | Date | string | null
  }

  export type MemberCreateWithoutVerificationCodesInput = {
    id?: string
    email: string
    phoneNumber: string
    firstName: string
    lastName?: string | null
    birthDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    eventPromoAccepted?: boolean
    personalDataConsentAccepted: boolean
    termsPrivacyAccepted: boolean
    sex: $Enums.Sex
    isEmailVerified?: boolean
    countryPhone: CountryPhoneCreateNestedOneWithoutMembersInput
    creatorProfile?: CreatorProfileCreateNestedOneWithoutMemberInput
    ticketTransactions?: TicketTransactionCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutVerificationCodesInput = {
    id?: string
    email: string
    countryPhoneId: number
    phoneNumber: string
    firstName: string
    lastName?: string | null
    birthDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    eventPromoAccepted?: boolean
    personalDataConsentAccepted: boolean
    termsPrivacyAccepted: boolean
    sex: $Enums.Sex
    isEmailVerified?: boolean
    creatorProfile?: CreatorProfileUncheckedCreateNestedOneWithoutMemberInput
    ticketTransactions?: TicketTransactionUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutVerificationCodesInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutVerificationCodesInput, MemberUncheckedCreateWithoutVerificationCodesInput>
  }

  export type MemberUpsertWithoutVerificationCodesInput = {
    update: XOR<MemberUpdateWithoutVerificationCodesInput, MemberUncheckedUpdateWithoutVerificationCodesInput>
    create: XOR<MemberCreateWithoutVerificationCodesInput, MemberUncheckedCreateWithoutVerificationCodesInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutVerificationCodesInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutVerificationCodesInput, MemberUncheckedUpdateWithoutVerificationCodesInput>
  }

  export type MemberUpdateWithoutVerificationCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventPromoAccepted?: BoolFieldUpdateOperationsInput | boolean
    personalDataConsentAccepted?: BoolFieldUpdateOperationsInput | boolean
    termsPrivacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    countryPhone?: CountryPhoneUpdateOneRequiredWithoutMembersNestedInput
    creatorProfile?: CreatorProfileUpdateOneWithoutMemberNestedInput
    ticketTransactions?: TicketTransactionUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutVerificationCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    countryPhoneId?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventPromoAccepted?: BoolFieldUpdateOperationsInput | boolean
    personalDataConsentAccepted?: BoolFieldUpdateOperationsInput | boolean
    termsPrivacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    creatorProfile?: CreatorProfileUncheckedUpdateOneWithoutMemberNestedInput
    ticketTransactions?: TicketTransactionUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateWithoutCreatorProfileInput = {
    id?: string
    email: string
    phoneNumber: string
    firstName: string
    lastName?: string | null
    birthDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    eventPromoAccepted?: boolean
    personalDataConsentAccepted: boolean
    termsPrivacyAccepted: boolean
    sex: $Enums.Sex
    isEmailVerified?: boolean
    countryPhone: CountryPhoneCreateNestedOneWithoutMembersInput
    verificationCodes?: VerificationCodeCreateNestedManyWithoutMemberInput
    ticketTransactions?: TicketTransactionCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutCreatorProfileInput = {
    id?: string
    email: string
    countryPhoneId: number
    phoneNumber: string
    firstName: string
    lastName?: string | null
    birthDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    eventPromoAccepted?: boolean
    personalDataConsentAccepted: boolean
    termsPrivacyAccepted: boolean
    sex: $Enums.Sex
    isEmailVerified?: boolean
    verificationCodes?: VerificationCodeUncheckedCreateNestedManyWithoutMemberInput
    ticketTransactions?: TicketTransactionUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutCreatorProfileInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutCreatorProfileInput, MemberUncheckedCreateWithoutCreatorProfileInput>
  }

  export type CountryPhoneCreateWithoutCreatorProfileInput = {
    name: string
    code: string
    mobileCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    members?: MemberCreateNestedManyWithoutCountryPhoneInput
    events?: EventCreateNestedManyWithoutEventCPCountryPhoneInput
    ticketTransactionDetails?: TicketTransactionDetailCreateNestedManyWithoutOrderCountryPhoneInput
  }

  export type CountryPhoneUncheckedCreateWithoutCreatorProfileInput = {
    id?: number
    name: string
    code: string
    mobileCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    members?: MemberUncheckedCreateNestedManyWithoutCountryPhoneInput
    events?: EventUncheckedCreateNestedManyWithoutEventCPCountryPhoneInput
    ticketTransactionDetails?: TicketTransactionDetailUncheckedCreateNestedManyWithoutOrderCountryPhoneInput
  }

  export type CountryPhoneCreateOrConnectWithoutCreatorProfileInput = {
    where: CountryPhoneWhereUniqueInput
    create: XOR<CountryPhoneCreateWithoutCreatorProfileInput, CountryPhoneUncheckedCreateWithoutCreatorProfileInput>
  }

  export type EventCreateWithoutCreatorInput = {
    eventName: string
    eventTag?: string | null
    isPrivateEvent?: boolean
    organizerName: string
    organizerLogoImgUrl?: string | null
    bannerImgUrl?: string | null
    eventStartDate: string
    eventEndDate: string
    eventStartTime: string
    eventEndTime: string
    eventLocation: string
    eventDesc?: string | null
    ticketType: $Enums.TicketType
    ticketName: string
    ticketQty: number
    ticketPrice?: number
    ticketDesc?: string | null
    ticketTermsAndCondition?: string | null
    ticketStartDate: string
    ticketEndDate: string
    eventCPName: string
    eventCPEmail: string
    eventCPPhone: string
    idCardStatus?: $Enums.TicketIDCard
    maxTicketPerTransaction: number
    oneEmailOneTransaction?: boolean
    ticketDataFormUnique?: boolean
    isDraft?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    eventFormat: EventFormatCreateNestedOneWithoutEventInput
    eventTopic: EventTopicCreateNestedOneWithoutEventInput
    eventCPCountryPhone: CountryPhoneCreateNestedOneWithoutEventsInput
    ticketTransactions?: TicketTransactionCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutCreatorInput = {
    id?: number
    eventName: string
    eventFormatId: number
    eventTopicId: number
    eventTag?: string | null
    isPrivateEvent?: boolean
    organizerName: string
    organizerLogoImgUrl?: string | null
    bannerImgUrl?: string | null
    eventStartDate: string
    eventEndDate: string
    eventStartTime: string
    eventEndTime: string
    eventLocation: string
    eventDesc?: string | null
    ticketType: $Enums.TicketType
    ticketName: string
    ticketQty: number
    ticketPrice?: number
    ticketDesc?: string | null
    ticketTermsAndCondition?: string | null
    ticketStartDate: string
    ticketEndDate: string
    eventCPName: string
    eventCPEmail: string
    eventCPCountryPhoneId: number
    eventCPPhone: string
    idCardStatus?: $Enums.TicketIDCard
    maxTicketPerTransaction: number
    oneEmailOneTransaction?: boolean
    ticketDataFormUnique?: boolean
    isDraft?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ticketTransactions?: TicketTransactionUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutCreatorInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutCreatorInput, EventUncheckedCreateWithoutCreatorInput>
  }

  export type EventCreateManyCreatorInputEnvelope = {
    data: EventCreateManyCreatorInput | EventCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type MemberUpsertWithoutCreatorProfileInput = {
    update: XOR<MemberUpdateWithoutCreatorProfileInput, MemberUncheckedUpdateWithoutCreatorProfileInput>
    create: XOR<MemberCreateWithoutCreatorProfileInput, MemberUncheckedCreateWithoutCreatorProfileInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutCreatorProfileInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutCreatorProfileInput, MemberUncheckedUpdateWithoutCreatorProfileInput>
  }

  export type MemberUpdateWithoutCreatorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventPromoAccepted?: BoolFieldUpdateOperationsInput | boolean
    personalDataConsentAccepted?: BoolFieldUpdateOperationsInput | boolean
    termsPrivacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    countryPhone?: CountryPhoneUpdateOneRequiredWithoutMembersNestedInput
    verificationCodes?: VerificationCodeUpdateManyWithoutMemberNestedInput
    ticketTransactions?: TicketTransactionUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutCreatorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    countryPhoneId?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventPromoAccepted?: BoolFieldUpdateOperationsInput | boolean
    personalDataConsentAccepted?: BoolFieldUpdateOperationsInput | boolean
    termsPrivacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationCodes?: VerificationCodeUncheckedUpdateManyWithoutMemberNestedInput
    ticketTransactions?: TicketTransactionUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type CountryPhoneUpsertWithoutCreatorProfileInput = {
    update: XOR<CountryPhoneUpdateWithoutCreatorProfileInput, CountryPhoneUncheckedUpdateWithoutCreatorProfileInput>
    create: XOR<CountryPhoneCreateWithoutCreatorProfileInput, CountryPhoneUncheckedCreateWithoutCreatorProfileInput>
    where?: CountryPhoneWhereInput
  }

  export type CountryPhoneUpdateToOneWithWhereWithoutCreatorProfileInput = {
    where?: CountryPhoneWhereInput
    data: XOR<CountryPhoneUpdateWithoutCreatorProfileInput, CountryPhoneUncheckedUpdateWithoutCreatorProfileInput>
  }

  export type CountryPhoneUpdateWithoutCreatorProfileInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mobileCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: MemberUpdateManyWithoutCountryPhoneNestedInput
    events?: EventUpdateManyWithoutEventCPCountryPhoneNestedInput
    ticketTransactionDetails?: TicketTransactionDetailUpdateManyWithoutOrderCountryPhoneNestedInput
  }

  export type CountryPhoneUncheckedUpdateWithoutCreatorProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mobileCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: MemberUncheckedUpdateManyWithoutCountryPhoneNestedInput
    events?: EventUncheckedUpdateManyWithoutEventCPCountryPhoneNestedInput
    ticketTransactionDetails?: TicketTransactionDetailUncheckedUpdateManyWithoutOrderCountryPhoneNestedInput
  }

  export type EventUpsertWithWhereUniqueWithoutCreatorInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutCreatorInput, EventUncheckedUpdateWithoutCreatorInput>
    create: XOR<EventCreateWithoutCreatorInput, EventUncheckedCreateWithoutCreatorInput>
  }

  export type EventUpdateWithWhereUniqueWithoutCreatorInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutCreatorInput, EventUncheckedUpdateWithoutCreatorInput>
  }

  export type EventUpdateManyWithWhereWithoutCreatorInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutCreatorInput>
  }

  export type CreatorProfileCreateWithoutEventInput = {
    id?: string
    bannerImgUrl?: string | null
    logoImgUrl?: string | null
    profileLinkUrl: string
    creatorPhoneNumber?: string | null
    address?: string | null
    aboutUsInfo?: string | null
    xUserName?: string | null
    igUserName?: string | null
    fbProfileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    member: MemberCreateNestedOneWithoutCreatorProfileInput
    countryPhone?: CountryPhoneCreateNestedOneWithoutCreatorProfileInput
  }

  export type CreatorProfileUncheckedCreateWithoutEventInput = {
    id?: string
    memberId: string
    bannerImgUrl?: string | null
    logoImgUrl?: string | null
    profileLinkUrl: string
    countryPhoneId?: number | null
    creatorPhoneNumber?: string | null
    address?: string | null
    aboutUsInfo?: string | null
    xUserName?: string | null
    igUserName?: string | null
    fbProfileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type CreatorProfileCreateOrConnectWithoutEventInput = {
    where: CreatorProfileWhereUniqueInput
    create: XOR<CreatorProfileCreateWithoutEventInput, CreatorProfileUncheckedCreateWithoutEventInput>
  }

  export type EventFormatCreateWithoutEventInput = {
    formatName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EventFormatUncheckedCreateWithoutEventInput = {
    id?: number
    formatName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EventFormatCreateOrConnectWithoutEventInput = {
    where: EventFormatWhereUniqueInput
    create: XOR<EventFormatCreateWithoutEventInput, EventFormatUncheckedCreateWithoutEventInput>
  }

  export type EventTopicCreateWithoutEventInput = {
    topicName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EventTopicUncheckedCreateWithoutEventInput = {
    id?: number
    topicName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EventTopicCreateOrConnectWithoutEventInput = {
    where: EventTopicWhereUniqueInput
    create: XOR<EventTopicCreateWithoutEventInput, EventTopicUncheckedCreateWithoutEventInput>
  }

  export type CountryPhoneCreateWithoutEventsInput = {
    name: string
    code: string
    mobileCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    members?: MemberCreateNestedManyWithoutCountryPhoneInput
    creatorProfile?: CreatorProfileCreateNestedManyWithoutCountryPhoneInput
    ticketTransactionDetails?: TicketTransactionDetailCreateNestedManyWithoutOrderCountryPhoneInput
  }

  export type CountryPhoneUncheckedCreateWithoutEventsInput = {
    id?: number
    name: string
    code: string
    mobileCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    members?: MemberUncheckedCreateNestedManyWithoutCountryPhoneInput
    creatorProfile?: CreatorProfileUncheckedCreateNestedManyWithoutCountryPhoneInput
    ticketTransactionDetails?: TicketTransactionDetailUncheckedCreateNestedManyWithoutOrderCountryPhoneInput
  }

  export type CountryPhoneCreateOrConnectWithoutEventsInput = {
    where: CountryPhoneWhereUniqueInput
    create: XOR<CountryPhoneCreateWithoutEventsInput, CountryPhoneUncheckedCreateWithoutEventsInput>
  }

  export type TicketTransactionCreateWithoutEventInput = {
    ticketCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    member: MemberCreateNestedOneWithoutTicketTransactionsInput
    ticketTransactionDetails?: TicketTransactionDetailCreateNestedManyWithoutTicketTransactionsInput
  }

  export type TicketTransactionUncheckedCreateWithoutEventInput = {
    id?: number
    memberId: string
    ticketCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ticketTransactionDetails?: TicketTransactionDetailUncheckedCreateNestedManyWithoutTicketTransactionsInput
  }

  export type TicketTransactionCreateOrConnectWithoutEventInput = {
    where: TicketTransactionWhereUniqueInput
    create: XOR<TicketTransactionCreateWithoutEventInput, TicketTransactionUncheckedCreateWithoutEventInput>
  }

  export type TicketTransactionCreateManyEventInputEnvelope = {
    data: TicketTransactionCreateManyEventInput | TicketTransactionCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type CreatorProfileUpsertWithoutEventInput = {
    update: XOR<CreatorProfileUpdateWithoutEventInput, CreatorProfileUncheckedUpdateWithoutEventInput>
    create: XOR<CreatorProfileCreateWithoutEventInput, CreatorProfileUncheckedCreateWithoutEventInput>
    where?: CreatorProfileWhereInput
  }

  export type CreatorProfileUpdateToOneWithWhereWithoutEventInput = {
    where?: CreatorProfileWhereInput
    data: XOR<CreatorProfileUpdateWithoutEventInput, CreatorProfileUncheckedUpdateWithoutEventInput>
  }

  export type CreatorProfileUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileLinkUrl?: StringFieldUpdateOperationsInput | string
    creatorPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    aboutUsInfo?: NullableStringFieldUpdateOperationsInput | string | null
    xUserName?: NullableStringFieldUpdateOperationsInput | string | null
    igUserName?: NullableStringFieldUpdateOperationsInput | string | null
    fbProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: MemberUpdateOneRequiredWithoutCreatorProfileNestedInput
    countryPhone?: CountryPhoneUpdateOneWithoutCreatorProfileNestedInput
  }

  export type CreatorProfileUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileLinkUrl?: StringFieldUpdateOperationsInput | string
    countryPhoneId?: NullableIntFieldUpdateOperationsInput | number | null
    creatorPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    aboutUsInfo?: NullableStringFieldUpdateOperationsInput | string | null
    xUserName?: NullableStringFieldUpdateOperationsInput | string | null
    igUserName?: NullableStringFieldUpdateOperationsInput | string | null
    fbProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventFormatUpsertWithoutEventInput = {
    update: XOR<EventFormatUpdateWithoutEventInput, EventFormatUncheckedUpdateWithoutEventInput>
    create: XOR<EventFormatCreateWithoutEventInput, EventFormatUncheckedCreateWithoutEventInput>
    where?: EventFormatWhereInput
  }

  export type EventFormatUpdateToOneWithWhereWithoutEventInput = {
    where?: EventFormatWhereInput
    data: XOR<EventFormatUpdateWithoutEventInput, EventFormatUncheckedUpdateWithoutEventInput>
  }

  export type EventFormatUpdateWithoutEventInput = {
    formatName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventFormatUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    formatName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventTopicUpsertWithoutEventInput = {
    update: XOR<EventTopicUpdateWithoutEventInput, EventTopicUncheckedUpdateWithoutEventInput>
    create: XOR<EventTopicCreateWithoutEventInput, EventTopicUncheckedCreateWithoutEventInput>
    where?: EventTopicWhereInput
  }

  export type EventTopicUpdateToOneWithWhereWithoutEventInput = {
    where?: EventTopicWhereInput
    data: XOR<EventTopicUpdateWithoutEventInput, EventTopicUncheckedUpdateWithoutEventInput>
  }

  export type EventTopicUpdateWithoutEventInput = {
    topicName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventTopicUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    topicName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CountryPhoneUpsertWithoutEventsInput = {
    update: XOR<CountryPhoneUpdateWithoutEventsInput, CountryPhoneUncheckedUpdateWithoutEventsInput>
    create: XOR<CountryPhoneCreateWithoutEventsInput, CountryPhoneUncheckedCreateWithoutEventsInput>
    where?: CountryPhoneWhereInput
  }

  export type CountryPhoneUpdateToOneWithWhereWithoutEventsInput = {
    where?: CountryPhoneWhereInput
    data: XOR<CountryPhoneUpdateWithoutEventsInput, CountryPhoneUncheckedUpdateWithoutEventsInput>
  }

  export type CountryPhoneUpdateWithoutEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mobileCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: MemberUpdateManyWithoutCountryPhoneNestedInput
    creatorProfile?: CreatorProfileUpdateManyWithoutCountryPhoneNestedInput
    ticketTransactionDetails?: TicketTransactionDetailUpdateManyWithoutOrderCountryPhoneNestedInput
  }

  export type CountryPhoneUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mobileCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: MemberUncheckedUpdateManyWithoutCountryPhoneNestedInput
    creatorProfile?: CreatorProfileUncheckedUpdateManyWithoutCountryPhoneNestedInput
    ticketTransactionDetails?: TicketTransactionDetailUncheckedUpdateManyWithoutOrderCountryPhoneNestedInput
  }

  export type TicketTransactionUpsertWithWhereUniqueWithoutEventInput = {
    where: TicketTransactionWhereUniqueInput
    update: XOR<TicketTransactionUpdateWithoutEventInput, TicketTransactionUncheckedUpdateWithoutEventInput>
    create: XOR<TicketTransactionCreateWithoutEventInput, TicketTransactionUncheckedCreateWithoutEventInput>
  }

  export type TicketTransactionUpdateWithWhereUniqueWithoutEventInput = {
    where: TicketTransactionWhereUniqueInput
    data: XOR<TicketTransactionUpdateWithoutEventInput, TicketTransactionUncheckedUpdateWithoutEventInput>
  }

  export type TicketTransactionUpdateManyWithWhereWithoutEventInput = {
    where: TicketTransactionScalarWhereInput
    data: XOR<TicketTransactionUpdateManyMutationInput, TicketTransactionUncheckedUpdateManyWithoutEventInput>
  }

  export type EventCreateWithoutEventFormatInput = {
    eventName: string
    eventTag?: string | null
    isPrivateEvent?: boolean
    organizerName: string
    organizerLogoImgUrl?: string | null
    bannerImgUrl?: string | null
    eventStartDate: string
    eventEndDate: string
    eventStartTime: string
    eventEndTime: string
    eventLocation: string
    eventDesc?: string | null
    ticketType: $Enums.TicketType
    ticketName: string
    ticketQty: number
    ticketPrice?: number
    ticketDesc?: string | null
    ticketTermsAndCondition?: string | null
    ticketStartDate: string
    ticketEndDate: string
    eventCPName: string
    eventCPEmail: string
    eventCPPhone: string
    idCardStatus?: $Enums.TicketIDCard
    maxTicketPerTransaction: number
    oneEmailOneTransaction?: boolean
    ticketDataFormUnique?: boolean
    isDraft?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    creator: CreatorProfileCreateNestedOneWithoutEventInput
    eventTopic: EventTopicCreateNestedOneWithoutEventInput
    eventCPCountryPhone: CountryPhoneCreateNestedOneWithoutEventsInput
    ticketTransactions?: TicketTransactionCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutEventFormatInput = {
    id?: number
    creatorId: string
    eventName: string
    eventTopicId: number
    eventTag?: string | null
    isPrivateEvent?: boolean
    organizerName: string
    organizerLogoImgUrl?: string | null
    bannerImgUrl?: string | null
    eventStartDate: string
    eventEndDate: string
    eventStartTime: string
    eventEndTime: string
    eventLocation: string
    eventDesc?: string | null
    ticketType: $Enums.TicketType
    ticketName: string
    ticketQty: number
    ticketPrice?: number
    ticketDesc?: string | null
    ticketTermsAndCondition?: string | null
    ticketStartDate: string
    ticketEndDate: string
    eventCPName: string
    eventCPEmail: string
    eventCPCountryPhoneId: number
    eventCPPhone: string
    idCardStatus?: $Enums.TicketIDCard
    maxTicketPerTransaction: number
    oneEmailOneTransaction?: boolean
    ticketDataFormUnique?: boolean
    isDraft?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ticketTransactions?: TicketTransactionUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutEventFormatInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEventFormatInput, EventUncheckedCreateWithoutEventFormatInput>
  }

  export type EventCreateManyEventFormatInputEnvelope = {
    data: EventCreateManyEventFormatInput | EventCreateManyEventFormatInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutEventFormatInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutEventFormatInput, EventUncheckedUpdateWithoutEventFormatInput>
    create: XOR<EventCreateWithoutEventFormatInput, EventUncheckedCreateWithoutEventFormatInput>
  }

  export type EventUpdateWithWhereUniqueWithoutEventFormatInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutEventFormatInput, EventUncheckedUpdateWithoutEventFormatInput>
  }

  export type EventUpdateManyWithWhereWithoutEventFormatInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutEventFormatInput>
  }

  export type EventCreateWithoutEventTopicInput = {
    eventName: string
    eventTag?: string | null
    isPrivateEvent?: boolean
    organizerName: string
    organizerLogoImgUrl?: string | null
    bannerImgUrl?: string | null
    eventStartDate: string
    eventEndDate: string
    eventStartTime: string
    eventEndTime: string
    eventLocation: string
    eventDesc?: string | null
    ticketType: $Enums.TicketType
    ticketName: string
    ticketQty: number
    ticketPrice?: number
    ticketDesc?: string | null
    ticketTermsAndCondition?: string | null
    ticketStartDate: string
    ticketEndDate: string
    eventCPName: string
    eventCPEmail: string
    eventCPPhone: string
    idCardStatus?: $Enums.TicketIDCard
    maxTicketPerTransaction: number
    oneEmailOneTransaction?: boolean
    ticketDataFormUnique?: boolean
    isDraft?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    creator: CreatorProfileCreateNestedOneWithoutEventInput
    eventFormat: EventFormatCreateNestedOneWithoutEventInput
    eventCPCountryPhone: CountryPhoneCreateNestedOneWithoutEventsInput
    ticketTransactions?: TicketTransactionCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutEventTopicInput = {
    id?: number
    creatorId: string
    eventName: string
    eventFormatId: number
    eventTag?: string | null
    isPrivateEvent?: boolean
    organizerName: string
    organizerLogoImgUrl?: string | null
    bannerImgUrl?: string | null
    eventStartDate: string
    eventEndDate: string
    eventStartTime: string
    eventEndTime: string
    eventLocation: string
    eventDesc?: string | null
    ticketType: $Enums.TicketType
    ticketName: string
    ticketQty: number
    ticketPrice?: number
    ticketDesc?: string | null
    ticketTermsAndCondition?: string | null
    ticketStartDate: string
    ticketEndDate: string
    eventCPName: string
    eventCPEmail: string
    eventCPCountryPhoneId: number
    eventCPPhone: string
    idCardStatus?: $Enums.TicketIDCard
    maxTicketPerTransaction: number
    oneEmailOneTransaction?: boolean
    ticketDataFormUnique?: boolean
    isDraft?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    ticketTransactions?: TicketTransactionUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutEventTopicInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEventTopicInput, EventUncheckedCreateWithoutEventTopicInput>
  }

  export type EventCreateManyEventTopicInputEnvelope = {
    data: EventCreateManyEventTopicInput | EventCreateManyEventTopicInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutEventTopicInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutEventTopicInput, EventUncheckedUpdateWithoutEventTopicInput>
    create: XOR<EventCreateWithoutEventTopicInput, EventUncheckedCreateWithoutEventTopicInput>
  }

  export type EventUpdateWithWhereUniqueWithoutEventTopicInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutEventTopicInput, EventUncheckedUpdateWithoutEventTopicInput>
  }

  export type EventUpdateManyWithWhereWithoutEventTopicInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutEventTopicInput>
  }

  export type EventCreateWithoutTicketTransactionsInput = {
    eventName: string
    eventTag?: string | null
    isPrivateEvent?: boolean
    organizerName: string
    organizerLogoImgUrl?: string | null
    bannerImgUrl?: string | null
    eventStartDate: string
    eventEndDate: string
    eventStartTime: string
    eventEndTime: string
    eventLocation: string
    eventDesc?: string | null
    ticketType: $Enums.TicketType
    ticketName: string
    ticketQty: number
    ticketPrice?: number
    ticketDesc?: string | null
    ticketTermsAndCondition?: string | null
    ticketStartDate: string
    ticketEndDate: string
    eventCPName: string
    eventCPEmail: string
    eventCPPhone: string
    idCardStatus?: $Enums.TicketIDCard
    maxTicketPerTransaction: number
    oneEmailOneTransaction?: boolean
    ticketDataFormUnique?: boolean
    isDraft?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    creator: CreatorProfileCreateNestedOneWithoutEventInput
    eventFormat: EventFormatCreateNestedOneWithoutEventInput
    eventTopic: EventTopicCreateNestedOneWithoutEventInput
    eventCPCountryPhone: CountryPhoneCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutTicketTransactionsInput = {
    id?: number
    creatorId: string
    eventName: string
    eventFormatId: number
    eventTopicId: number
    eventTag?: string | null
    isPrivateEvent?: boolean
    organizerName: string
    organizerLogoImgUrl?: string | null
    bannerImgUrl?: string | null
    eventStartDate: string
    eventEndDate: string
    eventStartTime: string
    eventEndTime: string
    eventLocation: string
    eventDesc?: string | null
    ticketType: $Enums.TicketType
    ticketName: string
    ticketQty: number
    ticketPrice?: number
    ticketDesc?: string | null
    ticketTermsAndCondition?: string | null
    ticketStartDate: string
    ticketEndDate: string
    eventCPName: string
    eventCPEmail: string
    eventCPCountryPhoneId: number
    eventCPPhone: string
    idCardStatus?: $Enums.TicketIDCard
    maxTicketPerTransaction: number
    oneEmailOneTransaction?: boolean
    ticketDataFormUnique?: boolean
    isDraft?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EventCreateOrConnectWithoutTicketTransactionsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTicketTransactionsInput, EventUncheckedCreateWithoutTicketTransactionsInput>
  }

  export type MemberCreateWithoutTicketTransactionsInput = {
    id?: string
    email: string
    phoneNumber: string
    firstName: string
    lastName?: string | null
    birthDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    eventPromoAccepted?: boolean
    personalDataConsentAccepted: boolean
    termsPrivacyAccepted: boolean
    sex: $Enums.Sex
    isEmailVerified?: boolean
    countryPhone: CountryPhoneCreateNestedOneWithoutMembersInput
    verificationCodes?: VerificationCodeCreateNestedManyWithoutMemberInput
    creatorProfile?: CreatorProfileCreateNestedOneWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutTicketTransactionsInput = {
    id?: string
    email: string
    countryPhoneId: number
    phoneNumber: string
    firstName: string
    lastName?: string | null
    birthDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    eventPromoAccepted?: boolean
    personalDataConsentAccepted: boolean
    termsPrivacyAccepted: boolean
    sex: $Enums.Sex
    isEmailVerified?: boolean
    verificationCodes?: VerificationCodeUncheckedCreateNestedManyWithoutMemberInput
    creatorProfile?: CreatorProfileUncheckedCreateNestedOneWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutTicketTransactionsInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutTicketTransactionsInput, MemberUncheckedCreateWithoutTicketTransactionsInput>
  }

  export type TicketTransactionDetailCreateWithoutTicketTransactionsInput = {
    orderName: string
    orderEmail: string
    orderBirthDate: string
    orderSex: $Enums.Sex
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    orderCountryPhone: CountryPhoneCreateNestedOneWithoutTicketTransactionDetailsInput
  }

  export type TicketTransactionDetailUncheckedCreateWithoutTicketTransactionsInput = {
    id?: number
    orderName: string
    orderCountryPhoneId: number
    orderEmail: string
    orderBirthDate: string
    orderSex: $Enums.Sex
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TicketTransactionDetailCreateOrConnectWithoutTicketTransactionsInput = {
    where: TicketTransactionDetailWhereUniqueInput
    create: XOR<TicketTransactionDetailCreateWithoutTicketTransactionsInput, TicketTransactionDetailUncheckedCreateWithoutTicketTransactionsInput>
  }

  export type TicketTransactionDetailCreateManyTicketTransactionsInputEnvelope = {
    data: TicketTransactionDetailCreateManyTicketTransactionsInput | TicketTransactionDetailCreateManyTicketTransactionsInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutTicketTransactionsInput = {
    update: XOR<EventUpdateWithoutTicketTransactionsInput, EventUncheckedUpdateWithoutTicketTransactionsInput>
    create: XOR<EventCreateWithoutTicketTransactionsInput, EventUncheckedCreateWithoutTicketTransactionsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTicketTransactionsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTicketTransactionsInput, EventUncheckedUpdateWithoutTicketTransactionsInput>
  }

  export type EventUpdateWithoutTicketTransactionsInput = {
    eventName?: StringFieldUpdateOperationsInput | string
    eventTag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivateEvent?: BoolFieldUpdateOperationsInput | boolean
    organizerName?: StringFieldUpdateOperationsInput | string
    organizerLogoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: StringFieldUpdateOperationsInput | string
    eventEndDate?: StringFieldUpdateOperationsInput | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    eventDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketName?: StringFieldUpdateOperationsInput | string
    ticketQty?: IntFieldUpdateOperationsInput | number
    ticketPrice?: IntFieldUpdateOperationsInput | number
    ticketDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketTermsAndCondition?: NullableStringFieldUpdateOperationsInput | string | null
    ticketStartDate?: StringFieldUpdateOperationsInput | string
    ticketEndDate?: StringFieldUpdateOperationsInput | string
    eventCPName?: StringFieldUpdateOperationsInput | string
    eventCPEmail?: StringFieldUpdateOperationsInput | string
    eventCPPhone?: StringFieldUpdateOperationsInput | string
    idCardStatus?: EnumTicketIDCardFieldUpdateOperationsInput | $Enums.TicketIDCard
    maxTicketPerTransaction?: IntFieldUpdateOperationsInput | number
    oneEmailOneTransaction?: BoolFieldUpdateOperationsInput | boolean
    ticketDataFormUnique?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: CreatorProfileUpdateOneRequiredWithoutEventNestedInput
    eventFormat?: EventFormatUpdateOneRequiredWithoutEventNestedInput
    eventTopic?: EventTopicUpdateOneRequiredWithoutEventNestedInput
    eventCPCountryPhone?: CountryPhoneUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutTicketTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    eventFormatId?: IntFieldUpdateOperationsInput | number
    eventTopicId?: IntFieldUpdateOperationsInput | number
    eventTag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivateEvent?: BoolFieldUpdateOperationsInput | boolean
    organizerName?: StringFieldUpdateOperationsInput | string
    organizerLogoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: StringFieldUpdateOperationsInput | string
    eventEndDate?: StringFieldUpdateOperationsInput | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    eventDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketName?: StringFieldUpdateOperationsInput | string
    ticketQty?: IntFieldUpdateOperationsInput | number
    ticketPrice?: IntFieldUpdateOperationsInput | number
    ticketDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketTermsAndCondition?: NullableStringFieldUpdateOperationsInput | string | null
    ticketStartDate?: StringFieldUpdateOperationsInput | string
    ticketEndDate?: StringFieldUpdateOperationsInput | string
    eventCPName?: StringFieldUpdateOperationsInput | string
    eventCPEmail?: StringFieldUpdateOperationsInput | string
    eventCPCountryPhoneId?: IntFieldUpdateOperationsInput | number
    eventCPPhone?: StringFieldUpdateOperationsInput | string
    idCardStatus?: EnumTicketIDCardFieldUpdateOperationsInput | $Enums.TicketIDCard
    maxTicketPerTransaction?: IntFieldUpdateOperationsInput | number
    oneEmailOneTransaction?: BoolFieldUpdateOperationsInput | boolean
    ticketDataFormUnique?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MemberUpsertWithoutTicketTransactionsInput = {
    update: XOR<MemberUpdateWithoutTicketTransactionsInput, MemberUncheckedUpdateWithoutTicketTransactionsInput>
    create: XOR<MemberCreateWithoutTicketTransactionsInput, MemberUncheckedCreateWithoutTicketTransactionsInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutTicketTransactionsInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutTicketTransactionsInput, MemberUncheckedUpdateWithoutTicketTransactionsInput>
  }

  export type MemberUpdateWithoutTicketTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventPromoAccepted?: BoolFieldUpdateOperationsInput | boolean
    personalDataConsentAccepted?: BoolFieldUpdateOperationsInput | boolean
    termsPrivacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    countryPhone?: CountryPhoneUpdateOneRequiredWithoutMembersNestedInput
    verificationCodes?: VerificationCodeUpdateManyWithoutMemberNestedInput
    creatorProfile?: CreatorProfileUpdateOneWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutTicketTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    countryPhoneId?: IntFieldUpdateOperationsInput | number
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventPromoAccepted?: BoolFieldUpdateOperationsInput | boolean
    personalDataConsentAccepted?: BoolFieldUpdateOperationsInput | boolean
    termsPrivacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationCodes?: VerificationCodeUncheckedUpdateManyWithoutMemberNestedInput
    creatorProfile?: CreatorProfileUncheckedUpdateOneWithoutMemberNestedInput
  }

  export type TicketTransactionDetailUpsertWithWhereUniqueWithoutTicketTransactionsInput = {
    where: TicketTransactionDetailWhereUniqueInput
    update: XOR<TicketTransactionDetailUpdateWithoutTicketTransactionsInput, TicketTransactionDetailUncheckedUpdateWithoutTicketTransactionsInput>
    create: XOR<TicketTransactionDetailCreateWithoutTicketTransactionsInput, TicketTransactionDetailUncheckedCreateWithoutTicketTransactionsInput>
  }

  export type TicketTransactionDetailUpdateWithWhereUniqueWithoutTicketTransactionsInput = {
    where: TicketTransactionDetailWhereUniqueInput
    data: XOR<TicketTransactionDetailUpdateWithoutTicketTransactionsInput, TicketTransactionDetailUncheckedUpdateWithoutTicketTransactionsInput>
  }

  export type TicketTransactionDetailUpdateManyWithWhereWithoutTicketTransactionsInput = {
    where: TicketTransactionDetailScalarWhereInput
    data: XOR<TicketTransactionDetailUpdateManyMutationInput, TicketTransactionDetailUncheckedUpdateManyWithoutTicketTransactionsInput>
  }

  export type TicketTransactionCreateWithoutTicketTransactionDetailsInput = {
    ticketCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    event: EventCreateNestedOneWithoutTicketTransactionsInput
    member: MemberCreateNestedOneWithoutTicketTransactionsInput
  }

  export type TicketTransactionUncheckedCreateWithoutTicketTransactionDetailsInput = {
    id?: number
    eventId: number
    memberId: string
    ticketCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TicketTransactionCreateOrConnectWithoutTicketTransactionDetailsInput = {
    where: TicketTransactionWhereUniqueInput
    create: XOR<TicketTransactionCreateWithoutTicketTransactionDetailsInput, TicketTransactionUncheckedCreateWithoutTicketTransactionDetailsInput>
  }

  export type CountryPhoneCreateWithoutTicketTransactionDetailsInput = {
    name: string
    code: string
    mobileCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    members?: MemberCreateNestedManyWithoutCountryPhoneInput
    creatorProfile?: CreatorProfileCreateNestedManyWithoutCountryPhoneInput
    events?: EventCreateNestedManyWithoutEventCPCountryPhoneInput
  }

  export type CountryPhoneUncheckedCreateWithoutTicketTransactionDetailsInput = {
    id?: number
    name: string
    code: string
    mobileCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    members?: MemberUncheckedCreateNestedManyWithoutCountryPhoneInput
    creatorProfile?: CreatorProfileUncheckedCreateNestedManyWithoutCountryPhoneInput
    events?: EventUncheckedCreateNestedManyWithoutEventCPCountryPhoneInput
  }

  export type CountryPhoneCreateOrConnectWithoutTicketTransactionDetailsInput = {
    where: CountryPhoneWhereUniqueInput
    create: XOR<CountryPhoneCreateWithoutTicketTransactionDetailsInput, CountryPhoneUncheckedCreateWithoutTicketTransactionDetailsInput>
  }

  export type TicketTransactionUpsertWithoutTicketTransactionDetailsInput = {
    update: XOR<TicketTransactionUpdateWithoutTicketTransactionDetailsInput, TicketTransactionUncheckedUpdateWithoutTicketTransactionDetailsInput>
    create: XOR<TicketTransactionCreateWithoutTicketTransactionDetailsInput, TicketTransactionUncheckedCreateWithoutTicketTransactionDetailsInput>
    where?: TicketTransactionWhereInput
  }

  export type TicketTransactionUpdateToOneWithWhereWithoutTicketTransactionDetailsInput = {
    where?: TicketTransactionWhereInput
    data: XOR<TicketTransactionUpdateWithoutTicketTransactionDetailsInput, TicketTransactionUncheckedUpdateWithoutTicketTransactionDetailsInput>
  }

  export type TicketTransactionUpdateWithoutTicketTransactionDetailsInput = {
    ticketCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUpdateOneRequiredWithoutTicketTransactionsNestedInput
    member?: MemberUpdateOneRequiredWithoutTicketTransactionsNestedInput
  }

  export type TicketTransactionUncheckedUpdateWithoutTicketTransactionDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    memberId?: StringFieldUpdateOperationsInput | string
    ticketCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CountryPhoneUpsertWithoutTicketTransactionDetailsInput = {
    update: XOR<CountryPhoneUpdateWithoutTicketTransactionDetailsInput, CountryPhoneUncheckedUpdateWithoutTicketTransactionDetailsInput>
    create: XOR<CountryPhoneCreateWithoutTicketTransactionDetailsInput, CountryPhoneUncheckedCreateWithoutTicketTransactionDetailsInput>
    where?: CountryPhoneWhereInput
  }

  export type CountryPhoneUpdateToOneWithWhereWithoutTicketTransactionDetailsInput = {
    where?: CountryPhoneWhereInput
    data: XOR<CountryPhoneUpdateWithoutTicketTransactionDetailsInput, CountryPhoneUncheckedUpdateWithoutTicketTransactionDetailsInput>
  }

  export type CountryPhoneUpdateWithoutTicketTransactionDetailsInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mobileCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: MemberUpdateManyWithoutCountryPhoneNestedInput
    creatorProfile?: CreatorProfileUpdateManyWithoutCountryPhoneNestedInput
    events?: EventUpdateManyWithoutEventCPCountryPhoneNestedInput
  }

  export type CountryPhoneUncheckedUpdateWithoutTicketTransactionDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    mobileCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    members?: MemberUncheckedUpdateManyWithoutCountryPhoneNestedInput
    creatorProfile?: CreatorProfileUncheckedUpdateManyWithoutCountryPhoneNestedInput
    events?: EventUncheckedUpdateManyWithoutEventCPCountryPhoneNestedInput
  }

  export type MemberCreateManyCountryPhoneInput = {
    id?: string
    email: string
    phoneNumber: string
    firstName: string
    lastName?: string | null
    birthDate: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    eventPromoAccepted?: boolean
    personalDataConsentAccepted: boolean
    termsPrivacyAccepted: boolean
    sex: $Enums.Sex
    isEmailVerified?: boolean
  }

  export type CreatorProfileCreateManyCountryPhoneInput = {
    id?: string
    memberId: string
    bannerImgUrl?: string | null
    logoImgUrl?: string | null
    profileLinkUrl: string
    creatorPhoneNumber?: string | null
    address?: string | null
    aboutUsInfo?: string | null
    xUserName?: string | null
    igUserName?: string | null
    fbProfileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EventCreateManyEventCPCountryPhoneInput = {
    id?: number
    creatorId: string
    eventName: string
    eventFormatId: number
    eventTopicId: number
    eventTag?: string | null
    isPrivateEvent?: boolean
    organizerName: string
    organizerLogoImgUrl?: string | null
    bannerImgUrl?: string | null
    eventStartDate: string
    eventEndDate: string
    eventStartTime: string
    eventEndTime: string
    eventLocation: string
    eventDesc?: string | null
    ticketType: $Enums.TicketType
    ticketName: string
    ticketQty: number
    ticketPrice?: number
    ticketDesc?: string | null
    ticketTermsAndCondition?: string | null
    ticketStartDate: string
    ticketEndDate: string
    eventCPName: string
    eventCPEmail: string
    eventCPPhone: string
    idCardStatus?: $Enums.TicketIDCard
    maxTicketPerTransaction: number
    oneEmailOneTransaction?: boolean
    ticketDataFormUnique?: boolean
    isDraft?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TicketTransactionDetailCreateManyOrderCountryPhoneInput = {
    id?: number
    ticketTransactionId: number
    orderName: string
    orderEmail: string
    orderBirthDate: string
    orderSex: $Enums.Sex
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type MemberUpdateWithoutCountryPhoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventPromoAccepted?: BoolFieldUpdateOperationsInput | boolean
    personalDataConsentAccepted?: BoolFieldUpdateOperationsInput | boolean
    termsPrivacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationCodes?: VerificationCodeUpdateManyWithoutMemberNestedInput
    creatorProfile?: CreatorProfileUpdateOneWithoutMemberNestedInput
    ticketTransactions?: TicketTransactionUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutCountryPhoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventPromoAccepted?: BoolFieldUpdateOperationsInput | boolean
    personalDataConsentAccepted?: BoolFieldUpdateOperationsInput | boolean
    termsPrivacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationCodes?: VerificationCodeUncheckedUpdateManyWithoutMemberNestedInput
    creatorProfile?: CreatorProfileUncheckedUpdateOneWithoutMemberNestedInput
    ticketTransactions?: TicketTransactionUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateManyWithoutCountryPhoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventPromoAccepted?: BoolFieldUpdateOperationsInput | boolean
    personalDataConsentAccepted?: BoolFieldUpdateOperationsInput | boolean
    termsPrivacyAccepted?: BoolFieldUpdateOperationsInput | boolean
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CreatorProfileUpdateWithoutCountryPhoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileLinkUrl?: StringFieldUpdateOperationsInput | string
    creatorPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    aboutUsInfo?: NullableStringFieldUpdateOperationsInput | string | null
    xUserName?: NullableStringFieldUpdateOperationsInput | string | null
    igUserName?: NullableStringFieldUpdateOperationsInput | string | null
    fbProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: MemberUpdateOneRequiredWithoutCreatorProfileNestedInput
    event?: EventUpdateManyWithoutCreatorNestedInput
  }

  export type CreatorProfileUncheckedUpdateWithoutCountryPhoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileLinkUrl?: StringFieldUpdateOperationsInput | string
    creatorPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    aboutUsInfo?: NullableStringFieldUpdateOperationsInput | string | null
    xUserName?: NullableStringFieldUpdateOperationsInput | string | null
    igUserName?: NullableStringFieldUpdateOperationsInput | string | null
    fbProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type CreatorProfileUncheckedUpdateManyWithoutCountryPhoneInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    logoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileLinkUrl?: StringFieldUpdateOperationsInput | string
    creatorPhoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    aboutUsInfo?: NullableStringFieldUpdateOperationsInput | string | null
    xUserName?: NullableStringFieldUpdateOperationsInput | string | null
    igUserName?: NullableStringFieldUpdateOperationsInput | string | null
    fbProfileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventUpdateWithoutEventCPCountryPhoneInput = {
    eventName?: StringFieldUpdateOperationsInput | string
    eventTag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivateEvent?: BoolFieldUpdateOperationsInput | boolean
    organizerName?: StringFieldUpdateOperationsInput | string
    organizerLogoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: StringFieldUpdateOperationsInput | string
    eventEndDate?: StringFieldUpdateOperationsInput | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    eventDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketName?: StringFieldUpdateOperationsInput | string
    ticketQty?: IntFieldUpdateOperationsInput | number
    ticketPrice?: IntFieldUpdateOperationsInput | number
    ticketDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketTermsAndCondition?: NullableStringFieldUpdateOperationsInput | string | null
    ticketStartDate?: StringFieldUpdateOperationsInput | string
    ticketEndDate?: StringFieldUpdateOperationsInput | string
    eventCPName?: StringFieldUpdateOperationsInput | string
    eventCPEmail?: StringFieldUpdateOperationsInput | string
    eventCPPhone?: StringFieldUpdateOperationsInput | string
    idCardStatus?: EnumTicketIDCardFieldUpdateOperationsInput | $Enums.TicketIDCard
    maxTicketPerTransaction?: IntFieldUpdateOperationsInput | number
    oneEmailOneTransaction?: BoolFieldUpdateOperationsInput | boolean
    ticketDataFormUnique?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: CreatorProfileUpdateOneRequiredWithoutEventNestedInput
    eventFormat?: EventFormatUpdateOneRequiredWithoutEventNestedInput
    eventTopic?: EventTopicUpdateOneRequiredWithoutEventNestedInput
    ticketTransactions?: TicketTransactionUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutEventCPCountryPhoneInput = {
    id?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    eventFormatId?: IntFieldUpdateOperationsInput | number
    eventTopicId?: IntFieldUpdateOperationsInput | number
    eventTag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivateEvent?: BoolFieldUpdateOperationsInput | boolean
    organizerName?: StringFieldUpdateOperationsInput | string
    organizerLogoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: StringFieldUpdateOperationsInput | string
    eventEndDate?: StringFieldUpdateOperationsInput | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    eventDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketName?: StringFieldUpdateOperationsInput | string
    ticketQty?: IntFieldUpdateOperationsInput | number
    ticketPrice?: IntFieldUpdateOperationsInput | number
    ticketDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketTermsAndCondition?: NullableStringFieldUpdateOperationsInput | string | null
    ticketStartDate?: StringFieldUpdateOperationsInput | string
    ticketEndDate?: StringFieldUpdateOperationsInput | string
    eventCPName?: StringFieldUpdateOperationsInput | string
    eventCPEmail?: StringFieldUpdateOperationsInput | string
    eventCPPhone?: StringFieldUpdateOperationsInput | string
    idCardStatus?: EnumTicketIDCardFieldUpdateOperationsInput | $Enums.TicketIDCard
    maxTicketPerTransaction?: IntFieldUpdateOperationsInput | number
    oneEmailOneTransaction?: BoolFieldUpdateOperationsInput | boolean
    ticketDataFormUnique?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticketTransactions?: TicketTransactionUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutEventCPCountryPhoneInput = {
    id?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    eventFormatId?: IntFieldUpdateOperationsInput | number
    eventTopicId?: IntFieldUpdateOperationsInput | number
    eventTag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivateEvent?: BoolFieldUpdateOperationsInput | boolean
    organizerName?: StringFieldUpdateOperationsInput | string
    organizerLogoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: StringFieldUpdateOperationsInput | string
    eventEndDate?: StringFieldUpdateOperationsInput | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    eventDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketName?: StringFieldUpdateOperationsInput | string
    ticketQty?: IntFieldUpdateOperationsInput | number
    ticketPrice?: IntFieldUpdateOperationsInput | number
    ticketDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketTermsAndCondition?: NullableStringFieldUpdateOperationsInput | string | null
    ticketStartDate?: StringFieldUpdateOperationsInput | string
    ticketEndDate?: StringFieldUpdateOperationsInput | string
    eventCPName?: StringFieldUpdateOperationsInput | string
    eventCPEmail?: StringFieldUpdateOperationsInput | string
    eventCPPhone?: StringFieldUpdateOperationsInput | string
    idCardStatus?: EnumTicketIDCardFieldUpdateOperationsInput | $Enums.TicketIDCard
    maxTicketPerTransaction?: IntFieldUpdateOperationsInput | number
    oneEmailOneTransaction?: BoolFieldUpdateOperationsInput | boolean
    ticketDataFormUnique?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketTransactionDetailUpdateWithoutOrderCountryPhoneInput = {
    orderName?: StringFieldUpdateOperationsInput | string
    orderEmail?: StringFieldUpdateOperationsInput | string
    orderBirthDate?: StringFieldUpdateOperationsInput | string
    orderSex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticketTransactions?: TicketTransactionUpdateOneRequiredWithoutTicketTransactionDetailsNestedInput
  }

  export type TicketTransactionDetailUncheckedUpdateWithoutOrderCountryPhoneInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketTransactionId?: IntFieldUpdateOperationsInput | number
    orderName?: StringFieldUpdateOperationsInput | string
    orderEmail?: StringFieldUpdateOperationsInput | string
    orderBirthDate?: StringFieldUpdateOperationsInput | string
    orderSex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketTransactionDetailUncheckedUpdateManyWithoutOrderCountryPhoneInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketTransactionId?: IntFieldUpdateOperationsInput | number
    orderName?: StringFieldUpdateOperationsInput | string
    orderEmail?: StringFieldUpdateOperationsInput | string
    orderBirthDate?: StringFieldUpdateOperationsInput | string
    orderSex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCodeCreateManyMemberInput = {
    id?: string
    code: string
    email: string
    type: $Enums.CodeType
    expiredAt: Date | string
    isUsed?: boolean
    attempts?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TicketTransactionCreateManyMemberInput = {
    id?: number
    eventId: number
    ticketCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type VerificationCodeUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumCodeTypeFieldUpdateOperationsInput | $Enums.CodeType
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCodeUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumCodeTypeFieldUpdateOperationsInput | $Enums.CodeType
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCodeUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    type?: EnumCodeTypeFieldUpdateOperationsInput | $Enums.CodeType
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    attempts?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketTransactionUpdateWithoutMemberInput = {
    ticketCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUpdateOneRequiredWithoutTicketTransactionsNestedInput
    ticketTransactionDetails?: TicketTransactionDetailUpdateManyWithoutTicketTransactionsNestedInput
  }

  export type TicketTransactionUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    ticketCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticketTransactionDetails?: TicketTransactionDetailUncheckedUpdateManyWithoutTicketTransactionsNestedInput
  }

  export type TicketTransactionUncheckedUpdateManyWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    ticketCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventCreateManyCreatorInput = {
    id?: number
    eventName: string
    eventFormatId: number
    eventTopicId: number
    eventTag?: string | null
    isPrivateEvent?: boolean
    organizerName: string
    organizerLogoImgUrl?: string | null
    bannerImgUrl?: string | null
    eventStartDate: string
    eventEndDate: string
    eventStartTime: string
    eventEndTime: string
    eventLocation: string
    eventDesc?: string | null
    ticketType: $Enums.TicketType
    ticketName: string
    ticketQty: number
    ticketPrice?: number
    ticketDesc?: string | null
    ticketTermsAndCondition?: string | null
    ticketStartDate: string
    ticketEndDate: string
    eventCPName: string
    eventCPEmail: string
    eventCPCountryPhoneId: number
    eventCPPhone: string
    idCardStatus?: $Enums.TicketIDCard
    maxTicketPerTransaction: number
    oneEmailOneTransaction?: boolean
    ticketDataFormUnique?: boolean
    isDraft?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EventUpdateWithoutCreatorInput = {
    eventName?: StringFieldUpdateOperationsInput | string
    eventTag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivateEvent?: BoolFieldUpdateOperationsInput | boolean
    organizerName?: StringFieldUpdateOperationsInput | string
    organizerLogoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: StringFieldUpdateOperationsInput | string
    eventEndDate?: StringFieldUpdateOperationsInput | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    eventDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketName?: StringFieldUpdateOperationsInput | string
    ticketQty?: IntFieldUpdateOperationsInput | number
    ticketPrice?: IntFieldUpdateOperationsInput | number
    ticketDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketTermsAndCondition?: NullableStringFieldUpdateOperationsInput | string | null
    ticketStartDate?: StringFieldUpdateOperationsInput | string
    ticketEndDate?: StringFieldUpdateOperationsInput | string
    eventCPName?: StringFieldUpdateOperationsInput | string
    eventCPEmail?: StringFieldUpdateOperationsInput | string
    eventCPPhone?: StringFieldUpdateOperationsInput | string
    idCardStatus?: EnumTicketIDCardFieldUpdateOperationsInput | $Enums.TicketIDCard
    maxTicketPerTransaction?: IntFieldUpdateOperationsInput | number
    oneEmailOneTransaction?: BoolFieldUpdateOperationsInput | boolean
    ticketDataFormUnique?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eventFormat?: EventFormatUpdateOneRequiredWithoutEventNestedInput
    eventTopic?: EventTopicUpdateOneRequiredWithoutEventNestedInput
    eventCPCountryPhone?: CountryPhoneUpdateOneRequiredWithoutEventsNestedInput
    ticketTransactions?: TicketTransactionUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventName?: StringFieldUpdateOperationsInput | string
    eventFormatId?: IntFieldUpdateOperationsInput | number
    eventTopicId?: IntFieldUpdateOperationsInput | number
    eventTag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivateEvent?: BoolFieldUpdateOperationsInput | boolean
    organizerName?: StringFieldUpdateOperationsInput | string
    organizerLogoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: StringFieldUpdateOperationsInput | string
    eventEndDate?: StringFieldUpdateOperationsInput | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    eventDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketName?: StringFieldUpdateOperationsInput | string
    ticketQty?: IntFieldUpdateOperationsInput | number
    ticketPrice?: IntFieldUpdateOperationsInput | number
    ticketDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketTermsAndCondition?: NullableStringFieldUpdateOperationsInput | string | null
    ticketStartDate?: StringFieldUpdateOperationsInput | string
    ticketEndDate?: StringFieldUpdateOperationsInput | string
    eventCPName?: StringFieldUpdateOperationsInput | string
    eventCPEmail?: StringFieldUpdateOperationsInput | string
    eventCPCountryPhoneId?: IntFieldUpdateOperationsInput | number
    eventCPPhone?: StringFieldUpdateOperationsInput | string
    idCardStatus?: EnumTicketIDCardFieldUpdateOperationsInput | $Enums.TicketIDCard
    maxTicketPerTransaction?: IntFieldUpdateOperationsInput | number
    oneEmailOneTransaction?: BoolFieldUpdateOperationsInput | boolean
    ticketDataFormUnique?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticketTransactions?: TicketTransactionUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventName?: StringFieldUpdateOperationsInput | string
    eventFormatId?: IntFieldUpdateOperationsInput | number
    eventTopicId?: IntFieldUpdateOperationsInput | number
    eventTag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivateEvent?: BoolFieldUpdateOperationsInput | boolean
    organizerName?: StringFieldUpdateOperationsInput | string
    organizerLogoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: StringFieldUpdateOperationsInput | string
    eventEndDate?: StringFieldUpdateOperationsInput | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    eventDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketName?: StringFieldUpdateOperationsInput | string
    ticketQty?: IntFieldUpdateOperationsInput | number
    ticketPrice?: IntFieldUpdateOperationsInput | number
    ticketDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketTermsAndCondition?: NullableStringFieldUpdateOperationsInput | string | null
    ticketStartDate?: StringFieldUpdateOperationsInput | string
    ticketEndDate?: StringFieldUpdateOperationsInput | string
    eventCPName?: StringFieldUpdateOperationsInput | string
    eventCPEmail?: StringFieldUpdateOperationsInput | string
    eventCPCountryPhoneId?: IntFieldUpdateOperationsInput | number
    eventCPPhone?: StringFieldUpdateOperationsInput | string
    idCardStatus?: EnumTicketIDCardFieldUpdateOperationsInput | $Enums.TicketIDCard
    maxTicketPerTransaction?: IntFieldUpdateOperationsInput | number
    oneEmailOneTransaction?: BoolFieldUpdateOperationsInput | boolean
    ticketDataFormUnique?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketTransactionCreateManyEventInput = {
    id?: number
    memberId: string
    ticketCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TicketTransactionUpdateWithoutEventInput = {
    ticketCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: MemberUpdateOneRequiredWithoutTicketTransactionsNestedInput
    ticketTransactionDetails?: TicketTransactionDetailUpdateManyWithoutTicketTransactionsNestedInput
  }

  export type TicketTransactionUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: StringFieldUpdateOperationsInput | string
    ticketCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticketTransactionDetails?: TicketTransactionDetailUncheckedUpdateManyWithoutTicketTransactionsNestedInput
  }

  export type TicketTransactionUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: StringFieldUpdateOperationsInput | string
    ticketCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventCreateManyEventFormatInput = {
    id?: number
    creatorId: string
    eventName: string
    eventTopicId: number
    eventTag?: string | null
    isPrivateEvent?: boolean
    organizerName: string
    organizerLogoImgUrl?: string | null
    bannerImgUrl?: string | null
    eventStartDate: string
    eventEndDate: string
    eventStartTime: string
    eventEndTime: string
    eventLocation: string
    eventDesc?: string | null
    ticketType: $Enums.TicketType
    ticketName: string
    ticketQty: number
    ticketPrice?: number
    ticketDesc?: string | null
    ticketTermsAndCondition?: string | null
    ticketStartDate: string
    ticketEndDate: string
    eventCPName: string
    eventCPEmail: string
    eventCPCountryPhoneId: number
    eventCPPhone: string
    idCardStatus?: $Enums.TicketIDCard
    maxTicketPerTransaction: number
    oneEmailOneTransaction?: boolean
    ticketDataFormUnique?: boolean
    isDraft?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EventUpdateWithoutEventFormatInput = {
    eventName?: StringFieldUpdateOperationsInput | string
    eventTag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivateEvent?: BoolFieldUpdateOperationsInput | boolean
    organizerName?: StringFieldUpdateOperationsInput | string
    organizerLogoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: StringFieldUpdateOperationsInput | string
    eventEndDate?: StringFieldUpdateOperationsInput | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    eventDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketName?: StringFieldUpdateOperationsInput | string
    ticketQty?: IntFieldUpdateOperationsInput | number
    ticketPrice?: IntFieldUpdateOperationsInput | number
    ticketDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketTermsAndCondition?: NullableStringFieldUpdateOperationsInput | string | null
    ticketStartDate?: StringFieldUpdateOperationsInput | string
    ticketEndDate?: StringFieldUpdateOperationsInput | string
    eventCPName?: StringFieldUpdateOperationsInput | string
    eventCPEmail?: StringFieldUpdateOperationsInput | string
    eventCPPhone?: StringFieldUpdateOperationsInput | string
    idCardStatus?: EnumTicketIDCardFieldUpdateOperationsInput | $Enums.TicketIDCard
    maxTicketPerTransaction?: IntFieldUpdateOperationsInput | number
    oneEmailOneTransaction?: BoolFieldUpdateOperationsInput | boolean
    ticketDataFormUnique?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: CreatorProfileUpdateOneRequiredWithoutEventNestedInput
    eventTopic?: EventTopicUpdateOneRequiredWithoutEventNestedInput
    eventCPCountryPhone?: CountryPhoneUpdateOneRequiredWithoutEventsNestedInput
    ticketTransactions?: TicketTransactionUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutEventFormatInput = {
    id?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    eventTopicId?: IntFieldUpdateOperationsInput | number
    eventTag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivateEvent?: BoolFieldUpdateOperationsInput | boolean
    organizerName?: StringFieldUpdateOperationsInput | string
    organizerLogoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: StringFieldUpdateOperationsInput | string
    eventEndDate?: StringFieldUpdateOperationsInput | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    eventDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketName?: StringFieldUpdateOperationsInput | string
    ticketQty?: IntFieldUpdateOperationsInput | number
    ticketPrice?: IntFieldUpdateOperationsInput | number
    ticketDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketTermsAndCondition?: NullableStringFieldUpdateOperationsInput | string | null
    ticketStartDate?: StringFieldUpdateOperationsInput | string
    ticketEndDate?: StringFieldUpdateOperationsInput | string
    eventCPName?: StringFieldUpdateOperationsInput | string
    eventCPEmail?: StringFieldUpdateOperationsInput | string
    eventCPCountryPhoneId?: IntFieldUpdateOperationsInput | number
    eventCPPhone?: StringFieldUpdateOperationsInput | string
    idCardStatus?: EnumTicketIDCardFieldUpdateOperationsInput | $Enums.TicketIDCard
    maxTicketPerTransaction?: IntFieldUpdateOperationsInput | number
    oneEmailOneTransaction?: BoolFieldUpdateOperationsInput | boolean
    ticketDataFormUnique?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticketTransactions?: TicketTransactionUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutEventFormatInput = {
    id?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    eventTopicId?: IntFieldUpdateOperationsInput | number
    eventTag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivateEvent?: BoolFieldUpdateOperationsInput | boolean
    organizerName?: StringFieldUpdateOperationsInput | string
    organizerLogoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: StringFieldUpdateOperationsInput | string
    eventEndDate?: StringFieldUpdateOperationsInput | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    eventDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketName?: StringFieldUpdateOperationsInput | string
    ticketQty?: IntFieldUpdateOperationsInput | number
    ticketPrice?: IntFieldUpdateOperationsInput | number
    ticketDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketTermsAndCondition?: NullableStringFieldUpdateOperationsInput | string | null
    ticketStartDate?: StringFieldUpdateOperationsInput | string
    ticketEndDate?: StringFieldUpdateOperationsInput | string
    eventCPName?: StringFieldUpdateOperationsInput | string
    eventCPEmail?: StringFieldUpdateOperationsInput | string
    eventCPCountryPhoneId?: IntFieldUpdateOperationsInput | number
    eventCPPhone?: StringFieldUpdateOperationsInput | string
    idCardStatus?: EnumTicketIDCardFieldUpdateOperationsInput | $Enums.TicketIDCard
    maxTicketPerTransaction?: IntFieldUpdateOperationsInput | number
    oneEmailOneTransaction?: BoolFieldUpdateOperationsInput | boolean
    ticketDataFormUnique?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventCreateManyEventTopicInput = {
    id?: number
    creatorId: string
    eventName: string
    eventFormatId: number
    eventTag?: string | null
    isPrivateEvent?: boolean
    organizerName: string
    organizerLogoImgUrl?: string | null
    bannerImgUrl?: string | null
    eventStartDate: string
    eventEndDate: string
    eventStartTime: string
    eventEndTime: string
    eventLocation: string
    eventDesc?: string | null
    ticketType: $Enums.TicketType
    ticketName: string
    ticketQty: number
    ticketPrice?: number
    ticketDesc?: string | null
    ticketTermsAndCondition?: string | null
    ticketStartDate: string
    ticketEndDate: string
    eventCPName: string
    eventCPEmail: string
    eventCPCountryPhoneId: number
    eventCPPhone: string
    idCardStatus?: $Enums.TicketIDCard
    maxTicketPerTransaction: number
    oneEmailOneTransaction?: boolean
    ticketDataFormUnique?: boolean
    isDraft?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type EventUpdateWithoutEventTopicInput = {
    eventName?: StringFieldUpdateOperationsInput | string
    eventTag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivateEvent?: BoolFieldUpdateOperationsInput | boolean
    organizerName?: StringFieldUpdateOperationsInput | string
    organizerLogoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: StringFieldUpdateOperationsInput | string
    eventEndDate?: StringFieldUpdateOperationsInput | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    eventDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketName?: StringFieldUpdateOperationsInput | string
    ticketQty?: IntFieldUpdateOperationsInput | number
    ticketPrice?: IntFieldUpdateOperationsInput | number
    ticketDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketTermsAndCondition?: NullableStringFieldUpdateOperationsInput | string | null
    ticketStartDate?: StringFieldUpdateOperationsInput | string
    ticketEndDate?: StringFieldUpdateOperationsInput | string
    eventCPName?: StringFieldUpdateOperationsInput | string
    eventCPEmail?: StringFieldUpdateOperationsInput | string
    eventCPPhone?: StringFieldUpdateOperationsInput | string
    idCardStatus?: EnumTicketIDCardFieldUpdateOperationsInput | $Enums.TicketIDCard
    maxTicketPerTransaction?: IntFieldUpdateOperationsInput | number
    oneEmailOneTransaction?: BoolFieldUpdateOperationsInput | boolean
    ticketDataFormUnique?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: CreatorProfileUpdateOneRequiredWithoutEventNestedInput
    eventFormat?: EventFormatUpdateOneRequiredWithoutEventNestedInput
    eventCPCountryPhone?: CountryPhoneUpdateOneRequiredWithoutEventsNestedInput
    ticketTransactions?: TicketTransactionUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutEventTopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    eventFormatId?: IntFieldUpdateOperationsInput | number
    eventTag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivateEvent?: BoolFieldUpdateOperationsInput | boolean
    organizerName?: StringFieldUpdateOperationsInput | string
    organizerLogoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: StringFieldUpdateOperationsInput | string
    eventEndDate?: StringFieldUpdateOperationsInput | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    eventDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketName?: StringFieldUpdateOperationsInput | string
    ticketQty?: IntFieldUpdateOperationsInput | number
    ticketPrice?: IntFieldUpdateOperationsInput | number
    ticketDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketTermsAndCondition?: NullableStringFieldUpdateOperationsInput | string | null
    ticketStartDate?: StringFieldUpdateOperationsInput | string
    ticketEndDate?: StringFieldUpdateOperationsInput | string
    eventCPName?: StringFieldUpdateOperationsInput | string
    eventCPEmail?: StringFieldUpdateOperationsInput | string
    eventCPCountryPhoneId?: IntFieldUpdateOperationsInput | number
    eventCPPhone?: StringFieldUpdateOperationsInput | string
    idCardStatus?: EnumTicketIDCardFieldUpdateOperationsInput | $Enums.TicketIDCard
    maxTicketPerTransaction?: IntFieldUpdateOperationsInput | number
    oneEmailOneTransaction?: BoolFieldUpdateOperationsInput | boolean
    ticketDataFormUnique?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ticketTransactions?: TicketTransactionUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutEventTopicInput = {
    id?: IntFieldUpdateOperationsInput | number
    creatorId?: StringFieldUpdateOperationsInput | string
    eventName?: StringFieldUpdateOperationsInput | string
    eventFormatId?: IntFieldUpdateOperationsInput | number
    eventTag?: NullableStringFieldUpdateOperationsInput | string | null
    isPrivateEvent?: BoolFieldUpdateOperationsInput | boolean
    organizerName?: StringFieldUpdateOperationsInput | string
    organizerLogoImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bannerImgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eventStartDate?: StringFieldUpdateOperationsInput | string
    eventEndDate?: StringFieldUpdateOperationsInput | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    eventLocation?: StringFieldUpdateOperationsInput | string
    eventDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketName?: StringFieldUpdateOperationsInput | string
    ticketQty?: IntFieldUpdateOperationsInput | number
    ticketPrice?: IntFieldUpdateOperationsInput | number
    ticketDesc?: NullableStringFieldUpdateOperationsInput | string | null
    ticketTermsAndCondition?: NullableStringFieldUpdateOperationsInput | string | null
    ticketStartDate?: StringFieldUpdateOperationsInput | string
    ticketEndDate?: StringFieldUpdateOperationsInput | string
    eventCPName?: StringFieldUpdateOperationsInput | string
    eventCPEmail?: StringFieldUpdateOperationsInput | string
    eventCPCountryPhoneId?: IntFieldUpdateOperationsInput | number
    eventCPPhone?: StringFieldUpdateOperationsInput | string
    idCardStatus?: EnumTicketIDCardFieldUpdateOperationsInput | $Enums.TicketIDCard
    maxTicketPerTransaction?: IntFieldUpdateOperationsInput | number
    oneEmailOneTransaction?: BoolFieldUpdateOperationsInput | boolean
    ticketDataFormUnique?: BoolFieldUpdateOperationsInput | boolean
    isDraft?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketTransactionDetailCreateManyTicketTransactionsInput = {
    id?: number
    orderName: string
    orderCountryPhoneId: number
    orderEmail: string
    orderBirthDate: string
    orderSex: $Enums.Sex
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type TicketTransactionDetailUpdateWithoutTicketTransactionsInput = {
    orderName?: StringFieldUpdateOperationsInput | string
    orderEmail?: StringFieldUpdateOperationsInput | string
    orderBirthDate?: StringFieldUpdateOperationsInput | string
    orderSex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderCountryPhone?: CountryPhoneUpdateOneRequiredWithoutTicketTransactionDetailsNestedInput
  }

  export type TicketTransactionDetailUncheckedUpdateWithoutTicketTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderName?: StringFieldUpdateOperationsInput | string
    orderCountryPhoneId?: IntFieldUpdateOperationsInput | number
    orderEmail?: StringFieldUpdateOperationsInput | string
    orderBirthDate?: StringFieldUpdateOperationsInput | string
    orderSex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketTransactionDetailUncheckedUpdateManyWithoutTicketTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderName?: StringFieldUpdateOperationsInput | string
    orderCountryPhoneId?: IntFieldUpdateOperationsInput | number
    orderEmail?: StringFieldUpdateOperationsInput | string
    orderBirthDate?: StringFieldUpdateOperationsInput | string
    orderSex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}