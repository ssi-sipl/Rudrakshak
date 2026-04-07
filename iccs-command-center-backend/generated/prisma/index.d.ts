
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Area
 * 
 */
export type Area = $Result.DefaultSelection<Prisma.$AreaPayload>
/**
 * Model Sensor
 * 
 */
export type Sensor = $Result.DefaultSelection<Prisma.$SensorPayload>
/**
 * Model DroneOS
 * 
 */
export type DroneOS = $Result.DefaultSelection<Prisma.$DroneOSPayload>
/**
 * Model Alarm
 * 
 */
export type Alarm = $Result.DefaultSelection<Prisma.$AlarmPayload>
/**
 * Model Alert
 * 
 */
export type Alert = $Result.DefaultSelection<Prisma.$AlertPayload>
/**
 * Model DroneFlightHistory
 * 
 */
export type DroneFlightHistory = $Result.DefaultSelection<Prisma.$DroneFlightHistoryPayload>
/**
 * Model OfflineMap
 * 
 */
export type OfflineMap = $Result.DefaultSelection<Prisma.$OfflineMapPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  OPERATOR: 'OPERATOR',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AlertStatus: {
  ACTIVE: 'ACTIVE',
  SENT: 'SENT',
  NEUTRALISED: 'NEUTRALISED'
};

export type AlertStatus = (typeof AlertStatus)[keyof typeof AlertStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AlertStatus = $Enums.AlertStatus

export const AlertStatus: typeof $Enums.AlertStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.area`: Exposes CRUD operations for the **Area** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Areas
    * const areas = await prisma.area.findMany()
    * ```
    */
  get area(): Prisma.AreaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sensor`: Exposes CRUD operations for the **Sensor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sensors
    * const sensors = await prisma.sensor.findMany()
    * ```
    */
  get sensor(): Prisma.SensorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.droneOS`: Exposes CRUD operations for the **DroneOS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DroneOS
    * const droneOS = await prisma.droneOS.findMany()
    * ```
    */
  get droneOS(): Prisma.DroneOSDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alarm`: Exposes CRUD operations for the **Alarm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alarms
    * const alarms = await prisma.alarm.findMany()
    * ```
    */
  get alarm(): Prisma.AlarmDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alert`: Exposes CRUD operations for the **Alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alert.findMany()
    * ```
    */
  get alert(): Prisma.AlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.droneFlightHistory`: Exposes CRUD operations for the **DroneFlightHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DroneFlightHistories
    * const droneFlightHistories = await prisma.droneFlightHistory.findMany()
    * ```
    */
  get droneFlightHistory(): Prisma.DroneFlightHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.offlineMap`: Exposes CRUD operations for the **OfflineMap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OfflineMaps
    * const offlineMaps = await prisma.offlineMap.findMany()
    * ```
    */
  get offlineMap(): Prisma.OfflineMapDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Area: 'Area',
    Sensor: 'Sensor',
    DroneOS: 'DroneOS',
    Alarm: 'Alarm',
    Alert: 'Alert',
    DroneFlightHistory: 'DroneFlightHistory',
    OfflineMap: 'OfflineMap'
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
      modelProps: "user" | "area" | "sensor" | "droneOS" | "alarm" | "alert" | "droneFlightHistory" | "offlineMap"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Area: {
        payload: Prisma.$AreaPayload<ExtArgs>
        fields: Prisma.AreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findFirst: {
            args: Prisma.AreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findMany: {
            args: Prisma.AreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          create: {
            args: Prisma.AreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          createMany: {
            args: Prisma.AreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          update: {
            args: Prisma.AreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          deleteMany: {
            args: Prisma.AreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          aggregate: {
            args: Prisma.AreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArea>
          }
          groupBy: {
            args: Prisma.AreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AreaFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AreaAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AreaCountArgs<ExtArgs>
            result: $Utils.Optional<AreaCountAggregateOutputType> | number
          }
        }
      }
      Sensor: {
        payload: Prisma.$SensorPayload<ExtArgs>
        fields: Prisma.SensorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SensorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SensorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          findFirst: {
            args: Prisma.SensorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SensorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          findMany: {
            args: Prisma.SensorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>[]
          }
          create: {
            args: Prisma.SensorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          createMany: {
            args: Prisma.SensorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SensorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          update: {
            args: Prisma.SensorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          deleteMany: {
            args: Prisma.SensorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SensorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SensorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorPayload>
          }
          aggregate: {
            args: Prisma.SensorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSensor>
          }
          groupBy: {
            args: Prisma.SensorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SensorGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SensorFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SensorAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SensorCountArgs<ExtArgs>
            result: $Utils.Optional<SensorCountAggregateOutputType> | number
          }
        }
      }
      DroneOS: {
        payload: Prisma.$DroneOSPayload<ExtArgs>
        fields: Prisma.DroneOSFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DroneOSFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneOSPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DroneOSFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneOSPayload>
          }
          findFirst: {
            args: Prisma.DroneOSFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneOSPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DroneOSFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneOSPayload>
          }
          findMany: {
            args: Prisma.DroneOSFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneOSPayload>[]
          }
          create: {
            args: Prisma.DroneOSCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneOSPayload>
          }
          createMany: {
            args: Prisma.DroneOSCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DroneOSDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneOSPayload>
          }
          update: {
            args: Prisma.DroneOSUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneOSPayload>
          }
          deleteMany: {
            args: Prisma.DroneOSDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DroneOSUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DroneOSUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneOSPayload>
          }
          aggregate: {
            args: Prisma.DroneOSAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDroneOS>
          }
          groupBy: {
            args: Prisma.DroneOSGroupByArgs<ExtArgs>
            result: $Utils.Optional<DroneOSGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DroneOSFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DroneOSAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DroneOSCountArgs<ExtArgs>
            result: $Utils.Optional<DroneOSCountAggregateOutputType> | number
          }
        }
      }
      Alarm: {
        payload: Prisma.$AlarmPayload<ExtArgs>
        fields: Prisma.AlarmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlarmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlarmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>
          }
          findFirst: {
            args: Prisma.AlarmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlarmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>
          }
          findMany: {
            args: Prisma.AlarmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>[]
          }
          create: {
            args: Prisma.AlarmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>
          }
          createMany: {
            args: Prisma.AlarmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AlarmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>
          }
          update: {
            args: Prisma.AlarmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>
          }
          deleteMany: {
            args: Prisma.AlarmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlarmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlarmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlarmPayload>
          }
          aggregate: {
            args: Prisma.AlarmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlarm>
          }
          groupBy: {
            args: Prisma.AlarmGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlarmGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AlarmFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AlarmAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AlarmCountArgs<ExtArgs>
            result: $Utils.Optional<AlarmCountAggregateOutputType> | number
          }
        }
      }
      Alert: {
        payload: Prisma.$AlertPayload<ExtArgs>
        fields: Prisma.AlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findFirst: {
            args: Prisma.AlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findMany: {
            args: Prisma.AlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          create: {
            args: Prisma.AlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          createMany: {
            args: Prisma.AlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          update: {
            args: Prisma.AlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          deleteMany: {
            args: Prisma.AlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          aggregate: {
            args: Prisma.AlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlert>
          }
          groupBy: {
            args: Prisma.AlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AlertFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AlertAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AlertCountArgs<ExtArgs>
            result: $Utils.Optional<AlertCountAggregateOutputType> | number
          }
        }
      }
      DroneFlightHistory: {
        payload: Prisma.$DroneFlightHistoryPayload<ExtArgs>
        fields: Prisma.DroneFlightHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DroneFlightHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneFlightHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DroneFlightHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneFlightHistoryPayload>
          }
          findFirst: {
            args: Prisma.DroneFlightHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneFlightHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DroneFlightHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneFlightHistoryPayload>
          }
          findMany: {
            args: Prisma.DroneFlightHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneFlightHistoryPayload>[]
          }
          create: {
            args: Prisma.DroneFlightHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneFlightHistoryPayload>
          }
          createMany: {
            args: Prisma.DroneFlightHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DroneFlightHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneFlightHistoryPayload>
          }
          update: {
            args: Prisma.DroneFlightHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneFlightHistoryPayload>
          }
          deleteMany: {
            args: Prisma.DroneFlightHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DroneFlightHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DroneFlightHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DroneFlightHistoryPayload>
          }
          aggregate: {
            args: Prisma.DroneFlightHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDroneFlightHistory>
          }
          groupBy: {
            args: Prisma.DroneFlightHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DroneFlightHistoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DroneFlightHistoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DroneFlightHistoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DroneFlightHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<DroneFlightHistoryCountAggregateOutputType> | number
          }
        }
      }
      OfflineMap: {
        payload: Prisma.$OfflineMapPayload<ExtArgs>
        fields: Prisma.OfflineMapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfflineMapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfflineMapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfflineMapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfflineMapPayload>
          }
          findFirst: {
            args: Prisma.OfflineMapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfflineMapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfflineMapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfflineMapPayload>
          }
          findMany: {
            args: Prisma.OfflineMapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfflineMapPayload>[]
          }
          create: {
            args: Prisma.OfflineMapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfflineMapPayload>
          }
          createMany: {
            args: Prisma.OfflineMapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OfflineMapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfflineMapPayload>
          }
          update: {
            args: Prisma.OfflineMapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfflineMapPayload>
          }
          deleteMany: {
            args: Prisma.OfflineMapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfflineMapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OfflineMapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfflineMapPayload>
          }
          aggregate: {
            args: Prisma.OfflineMapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOfflineMap>
          }
          groupBy: {
            args: Prisma.OfflineMapGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfflineMapGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.OfflineMapFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.OfflineMapAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.OfflineMapCountArgs<ExtArgs>
            result: $Utils.Optional<OfflineMapCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    user?: UserOmit
    area?: AreaOmit
    sensor?: SensorOmit
    droneOS?: DroneOSOmit
    alarm?: AlarmOmit
    alert?: AlertOmit
    droneFlightHistory?: DroneFlightHistoryOmit
    offlineMap?: OfflineMapOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type AreaCountOutputType
   */

  export type AreaCountOutputType = {
    sensors: number
    alarms: number
    drones: number
  }

  export type AreaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensors?: boolean | AreaCountOutputTypeCountSensorsArgs
    alarms?: boolean | AreaCountOutputTypeCountAlarmsArgs
    drones?: boolean | AreaCountOutputTypeCountDronesArgs
  }

  // Custom InputTypes
  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCountOutputType
     */
    select?: AreaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountSensorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorWhereInput
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountAlarmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlarmWhereInput
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountDronesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DroneOSWhereInput
  }


  /**
   * Count Type SensorCountOutputType
   */

  export type SensorCountOutputType = {
    alerts: number
  }

  export type SensorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    alerts?: boolean | SensorCountOutputTypeCountAlertsArgs
  }

  // Custom InputTypes
  /**
   * SensorCountOutputType without action
   */
  export type SensorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorCountOutputType
     */
    select?: SensorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SensorCountOutputType without action
   */
  export type SensorCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }


  /**
   * Count Type DroneOSCountOutputType
   */

  export type DroneOSCountOutputType = {
    flightHistory: number
  }

  export type DroneOSCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flightHistory?: boolean | DroneOSCountOutputTypeCountFlightHistoryArgs
  }

  // Custom InputTypes
  /**
   * DroneOSCountOutputType without action
   */
  export type DroneOSCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneOSCountOutputType
     */
    select?: DroneOSCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DroneOSCountOutputType without action
   */
  export type DroneOSCountOutputTypeCountFlightHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DroneFlightHistoryWhereInput
  }


  /**
   * Count Type AlarmCountOutputType
   */

  export type AlarmCountOutputType = {
    sensors: number
  }

  export type AlarmCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensors?: boolean | AlarmCountOutputTypeCountSensorsArgs
  }

  // Custom InputTypes
  /**
   * AlarmCountOutputType without action
   */
  export type AlarmCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlarmCountOutputType
     */
    select?: AlarmCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlarmCountOutputType without action
   */
  export type AlarmCountOutputTypeCountSensorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    role: $Enums.Role
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: $Enums.Role
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Area
   */

  export type AggregateArea = {
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  export type AreaAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type AreaSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type AreaMinAggregateOutputType = {
    id: string | null
    areaId: string | null
    name: string | null
    latitude: number | null
    longitude: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    addedBy: string | null
  }

  export type AreaMaxAggregateOutputType = {
    id: string | null
    areaId: string | null
    name: string | null
    latitude: number | null
    longitude: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    addedBy: string | null
  }

  export type AreaCountAggregateOutputType = {
    id: number
    areaId: number
    name: number
    latitude: number
    longitude: number
    status: number
    createdAt: number
    updatedAt: number
    addedBy: number
    _all: number
  }


  export type AreaAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type AreaSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type AreaMinAggregateInputType = {
    id?: true
    areaId?: true
    name?: true
    latitude?: true
    longitude?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    addedBy?: true
  }

  export type AreaMaxAggregateInputType = {
    id?: true
    areaId?: true
    name?: true
    latitude?: true
    longitude?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    addedBy?: true
  }

  export type AreaCountAggregateInputType = {
    id?: true
    areaId?: true
    name?: true
    latitude?: true
    longitude?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    addedBy?: true
    _all?: true
  }

  export type AreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Area to aggregate.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Areas
    **/
    _count?: true | AreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AreaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AreaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaMaxAggregateInputType
  }

  export type GetAreaAggregateType<T extends AreaAggregateArgs> = {
        [P in keyof T & keyof AggregateArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArea[P]>
      : GetScalarType<T[P], AggregateArea[P]>
  }




  export type AreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithAggregationInput | AreaOrderByWithAggregationInput[]
    by: AreaScalarFieldEnum[] | AreaScalarFieldEnum
    having?: AreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaCountAggregateInputType | true
    _avg?: AreaAvgAggregateInputType
    _sum?: AreaSumAggregateInputType
    _min?: AreaMinAggregateInputType
    _max?: AreaMaxAggregateInputType
  }

  export type AreaGroupByOutputType = {
    id: string
    areaId: string
    name: string
    latitude: number
    longitude: number
    status: string
    createdAt: Date
    updatedAt: Date
    addedBy: string
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  type GetAreaGroupByPayload<T extends AreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaGroupByOutputType[P]>
            : GetScalarType<T[P], AreaGroupByOutputType[P]>
        }
      >
    >


  export type AreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    areaId?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addedBy?: boolean
    sensors?: boolean | Area$sensorsArgs<ExtArgs>
    alarms?: boolean | Area$alarmsArgs<ExtArgs>
    drones?: boolean | Area$dronesArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>



  export type AreaSelectScalar = {
    id?: boolean
    areaId?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    addedBy?: boolean
  }

  export type AreaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "areaId" | "name" | "latitude" | "longitude" | "status" | "createdAt" | "updatedAt" | "addedBy", ExtArgs["result"]["area"]>
  export type AreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensors?: boolean | Area$sensorsArgs<ExtArgs>
    alarms?: boolean | Area$alarmsArgs<ExtArgs>
    drones?: boolean | Area$dronesArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Area"
    objects: {
      sensors: Prisma.$SensorPayload<ExtArgs>[]
      alarms: Prisma.$AlarmPayload<ExtArgs>[]
      drones: Prisma.$DroneOSPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      areaId: string
      name: string
      latitude: number
      longitude: number
      status: string
      createdAt: Date
      updatedAt: Date
      addedBy: string
    }, ExtArgs["result"]["area"]>
    composites: {}
  }

  type AreaGetPayload<S extends boolean | null | undefined | AreaDefaultArgs> = $Result.GetResult<Prisma.$AreaPayload, S>

  type AreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AreaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AreaCountAggregateInputType | true
    }

  export interface AreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Area'], meta: { name: 'Area' } }
    /**
     * Find zero or one Area that matches the filter.
     * @param {AreaFindUniqueArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AreaFindUniqueArgs>(args: SelectSubset<T, AreaFindUniqueArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Area that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AreaFindUniqueOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AreaFindUniqueOrThrowArgs>(args: SelectSubset<T, AreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AreaFindFirstArgs>(args?: SelectSubset<T, AreaFindFirstArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AreaFindFirstOrThrowArgs>(args?: SelectSubset<T, AreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Areas
     * const areas = await prisma.area.findMany()
     * 
     * // Get first 10 Areas
     * const areas = await prisma.area.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areaWithIdOnly = await prisma.area.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AreaFindManyArgs>(args?: SelectSubset<T, AreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Area.
     * @param {AreaCreateArgs} args - Arguments to create a Area.
     * @example
     * // Create one Area
     * const Area = await prisma.area.create({
     *   data: {
     *     // ... data to create a Area
     *   }
     * })
     * 
     */
    create<T extends AreaCreateArgs>(args: SelectSubset<T, AreaCreateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Areas.
     * @param {AreaCreateManyArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AreaCreateManyArgs>(args?: SelectSubset<T, AreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Area.
     * @param {AreaDeleteArgs} args - Arguments to delete one Area.
     * @example
     * // Delete one Area
     * const Area = await prisma.area.delete({
     *   where: {
     *     // ... filter to delete one Area
     *   }
     * })
     * 
     */
    delete<T extends AreaDeleteArgs>(args: SelectSubset<T, AreaDeleteArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Area.
     * @param {AreaUpdateArgs} args - Arguments to update one Area.
     * @example
     * // Update one Area
     * const area = await prisma.area.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AreaUpdateArgs>(args: SelectSubset<T, AreaUpdateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Areas.
     * @param {AreaDeleteManyArgs} args - Arguments to filter Areas to delete.
     * @example
     * // Delete a few Areas
     * const { count } = await prisma.area.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AreaDeleteManyArgs>(args?: SelectSubset<T, AreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AreaUpdateManyArgs>(args: SelectSubset<T, AreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Area.
     * @param {AreaUpsertArgs} args - Arguments to update or create a Area.
     * @example
     * // Update or create a Area
     * const area = await prisma.area.upsert({
     *   create: {
     *     // ... data to create a Area
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Area we want to update
     *   }
     * })
     */
    upsert<T extends AreaUpsertArgs>(args: SelectSubset<T, AreaUpsertArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Areas that matches the filter.
     * @param {AreaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const area = await prisma.area.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AreaFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Area.
     * @param {AreaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const area = await prisma.area.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AreaAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCountArgs} args - Arguments to filter Areas to count.
     * @example
     * // Count the number of Areas
     * const count = await prisma.area.count({
     *   where: {
     *     // ... the filter for the Areas we want to count
     *   }
     * })
    **/
    count<T extends AreaCountArgs>(
      args?: Subset<T, AreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AreaAggregateArgs>(args: Subset<T, AreaAggregateArgs>): Prisma.PrismaPromise<GetAreaAggregateType<T>>

    /**
     * Group by Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaGroupByArgs} args - Group by arguments.
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
      T extends AreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreaGroupByArgs['orderBy'] }
        : { orderBy?: AreaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Area model
   */
  readonly fields: AreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Area.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sensors<T extends Area$sensorsArgs<ExtArgs> = {}>(args?: Subset<T, Area$sensorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alarms<T extends Area$alarmsArgs<ExtArgs> = {}>(args?: Subset<T, Area$alarmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    drones<T extends Area$dronesArgs<ExtArgs> = {}>(args?: Subset<T, Area$dronesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DroneOSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Area model
   */
  interface AreaFieldRefs {
    readonly id: FieldRef<"Area", 'String'>
    readonly areaId: FieldRef<"Area", 'String'>
    readonly name: FieldRef<"Area", 'String'>
    readonly latitude: FieldRef<"Area", 'Float'>
    readonly longitude: FieldRef<"Area", 'Float'>
    readonly status: FieldRef<"Area", 'String'>
    readonly createdAt: FieldRef<"Area", 'DateTime'>
    readonly updatedAt: FieldRef<"Area", 'DateTime'>
    readonly addedBy: FieldRef<"Area", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Area findUnique
   */
  export type AreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findUniqueOrThrow
   */
  export type AreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findFirst
   */
  export type AreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findFirstOrThrow
   */
  export type AreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findMany
   */
  export type AreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Areas to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area create
   */
  export type AreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to create a Area.
     */
    data: XOR<AreaCreateInput, AreaUncheckedCreateInput>
  }

  /**
   * Area createMany
   */
  export type AreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
  }

  /**
   * Area update
   */
  export type AreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to update a Area.
     */
    data: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
    /**
     * Choose, which Area to update.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area updateMany
   */
  export type AreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to update.
     */
    limit?: number
  }

  /**
   * Area upsert
   */
  export type AreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The filter to search for the Area to update in case it exists.
     */
    where: AreaWhereUniqueInput
    /**
     * In case the Area found by the `where` argument doesn't exist, create a new Area with this data.
     */
    create: XOR<AreaCreateInput, AreaUncheckedCreateInput>
    /**
     * In case the Area was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
  }

  /**
   * Area delete
   */
  export type AreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter which Area to delete.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area deleteMany
   */
  export type AreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Areas to delete
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to delete.
     */
    limit?: number
  }

  /**
   * Area findRaw
   */
  export type AreaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Area aggregateRaw
   */
  export type AreaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Area.sensors
   */
  export type Area$sensorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    where?: SensorWhereInput
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    cursor?: SensorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }

  /**
   * Area.alarms
   */
  export type Area$alarmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    where?: AlarmWhereInput
    orderBy?: AlarmOrderByWithRelationInput | AlarmOrderByWithRelationInput[]
    cursor?: AlarmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlarmScalarFieldEnum | AlarmScalarFieldEnum[]
  }

  /**
   * Area.drones
   */
  export type Area$dronesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneOS
     */
    select?: DroneOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneOS
     */
    omit?: DroneOSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneOSInclude<ExtArgs> | null
    where?: DroneOSWhereInput
    orderBy?: DroneOSOrderByWithRelationInput | DroneOSOrderByWithRelationInput[]
    cursor?: DroneOSWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DroneOSScalarFieldEnum | DroneOSScalarFieldEnum[]
  }

  /**
   * Area without action
   */
  export type AreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
  }


  /**
   * Model Sensor
   */

  export type AggregateSensor = {
    _count: SensorCountAggregateOutputType | null
    _avg: SensorAvgAggregateOutputType | null
    _sum: SensorSumAggregateOutputType | null
    _min: SensorMinAggregateOutputType | null
    _max: SensorMaxAggregateOutputType | null
  }

  export type SensorAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type SensorSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type SensorMinAggregateOutputType = {
    id: string | null
    sensorId: string | null
    name: string | null
    sensorType: string | null
    latitude: number | null
    longitude: number | null
    ipAddress: string | null
    rtspUrl: string | null
    battery: string | null
    status: string | null
    sendDrone: string | null
    activeShuruMode: string | null
    areaId: string | null
    alarmId: string | null
    addedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SensorMaxAggregateOutputType = {
    id: string | null
    sensorId: string | null
    name: string | null
    sensorType: string | null
    latitude: number | null
    longitude: number | null
    ipAddress: string | null
    rtspUrl: string | null
    battery: string | null
    status: string | null
    sendDrone: string | null
    activeShuruMode: string | null
    areaId: string | null
    alarmId: string | null
    addedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SensorCountAggregateOutputType = {
    id: number
    sensorId: number
    name: number
    sensorType: number
    latitude: number
    longitude: number
    ipAddress: number
    rtspUrl: number
    battery: number
    status: number
    sendDrone: number
    activeShuruMode: number
    areaId: number
    alarmId: number
    addedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SensorAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type SensorSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type SensorMinAggregateInputType = {
    id?: true
    sensorId?: true
    name?: true
    sensorType?: true
    latitude?: true
    longitude?: true
    ipAddress?: true
    rtspUrl?: true
    battery?: true
    status?: true
    sendDrone?: true
    activeShuruMode?: true
    areaId?: true
    alarmId?: true
    addedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SensorMaxAggregateInputType = {
    id?: true
    sensorId?: true
    name?: true
    sensorType?: true
    latitude?: true
    longitude?: true
    ipAddress?: true
    rtspUrl?: true
    battery?: true
    status?: true
    sendDrone?: true
    activeShuruMode?: true
    areaId?: true
    alarmId?: true
    addedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SensorCountAggregateInputType = {
    id?: true
    sensorId?: true
    name?: true
    sensorType?: true
    latitude?: true
    longitude?: true
    ipAddress?: true
    rtspUrl?: true
    battery?: true
    status?: true
    sendDrone?: true
    activeShuruMode?: true
    areaId?: true
    alarmId?: true
    addedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SensorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sensor to aggregate.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sensors
    **/
    _count?: true | SensorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SensorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SensorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SensorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SensorMaxAggregateInputType
  }

  export type GetSensorAggregateType<T extends SensorAggregateArgs> = {
        [P in keyof T & keyof AggregateSensor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSensor[P]>
      : GetScalarType<T[P], AggregateSensor[P]>
  }




  export type SensorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorWhereInput
    orderBy?: SensorOrderByWithAggregationInput | SensorOrderByWithAggregationInput[]
    by: SensorScalarFieldEnum[] | SensorScalarFieldEnum
    having?: SensorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SensorCountAggregateInputType | true
    _avg?: SensorAvgAggregateInputType
    _sum?: SensorSumAggregateInputType
    _min?: SensorMinAggregateInputType
    _max?: SensorMaxAggregateInputType
  }

  export type SensorGroupByOutputType = {
    id: string
    sensorId: string
    name: string
    sensorType: string
    latitude: number
    longitude: number
    ipAddress: string | null
    rtspUrl: string | null
    battery: string | null
    status: string
    sendDrone: string
    activeShuruMode: string
    areaId: string | null
    alarmId: string | null
    addedBy: string
    createdAt: Date
    updatedAt: Date
    _count: SensorCountAggregateOutputType | null
    _avg: SensorAvgAggregateOutputType | null
    _sum: SensorSumAggregateOutputType | null
    _min: SensorMinAggregateOutputType | null
    _max: SensorMaxAggregateOutputType | null
  }

  type GetSensorGroupByPayload<T extends SensorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SensorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SensorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SensorGroupByOutputType[P]>
            : GetScalarType<T[P], SensorGroupByOutputType[P]>
        }
      >
    >


  export type SensorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sensorId?: boolean
    name?: boolean
    sensorType?: boolean
    latitude?: boolean
    longitude?: boolean
    ipAddress?: boolean
    rtspUrl?: boolean
    battery?: boolean
    status?: boolean
    sendDrone?: boolean
    activeShuruMode?: boolean
    areaId?: boolean
    alarmId?: boolean
    addedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    area?: boolean | Sensor$areaArgs<ExtArgs>
    alarm?: boolean | Sensor$alarmArgs<ExtArgs>
    alerts?: boolean | Sensor$alertsArgs<ExtArgs>
    _count?: boolean | SensorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensor"]>



  export type SensorSelectScalar = {
    id?: boolean
    sensorId?: boolean
    name?: boolean
    sensorType?: boolean
    latitude?: boolean
    longitude?: boolean
    ipAddress?: boolean
    rtspUrl?: boolean
    battery?: boolean
    status?: boolean
    sendDrone?: boolean
    activeShuruMode?: boolean
    areaId?: boolean
    alarmId?: boolean
    addedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SensorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sensorId" | "name" | "sensorType" | "latitude" | "longitude" | "ipAddress" | "rtspUrl" | "battery" | "status" | "sendDrone" | "activeShuruMode" | "areaId" | "alarmId" | "addedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["sensor"]>
  export type SensorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | Sensor$areaArgs<ExtArgs>
    alarm?: boolean | Sensor$alarmArgs<ExtArgs>
    alerts?: boolean | Sensor$alertsArgs<ExtArgs>
    _count?: boolean | SensorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SensorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sensor"
    objects: {
      area: Prisma.$AreaPayload<ExtArgs> | null
      alarm: Prisma.$AlarmPayload<ExtArgs> | null
      alerts: Prisma.$AlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sensorId: string
      name: string
      sensorType: string
      latitude: number
      longitude: number
      ipAddress: string | null
      rtspUrl: string | null
      battery: string | null
      status: string
      sendDrone: string
      activeShuruMode: string
      areaId: string | null
      alarmId: string | null
      addedBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sensor"]>
    composites: {}
  }

  type SensorGetPayload<S extends boolean | null | undefined | SensorDefaultArgs> = $Result.GetResult<Prisma.$SensorPayload, S>

  type SensorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SensorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SensorCountAggregateInputType | true
    }

  export interface SensorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sensor'], meta: { name: 'Sensor' } }
    /**
     * Find zero or one Sensor that matches the filter.
     * @param {SensorFindUniqueArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SensorFindUniqueArgs>(args: SelectSubset<T, SensorFindUniqueArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sensor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SensorFindUniqueOrThrowArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SensorFindUniqueOrThrowArgs>(args: SelectSubset<T, SensorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sensor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorFindFirstArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SensorFindFirstArgs>(args?: SelectSubset<T, SensorFindFirstArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sensor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorFindFirstOrThrowArgs} args - Arguments to find a Sensor
     * @example
     * // Get one Sensor
     * const sensor = await prisma.sensor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SensorFindFirstOrThrowArgs>(args?: SelectSubset<T, SensorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sensors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sensors
     * const sensors = await prisma.sensor.findMany()
     * 
     * // Get first 10 Sensors
     * const sensors = await prisma.sensor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sensorWithIdOnly = await prisma.sensor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SensorFindManyArgs>(args?: SelectSubset<T, SensorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sensor.
     * @param {SensorCreateArgs} args - Arguments to create a Sensor.
     * @example
     * // Create one Sensor
     * const Sensor = await prisma.sensor.create({
     *   data: {
     *     // ... data to create a Sensor
     *   }
     * })
     * 
     */
    create<T extends SensorCreateArgs>(args: SelectSubset<T, SensorCreateArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sensors.
     * @param {SensorCreateManyArgs} args - Arguments to create many Sensors.
     * @example
     * // Create many Sensors
     * const sensor = await prisma.sensor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SensorCreateManyArgs>(args?: SelectSubset<T, SensorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sensor.
     * @param {SensorDeleteArgs} args - Arguments to delete one Sensor.
     * @example
     * // Delete one Sensor
     * const Sensor = await prisma.sensor.delete({
     *   where: {
     *     // ... filter to delete one Sensor
     *   }
     * })
     * 
     */
    delete<T extends SensorDeleteArgs>(args: SelectSubset<T, SensorDeleteArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sensor.
     * @param {SensorUpdateArgs} args - Arguments to update one Sensor.
     * @example
     * // Update one Sensor
     * const sensor = await prisma.sensor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SensorUpdateArgs>(args: SelectSubset<T, SensorUpdateArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sensors.
     * @param {SensorDeleteManyArgs} args - Arguments to filter Sensors to delete.
     * @example
     * // Delete a few Sensors
     * const { count } = await prisma.sensor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SensorDeleteManyArgs>(args?: SelectSubset<T, SensorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sensors
     * const sensor = await prisma.sensor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SensorUpdateManyArgs>(args: SelectSubset<T, SensorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sensor.
     * @param {SensorUpsertArgs} args - Arguments to update or create a Sensor.
     * @example
     * // Update or create a Sensor
     * const sensor = await prisma.sensor.upsert({
     *   create: {
     *     // ... data to create a Sensor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sensor we want to update
     *   }
     * })
     */
    upsert<T extends SensorUpsertArgs>(args: SelectSubset<T, SensorUpsertArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sensors that matches the filter.
     * @param {SensorFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const sensor = await prisma.sensor.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SensorFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Sensor.
     * @param {SensorAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const sensor = await prisma.sensor.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SensorAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Sensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorCountArgs} args - Arguments to filter Sensors to count.
     * @example
     * // Count the number of Sensors
     * const count = await prisma.sensor.count({
     *   where: {
     *     // ... the filter for the Sensors we want to count
     *   }
     * })
    **/
    count<T extends SensorCountArgs>(
      args?: Subset<T, SensorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SensorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sensor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SensorAggregateArgs>(args: Subset<T, SensorAggregateArgs>): Prisma.PrismaPromise<GetSensorAggregateType<T>>

    /**
     * Group by Sensor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorGroupByArgs} args - Group by arguments.
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
      T extends SensorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SensorGroupByArgs['orderBy'] }
        : { orderBy?: SensorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SensorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSensorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sensor model
   */
  readonly fields: SensorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sensor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SensorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    area<T extends Sensor$areaArgs<ExtArgs> = {}>(args?: Subset<T, Sensor$areaArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    alarm<T extends Sensor$alarmArgs<ExtArgs> = {}>(args?: Subset<T, Sensor$alarmArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    alerts<T extends Sensor$alertsArgs<ExtArgs> = {}>(args?: Subset<T, Sensor$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Sensor model
   */
  interface SensorFieldRefs {
    readonly id: FieldRef<"Sensor", 'String'>
    readonly sensorId: FieldRef<"Sensor", 'String'>
    readonly name: FieldRef<"Sensor", 'String'>
    readonly sensorType: FieldRef<"Sensor", 'String'>
    readonly latitude: FieldRef<"Sensor", 'Float'>
    readonly longitude: FieldRef<"Sensor", 'Float'>
    readonly ipAddress: FieldRef<"Sensor", 'String'>
    readonly rtspUrl: FieldRef<"Sensor", 'String'>
    readonly battery: FieldRef<"Sensor", 'String'>
    readonly status: FieldRef<"Sensor", 'String'>
    readonly sendDrone: FieldRef<"Sensor", 'String'>
    readonly activeShuruMode: FieldRef<"Sensor", 'String'>
    readonly areaId: FieldRef<"Sensor", 'String'>
    readonly alarmId: FieldRef<"Sensor", 'String'>
    readonly addedBy: FieldRef<"Sensor", 'String'>
    readonly createdAt: FieldRef<"Sensor", 'DateTime'>
    readonly updatedAt: FieldRef<"Sensor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sensor findUnique
   */
  export type SensorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where: SensorWhereUniqueInput
  }

  /**
   * Sensor findUniqueOrThrow
   */
  export type SensorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where: SensorWhereUniqueInput
  }

  /**
   * Sensor findFirst
   */
  export type SensorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sensors.
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sensors.
     */
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }

  /**
   * Sensor findFirstOrThrow
   */
  export type SensorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensor to fetch.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sensors.
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sensors.
     */
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }

  /**
   * Sensor findMany
   */
  export type SensorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter, which Sensors to fetch.
     */
    where?: SensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sensors to fetch.
     */
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sensors.
     */
    cursor?: SensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sensors.
     */
    skip?: number
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }

  /**
   * Sensor create
   */
  export type SensorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * The data needed to create a Sensor.
     */
    data: XOR<SensorCreateInput, SensorUncheckedCreateInput>
  }

  /**
   * Sensor createMany
   */
  export type SensorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sensors.
     */
    data: SensorCreateManyInput | SensorCreateManyInput[]
  }

  /**
   * Sensor update
   */
  export type SensorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * The data needed to update a Sensor.
     */
    data: XOR<SensorUpdateInput, SensorUncheckedUpdateInput>
    /**
     * Choose, which Sensor to update.
     */
    where: SensorWhereUniqueInput
  }

  /**
   * Sensor updateMany
   */
  export type SensorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sensors.
     */
    data: XOR<SensorUpdateManyMutationInput, SensorUncheckedUpdateManyInput>
    /**
     * Filter which Sensors to update
     */
    where?: SensorWhereInput
    /**
     * Limit how many Sensors to update.
     */
    limit?: number
  }

  /**
   * Sensor upsert
   */
  export type SensorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * The filter to search for the Sensor to update in case it exists.
     */
    where: SensorWhereUniqueInput
    /**
     * In case the Sensor found by the `where` argument doesn't exist, create a new Sensor with this data.
     */
    create: XOR<SensorCreateInput, SensorUncheckedCreateInput>
    /**
     * In case the Sensor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SensorUpdateInput, SensorUncheckedUpdateInput>
  }

  /**
   * Sensor delete
   */
  export type SensorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    /**
     * Filter which Sensor to delete.
     */
    where: SensorWhereUniqueInput
  }

  /**
   * Sensor deleteMany
   */
  export type SensorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sensors to delete
     */
    where?: SensorWhereInput
    /**
     * Limit how many Sensors to delete.
     */
    limit?: number
  }

  /**
   * Sensor findRaw
   */
  export type SensorFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Sensor aggregateRaw
   */
  export type SensorAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Sensor.area
   */
  export type Sensor$areaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
  }

  /**
   * Sensor.alarm
   */
  export type Sensor$alarmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    where?: AlarmWhereInput
  }

  /**
   * Sensor.alerts
   */
  export type Sensor$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Sensor without action
   */
  export type SensorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
  }


  /**
   * Model DroneOS
   */

  export type AggregateDroneOS = {
    _count: DroneOSCountAggregateOutputType | null
    _avg: DroneOSAvgAggregateOutputType | null
    _sum: DroneOSSumAggregateOutputType | null
    _min: DroneOSMinAggregateOutputType | null
    _max: DroneOSMaxAggregateOutputType | null
  }

  export type DroneOSAvgAggregateOutputType = {
    minHDOP: number | null
    minSatCount: number | null
    maxWindSpeed: number | null
    droneSpeed: number | null
    targetAltitude: number | null
    minBatteryLevel: number | null
    maxAltitude: number | null
    latitude: number | null
    longitude: number | null
    lastLatitude: number | null
    lastLongitude: number | null
    lastAltitude: number | null
    battery: number | null
  }

  export type DroneOSSumAggregateOutputType = {
    minHDOP: number | null
    minSatCount: number | null
    maxWindSpeed: number | null
    droneSpeed: number | null
    targetAltitude: number | null
    minBatteryLevel: number | null
    maxAltitude: number | null
    latitude: number | null
    longitude: number | null
    lastLatitude: number | null
    lastLongitude: number | null
    lastAltitude: number | null
    battery: number | null
  }

  export type DroneOSMinAggregateOutputType = {
    id: string | null
    droneId: string | null
    droneOSName: string | null
    droneType: string | null
    videoLink: string | null
    gpsFix: string | null
    minHDOP: number | null
    minSatCount: number | null
    maxWindSpeed: number | null
    droneSpeed: number | null
    targetAltitude: number | null
    gpsLost: string | null
    telemetryLost: string | null
    minBatteryLevel: number | null
    usbAddress: string | null
    batteryFailSafe: string | null
    gpsName: string | null
    maxAltitude: number | null
    latitude: number | null
    longitude: number | null
    addedBy: string | null
    lastLatitude: number | null
    lastLongitude: number | null
    lastAltitude: number | null
    battery: number | null
    droneMode: string | null
    areaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DroneOSMaxAggregateOutputType = {
    id: string | null
    droneId: string | null
    droneOSName: string | null
    droneType: string | null
    videoLink: string | null
    gpsFix: string | null
    minHDOP: number | null
    minSatCount: number | null
    maxWindSpeed: number | null
    droneSpeed: number | null
    targetAltitude: number | null
    gpsLost: string | null
    telemetryLost: string | null
    minBatteryLevel: number | null
    usbAddress: string | null
    batteryFailSafe: string | null
    gpsName: string | null
    maxAltitude: number | null
    latitude: number | null
    longitude: number | null
    addedBy: string | null
    lastLatitude: number | null
    lastLongitude: number | null
    lastAltitude: number | null
    battery: number | null
    droneMode: string | null
    areaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DroneOSCountAggregateOutputType = {
    id: number
    droneId: number
    droneOSName: number
    droneType: number
    videoLink: number
    gpsFix: number
    minHDOP: number
    minSatCount: number
    maxWindSpeed: number
    droneSpeed: number
    targetAltitude: number
    gpsLost: number
    telemetryLost: number
    minBatteryLevel: number
    usbAddress: number
    batteryFailSafe: number
    gpsName: number
    maxAltitude: number
    latitude: number
    longitude: number
    addedBy: number
    lastLatitude: number
    lastLongitude: number
    lastAltitude: number
    battery: number
    droneMode: number
    areaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DroneOSAvgAggregateInputType = {
    minHDOP?: true
    minSatCount?: true
    maxWindSpeed?: true
    droneSpeed?: true
    targetAltitude?: true
    minBatteryLevel?: true
    maxAltitude?: true
    latitude?: true
    longitude?: true
    lastLatitude?: true
    lastLongitude?: true
    lastAltitude?: true
    battery?: true
  }

  export type DroneOSSumAggregateInputType = {
    minHDOP?: true
    minSatCount?: true
    maxWindSpeed?: true
    droneSpeed?: true
    targetAltitude?: true
    minBatteryLevel?: true
    maxAltitude?: true
    latitude?: true
    longitude?: true
    lastLatitude?: true
    lastLongitude?: true
    lastAltitude?: true
    battery?: true
  }

  export type DroneOSMinAggregateInputType = {
    id?: true
    droneId?: true
    droneOSName?: true
    droneType?: true
    videoLink?: true
    gpsFix?: true
    minHDOP?: true
    minSatCount?: true
    maxWindSpeed?: true
    droneSpeed?: true
    targetAltitude?: true
    gpsLost?: true
    telemetryLost?: true
    minBatteryLevel?: true
    usbAddress?: true
    batteryFailSafe?: true
    gpsName?: true
    maxAltitude?: true
    latitude?: true
    longitude?: true
    addedBy?: true
    lastLatitude?: true
    lastLongitude?: true
    lastAltitude?: true
    battery?: true
    droneMode?: true
    areaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DroneOSMaxAggregateInputType = {
    id?: true
    droneId?: true
    droneOSName?: true
    droneType?: true
    videoLink?: true
    gpsFix?: true
    minHDOP?: true
    minSatCount?: true
    maxWindSpeed?: true
    droneSpeed?: true
    targetAltitude?: true
    gpsLost?: true
    telemetryLost?: true
    minBatteryLevel?: true
    usbAddress?: true
    batteryFailSafe?: true
    gpsName?: true
    maxAltitude?: true
    latitude?: true
    longitude?: true
    addedBy?: true
    lastLatitude?: true
    lastLongitude?: true
    lastAltitude?: true
    battery?: true
    droneMode?: true
    areaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DroneOSCountAggregateInputType = {
    id?: true
    droneId?: true
    droneOSName?: true
    droneType?: true
    videoLink?: true
    gpsFix?: true
    minHDOP?: true
    minSatCount?: true
    maxWindSpeed?: true
    droneSpeed?: true
    targetAltitude?: true
    gpsLost?: true
    telemetryLost?: true
    minBatteryLevel?: true
    usbAddress?: true
    batteryFailSafe?: true
    gpsName?: true
    maxAltitude?: true
    latitude?: true
    longitude?: true
    addedBy?: true
    lastLatitude?: true
    lastLongitude?: true
    lastAltitude?: true
    battery?: true
    droneMode?: true
    areaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DroneOSAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DroneOS to aggregate.
     */
    where?: DroneOSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DroneOS to fetch.
     */
    orderBy?: DroneOSOrderByWithRelationInput | DroneOSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DroneOSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DroneOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DroneOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DroneOS
    **/
    _count?: true | DroneOSCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DroneOSAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DroneOSSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DroneOSMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DroneOSMaxAggregateInputType
  }

  export type GetDroneOSAggregateType<T extends DroneOSAggregateArgs> = {
        [P in keyof T & keyof AggregateDroneOS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDroneOS[P]>
      : GetScalarType<T[P], AggregateDroneOS[P]>
  }




  export type DroneOSGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DroneOSWhereInput
    orderBy?: DroneOSOrderByWithAggregationInput | DroneOSOrderByWithAggregationInput[]
    by: DroneOSScalarFieldEnum[] | DroneOSScalarFieldEnum
    having?: DroneOSScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DroneOSCountAggregateInputType | true
    _avg?: DroneOSAvgAggregateInputType
    _sum?: DroneOSSumAggregateInputType
    _min?: DroneOSMinAggregateInputType
    _max?: DroneOSMaxAggregateInputType
  }

  export type DroneOSGroupByOutputType = {
    id: string
    droneId: string | null
    droneOSName: string
    droneType: string
    videoLink: string | null
    gpsFix: string
    minHDOP: number
    minSatCount: number
    maxWindSpeed: number
    droneSpeed: number
    targetAltitude: number
    gpsLost: string
    telemetryLost: string
    minBatteryLevel: number
    usbAddress: string
    batteryFailSafe: string
    gpsName: string
    maxAltitude: number
    latitude: number | null
    longitude: number | null
    addedBy: string
    lastLatitude: number | null
    lastLongitude: number | null
    lastAltitude: number | null
    battery: number | null
    droneMode: string | null
    areaId: string | null
    createdAt: Date
    updatedAt: Date
    _count: DroneOSCountAggregateOutputType | null
    _avg: DroneOSAvgAggregateOutputType | null
    _sum: DroneOSSumAggregateOutputType | null
    _min: DroneOSMinAggregateOutputType | null
    _max: DroneOSMaxAggregateOutputType | null
  }

  type GetDroneOSGroupByPayload<T extends DroneOSGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DroneOSGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DroneOSGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DroneOSGroupByOutputType[P]>
            : GetScalarType<T[P], DroneOSGroupByOutputType[P]>
        }
      >
    >


  export type DroneOSSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    droneId?: boolean
    droneOSName?: boolean
    droneType?: boolean
    videoLink?: boolean
    gpsFix?: boolean
    minHDOP?: boolean
    minSatCount?: boolean
    maxWindSpeed?: boolean
    droneSpeed?: boolean
    targetAltitude?: boolean
    gpsLost?: boolean
    telemetryLost?: boolean
    minBatteryLevel?: boolean
    usbAddress?: boolean
    batteryFailSafe?: boolean
    gpsName?: boolean
    maxAltitude?: boolean
    latitude?: boolean
    longitude?: boolean
    addedBy?: boolean
    lastLatitude?: boolean
    lastLongitude?: boolean
    lastAltitude?: boolean
    battery?: boolean
    droneMode?: boolean
    areaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    area?: boolean | DroneOS$areaArgs<ExtArgs>
    flightHistory?: boolean | DroneOS$flightHistoryArgs<ExtArgs>
    _count?: boolean | DroneOSCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["droneOS"]>



  export type DroneOSSelectScalar = {
    id?: boolean
    droneId?: boolean
    droneOSName?: boolean
    droneType?: boolean
    videoLink?: boolean
    gpsFix?: boolean
    minHDOP?: boolean
    minSatCount?: boolean
    maxWindSpeed?: boolean
    droneSpeed?: boolean
    targetAltitude?: boolean
    gpsLost?: boolean
    telemetryLost?: boolean
    minBatteryLevel?: boolean
    usbAddress?: boolean
    batteryFailSafe?: boolean
    gpsName?: boolean
    maxAltitude?: boolean
    latitude?: boolean
    longitude?: boolean
    addedBy?: boolean
    lastLatitude?: boolean
    lastLongitude?: boolean
    lastAltitude?: boolean
    battery?: boolean
    droneMode?: boolean
    areaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DroneOSOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "droneId" | "droneOSName" | "droneType" | "videoLink" | "gpsFix" | "minHDOP" | "minSatCount" | "maxWindSpeed" | "droneSpeed" | "targetAltitude" | "gpsLost" | "telemetryLost" | "minBatteryLevel" | "usbAddress" | "batteryFailSafe" | "gpsName" | "maxAltitude" | "latitude" | "longitude" | "addedBy" | "lastLatitude" | "lastLongitude" | "lastAltitude" | "battery" | "droneMode" | "areaId" | "createdAt" | "updatedAt", ExtArgs["result"]["droneOS"]>
  export type DroneOSInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | DroneOS$areaArgs<ExtArgs>
    flightHistory?: boolean | DroneOS$flightHistoryArgs<ExtArgs>
    _count?: boolean | DroneOSCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DroneOSPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DroneOS"
    objects: {
      area: Prisma.$AreaPayload<ExtArgs> | null
      flightHistory: Prisma.$DroneFlightHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      droneId: string | null
      droneOSName: string
      droneType: string
      videoLink: string | null
      gpsFix: string
      minHDOP: number
      minSatCount: number
      maxWindSpeed: number
      droneSpeed: number
      targetAltitude: number
      gpsLost: string
      telemetryLost: string
      minBatteryLevel: number
      usbAddress: string
      batteryFailSafe: string
      gpsName: string
      maxAltitude: number
      latitude: number | null
      longitude: number | null
      addedBy: string
      lastLatitude: number | null
      lastLongitude: number | null
      lastAltitude: number | null
      battery: number | null
      droneMode: string | null
      areaId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["droneOS"]>
    composites: {}
  }

  type DroneOSGetPayload<S extends boolean | null | undefined | DroneOSDefaultArgs> = $Result.GetResult<Prisma.$DroneOSPayload, S>

  type DroneOSCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DroneOSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DroneOSCountAggregateInputType | true
    }

  export interface DroneOSDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DroneOS'], meta: { name: 'DroneOS' } }
    /**
     * Find zero or one DroneOS that matches the filter.
     * @param {DroneOSFindUniqueArgs} args - Arguments to find a DroneOS
     * @example
     * // Get one DroneOS
     * const droneOS = await prisma.droneOS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DroneOSFindUniqueArgs>(args: SelectSubset<T, DroneOSFindUniqueArgs<ExtArgs>>): Prisma__DroneOSClient<$Result.GetResult<Prisma.$DroneOSPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DroneOS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DroneOSFindUniqueOrThrowArgs} args - Arguments to find a DroneOS
     * @example
     * // Get one DroneOS
     * const droneOS = await prisma.droneOS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DroneOSFindUniqueOrThrowArgs>(args: SelectSubset<T, DroneOSFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DroneOSClient<$Result.GetResult<Prisma.$DroneOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DroneOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneOSFindFirstArgs} args - Arguments to find a DroneOS
     * @example
     * // Get one DroneOS
     * const droneOS = await prisma.droneOS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DroneOSFindFirstArgs>(args?: SelectSubset<T, DroneOSFindFirstArgs<ExtArgs>>): Prisma__DroneOSClient<$Result.GetResult<Prisma.$DroneOSPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DroneOS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneOSFindFirstOrThrowArgs} args - Arguments to find a DroneOS
     * @example
     * // Get one DroneOS
     * const droneOS = await prisma.droneOS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DroneOSFindFirstOrThrowArgs>(args?: SelectSubset<T, DroneOSFindFirstOrThrowArgs<ExtArgs>>): Prisma__DroneOSClient<$Result.GetResult<Prisma.$DroneOSPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DroneOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneOSFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DroneOS
     * const droneOS = await prisma.droneOS.findMany()
     * 
     * // Get first 10 DroneOS
     * const droneOS = await prisma.droneOS.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const droneOSWithIdOnly = await prisma.droneOS.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DroneOSFindManyArgs>(args?: SelectSubset<T, DroneOSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DroneOSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DroneOS.
     * @param {DroneOSCreateArgs} args - Arguments to create a DroneOS.
     * @example
     * // Create one DroneOS
     * const DroneOS = await prisma.droneOS.create({
     *   data: {
     *     // ... data to create a DroneOS
     *   }
     * })
     * 
     */
    create<T extends DroneOSCreateArgs>(args: SelectSubset<T, DroneOSCreateArgs<ExtArgs>>): Prisma__DroneOSClient<$Result.GetResult<Prisma.$DroneOSPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DroneOS.
     * @param {DroneOSCreateManyArgs} args - Arguments to create many DroneOS.
     * @example
     * // Create many DroneOS
     * const droneOS = await prisma.droneOS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DroneOSCreateManyArgs>(args?: SelectSubset<T, DroneOSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DroneOS.
     * @param {DroneOSDeleteArgs} args - Arguments to delete one DroneOS.
     * @example
     * // Delete one DroneOS
     * const DroneOS = await prisma.droneOS.delete({
     *   where: {
     *     // ... filter to delete one DroneOS
     *   }
     * })
     * 
     */
    delete<T extends DroneOSDeleteArgs>(args: SelectSubset<T, DroneOSDeleteArgs<ExtArgs>>): Prisma__DroneOSClient<$Result.GetResult<Prisma.$DroneOSPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DroneOS.
     * @param {DroneOSUpdateArgs} args - Arguments to update one DroneOS.
     * @example
     * // Update one DroneOS
     * const droneOS = await prisma.droneOS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DroneOSUpdateArgs>(args: SelectSubset<T, DroneOSUpdateArgs<ExtArgs>>): Prisma__DroneOSClient<$Result.GetResult<Prisma.$DroneOSPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DroneOS.
     * @param {DroneOSDeleteManyArgs} args - Arguments to filter DroneOS to delete.
     * @example
     * // Delete a few DroneOS
     * const { count } = await prisma.droneOS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DroneOSDeleteManyArgs>(args?: SelectSubset<T, DroneOSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DroneOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneOSUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DroneOS
     * const droneOS = await prisma.droneOS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DroneOSUpdateManyArgs>(args: SelectSubset<T, DroneOSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DroneOS.
     * @param {DroneOSUpsertArgs} args - Arguments to update or create a DroneOS.
     * @example
     * // Update or create a DroneOS
     * const droneOS = await prisma.droneOS.upsert({
     *   create: {
     *     // ... data to create a DroneOS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DroneOS we want to update
     *   }
     * })
     */
    upsert<T extends DroneOSUpsertArgs>(args: SelectSubset<T, DroneOSUpsertArgs<ExtArgs>>): Prisma__DroneOSClient<$Result.GetResult<Prisma.$DroneOSPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DroneOS that matches the filter.
     * @param {DroneOSFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const droneOS = await prisma.droneOS.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DroneOSFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DroneOS.
     * @param {DroneOSAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const droneOS = await prisma.droneOS.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DroneOSAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of DroneOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneOSCountArgs} args - Arguments to filter DroneOS to count.
     * @example
     * // Count the number of DroneOS
     * const count = await prisma.droneOS.count({
     *   where: {
     *     // ... the filter for the DroneOS we want to count
     *   }
     * })
    **/
    count<T extends DroneOSCountArgs>(
      args?: Subset<T, DroneOSCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DroneOSCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DroneOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneOSAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DroneOSAggregateArgs>(args: Subset<T, DroneOSAggregateArgs>): Prisma.PrismaPromise<GetDroneOSAggregateType<T>>

    /**
     * Group by DroneOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneOSGroupByArgs} args - Group by arguments.
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
      T extends DroneOSGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DroneOSGroupByArgs['orderBy'] }
        : { orderBy?: DroneOSGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DroneOSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDroneOSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DroneOS model
   */
  readonly fields: DroneOSFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DroneOS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DroneOSClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    area<T extends DroneOS$areaArgs<ExtArgs> = {}>(args?: Subset<T, DroneOS$areaArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    flightHistory<T extends DroneOS$flightHistoryArgs<ExtArgs> = {}>(args?: Subset<T, DroneOS$flightHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DroneFlightHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DroneOS model
   */
  interface DroneOSFieldRefs {
    readonly id: FieldRef<"DroneOS", 'String'>
    readonly droneId: FieldRef<"DroneOS", 'String'>
    readonly droneOSName: FieldRef<"DroneOS", 'String'>
    readonly droneType: FieldRef<"DroneOS", 'String'>
    readonly videoLink: FieldRef<"DroneOS", 'String'>
    readonly gpsFix: FieldRef<"DroneOS", 'String'>
    readonly minHDOP: FieldRef<"DroneOS", 'Float'>
    readonly minSatCount: FieldRef<"DroneOS", 'Int'>
    readonly maxWindSpeed: FieldRef<"DroneOS", 'Float'>
    readonly droneSpeed: FieldRef<"DroneOS", 'Float'>
    readonly targetAltitude: FieldRef<"DroneOS", 'Float'>
    readonly gpsLost: FieldRef<"DroneOS", 'String'>
    readonly telemetryLost: FieldRef<"DroneOS", 'String'>
    readonly minBatteryLevel: FieldRef<"DroneOS", 'Float'>
    readonly usbAddress: FieldRef<"DroneOS", 'String'>
    readonly batteryFailSafe: FieldRef<"DroneOS", 'String'>
    readonly gpsName: FieldRef<"DroneOS", 'String'>
    readonly maxAltitude: FieldRef<"DroneOS", 'Float'>
    readonly latitude: FieldRef<"DroneOS", 'Float'>
    readonly longitude: FieldRef<"DroneOS", 'Float'>
    readonly addedBy: FieldRef<"DroneOS", 'String'>
    readonly lastLatitude: FieldRef<"DroneOS", 'Float'>
    readonly lastLongitude: FieldRef<"DroneOS", 'Float'>
    readonly lastAltitude: FieldRef<"DroneOS", 'Float'>
    readonly battery: FieldRef<"DroneOS", 'Float'>
    readonly droneMode: FieldRef<"DroneOS", 'String'>
    readonly areaId: FieldRef<"DroneOS", 'String'>
    readonly createdAt: FieldRef<"DroneOS", 'DateTime'>
    readonly updatedAt: FieldRef<"DroneOS", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DroneOS findUnique
   */
  export type DroneOSFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneOS
     */
    select?: DroneOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneOS
     */
    omit?: DroneOSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneOSInclude<ExtArgs> | null
    /**
     * Filter, which DroneOS to fetch.
     */
    where: DroneOSWhereUniqueInput
  }

  /**
   * DroneOS findUniqueOrThrow
   */
  export type DroneOSFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneOS
     */
    select?: DroneOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneOS
     */
    omit?: DroneOSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneOSInclude<ExtArgs> | null
    /**
     * Filter, which DroneOS to fetch.
     */
    where: DroneOSWhereUniqueInput
  }

  /**
   * DroneOS findFirst
   */
  export type DroneOSFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneOS
     */
    select?: DroneOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneOS
     */
    omit?: DroneOSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneOSInclude<ExtArgs> | null
    /**
     * Filter, which DroneOS to fetch.
     */
    where?: DroneOSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DroneOS to fetch.
     */
    orderBy?: DroneOSOrderByWithRelationInput | DroneOSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DroneOS.
     */
    cursor?: DroneOSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DroneOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DroneOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DroneOS.
     */
    distinct?: DroneOSScalarFieldEnum | DroneOSScalarFieldEnum[]
  }

  /**
   * DroneOS findFirstOrThrow
   */
  export type DroneOSFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneOS
     */
    select?: DroneOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneOS
     */
    omit?: DroneOSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneOSInclude<ExtArgs> | null
    /**
     * Filter, which DroneOS to fetch.
     */
    where?: DroneOSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DroneOS to fetch.
     */
    orderBy?: DroneOSOrderByWithRelationInput | DroneOSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DroneOS.
     */
    cursor?: DroneOSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DroneOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DroneOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DroneOS.
     */
    distinct?: DroneOSScalarFieldEnum | DroneOSScalarFieldEnum[]
  }

  /**
   * DroneOS findMany
   */
  export type DroneOSFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneOS
     */
    select?: DroneOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneOS
     */
    omit?: DroneOSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneOSInclude<ExtArgs> | null
    /**
     * Filter, which DroneOS to fetch.
     */
    where?: DroneOSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DroneOS to fetch.
     */
    orderBy?: DroneOSOrderByWithRelationInput | DroneOSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DroneOS.
     */
    cursor?: DroneOSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DroneOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DroneOS.
     */
    skip?: number
    distinct?: DroneOSScalarFieldEnum | DroneOSScalarFieldEnum[]
  }

  /**
   * DroneOS create
   */
  export type DroneOSCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneOS
     */
    select?: DroneOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneOS
     */
    omit?: DroneOSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneOSInclude<ExtArgs> | null
    /**
     * The data needed to create a DroneOS.
     */
    data: XOR<DroneOSCreateInput, DroneOSUncheckedCreateInput>
  }

  /**
   * DroneOS createMany
   */
  export type DroneOSCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DroneOS.
     */
    data: DroneOSCreateManyInput | DroneOSCreateManyInput[]
  }

  /**
   * DroneOS update
   */
  export type DroneOSUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneOS
     */
    select?: DroneOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneOS
     */
    omit?: DroneOSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneOSInclude<ExtArgs> | null
    /**
     * The data needed to update a DroneOS.
     */
    data: XOR<DroneOSUpdateInput, DroneOSUncheckedUpdateInput>
    /**
     * Choose, which DroneOS to update.
     */
    where: DroneOSWhereUniqueInput
  }

  /**
   * DroneOS updateMany
   */
  export type DroneOSUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DroneOS.
     */
    data: XOR<DroneOSUpdateManyMutationInput, DroneOSUncheckedUpdateManyInput>
    /**
     * Filter which DroneOS to update
     */
    where?: DroneOSWhereInput
    /**
     * Limit how many DroneOS to update.
     */
    limit?: number
  }

  /**
   * DroneOS upsert
   */
  export type DroneOSUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneOS
     */
    select?: DroneOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneOS
     */
    omit?: DroneOSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneOSInclude<ExtArgs> | null
    /**
     * The filter to search for the DroneOS to update in case it exists.
     */
    where: DroneOSWhereUniqueInput
    /**
     * In case the DroneOS found by the `where` argument doesn't exist, create a new DroneOS with this data.
     */
    create: XOR<DroneOSCreateInput, DroneOSUncheckedCreateInput>
    /**
     * In case the DroneOS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DroneOSUpdateInput, DroneOSUncheckedUpdateInput>
  }

  /**
   * DroneOS delete
   */
  export type DroneOSDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneOS
     */
    select?: DroneOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneOS
     */
    omit?: DroneOSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneOSInclude<ExtArgs> | null
    /**
     * Filter which DroneOS to delete.
     */
    where: DroneOSWhereUniqueInput
  }

  /**
   * DroneOS deleteMany
   */
  export type DroneOSDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DroneOS to delete
     */
    where?: DroneOSWhereInput
    /**
     * Limit how many DroneOS to delete.
     */
    limit?: number
  }

  /**
   * DroneOS findRaw
   */
  export type DroneOSFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DroneOS aggregateRaw
   */
  export type DroneOSAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DroneOS.area
   */
  export type DroneOS$areaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
  }

  /**
   * DroneOS.flightHistory
   */
  export type DroneOS$flightHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneFlightHistory
     */
    select?: DroneFlightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneFlightHistory
     */
    omit?: DroneFlightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneFlightHistoryInclude<ExtArgs> | null
    where?: DroneFlightHistoryWhereInput
    orderBy?: DroneFlightHistoryOrderByWithRelationInput | DroneFlightHistoryOrderByWithRelationInput[]
    cursor?: DroneFlightHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DroneFlightHistoryScalarFieldEnum | DroneFlightHistoryScalarFieldEnum[]
  }

  /**
   * DroneOS without action
   */
  export type DroneOSDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneOS
     */
    select?: DroneOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneOS
     */
    omit?: DroneOSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneOSInclude<ExtArgs> | null
  }


  /**
   * Model Alarm
   */

  export type AggregateAlarm = {
    _count: AlarmCountAggregateOutputType | null
    _min: AlarmMinAggregateOutputType | null
    _max: AlarmMaxAggregateOutputType | null
  }

  export type AlarmMinAggregateOutputType = {
    id: string | null
    alarmId: string | null
    name: string | null
    status: string | null
    areaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlarmMaxAggregateOutputType = {
    id: string | null
    alarmId: string | null
    name: string | null
    status: string | null
    areaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlarmCountAggregateOutputType = {
    id: number
    alarmId: number
    name: number
    status: number
    areaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlarmMinAggregateInputType = {
    id?: true
    alarmId?: true
    name?: true
    status?: true
    areaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlarmMaxAggregateInputType = {
    id?: true
    alarmId?: true
    name?: true
    status?: true
    areaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlarmCountAggregateInputType = {
    id?: true
    alarmId?: true
    name?: true
    status?: true
    areaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlarmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alarm to aggregate.
     */
    where?: AlarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alarms to fetch.
     */
    orderBy?: AlarmOrderByWithRelationInput | AlarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alarms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alarms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alarms
    **/
    _count?: true | AlarmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlarmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlarmMaxAggregateInputType
  }

  export type GetAlarmAggregateType<T extends AlarmAggregateArgs> = {
        [P in keyof T & keyof AggregateAlarm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlarm[P]>
      : GetScalarType<T[P], AggregateAlarm[P]>
  }




  export type AlarmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlarmWhereInput
    orderBy?: AlarmOrderByWithAggregationInput | AlarmOrderByWithAggregationInput[]
    by: AlarmScalarFieldEnum[] | AlarmScalarFieldEnum
    having?: AlarmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlarmCountAggregateInputType | true
    _min?: AlarmMinAggregateInputType
    _max?: AlarmMaxAggregateInputType
  }

  export type AlarmGroupByOutputType = {
    id: string
    alarmId: string
    name: string
    status: string
    areaId: string | null
    createdAt: Date
    updatedAt: Date
    _count: AlarmCountAggregateOutputType | null
    _min: AlarmMinAggregateOutputType | null
    _max: AlarmMaxAggregateOutputType | null
  }

  type GetAlarmGroupByPayload<T extends AlarmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlarmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlarmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlarmGroupByOutputType[P]>
            : GetScalarType<T[P], AlarmGroupByOutputType[P]>
        }
      >
    >


  export type AlarmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alarmId?: boolean
    name?: boolean
    status?: boolean
    areaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    area?: boolean | Alarm$areaArgs<ExtArgs>
    sensors?: boolean | Alarm$sensorsArgs<ExtArgs>
    _count?: boolean | AlarmCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alarm"]>



  export type AlarmSelectScalar = {
    id?: boolean
    alarmId?: boolean
    name?: boolean
    status?: boolean
    areaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlarmOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alarmId" | "name" | "status" | "areaId" | "createdAt" | "updatedAt", ExtArgs["result"]["alarm"]>
  export type AlarmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | Alarm$areaArgs<ExtArgs>
    sensors?: boolean | Alarm$sensorsArgs<ExtArgs>
    _count?: boolean | AlarmCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AlarmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alarm"
    objects: {
      area: Prisma.$AreaPayload<ExtArgs> | null
      sensors: Prisma.$SensorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      alarmId: string
      name: string
      status: string
      areaId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alarm"]>
    composites: {}
  }

  type AlarmGetPayload<S extends boolean | null | undefined | AlarmDefaultArgs> = $Result.GetResult<Prisma.$AlarmPayload, S>

  type AlarmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlarmFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlarmCountAggregateInputType | true
    }

  export interface AlarmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alarm'], meta: { name: 'Alarm' } }
    /**
     * Find zero or one Alarm that matches the filter.
     * @param {AlarmFindUniqueArgs} args - Arguments to find a Alarm
     * @example
     * // Get one Alarm
     * const alarm = await prisma.alarm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlarmFindUniqueArgs>(args: SelectSubset<T, AlarmFindUniqueArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alarm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlarmFindUniqueOrThrowArgs} args - Arguments to find a Alarm
     * @example
     * // Get one Alarm
     * const alarm = await prisma.alarm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlarmFindUniqueOrThrowArgs>(args: SelectSubset<T, AlarmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alarm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmFindFirstArgs} args - Arguments to find a Alarm
     * @example
     * // Get one Alarm
     * const alarm = await prisma.alarm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlarmFindFirstArgs>(args?: SelectSubset<T, AlarmFindFirstArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alarm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmFindFirstOrThrowArgs} args - Arguments to find a Alarm
     * @example
     * // Get one Alarm
     * const alarm = await prisma.alarm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlarmFindFirstOrThrowArgs>(args?: SelectSubset<T, AlarmFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alarms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alarms
     * const alarms = await prisma.alarm.findMany()
     * 
     * // Get first 10 Alarms
     * const alarms = await prisma.alarm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alarmWithIdOnly = await prisma.alarm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlarmFindManyArgs>(args?: SelectSubset<T, AlarmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alarm.
     * @param {AlarmCreateArgs} args - Arguments to create a Alarm.
     * @example
     * // Create one Alarm
     * const Alarm = await prisma.alarm.create({
     *   data: {
     *     // ... data to create a Alarm
     *   }
     * })
     * 
     */
    create<T extends AlarmCreateArgs>(args: SelectSubset<T, AlarmCreateArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alarms.
     * @param {AlarmCreateManyArgs} args - Arguments to create many Alarms.
     * @example
     * // Create many Alarms
     * const alarm = await prisma.alarm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlarmCreateManyArgs>(args?: SelectSubset<T, AlarmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Alarm.
     * @param {AlarmDeleteArgs} args - Arguments to delete one Alarm.
     * @example
     * // Delete one Alarm
     * const Alarm = await prisma.alarm.delete({
     *   where: {
     *     // ... filter to delete one Alarm
     *   }
     * })
     * 
     */
    delete<T extends AlarmDeleteArgs>(args: SelectSubset<T, AlarmDeleteArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alarm.
     * @param {AlarmUpdateArgs} args - Arguments to update one Alarm.
     * @example
     * // Update one Alarm
     * const alarm = await prisma.alarm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlarmUpdateArgs>(args: SelectSubset<T, AlarmUpdateArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alarms.
     * @param {AlarmDeleteManyArgs} args - Arguments to filter Alarms to delete.
     * @example
     * // Delete a few Alarms
     * const { count } = await prisma.alarm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlarmDeleteManyArgs>(args?: SelectSubset<T, AlarmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alarms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alarms
     * const alarm = await prisma.alarm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlarmUpdateManyArgs>(args: SelectSubset<T, AlarmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alarm.
     * @param {AlarmUpsertArgs} args - Arguments to update or create a Alarm.
     * @example
     * // Update or create a Alarm
     * const alarm = await prisma.alarm.upsert({
     *   create: {
     *     // ... data to create a Alarm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alarm we want to update
     *   }
     * })
     */
    upsert<T extends AlarmUpsertArgs>(args: SelectSubset<T, AlarmUpsertArgs<ExtArgs>>): Prisma__AlarmClient<$Result.GetResult<Prisma.$AlarmPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alarms that matches the filter.
     * @param {AlarmFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const alarm = await prisma.alarm.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AlarmFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Alarm.
     * @param {AlarmAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const alarm = await prisma.alarm.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AlarmAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Alarms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmCountArgs} args - Arguments to filter Alarms to count.
     * @example
     * // Count the number of Alarms
     * const count = await prisma.alarm.count({
     *   where: {
     *     // ... the filter for the Alarms we want to count
     *   }
     * })
    **/
    count<T extends AlarmCountArgs>(
      args?: Subset<T, AlarmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlarmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alarm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlarmAggregateArgs>(args: Subset<T, AlarmAggregateArgs>): Prisma.PrismaPromise<GetAlarmAggregateType<T>>

    /**
     * Group by Alarm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlarmGroupByArgs} args - Group by arguments.
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
      T extends AlarmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlarmGroupByArgs['orderBy'] }
        : { orderBy?: AlarmGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlarmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlarmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alarm model
   */
  readonly fields: AlarmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alarm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlarmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    area<T extends Alarm$areaArgs<ExtArgs> = {}>(args?: Subset<T, Alarm$areaArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sensors<T extends Alarm$sensorsArgs<ExtArgs> = {}>(args?: Subset<T, Alarm$sensorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Alarm model
   */
  interface AlarmFieldRefs {
    readonly id: FieldRef<"Alarm", 'String'>
    readonly alarmId: FieldRef<"Alarm", 'String'>
    readonly name: FieldRef<"Alarm", 'String'>
    readonly status: FieldRef<"Alarm", 'String'>
    readonly areaId: FieldRef<"Alarm", 'String'>
    readonly createdAt: FieldRef<"Alarm", 'DateTime'>
    readonly updatedAt: FieldRef<"Alarm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alarm findUnique
   */
  export type AlarmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * Filter, which Alarm to fetch.
     */
    where: AlarmWhereUniqueInput
  }

  /**
   * Alarm findUniqueOrThrow
   */
  export type AlarmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * Filter, which Alarm to fetch.
     */
    where: AlarmWhereUniqueInput
  }

  /**
   * Alarm findFirst
   */
  export type AlarmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * Filter, which Alarm to fetch.
     */
    where?: AlarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alarms to fetch.
     */
    orderBy?: AlarmOrderByWithRelationInput | AlarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alarms.
     */
    cursor?: AlarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alarms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alarms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alarms.
     */
    distinct?: AlarmScalarFieldEnum | AlarmScalarFieldEnum[]
  }

  /**
   * Alarm findFirstOrThrow
   */
  export type AlarmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * Filter, which Alarm to fetch.
     */
    where?: AlarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alarms to fetch.
     */
    orderBy?: AlarmOrderByWithRelationInput | AlarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alarms.
     */
    cursor?: AlarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alarms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alarms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alarms.
     */
    distinct?: AlarmScalarFieldEnum | AlarmScalarFieldEnum[]
  }

  /**
   * Alarm findMany
   */
  export type AlarmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * Filter, which Alarms to fetch.
     */
    where?: AlarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alarms to fetch.
     */
    orderBy?: AlarmOrderByWithRelationInput | AlarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alarms.
     */
    cursor?: AlarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alarms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alarms.
     */
    skip?: number
    distinct?: AlarmScalarFieldEnum | AlarmScalarFieldEnum[]
  }

  /**
   * Alarm create
   */
  export type AlarmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * The data needed to create a Alarm.
     */
    data: XOR<AlarmCreateInput, AlarmUncheckedCreateInput>
  }

  /**
   * Alarm createMany
   */
  export type AlarmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alarms.
     */
    data: AlarmCreateManyInput | AlarmCreateManyInput[]
  }

  /**
   * Alarm update
   */
  export type AlarmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * The data needed to update a Alarm.
     */
    data: XOR<AlarmUpdateInput, AlarmUncheckedUpdateInput>
    /**
     * Choose, which Alarm to update.
     */
    where: AlarmWhereUniqueInput
  }

  /**
   * Alarm updateMany
   */
  export type AlarmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alarms.
     */
    data: XOR<AlarmUpdateManyMutationInput, AlarmUncheckedUpdateManyInput>
    /**
     * Filter which Alarms to update
     */
    where?: AlarmWhereInput
    /**
     * Limit how many Alarms to update.
     */
    limit?: number
  }

  /**
   * Alarm upsert
   */
  export type AlarmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * The filter to search for the Alarm to update in case it exists.
     */
    where: AlarmWhereUniqueInput
    /**
     * In case the Alarm found by the `where` argument doesn't exist, create a new Alarm with this data.
     */
    create: XOR<AlarmCreateInput, AlarmUncheckedCreateInput>
    /**
     * In case the Alarm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlarmUpdateInput, AlarmUncheckedUpdateInput>
  }

  /**
   * Alarm delete
   */
  export type AlarmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
    /**
     * Filter which Alarm to delete.
     */
    where: AlarmWhereUniqueInput
  }

  /**
   * Alarm deleteMany
   */
  export type AlarmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alarms to delete
     */
    where?: AlarmWhereInput
    /**
     * Limit how many Alarms to delete.
     */
    limit?: number
  }

  /**
   * Alarm findRaw
   */
  export type AlarmFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Alarm aggregateRaw
   */
  export type AlarmAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Alarm.area
   */
  export type Alarm$areaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
  }

  /**
   * Alarm.sensors
   */
  export type Alarm$sensorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sensor
     */
    select?: SensorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sensor
     */
    omit?: SensorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorInclude<ExtArgs> | null
    where?: SensorWhereInput
    orderBy?: SensorOrderByWithRelationInput | SensorOrderByWithRelationInput[]
    cursor?: SensorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SensorScalarFieldEnum | SensorScalarFieldEnum[]
  }

  /**
   * Alarm without action
   */
  export type AlarmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alarm
     */
    select?: AlarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alarm
     */
    omit?: AlarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlarmInclude<ExtArgs> | null
  }


  /**
   * Model Alert
   */

  export type AggregateAlert = {
    _count: AlertCountAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  export type AlertMinAggregateOutputType = {
    id: string | null
    sensorDbId: string | null
    sensorId: string | null
    type: string | null
    message: string | null
    time: string | null
    timestamp: Date | null
    status: $Enums.AlertStatus | null
    createdAt: Date | null
    decidedAt: Date | null
    decision: string | null
  }

  export type AlertMaxAggregateOutputType = {
    id: string | null
    sensorDbId: string | null
    sensorId: string | null
    type: string | null
    message: string | null
    time: string | null
    timestamp: Date | null
    status: $Enums.AlertStatus | null
    createdAt: Date | null
    decidedAt: Date | null
    decision: string | null
  }

  export type AlertCountAggregateOutputType = {
    id: number
    sensorDbId: number
    sensorId: number
    type: number
    message: number
    time: number
    timestamp: number
    status: number
    createdAt: number
    decidedAt: number
    decision: number
    metadata: number
    _all: number
  }


  export type AlertMinAggregateInputType = {
    id?: true
    sensorDbId?: true
    sensorId?: true
    type?: true
    message?: true
    time?: true
    timestamp?: true
    status?: true
    createdAt?: true
    decidedAt?: true
    decision?: true
  }

  export type AlertMaxAggregateInputType = {
    id?: true
    sensorDbId?: true
    sensorId?: true
    type?: true
    message?: true
    time?: true
    timestamp?: true
    status?: true
    createdAt?: true
    decidedAt?: true
    decision?: true
  }

  export type AlertCountAggregateInputType = {
    id?: true
    sensorDbId?: true
    sensorId?: true
    type?: true
    message?: true
    time?: true
    timestamp?: true
    status?: true
    createdAt?: true
    decidedAt?: true
    decision?: true
    metadata?: true
    _all?: true
  }

  export type AlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alert to aggregate.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerts
    **/
    _count?: true | AlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertMaxAggregateInputType
  }

  export type GetAlertAggregateType<T extends AlertAggregateArgs> = {
        [P in keyof T & keyof AggregateAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlert[P]>
      : GetScalarType<T[P], AggregateAlert[P]>
  }




  export type AlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithAggregationInput | AlertOrderByWithAggregationInput[]
    by: AlertScalarFieldEnum[] | AlertScalarFieldEnum
    having?: AlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertCountAggregateInputType | true
    _min?: AlertMinAggregateInputType
    _max?: AlertMaxAggregateInputType
  }

  export type AlertGroupByOutputType = {
    id: string
    sensorDbId: string
    sensorId: string
    type: string
    message: string
    time: string
    timestamp: Date
    status: $Enums.AlertStatus
    createdAt: Date
    decidedAt: Date | null
    decision: string | null
    metadata: JsonValue | null
    _count: AlertCountAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  type GetAlertGroupByPayload<T extends AlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertGroupByOutputType[P]>
            : GetScalarType<T[P], AlertGroupByOutputType[P]>
        }
      >
    >


  export type AlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sensorDbId?: boolean
    sensorId?: boolean
    type?: boolean
    message?: boolean
    time?: boolean
    timestamp?: boolean
    status?: boolean
    createdAt?: boolean
    decidedAt?: boolean
    decision?: boolean
    metadata?: boolean
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>



  export type AlertSelectScalar = {
    id?: boolean
    sensorDbId?: boolean
    sensorId?: boolean
    type?: boolean
    message?: boolean
    time?: boolean
    timestamp?: boolean
    status?: boolean
    createdAt?: boolean
    decidedAt?: boolean
    decision?: boolean
    metadata?: boolean
  }

  export type AlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sensorDbId" | "sensorId" | "type" | "message" | "time" | "timestamp" | "status" | "createdAt" | "decidedAt" | "decision" | "metadata", ExtArgs["result"]["alert"]>
  export type AlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sensor?: boolean | SensorDefaultArgs<ExtArgs>
  }

  export type $AlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alert"
    objects: {
      sensor: Prisma.$SensorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sensorDbId: string
      sensorId: string
      type: string
      message: string
      time: string
      timestamp: Date
      status: $Enums.AlertStatus
      createdAt: Date
      decidedAt: Date | null
      decision: string | null
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["alert"]>
    composites: {}
  }

  type AlertGetPayload<S extends boolean | null | undefined | AlertDefaultArgs> = $Result.GetResult<Prisma.$AlertPayload, S>

  type AlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertCountAggregateInputType | true
    }

  export interface AlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alert'], meta: { name: 'Alert' } }
    /**
     * Find zero or one Alert that matches the filter.
     * @param {AlertFindUniqueArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertFindUniqueArgs>(args: SelectSubset<T, AlertFindUniqueArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertFindUniqueOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertFindFirstArgs>(args?: SelectSubset<T, AlertFindFirstArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alert.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertWithIdOnly = await prisma.alert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertFindManyArgs>(args?: SelectSubset<T, AlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alert.
     * @param {AlertCreateArgs} args - Arguments to create a Alert.
     * @example
     * // Create one Alert
     * const Alert = await prisma.alert.create({
     *   data: {
     *     // ... data to create a Alert
     *   }
     * })
     * 
     */
    create<T extends AlertCreateArgs>(args: SelectSubset<T, AlertCreateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alerts.
     * @param {AlertCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertCreateManyArgs>(args?: SelectSubset<T, AlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Alert.
     * @param {AlertDeleteArgs} args - Arguments to delete one Alert.
     * @example
     * // Delete one Alert
     * const Alert = await prisma.alert.delete({
     *   where: {
     *     // ... filter to delete one Alert
     *   }
     * })
     * 
     */
    delete<T extends AlertDeleteArgs>(args: SelectSubset<T, AlertDeleteArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alert.
     * @param {AlertUpdateArgs} args - Arguments to update one Alert.
     * @example
     * // Update one Alert
     * const alert = await prisma.alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertUpdateArgs>(args: SelectSubset<T, AlertUpdateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alerts.
     * @param {AlertDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertDeleteManyArgs>(args?: SelectSubset<T, AlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertUpdateManyArgs>(args: SelectSubset<T, AlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alert.
     * @param {AlertUpsertArgs} args - Arguments to update or create a Alert.
     * @example
     * // Update or create a Alert
     * const alert = await prisma.alert.upsert({
     *   create: {
     *     // ... data to create a Alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alert we want to update
     *   }
     * })
     */
    upsert<T extends AlertUpsertArgs>(args: SelectSubset<T, AlertUpsertArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alerts that matches the filter.
     * @param {AlertFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const alert = await prisma.alert.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AlertFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Alert.
     * @param {AlertAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const alert = await prisma.alert.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AlertAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alert.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends AlertCountArgs>(
      args?: Subset<T, AlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlertAggregateArgs>(args: Subset<T, AlertAggregateArgs>): Prisma.PrismaPromise<GetAlertAggregateType<T>>

    /**
     * Group by Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertGroupByArgs} args - Group by arguments.
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
      T extends AlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertGroupByArgs['orderBy'] }
        : { orderBy?: AlertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alert model
   */
  readonly fields: AlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sensor<T extends SensorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SensorDefaultArgs<ExtArgs>>): Prisma__SensorClient<$Result.GetResult<Prisma.$SensorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Alert model
   */
  interface AlertFieldRefs {
    readonly id: FieldRef<"Alert", 'String'>
    readonly sensorDbId: FieldRef<"Alert", 'String'>
    readonly sensorId: FieldRef<"Alert", 'String'>
    readonly type: FieldRef<"Alert", 'String'>
    readonly message: FieldRef<"Alert", 'String'>
    readonly time: FieldRef<"Alert", 'String'>
    readonly timestamp: FieldRef<"Alert", 'DateTime'>
    readonly status: FieldRef<"Alert", 'AlertStatus'>
    readonly createdAt: FieldRef<"Alert", 'DateTime'>
    readonly decidedAt: FieldRef<"Alert", 'DateTime'>
    readonly decision: FieldRef<"Alert", 'String'>
    readonly metadata: FieldRef<"Alert", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Alert findUnique
   */
  export type AlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findUniqueOrThrow
   */
  export type AlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findFirst
   */
  export type AlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findFirstOrThrow
   */
  export type AlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findMany
   */
  export type AlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert create
   */
  export type AlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to create a Alert.
     */
    data: XOR<AlertCreateInput, AlertUncheckedCreateInput>
  }

  /**
   * Alert createMany
   */
  export type AlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
  }

  /**
   * Alert update
   */
  export type AlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to update a Alert.
     */
    data: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
    /**
     * Choose, which Alert to update.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert updateMany
   */
  export type AlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
  }

  /**
   * Alert upsert
   */
  export type AlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The filter to search for the Alert to update in case it exists.
     */
    where: AlertWhereUniqueInput
    /**
     * In case the Alert found by the `where` argument doesn't exist, create a new Alert with this data.
     */
    create: XOR<AlertCreateInput, AlertUncheckedCreateInput>
    /**
     * In case the Alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
  }

  /**
   * Alert delete
   */
  export type AlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter which Alert to delete.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert deleteMany
   */
  export type AlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to delete
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to delete.
     */
    limit?: number
  }

  /**
   * Alert findRaw
   */
  export type AlertFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Alert aggregateRaw
   */
  export type AlertAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Alert without action
   */
  export type AlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
  }


  /**
   * Model DroneFlightHistory
   */

  export type AggregateDroneFlightHistory = {
    _count: DroneFlightHistoryCountAggregateOutputType | null
    _min: DroneFlightHistoryMinAggregateOutputType | null
    _max: DroneFlightHistoryMaxAggregateOutputType | null
  }

  export type DroneFlightHistoryMinAggregateOutputType = {
    id: string | null
    droneDbId: string | null
    sensorId: string | null
    alertId: string | null
    dispatchedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DroneFlightHistoryMaxAggregateOutputType = {
    id: string | null
    droneDbId: string | null
    sensorId: string | null
    alertId: string | null
    dispatchedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DroneFlightHistoryCountAggregateOutputType = {
    id: number
    droneDbId: number
    sensorId: number
    alertId: number
    dispatchedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DroneFlightHistoryMinAggregateInputType = {
    id?: true
    droneDbId?: true
    sensorId?: true
    alertId?: true
    dispatchedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DroneFlightHistoryMaxAggregateInputType = {
    id?: true
    droneDbId?: true
    sensorId?: true
    alertId?: true
    dispatchedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DroneFlightHistoryCountAggregateInputType = {
    id?: true
    droneDbId?: true
    sensorId?: true
    alertId?: true
    dispatchedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DroneFlightHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DroneFlightHistory to aggregate.
     */
    where?: DroneFlightHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DroneFlightHistories to fetch.
     */
    orderBy?: DroneFlightHistoryOrderByWithRelationInput | DroneFlightHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DroneFlightHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DroneFlightHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DroneFlightHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DroneFlightHistories
    **/
    _count?: true | DroneFlightHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DroneFlightHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DroneFlightHistoryMaxAggregateInputType
  }

  export type GetDroneFlightHistoryAggregateType<T extends DroneFlightHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateDroneFlightHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDroneFlightHistory[P]>
      : GetScalarType<T[P], AggregateDroneFlightHistory[P]>
  }




  export type DroneFlightHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DroneFlightHistoryWhereInput
    orderBy?: DroneFlightHistoryOrderByWithAggregationInput | DroneFlightHistoryOrderByWithAggregationInput[]
    by: DroneFlightHistoryScalarFieldEnum[] | DroneFlightHistoryScalarFieldEnum
    having?: DroneFlightHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DroneFlightHistoryCountAggregateInputType | true
    _min?: DroneFlightHistoryMinAggregateInputType
    _max?: DroneFlightHistoryMaxAggregateInputType
  }

  export type DroneFlightHistoryGroupByOutputType = {
    id: string
    droneDbId: string
    sensorId: string | null
    alertId: string | null
    dispatchedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: DroneFlightHistoryCountAggregateOutputType | null
    _min: DroneFlightHistoryMinAggregateOutputType | null
    _max: DroneFlightHistoryMaxAggregateOutputType | null
  }

  type GetDroneFlightHistoryGroupByPayload<T extends DroneFlightHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DroneFlightHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DroneFlightHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DroneFlightHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], DroneFlightHistoryGroupByOutputType[P]>
        }
      >
    >


  export type DroneFlightHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    droneDbId?: boolean
    sensorId?: boolean
    alertId?: boolean
    dispatchedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    drone?: boolean | DroneOSDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["droneFlightHistory"]>



  export type DroneFlightHistorySelectScalar = {
    id?: boolean
    droneDbId?: boolean
    sensorId?: boolean
    alertId?: boolean
    dispatchedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DroneFlightHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "droneDbId" | "sensorId" | "alertId" | "dispatchedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["droneFlightHistory"]>
  export type DroneFlightHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drone?: boolean | DroneOSDefaultArgs<ExtArgs>
  }

  export type $DroneFlightHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DroneFlightHistory"
    objects: {
      drone: Prisma.$DroneOSPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      droneDbId: string
      sensorId: string | null
      alertId: string | null
      dispatchedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["droneFlightHistory"]>
    composites: {}
  }

  type DroneFlightHistoryGetPayload<S extends boolean | null | undefined | DroneFlightHistoryDefaultArgs> = $Result.GetResult<Prisma.$DroneFlightHistoryPayload, S>

  type DroneFlightHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DroneFlightHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DroneFlightHistoryCountAggregateInputType | true
    }

  export interface DroneFlightHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DroneFlightHistory'], meta: { name: 'DroneFlightHistory' } }
    /**
     * Find zero or one DroneFlightHistory that matches the filter.
     * @param {DroneFlightHistoryFindUniqueArgs} args - Arguments to find a DroneFlightHistory
     * @example
     * // Get one DroneFlightHistory
     * const droneFlightHistory = await prisma.droneFlightHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DroneFlightHistoryFindUniqueArgs>(args: SelectSubset<T, DroneFlightHistoryFindUniqueArgs<ExtArgs>>): Prisma__DroneFlightHistoryClient<$Result.GetResult<Prisma.$DroneFlightHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DroneFlightHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DroneFlightHistoryFindUniqueOrThrowArgs} args - Arguments to find a DroneFlightHistory
     * @example
     * // Get one DroneFlightHistory
     * const droneFlightHistory = await prisma.droneFlightHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DroneFlightHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, DroneFlightHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DroneFlightHistoryClient<$Result.GetResult<Prisma.$DroneFlightHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DroneFlightHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneFlightHistoryFindFirstArgs} args - Arguments to find a DroneFlightHistory
     * @example
     * // Get one DroneFlightHistory
     * const droneFlightHistory = await prisma.droneFlightHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DroneFlightHistoryFindFirstArgs>(args?: SelectSubset<T, DroneFlightHistoryFindFirstArgs<ExtArgs>>): Prisma__DroneFlightHistoryClient<$Result.GetResult<Prisma.$DroneFlightHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DroneFlightHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneFlightHistoryFindFirstOrThrowArgs} args - Arguments to find a DroneFlightHistory
     * @example
     * // Get one DroneFlightHistory
     * const droneFlightHistory = await prisma.droneFlightHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DroneFlightHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, DroneFlightHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DroneFlightHistoryClient<$Result.GetResult<Prisma.$DroneFlightHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DroneFlightHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneFlightHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DroneFlightHistories
     * const droneFlightHistories = await prisma.droneFlightHistory.findMany()
     * 
     * // Get first 10 DroneFlightHistories
     * const droneFlightHistories = await prisma.droneFlightHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const droneFlightHistoryWithIdOnly = await prisma.droneFlightHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DroneFlightHistoryFindManyArgs>(args?: SelectSubset<T, DroneFlightHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DroneFlightHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DroneFlightHistory.
     * @param {DroneFlightHistoryCreateArgs} args - Arguments to create a DroneFlightHistory.
     * @example
     * // Create one DroneFlightHistory
     * const DroneFlightHistory = await prisma.droneFlightHistory.create({
     *   data: {
     *     // ... data to create a DroneFlightHistory
     *   }
     * })
     * 
     */
    create<T extends DroneFlightHistoryCreateArgs>(args: SelectSubset<T, DroneFlightHistoryCreateArgs<ExtArgs>>): Prisma__DroneFlightHistoryClient<$Result.GetResult<Prisma.$DroneFlightHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DroneFlightHistories.
     * @param {DroneFlightHistoryCreateManyArgs} args - Arguments to create many DroneFlightHistories.
     * @example
     * // Create many DroneFlightHistories
     * const droneFlightHistory = await prisma.droneFlightHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DroneFlightHistoryCreateManyArgs>(args?: SelectSubset<T, DroneFlightHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DroneFlightHistory.
     * @param {DroneFlightHistoryDeleteArgs} args - Arguments to delete one DroneFlightHistory.
     * @example
     * // Delete one DroneFlightHistory
     * const DroneFlightHistory = await prisma.droneFlightHistory.delete({
     *   where: {
     *     // ... filter to delete one DroneFlightHistory
     *   }
     * })
     * 
     */
    delete<T extends DroneFlightHistoryDeleteArgs>(args: SelectSubset<T, DroneFlightHistoryDeleteArgs<ExtArgs>>): Prisma__DroneFlightHistoryClient<$Result.GetResult<Prisma.$DroneFlightHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DroneFlightHistory.
     * @param {DroneFlightHistoryUpdateArgs} args - Arguments to update one DroneFlightHistory.
     * @example
     * // Update one DroneFlightHistory
     * const droneFlightHistory = await prisma.droneFlightHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DroneFlightHistoryUpdateArgs>(args: SelectSubset<T, DroneFlightHistoryUpdateArgs<ExtArgs>>): Prisma__DroneFlightHistoryClient<$Result.GetResult<Prisma.$DroneFlightHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DroneFlightHistories.
     * @param {DroneFlightHistoryDeleteManyArgs} args - Arguments to filter DroneFlightHistories to delete.
     * @example
     * // Delete a few DroneFlightHistories
     * const { count } = await prisma.droneFlightHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DroneFlightHistoryDeleteManyArgs>(args?: SelectSubset<T, DroneFlightHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DroneFlightHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneFlightHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DroneFlightHistories
     * const droneFlightHistory = await prisma.droneFlightHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DroneFlightHistoryUpdateManyArgs>(args: SelectSubset<T, DroneFlightHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DroneFlightHistory.
     * @param {DroneFlightHistoryUpsertArgs} args - Arguments to update or create a DroneFlightHistory.
     * @example
     * // Update or create a DroneFlightHistory
     * const droneFlightHistory = await prisma.droneFlightHistory.upsert({
     *   create: {
     *     // ... data to create a DroneFlightHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DroneFlightHistory we want to update
     *   }
     * })
     */
    upsert<T extends DroneFlightHistoryUpsertArgs>(args: SelectSubset<T, DroneFlightHistoryUpsertArgs<ExtArgs>>): Prisma__DroneFlightHistoryClient<$Result.GetResult<Prisma.$DroneFlightHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DroneFlightHistories that matches the filter.
     * @param {DroneFlightHistoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const droneFlightHistory = await prisma.droneFlightHistory.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DroneFlightHistoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a DroneFlightHistory.
     * @param {DroneFlightHistoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const droneFlightHistory = await prisma.droneFlightHistory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DroneFlightHistoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of DroneFlightHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneFlightHistoryCountArgs} args - Arguments to filter DroneFlightHistories to count.
     * @example
     * // Count the number of DroneFlightHistories
     * const count = await prisma.droneFlightHistory.count({
     *   where: {
     *     // ... the filter for the DroneFlightHistories we want to count
     *   }
     * })
    **/
    count<T extends DroneFlightHistoryCountArgs>(
      args?: Subset<T, DroneFlightHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DroneFlightHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DroneFlightHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneFlightHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DroneFlightHistoryAggregateArgs>(args: Subset<T, DroneFlightHistoryAggregateArgs>): Prisma.PrismaPromise<GetDroneFlightHistoryAggregateType<T>>

    /**
     * Group by DroneFlightHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DroneFlightHistoryGroupByArgs} args - Group by arguments.
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
      T extends DroneFlightHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DroneFlightHistoryGroupByArgs['orderBy'] }
        : { orderBy?: DroneFlightHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DroneFlightHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDroneFlightHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DroneFlightHistory model
   */
  readonly fields: DroneFlightHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DroneFlightHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DroneFlightHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drone<T extends DroneOSDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DroneOSDefaultArgs<ExtArgs>>): Prisma__DroneOSClient<$Result.GetResult<Prisma.$DroneOSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DroneFlightHistory model
   */
  interface DroneFlightHistoryFieldRefs {
    readonly id: FieldRef<"DroneFlightHistory", 'String'>
    readonly droneDbId: FieldRef<"DroneFlightHistory", 'String'>
    readonly sensorId: FieldRef<"DroneFlightHistory", 'String'>
    readonly alertId: FieldRef<"DroneFlightHistory", 'String'>
    readonly dispatchedAt: FieldRef<"DroneFlightHistory", 'DateTime'>
    readonly createdAt: FieldRef<"DroneFlightHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"DroneFlightHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DroneFlightHistory findUnique
   */
  export type DroneFlightHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneFlightHistory
     */
    select?: DroneFlightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneFlightHistory
     */
    omit?: DroneFlightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneFlightHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DroneFlightHistory to fetch.
     */
    where: DroneFlightHistoryWhereUniqueInput
  }

  /**
   * DroneFlightHistory findUniqueOrThrow
   */
  export type DroneFlightHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneFlightHistory
     */
    select?: DroneFlightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneFlightHistory
     */
    omit?: DroneFlightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneFlightHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DroneFlightHistory to fetch.
     */
    where: DroneFlightHistoryWhereUniqueInput
  }

  /**
   * DroneFlightHistory findFirst
   */
  export type DroneFlightHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneFlightHistory
     */
    select?: DroneFlightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneFlightHistory
     */
    omit?: DroneFlightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneFlightHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DroneFlightHistory to fetch.
     */
    where?: DroneFlightHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DroneFlightHistories to fetch.
     */
    orderBy?: DroneFlightHistoryOrderByWithRelationInput | DroneFlightHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DroneFlightHistories.
     */
    cursor?: DroneFlightHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DroneFlightHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DroneFlightHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DroneFlightHistories.
     */
    distinct?: DroneFlightHistoryScalarFieldEnum | DroneFlightHistoryScalarFieldEnum[]
  }

  /**
   * DroneFlightHistory findFirstOrThrow
   */
  export type DroneFlightHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneFlightHistory
     */
    select?: DroneFlightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneFlightHistory
     */
    omit?: DroneFlightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneFlightHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DroneFlightHistory to fetch.
     */
    where?: DroneFlightHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DroneFlightHistories to fetch.
     */
    orderBy?: DroneFlightHistoryOrderByWithRelationInput | DroneFlightHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DroneFlightHistories.
     */
    cursor?: DroneFlightHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DroneFlightHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DroneFlightHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DroneFlightHistories.
     */
    distinct?: DroneFlightHistoryScalarFieldEnum | DroneFlightHistoryScalarFieldEnum[]
  }

  /**
   * DroneFlightHistory findMany
   */
  export type DroneFlightHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneFlightHistory
     */
    select?: DroneFlightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneFlightHistory
     */
    omit?: DroneFlightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneFlightHistoryInclude<ExtArgs> | null
    /**
     * Filter, which DroneFlightHistories to fetch.
     */
    where?: DroneFlightHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DroneFlightHistories to fetch.
     */
    orderBy?: DroneFlightHistoryOrderByWithRelationInput | DroneFlightHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DroneFlightHistories.
     */
    cursor?: DroneFlightHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DroneFlightHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DroneFlightHistories.
     */
    skip?: number
    distinct?: DroneFlightHistoryScalarFieldEnum | DroneFlightHistoryScalarFieldEnum[]
  }

  /**
   * DroneFlightHistory create
   */
  export type DroneFlightHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneFlightHistory
     */
    select?: DroneFlightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneFlightHistory
     */
    omit?: DroneFlightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneFlightHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a DroneFlightHistory.
     */
    data: XOR<DroneFlightHistoryCreateInput, DroneFlightHistoryUncheckedCreateInput>
  }

  /**
   * DroneFlightHistory createMany
   */
  export type DroneFlightHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DroneFlightHistories.
     */
    data: DroneFlightHistoryCreateManyInput | DroneFlightHistoryCreateManyInput[]
  }

  /**
   * DroneFlightHistory update
   */
  export type DroneFlightHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneFlightHistory
     */
    select?: DroneFlightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneFlightHistory
     */
    omit?: DroneFlightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneFlightHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a DroneFlightHistory.
     */
    data: XOR<DroneFlightHistoryUpdateInput, DroneFlightHistoryUncheckedUpdateInput>
    /**
     * Choose, which DroneFlightHistory to update.
     */
    where: DroneFlightHistoryWhereUniqueInput
  }

  /**
   * DroneFlightHistory updateMany
   */
  export type DroneFlightHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DroneFlightHistories.
     */
    data: XOR<DroneFlightHistoryUpdateManyMutationInput, DroneFlightHistoryUncheckedUpdateManyInput>
    /**
     * Filter which DroneFlightHistories to update
     */
    where?: DroneFlightHistoryWhereInput
    /**
     * Limit how many DroneFlightHistories to update.
     */
    limit?: number
  }

  /**
   * DroneFlightHistory upsert
   */
  export type DroneFlightHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneFlightHistory
     */
    select?: DroneFlightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneFlightHistory
     */
    omit?: DroneFlightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneFlightHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the DroneFlightHistory to update in case it exists.
     */
    where: DroneFlightHistoryWhereUniqueInput
    /**
     * In case the DroneFlightHistory found by the `where` argument doesn't exist, create a new DroneFlightHistory with this data.
     */
    create: XOR<DroneFlightHistoryCreateInput, DroneFlightHistoryUncheckedCreateInput>
    /**
     * In case the DroneFlightHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DroneFlightHistoryUpdateInput, DroneFlightHistoryUncheckedUpdateInput>
  }

  /**
   * DroneFlightHistory delete
   */
  export type DroneFlightHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneFlightHistory
     */
    select?: DroneFlightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneFlightHistory
     */
    omit?: DroneFlightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneFlightHistoryInclude<ExtArgs> | null
    /**
     * Filter which DroneFlightHistory to delete.
     */
    where: DroneFlightHistoryWhereUniqueInput
  }

  /**
   * DroneFlightHistory deleteMany
   */
  export type DroneFlightHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DroneFlightHistories to delete
     */
    where?: DroneFlightHistoryWhereInput
    /**
     * Limit how many DroneFlightHistories to delete.
     */
    limit?: number
  }

  /**
   * DroneFlightHistory findRaw
   */
  export type DroneFlightHistoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DroneFlightHistory aggregateRaw
   */
  export type DroneFlightHistoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * DroneFlightHistory without action
   */
  export type DroneFlightHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DroneFlightHistory
     */
    select?: DroneFlightHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DroneFlightHistory
     */
    omit?: DroneFlightHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DroneFlightHistoryInclude<ExtArgs> | null
  }


  /**
   * Model OfflineMap
   */

  export type AggregateOfflineMap = {
    _count: OfflineMapCountAggregateOutputType | null
    _avg: OfflineMapAvgAggregateOutputType | null
    _sum: OfflineMapSumAggregateOutputType | null
    _min: OfflineMapMinAggregateOutputType | null
    _max: OfflineMapMaxAggregateOutputType | null
  }

  export type OfflineMapAvgAggregateOutputType = {
    minZoom: number | null
    maxZoom: number | null
    north: number | null
    south: number | null
    east: number | null
    west: number | null
    downloadProgress: number | null
  }

  export type OfflineMapSumAggregateOutputType = {
    minZoom: number | null
    maxZoom: number | null
    north: number | null
    south: number | null
    east: number | null
    west: number | null
    downloadProgress: number | null
  }

  export type OfflineMapMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    tileRoot: string | null
    minZoom: number | null
    maxZoom: number | null
    north: number | null
    south: number | null
    east: number | null
    west: number | null
    isActive: boolean | null
    downloadStatus: string | null
    downloadProgress: number | null
    downloadError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OfflineMapMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    tileRoot: string | null
    minZoom: number | null
    maxZoom: number | null
    north: number | null
    south: number | null
    east: number | null
    west: number | null
    isActive: boolean | null
    downloadStatus: string | null
    downloadProgress: number | null
    downloadError: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OfflineMapCountAggregateOutputType = {
    id: number
    name: number
    description: number
    tileRoot: number
    minZoom: number
    maxZoom: number
    north: number
    south: number
    east: number
    west: number
    isActive: number
    downloadStatus: number
    downloadProgress: number
    downloadError: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OfflineMapAvgAggregateInputType = {
    minZoom?: true
    maxZoom?: true
    north?: true
    south?: true
    east?: true
    west?: true
    downloadProgress?: true
  }

  export type OfflineMapSumAggregateInputType = {
    minZoom?: true
    maxZoom?: true
    north?: true
    south?: true
    east?: true
    west?: true
    downloadProgress?: true
  }

  export type OfflineMapMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    tileRoot?: true
    minZoom?: true
    maxZoom?: true
    north?: true
    south?: true
    east?: true
    west?: true
    isActive?: true
    downloadStatus?: true
    downloadProgress?: true
    downloadError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OfflineMapMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    tileRoot?: true
    minZoom?: true
    maxZoom?: true
    north?: true
    south?: true
    east?: true
    west?: true
    isActive?: true
    downloadStatus?: true
    downloadProgress?: true
    downloadError?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OfflineMapCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    tileRoot?: true
    minZoom?: true
    maxZoom?: true
    north?: true
    south?: true
    east?: true
    west?: true
    isActive?: true
    downloadStatus?: true
    downloadProgress?: true
    downloadError?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OfflineMapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfflineMap to aggregate.
     */
    where?: OfflineMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfflineMaps to fetch.
     */
    orderBy?: OfflineMapOrderByWithRelationInput | OfflineMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfflineMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfflineMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfflineMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OfflineMaps
    **/
    _count?: true | OfflineMapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfflineMapAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfflineMapSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfflineMapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfflineMapMaxAggregateInputType
  }

  export type GetOfflineMapAggregateType<T extends OfflineMapAggregateArgs> = {
        [P in keyof T & keyof AggregateOfflineMap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOfflineMap[P]>
      : GetScalarType<T[P], AggregateOfflineMap[P]>
  }




  export type OfflineMapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfflineMapWhereInput
    orderBy?: OfflineMapOrderByWithAggregationInput | OfflineMapOrderByWithAggregationInput[]
    by: OfflineMapScalarFieldEnum[] | OfflineMapScalarFieldEnum
    having?: OfflineMapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfflineMapCountAggregateInputType | true
    _avg?: OfflineMapAvgAggregateInputType
    _sum?: OfflineMapSumAggregateInputType
    _min?: OfflineMapMinAggregateInputType
    _max?: OfflineMapMaxAggregateInputType
  }

  export type OfflineMapGroupByOutputType = {
    id: string
    name: string
    description: string | null
    tileRoot: string
    minZoom: number
    maxZoom: number
    north: number
    south: number
    east: number
    west: number
    isActive: boolean
    downloadStatus: string
    downloadProgress: number
    downloadError: string | null
    createdAt: Date
    updatedAt: Date
    _count: OfflineMapCountAggregateOutputType | null
    _avg: OfflineMapAvgAggregateOutputType | null
    _sum: OfflineMapSumAggregateOutputType | null
    _min: OfflineMapMinAggregateOutputType | null
    _max: OfflineMapMaxAggregateOutputType | null
  }

  type GetOfflineMapGroupByPayload<T extends OfflineMapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfflineMapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfflineMapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfflineMapGroupByOutputType[P]>
            : GetScalarType<T[P], OfflineMapGroupByOutputType[P]>
        }
      >
    >


  export type OfflineMapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    tileRoot?: boolean
    minZoom?: boolean
    maxZoom?: boolean
    north?: boolean
    south?: boolean
    east?: boolean
    west?: boolean
    isActive?: boolean
    downloadStatus?: boolean
    downloadProgress?: boolean
    downloadError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["offlineMap"]>



  export type OfflineMapSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    tileRoot?: boolean
    minZoom?: boolean
    maxZoom?: boolean
    north?: boolean
    south?: boolean
    east?: boolean
    west?: boolean
    isActive?: boolean
    downloadStatus?: boolean
    downloadProgress?: boolean
    downloadError?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OfflineMapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "tileRoot" | "minZoom" | "maxZoom" | "north" | "south" | "east" | "west" | "isActive" | "downloadStatus" | "downloadProgress" | "downloadError" | "createdAt" | "updatedAt", ExtArgs["result"]["offlineMap"]>

  export type $OfflineMapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OfflineMap"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      tileRoot: string
      minZoom: number
      maxZoom: number
      north: number
      south: number
      east: number
      west: number
      isActive: boolean
      downloadStatus: string
      downloadProgress: number
      downloadError: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["offlineMap"]>
    composites: {}
  }

  type OfflineMapGetPayload<S extends boolean | null | undefined | OfflineMapDefaultArgs> = $Result.GetResult<Prisma.$OfflineMapPayload, S>

  type OfflineMapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfflineMapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfflineMapCountAggregateInputType | true
    }

  export interface OfflineMapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OfflineMap'], meta: { name: 'OfflineMap' } }
    /**
     * Find zero or one OfflineMap that matches the filter.
     * @param {OfflineMapFindUniqueArgs} args - Arguments to find a OfflineMap
     * @example
     * // Get one OfflineMap
     * const offlineMap = await prisma.offlineMap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfflineMapFindUniqueArgs>(args: SelectSubset<T, OfflineMapFindUniqueArgs<ExtArgs>>): Prisma__OfflineMapClient<$Result.GetResult<Prisma.$OfflineMapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OfflineMap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfflineMapFindUniqueOrThrowArgs} args - Arguments to find a OfflineMap
     * @example
     * // Get one OfflineMap
     * const offlineMap = await prisma.offlineMap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfflineMapFindUniqueOrThrowArgs>(args: SelectSubset<T, OfflineMapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfflineMapClient<$Result.GetResult<Prisma.$OfflineMapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OfflineMap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineMapFindFirstArgs} args - Arguments to find a OfflineMap
     * @example
     * // Get one OfflineMap
     * const offlineMap = await prisma.offlineMap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfflineMapFindFirstArgs>(args?: SelectSubset<T, OfflineMapFindFirstArgs<ExtArgs>>): Prisma__OfflineMapClient<$Result.GetResult<Prisma.$OfflineMapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OfflineMap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineMapFindFirstOrThrowArgs} args - Arguments to find a OfflineMap
     * @example
     * // Get one OfflineMap
     * const offlineMap = await prisma.offlineMap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfflineMapFindFirstOrThrowArgs>(args?: SelectSubset<T, OfflineMapFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfflineMapClient<$Result.GetResult<Prisma.$OfflineMapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OfflineMaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineMapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OfflineMaps
     * const offlineMaps = await prisma.offlineMap.findMany()
     * 
     * // Get first 10 OfflineMaps
     * const offlineMaps = await prisma.offlineMap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offlineMapWithIdOnly = await prisma.offlineMap.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfflineMapFindManyArgs>(args?: SelectSubset<T, OfflineMapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfflineMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OfflineMap.
     * @param {OfflineMapCreateArgs} args - Arguments to create a OfflineMap.
     * @example
     * // Create one OfflineMap
     * const OfflineMap = await prisma.offlineMap.create({
     *   data: {
     *     // ... data to create a OfflineMap
     *   }
     * })
     * 
     */
    create<T extends OfflineMapCreateArgs>(args: SelectSubset<T, OfflineMapCreateArgs<ExtArgs>>): Prisma__OfflineMapClient<$Result.GetResult<Prisma.$OfflineMapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OfflineMaps.
     * @param {OfflineMapCreateManyArgs} args - Arguments to create many OfflineMaps.
     * @example
     * // Create many OfflineMaps
     * const offlineMap = await prisma.offlineMap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfflineMapCreateManyArgs>(args?: SelectSubset<T, OfflineMapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OfflineMap.
     * @param {OfflineMapDeleteArgs} args - Arguments to delete one OfflineMap.
     * @example
     * // Delete one OfflineMap
     * const OfflineMap = await prisma.offlineMap.delete({
     *   where: {
     *     // ... filter to delete one OfflineMap
     *   }
     * })
     * 
     */
    delete<T extends OfflineMapDeleteArgs>(args: SelectSubset<T, OfflineMapDeleteArgs<ExtArgs>>): Prisma__OfflineMapClient<$Result.GetResult<Prisma.$OfflineMapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OfflineMap.
     * @param {OfflineMapUpdateArgs} args - Arguments to update one OfflineMap.
     * @example
     * // Update one OfflineMap
     * const offlineMap = await prisma.offlineMap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfflineMapUpdateArgs>(args: SelectSubset<T, OfflineMapUpdateArgs<ExtArgs>>): Prisma__OfflineMapClient<$Result.GetResult<Prisma.$OfflineMapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OfflineMaps.
     * @param {OfflineMapDeleteManyArgs} args - Arguments to filter OfflineMaps to delete.
     * @example
     * // Delete a few OfflineMaps
     * const { count } = await prisma.offlineMap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfflineMapDeleteManyArgs>(args?: SelectSubset<T, OfflineMapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfflineMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineMapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OfflineMaps
     * const offlineMap = await prisma.offlineMap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfflineMapUpdateManyArgs>(args: SelectSubset<T, OfflineMapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OfflineMap.
     * @param {OfflineMapUpsertArgs} args - Arguments to update or create a OfflineMap.
     * @example
     * // Update or create a OfflineMap
     * const offlineMap = await prisma.offlineMap.upsert({
     *   create: {
     *     // ... data to create a OfflineMap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OfflineMap we want to update
     *   }
     * })
     */
    upsert<T extends OfflineMapUpsertArgs>(args: SelectSubset<T, OfflineMapUpsertArgs<ExtArgs>>): Prisma__OfflineMapClient<$Result.GetResult<Prisma.$OfflineMapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OfflineMaps that matches the filter.
     * @param {OfflineMapFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const offlineMap = await prisma.offlineMap.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: OfflineMapFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a OfflineMap.
     * @param {OfflineMapAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const offlineMap = await prisma.offlineMap.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: OfflineMapAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of OfflineMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineMapCountArgs} args - Arguments to filter OfflineMaps to count.
     * @example
     * // Count the number of OfflineMaps
     * const count = await prisma.offlineMap.count({
     *   where: {
     *     // ... the filter for the OfflineMaps we want to count
     *   }
     * })
    **/
    count<T extends OfflineMapCountArgs>(
      args?: Subset<T, OfflineMapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfflineMapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OfflineMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineMapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfflineMapAggregateArgs>(args: Subset<T, OfflineMapAggregateArgs>): Prisma.PrismaPromise<GetOfflineMapAggregateType<T>>

    /**
     * Group by OfflineMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineMapGroupByArgs} args - Group by arguments.
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
      T extends OfflineMapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfflineMapGroupByArgs['orderBy'] }
        : { orderBy?: OfflineMapGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OfflineMapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfflineMapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OfflineMap model
   */
  readonly fields: OfflineMapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OfflineMap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfflineMapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the OfflineMap model
   */
  interface OfflineMapFieldRefs {
    readonly id: FieldRef<"OfflineMap", 'String'>
    readonly name: FieldRef<"OfflineMap", 'String'>
    readonly description: FieldRef<"OfflineMap", 'String'>
    readonly tileRoot: FieldRef<"OfflineMap", 'String'>
    readonly minZoom: FieldRef<"OfflineMap", 'Int'>
    readonly maxZoom: FieldRef<"OfflineMap", 'Int'>
    readonly north: FieldRef<"OfflineMap", 'Float'>
    readonly south: FieldRef<"OfflineMap", 'Float'>
    readonly east: FieldRef<"OfflineMap", 'Float'>
    readonly west: FieldRef<"OfflineMap", 'Float'>
    readonly isActive: FieldRef<"OfflineMap", 'Boolean'>
    readonly downloadStatus: FieldRef<"OfflineMap", 'String'>
    readonly downloadProgress: FieldRef<"OfflineMap", 'Int'>
    readonly downloadError: FieldRef<"OfflineMap", 'String'>
    readonly createdAt: FieldRef<"OfflineMap", 'DateTime'>
    readonly updatedAt: FieldRef<"OfflineMap", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OfflineMap findUnique
   */
  export type OfflineMapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineMap
     */
    select?: OfflineMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfflineMap
     */
    omit?: OfflineMapOmit<ExtArgs> | null
    /**
     * Filter, which OfflineMap to fetch.
     */
    where: OfflineMapWhereUniqueInput
  }

  /**
   * OfflineMap findUniqueOrThrow
   */
  export type OfflineMapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineMap
     */
    select?: OfflineMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfflineMap
     */
    omit?: OfflineMapOmit<ExtArgs> | null
    /**
     * Filter, which OfflineMap to fetch.
     */
    where: OfflineMapWhereUniqueInput
  }

  /**
   * OfflineMap findFirst
   */
  export type OfflineMapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineMap
     */
    select?: OfflineMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfflineMap
     */
    omit?: OfflineMapOmit<ExtArgs> | null
    /**
     * Filter, which OfflineMap to fetch.
     */
    where?: OfflineMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfflineMaps to fetch.
     */
    orderBy?: OfflineMapOrderByWithRelationInput | OfflineMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfflineMaps.
     */
    cursor?: OfflineMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfflineMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfflineMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfflineMaps.
     */
    distinct?: OfflineMapScalarFieldEnum | OfflineMapScalarFieldEnum[]
  }

  /**
   * OfflineMap findFirstOrThrow
   */
  export type OfflineMapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineMap
     */
    select?: OfflineMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfflineMap
     */
    omit?: OfflineMapOmit<ExtArgs> | null
    /**
     * Filter, which OfflineMap to fetch.
     */
    where?: OfflineMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfflineMaps to fetch.
     */
    orderBy?: OfflineMapOrderByWithRelationInput | OfflineMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfflineMaps.
     */
    cursor?: OfflineMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfflineMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfflineMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfflineMaps.
     */
    distinct?: OfflineMapScalarFieldEnum | OfflineMapScalarFieldEnum[]
  }

  /**
   * OfflineMap findMany
   */
  export type OfflineMapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineMap
     */
    select?: OfflineMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfflineMap
     */
    omit?: OfflineMapOmit<ExtArgs> | null
    /**
     * Filter, which OfflineMaps to fetch.
     */
    where?: OfflineMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfflineMaps to fetch.
     */
    orderBy?: OfflineMapOrderByWithRelationInput | OfflineMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OfflineMaps.
     */
    cursor?: OfflineMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfflineMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfflineMaps.
     */
    skip?: number
    distinct?: OfflineMapScalarFieldEnum | OfflineMapScalarFieldEnum[]
  }

  /**
   * OfflineMap create
   */
  export type OfflineMapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineMap
     */
    select?: OfflineMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfflineMap
     */
    omit?: OfflineMapOmit<ExtArgs> | null
    /**
     * The data needed to create a OfflineMap.
     */
    data: XOR<OfflineMapCreateInput, OfflineMapUncheckedCreateInput>
  }

  /**
   * OfflineMap createMany
   */
  export type OfflineMapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OfflineMaps.
     */
    data: OfflineMapCreateManyInput | OfflineMapCreateManyInput[]
  }

  /**
   * OfflineMap update
   */
  export type OfflineMapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineMap
     */
    select?: OfflineMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfflineMap
     */
    omit?: OfflineMapOmit<ExtArgs> | null
    /**
     * The data needed to update a OfflineMap.
     */
    data: XOR<OfflineMapUpdateInput, OfflineMapUncheckedUpdateInput>
    /**
     * Choose, which OfflineMap to update.
     */
    where: OfflineMapWhereUniqueInput
  }

  /**
   * OfflineMap updateMany
   */
  export type OfflineMapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OfflineMaps.
     */
    data: XOR<OfflineMapUpdateManyMutationInput, OfflineMapUncheckedUpdateManyInput>
    /**
     * Filter which OfflineMaps to update
     */
    where?: OfflineMapWhereInput
    /**
     * Limit how many OfflineMaps to update.
     */
    limit?: number
  }

  /**
   * OfflineMap upsert
   */
  export type OfflineMapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineMap
     */
    select?: OfflineMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfflineMap
     */
    omit?: OfflineMapOmit<ExtArgs> | null
    /**
     * The filter to search for the OfflineMap to update in case it exists.
     */
    where: OfflineMapWhereUniqueInput
    /**
     * In case the OfflineMap found by the `where` argument doesn't exist, create a new OfflineMap with this data.
     */
    create: XOR<OfflineMapCreateInput, OfflineMapUncheckedCreateInput>
    /**
     * In case the OfflineMap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfflineMapUpdateInput, OfflineMapUncheckedUpdateInput>
  }

  /**
   * OfflineMap delete
   */
  export type OfflineMapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineMap
     */
    select?: OfflineMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfflineMap
     */
    omit?: OfflineMapOmit<ExtArgs> | null
    /**
     * Filter which OfflineMap to delete.
     */
    where: OfflineMapWhereUniqueInput
  }

  /**
   * OfflineMap deleteMany
   */
  export type OfflineMapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfflineMaps to delete
     */
    where?: OfflineMapWhereInput
    /**
     * Limit how many OfflineMaps to delete.
     */
    limit?: number
  }

  /**
   * OfflineMap findRaw
   */
  export type OfflineMapFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * OfflineMap aggregateRaw
   */
  export type OfflineMapAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * OfflineMap without action
   */
  export type OfflineMapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineMap
     */
    select?: OfflineMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfflineMap
     */
    omit?: OfflineMapOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AreaScalarFieldEnum: {
    id: 'id',
    areaId: 'areaId',
    name: 'name',
    latitude: 'latitude',
    longitude: 'longitude',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    addedBy: 'addedBy'
  };

  export type AreaScalarFieldEnum = (typeof AreaScalarFieldEnum)[keyof typeof AreaScalarFieldEnum]


  export const SensorScalarFieldEnum: {
    id: 'id',
    sensorId: 'sensorId',
    name: 'name',
    sensorType: 'sensorType',
    latitude: 'latitude',
    longitude: 'longitude',
    ipAddress: 'ipAddress',
    rtspUrl: 'rtspUrl',
    battery: 'battery',
    status: 'status',
    sendDrone: 'sendDrone',
    activeShuruMode: 'activeShuruMode',
    areaId: 'areaId',
    alarmId: 'alarmId',
    addedBy: 'addedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SensorScalarFieldEnum = (typeof SensorScalarFieldEnum)[keyof typeof SensorScalarFieldEnum]


  export const DroneOSScalarFieldEnum: {
    id: 'id',
    droneId: 'droneId',
    droneOSName: 'droneOSName',
    droneType: 'droneType',
    videoLink: 'videoLink',
    gpsFix: 'gpsFix',
    minHDOP: 'minHDOP',
    minSatCount: 'minSatCount',
    maxWindSpeed: 'maxWindSpeed',
    droneSpeed: 'droneSpeed',
    targetAltitude: 'targetAltitude',
    gpsLost: 'gpsLost',
    telemetryLost: 'telemetryLost',
    minBatteryLevel: 'minBatteryLevel',
    usbAddress: 'usbAddress',
    batteryFailSafe: 'batteryFailSafe',
    gpsName: 'gpsName',
    maxAltitude: 'maxAltitude',
    latitude: 'latitude',
    longitude: 'longitude',
    addedBy: 'addedBy',
    lastLatitude: 'lastLatitude',
    lastLongitude: 'lastLongitude',
    lastAltitude: 'lastAltitude',
    battery: 'battery',
    droneMode: 'droneMode',
    areaId: 'areaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DroneOSScalarFieldEnum = (typeof DroneOSScalarFieldEnum)[keyof typeof DroneOSScalarFieldEnum]


  export const AlarmScalarFieldEnum: {
    id: 'id',
    alarmId: 'alarmId',
    name: 'name',
    status: 'status',
    areaId: 'areaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlarmScalarFieldEnum = (typeof AlarmScalarFieldEnum)[keyof typeof AlarmScalarFieldEnum]


  export const AlertScalarFieldEnum: {
    id: 'id',
    sensorDbId: 'sensorDbId',
    sensorId: 'sensorId',
    type: 'type',
    message: 'message',
    time: 'time',
    timestamp: 'timestamp',
    status: 'status',
    createdAt: 'createdAt',
    decidedAt: 'decidedAt',
    decision: 'decision',
    metadata: 'metadata'
  };

  export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum]


  export const DroneFlightHistoryScalarFieldEnum: {
    id: 'id',
    droneDbId: 'droneDbId',
    sensorId: 'sensorId',
    alertId: 'alertId',
    dispatchedAt: 'dispatchedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DroneFlightHistoryScalarFieldEnum = (typeof DroneFlightHistoryScalarFieldEnum)[keyof typeof DroneFlightHistoryScalarFieldEnum]


  export const OfflineMapScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    tileRoot: 'tileRoot',
    minZoom: 'minZoom',
    maxZoom: 'maxZoom',
    north: 'north',
    south: 'south',
    east: 'east',
    west: 'west',
    isActive: 'isActive',
    downloadStatus: 'downloadStatus',
    downloadProgress: 'downloadProgress',
    downloadError: 'downloadError',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OfflineMapScalarFieldEnum = (typeof OfflineMapScalarFieldEnum)[keyof typeof OfflineMapScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'AlertStatus'
   */
  export type EnumAlertStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertStatus'>
    


  /**
   * Reference to a field of type 'AlertStatus[]'
   */
  export type ListEnumAlertStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AreaWhereInput = {
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    id?: StringFilter<"Area"> | string
    areaId?: StringFilter<"Area"> | string
    name?: StringFilter<"Area"> | string
    latitude?: FloatFilter<"Area"> | number
    longitude?: FloatFilter<"Area"> | number
    status?: StringFilter<"Area"> | string
    createdAt?: DateTimeFilter<"Area"> | Date | string
    updatedAt?: DateTimeFilter<"Area"> | Date | string
    addedBy?: StringFilter<"Area"> | string
    sensors?: SensorListRelationFilter
    alarms?: AlarmListRelationFilter
    drones?: DroneOSListRelationFilter
  }

  export type AreaOrderByWithRelationInput = {
    id?: SortOrder
    areaId?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addedBy?: SortOrder
    sensors?: SensorOrderByRelationAggregateInput
    alarms?: AlarmOrderByRelationAggregateInput
    drones?: DroneOSOrderByRelationAggregateInput
  }

  export type AreaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    areaId?: string
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    name?: StringFilter<"Area"> | string
    latitude?: FloatFilter<"Area"> | number
    longitude?: FloatFilter<"Area"> | number
    status?: StringFilter<"Area"> | string
    createdAt?: DateTimeFilter<"Area"> | Date | string
    updatedAt?: DateTimeFilter<"Area"> | Date | string
    addedBy?: StringFilter<"Area"> | string
    sensors?: SensorListRelationFilter
    alarms?: AlarmListRelationFilter
    drones?: DroneOSListRelationFilter
  }, "id" | "areaId">

  export type AreaOrderByWithAggregationInput = {
    id?: SortOrder
    areaId?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addedBy?: SortOrder
    _count?: AreaCountOrderByAggregateInput
    _avg?: AreaAvgOrderByAggregateInput
    _max?: AreaMaxOrderByAggregateInput
    _min?: AreaMinOrderByAggregateInput
    _sum?: AreaSumOrderByAggregateInput
  }

  export type AreaScalarWhereWithAggregatesInput = {
    AND?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    OR?: AreaScalarWhereWithAggregatesInput[]
    NOT?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Area"> | string
    areaId?: StringWithAggregatesFilter<"Area"> | string
    name?: StringWithAggregatesFilter<"Area"> | string
    latitude?: FloatWithAggregatesFilter<"Area"> | number
    longitude?: FloatWithAggregatesFilter<"Area"> | number
    status?: StringWithAggregatesFilter<"Area"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Area"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Area"> | Date | string
    addedBy?: StringWithAggregatesFilter<"Area"> | string
  }

  export type SensorWhereInput = {
    AND?: SensorWhereInput | SensorWhereInput[]
    OR?: SensorWhereInput[]
    NOT?: SensorWhereInput | SensorWhereInput[]
    id?: StringFilter<"Sensor"> | string
    sensorId?: StringFilter<"Sensor"> | string
    name?: StringFilter<"Sensor"> | string
    sensorType?: StringFilter<"Sensor"> | string
    latitude?: FloatFilter<"Sensor"> | number
    longitude?: FloatFilter<"Sensor"> | number
    ipAddress?: StringNullableFilter<"Sensor"> | string | null
    rtspUrl?: StringNullableFilter<"Sensor"> | string | null
    battery?: StringNullableFilter<"Sensor"> | string | null
    status?: StringFilter<"Sensor"> | string
    sendDrone?: StringFilter<"Sensor"> | string
    activeShuruMode?: StringFilter<"Sensor"> | string
    areaId?: StringNullableFilter<"Sensor"> | string | null
    alarmId?: StringNullableFilter<"Sensor"> | string | null
    addedBy?: StringFilter<"Sensor"> | string
    createdAt?: DateTimeFilter<"Sensor"> | Date | string
    updatedAt?: DateTimeFilter<"Sensor"> | Date | string
    area?: XOR<AreaNullableScalarRelationFilter, AreaWhereInput> | null
    alarm?: XOR<AlarmNullableScalarRelationFilter, AlarmWhereInput> | null
    alerts?: AlertListRelationFilter
  }

  export type SensorOrderByWithRelationInput = {
    id?: SortOrder
    sensorId?: SortOrder
    name?: SortOrder
    sensorType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    ipAddress?: SortOrder
    rtspUrl?: SortOrder
    battery?: SortOrder
    status?: SortOrder
    sendDrone?: SortOrder
    activeShuruMode?: SortOrder
    areaId?: SortOrder
    alarmId?: SortOrder
    addedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    area?: AreaOrderByWithRelationInput
    alarm?: AlarmOrderByWithRelationInput
    alerts?: AlertOrderByRelationAggregateInput
  }

  export type SensorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sensorId?: string
    AND?: SensorWhereInput | SensorWhereInput[]
    OR?: SensorWhereInput[]
    NOT?: SensorWhereInput | SensorWhereInput[]
    name?: StringFilter<"Sensor"> | string
    sensorType?: StringFilter<"Sensor"> | string
    latitude?: FloatFilter<"Sensor"> | number
    longitude?: FloatFilter<"Sensor"> | number
    ipAddress?: StringNullableFilter<"Sensor"> | string | null
    rtspUrl?: StringNullableFilter<"Sensor"> | string | null
    battery?: StringNullableFilter<"Sensor"> | string | null
    status?: StringFilter<"Sensor"> | string
    sendDrone?: StringFilter<"Sensor"> | string
    activeShuruMode?: StringFilter<"Sensor"> | string
    areaId?: StringNullableFilter<"Sensor"> | string | null
    alarmId?: StringNullableFilter<"Sensor"> | string | null
    addedBy?: StringFilter<"Sensor"> | string
    createdAt?: DateTimeFilter<"Sensor"> | Date | string
    updatedAt?: DateTimeFilter<"Sensor"> | Date | string
    area?: XOR<AreaNullableScalarRelationFilter, AreaWhereInput> | null
    alarm?: XOR<AlarmNullableScalarRelationFilter, AlarmWhereInput> | null
    alerts?: AlertListRelationFilter
  }, "id" | "sensorId">

  export type SensorOrderByWithAggregationInput = {
    id?: SortOrder
    sensorId?: SortOrder
    name?: SortOrder
    sensorType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    ipAddress?: SortOrder
    rtspUrl?: SortOrder
    battery?: SortOrder
    status?: SortOrder
    sendDrone?: SortOrder
    activeShuruMode?: SortOrder
    areaId?: SortOrder
    alarmId?: SortOrder
    addedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SensorCountOrderByAggregateInput
    _avg?: SensorAvgOrderByAggregateInput
    _max?: SensorMaxOrderByAggregateInput
    _min?: SensorMinOrderByAggregateInput
    _sum?: SensorSumOrderByAggregateInput
  }

  export type SensorScalarWhereWithAggregatesInput = {
    AND?: SensorScalarWhereWithAggregatesInput | SensorScalarWhereWithAggregatesInput[]
    OR?: SensorScalarWhereWithAggregatesInput[]
    NOT?: SensorScalarWhereWithAggregatesInput | SensorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sensor"> | string
    sensorId?: StringWithAggregatesFilter<"Sensor"> | string
    name?: StringWithAggregatesFilter<"Sensor"> | string
    sensorType?: StringWithAggregatesFilter<"Sensor"> | string
    latitude?: FloatWithAggregatesFilter<"Sensor"> | number
    longitude?: FloatWithAggregatesFilter<"Sensor"> | number
    ipAddress?: StringNullableWithAggregatesFilter<"Sensor"> | string | null
    rtspUrl?: StringNullableWithAggregatesFilter<"Sensor"> | string | null
    battery?: StringNullableWithAggregatesFilter<"Sensor"> | string | null
    status?: StringWithAggregatesFilter<"Sensor"> | string
    sendDrone?: StringWithAggregatesFilter<"Sensor"> | string
    activeShuruMode?: StringWithAggregatesFilter<"Sensor"> | string
    areaId?: StringNullableWithAggregatesFilter<"Sensor"> | string | null
    alarmId?: StringNullableWithAggregatesFilter<"Sensor"> | string | null
    addedBy?: StringWithAggregatesFilter<"Sensor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Sensor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sensor"> | Date | string
  }

  export type DroneOSWhereInput = {
    AND?: DroneOSWhereInput | DroneOSWhereInput[]
    OR?: DroneOSWhereInput[]
    NOT?: DroneOSWhereInput | DroneOSWhereInput[]
    id?: StringFilter<"DroneOS"> | string
    droneId?: StringNullableFilter<"DroneOS"> | string | null
    droneOSName?: StringFilter<"DroneOS"> | string
    droneType?: StringFilter<"DroneOS"> | string
    videoLink?: StringNullableFilter<"DroneOS"> | string | null
    gpsFix?: StringFilter<"DroneOS"> | string
    minHDOP?: FloatFilter<"DroneOS"> | number
    minSatCount?: IntFilter<"DroneOS"> | number
    maxWindSpeed?: FloatFilter<"DroneOS"> | number
    droneSpeed?: FloatFilter<"DroneOS"> | number
    targetAltitude?: FloatFilter<"DroneOS"> | number
    gpsLost?: StringFilter<"DroneOS"> | string
    telemetryLost?: StringFilter<"DroneOS"> | string
    minBatteryLevel?: FloatFilter<"DroneOS"> | number
    usbAddress?: StringFilter<"DroneOS"> | string
    batteryFailSafe?: StringFilter<"DroneOS"> | string
    gpsName?: StringFilter<"DroneOS"> | string
    maxAltitude?: FloatFilter<"DroneOS"> | number
    latitude?: FloatNullableFilter<"DroneOS"> | number | null
    longitude?: FloatNullableFilter<"DroneOS"> | number | null
    addedBy?: StringFilter<"DroneOS"> | string
    lastLatitude?: FloatNullableFilter<"DroneOS"> | number | null
    lastLongitude?: FloatNullableFilter<"DroneOS"> | number | null
    lastAltitude?: FloatNullableFilter<"DroneOS"> | number | null
    battery?: FloatNullableFilter<"DroneOS"> | number | null
    droneMode?: StringNullableFilter<"DroneOS"> | string | null
    areaId?: StringNullableFilter<"DroneOS"> | string | null
    createdAt?: DateTimeFilter<"DroneOS"> | Date | string
    updatedAt?: DateTimeFilter<"DroneOS"> | Date | string
    area?: XOR<AreaNullableScalarRelationFilter, AreaWhereInput> | null
    flightHistory?: DroneFlightHistoryListRelationFilter
  }

  export type DroneOSOrderByWithRelationInput = {
    id?: SortOrder
    droneId?: SortOrder
    droneOSName?: SortOrder
    droneType?: SortOrder
    videoLink?: SortOrder
    gpsFix?: SortOrder
    minHDOP?: SortOrder
    minSatCount?: SortOrder
    maxWindSpeed?: SortOrder
    droneSpeed?: SortOrder
    targetAltitude?: SortOrder
    gpsLost?: SortOrder
    telemetryLost?: SortOrder
    minBatteryLevel?: SortOrder
    usbAddress?: SortOrder
    batteryFailSafe?: SortOrder
    gpsName?: SortOrder
    maxAltitude?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    addedBy?: SortOrder
    lastLatitude?: SortOrder
    lastLongitude?: SortOrder
    lastAltitude?: SortOrder
    battery?: SortOrder
    droneMode?: SortOrder
    areaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    area?: AreaOrderByWithRelationInput
    flightHistory?: DroneFlightHistoryOrderByRelationAggregateInput
  }

  export type DroneOSWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    droneId?: string
    AND?: DroneOSWhereInput | DroneOSWhereInput[]
    OR?: DroneOSWhereInput[]
    NOT?: DroneOSWhereInput | DroneOSWhereInput[]
    droneOSName?: StringFilter<"DroneOS"> | string
    droneType?: StringFilter<"DroneOS"> | string
    videoLink?: StringNullableFilter<"DroneOS"> | string | null
    gpsFix?: StringFilter<"DroneOS"> | string
    minHDOP?: FloatFilter<"DroneOS"> | number
    minSatCount?: IntFilter<"DroneOS"> | number
    maxWindSpeed?: FloatFilter<"DroneOS"> | number
    droneSpeed?: FloatFilter<"DroneOS"> | number
    targetAltitude?: FloatFilter<"DroneOS"> | number
    gpsLost?: StringFilter<"DroneOS"> | string
    telemetryLost?: StringFilter<"DroneOS"> | string
    minBatteryLevel?: FloatFilter<"DroneOS"> | number
    usbAddress?: StringFilter<"DroneOS"> | string
    batteryFailSafe?: StringFilter<"DroneOS"> | string
    gpsName?: StringFilter<"DroneOS"> | string
    maxAltitude?: FloatFilter<"DroneOS"> | number
    latitude?: FloatNullableFilter<"DroneOS"> | number | null
    longitude?: FloatNullableFilter<"DroneOS"> | number | null
    addedBy?: StringFilter<"DroneOS"> | string
    lastLatitude?: FloatNullableFilter<"DroneOS"> | number | null
    lastLongitude?: FloatNullableFilter<"DroneOS"> | number | null
    lastAltitude?: FloatNullableFilter<"DroneOS"> | number | null
    battery?: FloatNullableFilter<"DroneOS"> | number | null
    droneMode?: StringNullableFilter<"DroneOS"> | string | null
    areaId?: StringNullableFilter<"DroneOS"> | string | null
    createdAt?: DateTimeFilter<"DroneOS"> | Date | string
    updatedAt?: DateTimeFilter<"DroneOS"> | Date | string
    area?: XOR<AreaNullableScalarRelationFilter, AreaWhereInput> | null
    flightHistory?: DroneFlightHistoryListRelationFilter
  }, "id" | "droneId">

  export type DroneOSOrderByWithAggregationInput = {
    id?: SortOrder
    droneId?: SortOrder
    droneOSName?: SortOrder
    droneType?: SortOrder
    videoLink?: SortOrder
    gpsFix?: SortOrder
    minHDOP?: SortOrder
    minSatCount?: SortOrder
    maxWindSpeed?: SortOrder
    droneSpeed?: SortOrder
    targetAltitude?: SortOrder
    gpsLost?: SortOrder
    telemetryLost?: SortOrder
    minBatteryLevel?: SortOrder
    usbAddress?: SortOrder
    batteryFailSafe?: SortOrder
    gpsName?: SortOrder
    maxAltitude?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    addedBy?: SortOrder
    lastLatitude?: SortOrder
    lastLongitude?: SortOrder
    lastAltitude?: SortOrder
    battery?: SortOrder
    droneMode?: SortOrder
    areaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DroneOSCountOrderByAggregateInput
    _avg?: DroneOSAvgOrderByAggregateInput
    _max?: DroneOSMaxOrderByAggregateInput
    _min?: DroneOSMinOrderByAggregateInput
    _sum?: DroneOSSumOrderByAggregateInput
  }

  export type DroneOSScalarWhereWithAggregatesInput = {
    AND?: DroneOSScalarWhereWithAggregatesInput | DroneOSScalarWhereWithAggregatesInput[]
    OR?: DroneOSScalarWhereWithAggregatesInput[]
    NOT?: DroneOSScalarWhereWithAggregatesInput | DroneOSScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DroneOS"> | string
    droneId?: StringNullableWithAggregatesFilter<"DroneOS"> | string | null
    droneOSName?: StringWithAggregatesFilter<"DroneOS"> | string
    droneType?: StringWithAggregatesFilter<"DroneOS"> | string
    videoLink?: StringNullableWithAggregatesFilter<"DroneOS"> | string | null
    gpsFix?: StringWithAggregatesFilter<"DroneOS"> | string
    minHDOP?: FloatWithAggregatesFilter<"DroneOS"> | number
    minSatCount?: IntWithAggregatesFilter<"DroneOS"> | number
    maxWindSpeed?: FloatWithAggregatesFilter<"DroneOS"> | number
    droneSpeed?: FloatWithAggregatesFilter<"DroneOS"> | number
    targetAltitude?: FloatWithAggregatesFilter<"DroneOS"> | number
    gpsLost?: StringWithAggregatesFilter<"DroneOS"> | string
    telemetryLost?: StringWithAggregatesFilter<"DroneOS"> | string
    minBatteryLevel?: FloatWithAggregatesFilter<"DroneOS"> | number
    usbAddress?: StringWithAggregatesFilter<"DroneOS"> | string
    batteryFailSafe?: StringWithAggregatesFilter<"DroneOS"> | string
    gpsName?: StringWithAggregatesFilter<"DroneOS"> | string
    maxAltitude?: FloatWithAggregatesFilter<"DroneOS"> | number
    latitude?: FloatNullableWithAggregatesFilter<"DroneOS"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"DroneOS"> | number | null
    addedBy?: StringWithAggregatesFilter<"DroneOS"> | string
    lastLatitude?: FloatNullableWithAggregatesFilter<"DroneOS"> | number | null
    lastLongitude?: FloatNullableWithAggregatesFilter<"DroneOS"> | number | null
    lastAltitude?: FloatNullableWithAggregatesFilter<"DroneOS"> | number | null
    battery?: FloatNullableWithAggregatesFilter<"DroneOS"> | number | null
    droneMode?: StringNullableWithAggregatesFilter<"DroneOS"> | string | null
    areaId?: StringNullableWithAggregatesFilter<"DroneOS"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DroneOS"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DroneOS"> | Date | string
  }

  export type AlarmWhereInput = {
    AND?: AlarmWhereInput | AlarmWhereInput[]
    OR?: AlarmWhereInput[]
    NOT?: AlarmWhereInput | AlarmWhereInput[]
    id?: StringFilter<"Alarm"> | string
    alarmId?: StringFilter<"Alarm"> | string
    name?: StringFilter<"Alarm"> | string
    status?: StringFilter<"Alarm"> | string
    areaId?: StringNullableFilter<"Alarm"> | string | null
    createdAt?: DateTimeFilter<"Alarm"> | Date | string
    updatedAt?: DateTimeFilter<"Alarm"> | Date | string
    area?: XOR<AreaNullableScalarRelationFilter, AreaWhereInput> | null
    sensors?: SensorListRelationFilter
  }

  export type AlarmOrderByWithRelationInput = {
    id?: SortOrder
    alarmId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    areaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    area?: AreaOrderByWithRelationInput
    sensors?: SensorOrderByRelationAggregateInput
  }

  export type AlarmWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    alarmId?: string
    AND?: AlarmWhereInput | AlarmWhereInput[]
    OR?: AlarmWhereInput[]
    NOT?: AlarmWhereInput | AlarmWhereInput[]
    name?: StringFilter<"Alarm"> | string
    status?: StringFilter<"Alarm"> | string
    areaId?: StringNullableFilter<"Alarm"> | string | null
    createdAt?: DateTimeFilter<"Alarm"> | Date | string
    updatedAt?: DateTimeFilter<"Alarm"> | Date | string
    area?: XOR<AreaNullableScalarRelationFilter, AreaWhereInput> | null
    sensors?: SensorListRelationFilter
  }, "id" | "alarmId">

  export type AlarmOrderByWithAggregationInput = {
    id?: SortOrder
    alarmId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    areaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlarmCountOrderByAggregateInput
    _max?: AlarmMaxOrderByAggregateInput
    _min?: AlarmMinOrderByAggregateInput
  }

  export type AlarmScalarWhereWithAggregatesInput = {
    AND?: AlarmScalarWhereWithAggregatesInput | AlarmScalarWhereWithAggregatesInput[]
    OR?: AlarmScalarWhereWithAggregatesInput[]
    NOT?: AlarmScalarWhereWithAggregatesInput | AlarmScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alarm"> | string
    alarmId?: StringWithAggregatesFilter<"Alarm"> | string
    name?: StringWithAggregatesFilter<"Alarm"> | string
    status?: StringWithAggregatesFilter<"Alarm"> | string
    areaId?: StringNullableWithAggregatesFilter<"Alarm"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Alarm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Alarm"> | Date | string
  }

  export type AlertWhereInput = {
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    id?: StringFilter<"Alert"> | string
    sensorDbId?: StringFilter<"Alert"> | string
    sensorId?: StringFilter<"Alert"> | string
    type?: StringFilter<"Alert"> | string
    message?: StringFilter<"Alert"> | string
    time?: StringFilter<"Alert"> | string
    timestamp?: DateTimeFilter<"Alert"> | Date | string
    status?: EnumAlertStatusFilter<"Alert"> | $Enums.AlertStatus
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    decidedAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    decision?: StringNullableFilter<"Alert"> | string | null
    metadata?: JsonNullableFilter<"Alert">
    sensor?: XOR<SensorScalarRelationFilter, SensorWhereInput>
  }

  export type AlertOrderByWithRelationInput = {
    id?: SortOrder
    sensorDbId?: SortOrder
    sensorId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    time?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    decidedAt?: SortOrder
    decision?: SortOrder
    metadata?: SortOrder
    sensor?: SensorOrderByWithRelationInput
  }

  export type AlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    sensorDbId?: StringFilter<"Alert"> | string
    sensorId?: StringFilter<"Alert"> | string
    type?: StringFilter<"Alert"> | string
    message?: StringFilter<"Alert"> | string
    time?: StringFilter<"Alert"> | string
    timestamp?: DateTimeFilter<"Alert"> | Date | string
    status?: EnumAlertStatusFilter<"Alert"> | $Enums.AlertStatus
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    decidedAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    decision?: StringNullableFilter<"Alert"> | string | null
    metadata?: JsonNullableFilter<"Alert">
    sensor?: XOR<SensorScalarRelationFilter, SensorWhereInput>
  }, "id">

  export type AlertOrderByWithAggregationInput = {
    id?: SortOrder
    sensorDbId?: SortOrder
    sensorId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    time?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    decidedAt?: SortOrder
    decision?: SortOrder
    metadata?: SortOrder
    _count?: AlertCountOrderByAggregateInput
    _max?: AlertMaxOrderByAggregateInput
    _min?: AlertMinOrderByAggregateInput
  }

  export type AlertScalarWhereWithAggregatesInput = {
    AND?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    OR?: AlertScalarWhereWithAggregatesInput[]
    NOT?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alert"> | string
    sensorDbId?: StringWithAggregatesFilter<"Alert"> | string
    sensorId?: StringWithAggregatesFilter<"Alert"> | string
    type?: StringWithAggregatesFilter<"Alert"> | string
    message?: StringWithAggregatesFilter<"Alert"> | string
    time?: StringWithAggregatesFilter<"Alert"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
    status?: EnumAlertStatusWithAggregatesFilter<"Alert"> | $Enums.AlertStatus
    createdAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
    decidedAt?: DateTimeNullableWithAggregatesFilter<"Alert"> | Date | string | null
    decision?: StringNullableWithAggregatesFilter<"Alert"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Alert">
  }

  export type DroneFlightHistoryWhereInput = {
    AND?: DroneFlightHistoryWhereInput | DroneFlightHistoryWhereInput[]
    OR?: DroneFlightHistoryWhereInput[]
    NOT?: DroneFlightHistoryWhereInput | DroneFlightHistoryWhereInput[]
    id?: StringFilter<"DroneFlightHistory"> | string
    droneDbId?: StringFilter<"DroneFlightHistory"> | string
    sensorId?: StringNullableFilter<"DroneFlightHistory"> | string | null
    alertId?: StringNullableFilter<"DroneFlightHistory"> | string | null
    dispatchedAt?: DateTimeFilter<"DroneFlightHistory"> | Date | string
    createdAt?: DateTimeFilter<"DroneFlightHistory"> | Date | string
    updatedAt?: DateTimeFilter<"DroneFlightHistory"> | Date | string
    drone?: XOR<DroneOSScalarRelationFilter, DroneOSWhereInput>
  }

  export type DroneFlightHistoryOrderByWithRelationInput = {
    id?: SortOrder
    droneDbId?: SortOrder
    sensorId?: SortOrder
    alertId?: SortOrder
    dispatchedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    drone?: DroneOSOrderByWithRelationInput
  }

  export type DroneFlightHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DroneFlightHistoryWhereInput | DroneFlightHistoryWhereInput[]
    OR?: DroneFlightHistoryWhereInput[]
    NOT?: DroneFlightHistoryWhereInput | DroneFlightHistoryWhereInput[]
    droneDbId?: StringFilter<"DroneFlightHistory"> | string
    sensorId?: StringNullableFilter<"DroneFlightHistory"> | string | null
    alertId?: StringNullableFilter<"DroneFlightHistory"> | string | null
    dispatchedAt?: DateTimeFilter<"DroneFlightHistory"> | Date | string
    createdAt?: DateTimeFilter<"DroneFlightHistory"> | Date | string
    updatedAt?: DateTimeFilter<"DroneFlightHistory"> | Date | string
    drone?: XOR<DroneOSScalarRelationFilter, DroneOSWhereInput>
  }, "id">

  export type DroneFlightHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    droneDbId?: SortOrder
    sensorId?: SortOrder
    alertId?: SortOrder
    dispatchedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DroneFlightHistoryCountOrderByAggregateInput
    _max?: DroneFlightHistoryMaxOrderByAggregateInput
    _min?: DroneFlightHistoryMinOrderByAggregateInput
  }

  export type DroneFlightHistoryScalarWhereWithAggregatesInput = {
    AND?: DroneFlightHistoryScalarWhereWithAggregatesInput | DroneFlightHistoryScalarWhereWithAggregatesInput[]
    OR?: DroneFlightHistoryScalarWhereWithAggregatesInput[]
    NOT?: DroneFlightHistoryScalarWhereWithAggregatesInput | DroneFlightHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DroneFlightHistory"> | string
    droneDbId?: StringWithAggregatesFilter<"DroneFlightHistory"> | string
    sensorId?: StringNullableWithAggregatesFilter<"DroneFlightHistory"> | string | null
    alertId?: StringNullableWithAggregatesFilter<"DroneFlightHistory"> | string | null
    dispatchedAt?: DateTimeWithAggregatesFilter<"DroneFlightHistory"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"DroneFlightHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DroneFlightHistory"> | Date | string
  }

  export type OfflineMapWhereInput = {
    AND?: OfflineMapWhereInput | OfflineMapWhereInput[]
    OR?: OfflineMapWhereInput[]
    NOT?: OfflineMapWhereInput | OfflineMapWhereInput[]
    id?: StringFilter<"OfflineMap"> | string
    name?: StringFilter<"OfflineMap"> | string
    description?: StringNullableFilter<"OfflineMap"> | string | null
    tileRoot?: StringFilter<"OfflineMap"> | string
    minZoom?: IntFilter<"OfflineMap"> | number
    maxZoom?: IntFilter<"OfflineMap"> | number
    north?: FloatFilter<"OfflineMap"> | number
    south?: FloatFilter<"OfflineMap"> | number
    east?: FloatFilter<"OfflineMap"> | number
    west?: FloatFilter<"OfflineMap"> | number
    isActive?: BoolFilter<"OfflineMap"> | boolean
    downloadStatus?: StringFilter<"OfflineMap"> | string
    downloadProgress?: IntFilter<"OfflineMap"> | number
    downloadError?: StringNullableFilter<"OfflineMap"> | string | null
    createdAt?: DateTimeFilter<"OfflineMap"> | Date | string
    updatedAt?: DateTimeFilter<"OfflineMap"> | Date | string
  }

  export type OfflineMapOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    tileRoot?: SortOrder
    minZoom?: SortOrder
    maxZoom?: SortOrder
    north?: SortOrder
    south?: SortOrder
    east?: SortOrder
    west?: SortOrder
    isActive?: SortOrder
    downloadStatus?: SortOrder
    downloadProgress?: SortOrder
    downloadError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfflineMapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OfflineMapWhereInput | OfflineMapWhereInput[]
    OR?: OfflineMapWhereInput[]
    NOT?: OfflineMapWhereInput | OfflineMapWhereInput[]
    name?: StringFilter<"OfflineMap"> | string
    description?: StringNullableFilter<"OfflineMap"> | string | null
    tileRoot?: StringFilter<"OfflineMap"> | string
    minZoom?: IntFilter<"OfflineMap"> | number
    maxZoom?: IntFilter<"OfflineMap"> | number
    north?: FloatFilter<"OfflineMap"> | number
    south?: FloatFilter<"OfflineMap"> | number
    east?: FloatFilter<"OfflineMap"> | number
    west?: FloatFilter<"OfflineMap"> | number
    isActive?: BoolFilter<"OfflineMap"> | boolean
    downloadStatus?: StringFilter<"OfflineMap"> | string
    downloadProgress?: IntFilter<"OfflineMap"> | number
    downloadError?: StringNullableFilter<"OfflineMap"> | string | null
    createdAt?: DateTimeFilter<"OfflineMap"> | Date | string
    updatedAt?: DateTimeFilter<"OfflineMap"> | Date | string
  }, "id">

  export type OfflineMapOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    tileRoot?: SortOrder
    minZoom?: SortOrder
    maxZoom?: SortOrder
    north?: SortOrder
    south?: SortOrder
    east?: SortOrder
    west?: SortOrder
    isActive?: SortOrder
    downloadStatus?: SortOrder
    downloadProgress?: SortOrder
    downloadError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OfflineMapCountOrderByAggregateInput
    _avg?: OfflineMapAvgOrderByAggregateInput
    _max?: OfflineMapMaxOrderByAggregateInput
    _min?: OfflineMapMinOrderByAggregateInput
    _sum?: OfflineMapSumOrderByAggregateInput
  }

  export type OfflineMapScalarWhereWithAggregatesInput = {
    AND?: OfflineMapScalarWhereWithAggregatesInput | OfflineMapScalarWhereWithAggregatesInput[]
    OR?: OfflineMapScalarWhereWithAggregatesInput[]
    NOT?: OfflineMapScalarWhereWithAggregatesInput | OfflineMapScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OfflineMap"> | string
    name?: StringWithAggregatesFilter<"OfflineMap"> | string
    description?: StringNullableWithAggregatesFilter<"OfflineMap"> | string | null
    tileRoot?: StringWithAggregatesFilter<"OfflineMap"> | string
    minZoom?: IntWithAggregatesFilter<"OfflineMap"> | number
    maxZoom?: IntWithAggregatesFilter<"OfflineMap"> | number
    north?: FloatWithAggregatesFilter<"OfflineMap"> | number
    south?: FloatWithAggregatesFilter<"OfflineMap"> | number
    east?: FloatWithAggregatesFilter<"OfflineMap"> | number
    west?: FloatWithAggregatesFilter<"OfflineMap"> | number
    isActive?: BoolWithAggregatesFilter<"OfflineMap"> | boolean
    downloadStatus?: StringWithAggregatesFilter<"OfflineMap"> | string
    downloadProgress?: IntWithAggregatesFilter<"OfflineMap"> | number
    downloadError?: StringNullableWithAggregatesFilter<"OfflineMap"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OfflineMap"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OfflineMap"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AreaCreateInput = {
    id?: string
    areaId: string
    name: string
    latitude: number
    longitude: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addedBy?: string
    sensors?: SensorCreateNestedManyWithoutAreaInput
    alarms?: AlarmCreateNestedManyWithoutAreaInput
    drones?: DroneOSCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateInput = {
    id?: string
    areaId: string
    name: string
    latitude: number
    longitude: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addedBy?: string
    sensors?: SensorUncheckedCreateNestedManyWithoutAreaInput
    alarms?: AlarmUncheckedCreateNestedManyWithoutAreaInput
    drones?: DroneOSUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaUpdateInput = {
    areaId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedBy?: StringFieldUpdateOperationsInput | string
    sensors?: SensorUpdateManyWithoutAreaNestedInput
    alarms?: AlarmUpdateManyWithoutAreaNestedInput
    drones?: DroneOSUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateInput = {
    areaId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedBy?: StringFieldUpdateOperationsInput | string
    sensors?: SensorUncheckedUpdateManyWithoutAreaNestedInput
    alarms?: AlarmUncheckedUpdateManyWithoutAreaNestedInput
    drones?: DroneOSUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaCreateManyInput = {
    id?: string
    areaId: string
    name: string
    latitude: number
    longitude: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addedBy?: string
  }

  export type AreaUpdateManyMutationInput = {
    areaId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedBy?: StringFieldUpdateOperationsInput | string
  }

  export type AreaUncheckedUpdateManyInput = {
    areaId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedBy?: StringFieldUpdateOperationsInput | string
  }

  export type SensorCreateInput = {
    id?: string
    sensorId: string
    name: string
    sensorType: string
    latitude: number
    longitude: number
    ipAddress?: string | null
    rtspUrl?: string | null
    battery?: string | null
    status: string
    sendDrone?: string
    activeShuruMode: string
    addedBy?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    area?: AreaCreateNestedOneWithoutSensorsInput
    alarm?: AlarmCreateNestedOneWithoutSensorsInput
    alerts?: AlertCreateNestedManyWithoutSensorInput
  }

  export type SensorUncheckedCreateInput = {
    id?: string
    sensorId: string
    name: string
    sensorType: string
    latitude: number
    longitude: number
    ipAddress?: string | null
    rtspUrl?: string | null
    battery?: string | null
    status: string
    sendDrone?: string
    activeShuruMode: string
    areaId?: string | null
    alarmId?: string | null
    addedBy?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    alerts?: AlertUncheckedCreateNestedManyWithoutSensorInput
  }

  export type SensorUpdateInput = {
    sensorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sensorType?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    rtspUrl?: NullableStringFieldUpdateOperationsInput | string | null
    battery?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sendDrone?: StringFieldUpdateOperationsInput | string
    activeShuruMode?: StringFieldUpdateOperationsInput | string
    addedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneWithoutSensorsNestedInput
    alarm?: AlarmUpdateOneWithoutSensorsNestedInput
    alerts?: AlertUpdateManyWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateInput = {
    sensorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sensorType?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    rtspUrl?: NullableStringFieldUpdateOperationsInput | string | null
    battery?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sendDrone?: StringFieldUpdateOperationsInput | string
    activeShuruMode?: StringFieldUpdateOperationsInput | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    alarmId?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: AlertUncheckedUpdateManyWithoutSensorNestedInput
  }

  export type SensorCreateManyInput = {
    id?: string
    sensorId: string
    name: string
    sensorType: string
    latitude: number
    longitude: number
    ipAddress?: string | null
    rtspUrl?: string | null
    battery?: string | null
    status: string
    sendDrone?: string
    activeShuruMode: string
    areaId?: string | null
    alarmId?: string | null
    addedBy?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SensorUpdateManyMutationInput = {
    sensorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sensorType?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    rtspUrl?: NullableStringFieldUpdateOperationsInput | string | null
    battery?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sendDrone?: StringFieldUpdateOperationsInput | string
    activeShuruMode?: StringFieldUpdateOperationsInput | string
    addedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorUncheckedUpdateManyInput = {
    sensorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sensorType?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    rtspUrl?: NullableStringFieldUpdateOperationsInput | string | null
    battery?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sendDrone?: StringFieldUpdateOperationsInput | string
    activeShuruMode?: StringFieldUpdateOperationsInput | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    alarmId?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DroneOSCreateInput = {
    id?: string
    droneId?: string | null
    droneOSName: string
    droneType: string
    videoLink?: string | null
    gpsFix: string
    minHDOP: number
    minSatCount: number
    maxWindSpeed: number
    droneSpeed: number
    targetAltitude: number
    gpsLost: string
    telemetryLost: string
    minBatteryLevel: number
    usbAddress: string
    batteryFailSafe: string
    gpsName: string
    maxAltitude: number
    latitude?: number | null
    longitude?: number | null
    addedBy?: string
    lastLatitude?: number | null
    lastLongitude?: number | null
    lastAltitude?: number | null
    battery?: number | null
    droneMode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    area?: AreaCreateNestedOneWithoutDronesInput
    flightHistory?: DroneFlightHistoryCreateNestedManyWithoutDroneInput
  }

  export type DroneOSUncheckedCreateInput = {
    id?: string
    droneId?: string | null
    droneOSName: string
    droneType: string
    videoLink?: string | null
    gpsFix: string
    minHDOP: number
    minSatCount: number
    maxWindSpeed: number
    droneSpeed: number
    targetAltitude: number
    gpsLost: string
    telemetryLost: string
    minBatteryLevel: number
    usbAddress: string
    batteryFailSafe: string
    gpsName: string
    maxAltitude: number
    latitude?: number | null
    longitude?: number | null
    addedBy?: string
    lastLatitude?: number | null
    lastLongitude?: number | null
    lastAltitude?: number | null
    battery?: number | null
    droneMode?: string | null
    areaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flightHistory?: DroneFlightHistoryUncheckedCreateNestedManyWithoutDroneInput
  }

  export type DroneOSUpdateInput = {
    droneId?: NullableStringFieldUpdateOperationsInput | string | null
    droneOSName?: StringFieldUpdateOperationsInput | string
    droneType?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    gpsFix?: StringFieldUpdateOperationsInput | string
    minHDOP?: FloatFieldUpdateOperationsInput | number
    minSatCount?: IntFieldUpdateOperationsInput | number
    maxWindSpeed?: FloatFieldUpdateOperationsInput | number
    droneSpeed?: FloatFieldUpdateOperationsInput | number
    targetAltitude?: FloatFieldUpdateOperationsInput | number
    gpsLost?: StringFieldUpdateOperationsInput | string
    telemetryLost?: StringFieldUpdateOperationsInput | string
    minBatteryLevel?: FloatFieldUpdateOperationsInput | number
    usbAddress?: StringFieldUpdateOperationsInput | string
    batteryFailSafe?: StringFieldUpdateOperationsInput | string
    gpsName?: StringFieldUpdateOperationsInput | string
    maxAltitude?: FloatFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    addedBy?: StringFieldUpdateOperationsInput | string
    lastLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAltitude?: NullableFloatFieldUpdateOperationsInput | number | null
    battery?: NullableFloatFieldUpdateOperationsInput | number | null
    droneMode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneWithoutDronesNestedInput
    flightHistory?: DroneFlightHistoryUpdateManyWithoutDroneNestedInput
  }

  export type DroneOSUncheckedUpdateInput = {
    droneId?: NullableStringFieldUpdateOperationsInput | string | null
    droneOSName?: StringFieldUpdateOperationsInput | string
    droneType?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    gpsFix?: StringFieldUpdateOperationsInput | string
    minHDOP?: FloatFieldUpdateOperationsInput | number
    minSatCount?: IntFieldUpdateOperationsInput | number
    maxWindSpeed?: FloatFieldUpdateOperationsInput | number
    droneSpeed?: FloatFieldUpdateOperationsInput | number
    targetAltitude?: FloatFieldUpdateOperationsInput | number
    gpsLost?: StringFieldUpdateOperationsInput | string
    telemetryLost?: StringFieldUpdateOperationsInput | string
    minBatteryLevel?: FloatFieldUpdateOperationsInput | number
    usbAddress?: StringFieldUpdateOperationsInput | string
    batteryFailSafe?: StringFieldUpdateOperationsInput | string
    gpsName?: StringFieldUpdateOperationsInput | string
    maxAltitude?: FloatFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    addedBy?: StringFieldUpdateOperationsInput | string
    lastLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAltitude?: NullableFloatFieldUpdateOperationsInput | number | null
    battery?: NullableFloatFieldUpdateOperationsInput | number | null
    droneMode?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightHistory?: DroneFlightHistoryUncheckedUpdateManyWithoutDroneNestedInput
  }

  export type DroneOSCreateManyInput = {
    id?: string
    droneId?: string | null
    droneOSName: string
    droneType: string
    videoLink?: string | null
    gpsFix: string
    minHDOP: number
    minSatCount: number
    maxWindSpeed: number
    droneSpeed: number
    targetAltitude: number
    gpsLost: string
    telemetryLost: string
    minBatteryLevel: number
    usbAddress: string
    batteryFailSafe: string
    gpsName: string
    maxAltitude: number
    latitude?: number | null
    longitude?: number | null
    addedBy?: string
    lastLatitude?: number | null
    lastLongitude?: number | null
    lastAltitude?: number | null
    battery?: number | null
    droneMode?: string | null
    areaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DroneOSUpdateManyMutationInput = {
    droneId?: NullableStringFieldUpdateOperationsInput | string | null
    droneOSName?: StringFieldUpdateOperationsInput | string
    droneType?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    gpsFix?: StringFieldUpdateOperationsInput | string
    minHDOP?: FloatFieldUpdateOperationsInput | number
    minSatCount?: IntFieldUpdateOperationsInput | number
    maxWindSpeed?: FloatFieldUpdateOperationsInput | number
    droneSpeed?: FloatFieldUpdateOperationsInput | number
    targetAltitude?: FloatFieldUpdateOperationsInput | number
    gpsLost?: StringFieldUpdateOperationsInput | string
    telemetryLost?: StringFieldUpdateOperationsInput | string
    minBatteryLevel?: FloatFieldUpdateOperationsInput | number
    usbAddress?: StringFieldUpdateOperationsInput | string
    batteryFailSafe?: StringFieldUpdateOperationsInput | string
    gpsName?: StringFieldUpdateOperationsInput | string
    maxAltitude?: FloatFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    addedBy?: StringFieldUpdateOperationsInput | string
    lastLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAltitude?: NullableFloatFieldUpdateOperationsInput | number | null
    battery?: NullableFloatFieldUpdateOperationsInput | number | null
    droneMode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DroneOSUncheckedUpdateManyInput = {
    droneId?: NullableStringFieldUpdateOperationsInput | string | null
    droneOSName?: StringFieldUpdateOperationsInput | string
    droneType?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    gpsFix?: StringFieldUpdateOperationsInput | string
    minHDOP?: FloatFieldUpdateOperationsInput | number
    minSatCount?: IntFieldUpdateOperationsInput | number
    maxWindSpeed?: FloatFieldUpdateOperationsInput | number
    droneSpeed?: FloatFieldUpdateOperationsInput | number
    targetAltitude?: FloatFieldUpdateOperationsInput | number
    gpsLost?: StringFieldUpdateOperationsInput | string
    telemetryLost?: StringFieldUpdateOperationsInput | string
    minBatteryLevel?: FloatFieldUpdateOperationsInput | number
    usbAddress?: StringFieldUpdateOperationsInput | string
    batteryFailSafe?: StringFieldUpdateOperationsInput | string
    gpsName?: StringFieldUpdateOperationsInput | string
    maxAltitude?: FloatFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    addedBy?: StringFieldUpdateOperationsInput | string
    lastLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAltitude?: NullableFloatFieldUpdateOperationsInput | number | null
    battery?: NullableFloatFieldUpdateOperationsInput | number | null
    droneMode?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlarmCreateInput = {
    id?: string
    alarmId: string
    name: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    area?: AreaCreateNestedOneWithoutAlarmsInput
    sensors?: SensorCreateNestedManyWithoutAlarmInput
  }

  export type AlarmUncheckedCreateInput = {
    id?: string
    alarmId: string
    name: string
    status?: string
    areaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sensors?: SensorUncheckedCreateNestedManyWithoutAlarmInput
  }

  export type AlarmUpdateInput = {
    alarmId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneWithoutAlarmsNestedInput
    sensors?: SensorUpdateManyWithoutAlarmNestedInput
  }

  export type AlarmUncheckedUpdateInput = {
    alarmId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensors?: SensorUncheckedUpdateManyWithoutAlarmNestedInput
  }

  export type AlarmCreateManyInput = {
    id?: string
    alarmId: string
    name: string
    status?: string
    areaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlarmUpdateManyMutationInput = {
    alarmId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlarmUncheckedUpdateManyInput = {
    alarmId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateInput = {
    id?: string
    sensorId: string
    type: string
    message: string
    time: string
    timestamp?: Date | string
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    decidedAt?: Date | string | null
    decision?: string | null
    metadata?: InputJsonValue | null
    sensor: SensorCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateInput = {
    id?: string
    sensorDbId: string
    sensorId: string
    type: string
    message: string
    time: string
    timestamp?: Date | string
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    decidedAt?: Date | string | null
    decision?: string | null
    metadata?: InputJsonValue | null
  }

  export type AlertUpdateInput = {
    sensorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decision?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: InputJsonValue | InputJsonValue | null
    sensor?: SensorUpdateOneRequiredWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateInput = {
    sensorDbId?: StringFieldUpdateOperationsInput | string
    sensorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decision?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: InputJsonValue | InputJsonValue | null
  }

  export type AlertCreateManyInput = {
    id?: string
    sensorDbId: string
    sensorId: string
    type: string
    message: string
    time: string
    timestamp?: Date | string
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    decidedAt?: Date | string | null
    decision?: string | null
    metadata?: InputJsonValue | null
  }

  export type AlertUpdateManyMutationInput = {
    sensorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decision?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: InputJsonValue | InputJsonValue | null
  }

  export type AlertUncheckedUpdateManyInput = {
    sensorDbId?: StringFieldUpdateOperationsInput | string
    sensorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decision?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: InputJsonValue | InputJsonValue | null
  }

  export type DroneFlightHistoryCreateInput = {
    id?: string
    sensorId?: string | null
    alertId?: string | null
    dispatchedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    drone: DroneOSCreateNestedOneWithoutFlightHistoryInput
  }

  export type DroneFlightHistoryUncheckedCreateInput = {
    id?: string
    droneDbId: string
    sensorId?: string | null
    alertId?: string | null
    dispatchedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DroneFlightHistoryUpdateInput = {
    sensorId?: NullableStringFieldUpdateOperationsInput | string | null
    alertId?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drone?: DroneOSUpdateOneRequiredWithoutFlightHistoryNestedInput
  }

  export type DroneFlightHistoryUncheckedUpdateInput = {
    droneDbId?: StringFieldUpdateOperationsInput | string
    sensorId?: NullableStringFieldUpdateOperationsInput | string | null
    alertId?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DroneFlightHistoryCreateManyInput = {
    id?: string
    droneDbId: string
    sensorId?: string | null
    alertId?: string | null
    dispatchedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DroneFlightHistoryUpdateManyMutationInput = {
    sensorId?: NullableStringFieldUpdateOperationsInput | string | null
    alertId?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DroneFlightHistoryUncheckedUpdateManyInput = {
    droneDbId?: StringFieldUpdateOperationsInput | string
    sensorId?: NullableStringFieldUpdateOperationsInput | string | null
    alertId?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfflineMapCreateInput = {
    id?: string
    name: string
    description?: string | null
    tileRoot: string
    minZoom: number
    maxZoom: number
    north: number
    south: number
    east: number
    west: number
    isActive?: boolean
    downloadStatus?: string
    downloadProgress?: number
    downloadError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfflineMapUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    tileRoot: string
    minZoom: number
    maxZoom: number
    north: number
    south: number
    east: number
    west: number
    isActive?: boolean
    downloadStatus?: string
    downloadProgress?: number
    downloadError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfflineMapUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tileRoot?: StringFieldUpdateOperationsInput | string
    minZoom?: IntFieldUpdateOperationsInput | number
    maxZoom?: IntFieldUpdateOperationsInput | number
    north?: FloatFieldUpdateOperationsInput | number
    south?: FloatFieldUpdateOperationsInput | number
    east?: FloatFieldUpdateOperationsInput | number
    west?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    downloadStatus?: StringFieldUpdateOperationsInput | string
    downloadProgress?: IntFieldUpdateOperationsInput | number
    downloadError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfflineMapUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tileRoot?: StringFieldUpdateOperationsInput | string
    minZoom?: IntFieldUpdateOperationsInput | number
    maxZoom?: IntFieldUpdateOperationsInput | number
    north?: FloatFieldUpdateOperationsInput | number
    south?: FloatFieldUpdateOperationsInput | number
    east?: FloatFieldUpdateOperationsInput | number
    west?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    downloadStatus?: StringFieldUpdateOperationsInput | string
    downloadProgress?: IntFieldUpdateOperationsInput | number
    downloadError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfflineMapCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    tileRoot: string
    minZoom: number
    maxZoom: number
    north: number
    south: number
    east: number
    west: number
    isActive?: boolean
    downloadStatus?: string
    downloadProgress?: number
    downloadError?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OfflineMapUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tileRoot?: StringFieldUpdateOperationsInput | string
    minZoom?: IntFieldUpdateOperationsInput | number
    maxZoom?: IntFieldUpdateOperationsInput | number
    north?: FloatFieldUpdateOperationsInput | number
    south?: FloatFieldUpdateOperationsInput | number
    east?: FloatFieldUpdateOperationsInput | number
    west?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    downloadStatus?: StringFieldUpdateOperationsInput | string
    downloadProgress?: IntFieldUpdateOperationsInput | number
    downloadError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfflineMapUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tileRoot?: StringFieldUpdateOperationsInput | string
    minZoom?: IntFieldUpdateOperationsInput | number
    maxZoom?: IntFieldUpdateOperationsInput | number
    north?: FloatFieldUpdateOperationsInput | number
    south?: FloatFieldUpdateOperationsInput | number
    east?: FloatFieldUpdateOperationsInput | number
    west?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    downloadStatus?: StringFieldUpdateOperationsInput | string
    downloadProgress?: IntFieldUpdateOperationsInput | number
    downloadError?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SensorListRelationFilter = {
    every?: SensorWhereInput
    some?: SensorWhereInput
    none?: SensorWhereInput
  }

  export type AlarmListRelationFilter = {
    every?: AlarmWhereInput
    some?: AlarmWhereInput
    none?: AlarmWhereInput
  }

  export type DroneOSListRelationFilter = {
    every?: DroneOSWhereInput
    some?: DroneOSWhereInput
    none?: DroneOSWhereInput
  }

  export type SensorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlarmOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DroneOSOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AreaCountOrderByAggregateInput = {
    id?: SortOrder
    areaId?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addedBy?: SortOrder
  }

  export type AreaAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type AreaMaxOrderByAggregateInput = {
    id?: SortOrder
    areaId?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addedBy?: SortOrder
  }

  export type AreaMinOrderByAggregateInput = {
    id?: SortOrder
    areaId?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    addedBy?: SortOrder
  }

  export type AreaSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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
    isSet?: boolean
  }

  export type AreaNullableScalarRelationFilter = {
    is?: AreaWhereInput | null
    isNot?: AreaWhereInput | null
  }

  export type AlarmNullableScalarRelationFilter = {
    is?: AlarmWhereInput | null
    isNot?: AlarmWhereInput | null
  }

  export type AlertListRelationFilter = {
    every?: AlertWhereInput
    some?: AlertWhereInput
    none?: AlertWhereInput
  }

  export type AlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SensorCountOrderByAggregateInput = {
    id?: SortOrder
    sensorId?: SortOrder
    name?: SortOrder
    sensorType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    ipAddress?: SortOrder
    rtspUrl?: SortOrder
    battery?: SortOrder
    status?: SortOrder
    sendDrone?: SortOrder
    activeShuruMode?: SortOrder
    areaId?: SortOrder
    alarmId?: SortOrder
    addedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SensorAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type SensorMaxOrderByAggregateInput = {
    id?: SortOrder
    sensorId?: SortOrder
    name?: SortOrder
    sensorType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    ipAddress?: SortOrder
    rtspUrl?: SortOrder
    battery?: SortOrder
    status?: SortOrder
    sendDrone?: SortOrder
    activeShuruMode?: SortOrder
    areaId?: SortOrder
    alarmId?: SortOrder
    addedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SensorMinOrderByAggregateInput = {
    id?: SortOrder
    sensorId?: SortOrder
    name?: SortOrder
    sensorType?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    ipAddress?: SortOrder
    rtspUrl?: SortOrder
    battery?: SortOrder
    status?: SortOrder
    sendDrone?: SortOrder
    activeShuruMode?: SortOrder
    areaId?: SortOrder
    alarmId?: SortOrder
    addedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SensorSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
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
    isSet?: boolean
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type DroneFlightHistoryListRelationFilter = {
    every?: DroneFlightHistoryWhereInput
    some?: DroneFlightHistoryWhereInput
    none?: DroneFlightHistoryWhereInput
  }

  export type DroneFlightHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DroneOSCountOrderByAggregateInput = {
    id?: SortOrder
    droneId?: SortOrder
    droneOSName?: SortOrder
    droneType?: SortOrder
    videoLink?: SortOrder
    gpsFix?: SortOrder
    minHDOP?: SortOrder
    minSatCount?: SortOrder
    maxWindSpeed?: SortOrder
    droneSpeed?: SortOrder
    targetAltitude?: SortOrder
    gpsLost?: SortOrder
    telemetryLost?: SortOrder
    minBatteryLevel?: SortOrder
    usbAddress?: SortOrder
    batteryFailSafe?: SortOrder
    gpsName?: SortOrder
    maxAltitude?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    addedBy?: SortOrder
    lastLatitude?: SortOrder
    lastLongitude?: SortOrder
    lastAltitude?: SortOrder
    battery?: SortOrder
    droneMode?: SortOrder
    areaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DroneOSAvgOrderByAggregateInput = {
    minHDOP?: SortOrder
    minSatCount?: SortOrder
    maxWindSpeed?: SortOrder
    droneSpeed?: SortOrder
    targetAltitude?: SortOrder
    minBatteryLevel?: SortOrder
    maxAltitude?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    lastLatitude?: SortOrder
    lastLongitude?: SortOrder
    lastAltitude?: SortOrder
    battery?: SortOrder
  }

  export type DroneOSMaxOrderByAggregateInput = {
    id?: SortOrder
    droneId?: SortOrder
    droneOSName?: SortOrder
    droneType?: SortOrder
    videoLink?: SortOrder
    gpsFix?: SortOrder
    minHDOP?: SortOrder
    minSatCount?: SortOrder
    maxWindSpeed?: SortOrder
    droneSpeed?: SortOrder
    targetAltitude?: SortOrder
    gpsLost?: SortOrder
    telemetryLost?: SortOrder
    minBatteryLevel?: SortOrder
    usbAddress?: SortOrder
    batteryFailSafe?: SortOrder
    gpsName?: SortOrder
    maxAltitude?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    addedBy?: SortOrder
    lastLatitude?: SortOrder
    lastLongitude?: SortOrder
    lastAltitude?: SortOrder
    battery?: SortOrder
    droneMode?: SortOrder
    areaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DroneOSMinOrderByAggregateInput = {
    id?: SortOrder
    droneId?: SortOrder
    droneOSName?: SortOrder
    droneType?: SortOrder
    videoLink?: SortOrder
    gpsFix?: SortOrder
    minHDOP?: SortOrder
    minSatCount?: SortOrder
    maxWindSpeed?: SortOrder
    droneSpeed?: SortOrder
    targetAltitude?: SortOrder
    gpsLost?: SortOrder
    telemetryLost?: SortOrder
    minBatteryLevel?: SortOrder
    usbAddress?: SortOrder
    batteryFailSafe?: SortOrder
    gpsName?: SortOrder
    maxAltitude?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    addedBy?: SortOrder
    lastLatitude?: SortOrder
    lastLongitude?: SortOrder
    lastAltitude?: SortOrder
    battery?: SortOrder
    droneMode?: SortOrder
    areaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DroneOSSumOrderByAggregateInput = {
    minHDOP?: SortOrder
    minSatCount?: SortOrder
    maxWindSpeed?: SortOrder
    droneSpeed?: SortOrder
    targetAltitude?: SortOrder
    minBatteryLevel?: SortOrder
    maxAltitude?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    lastLatitude?: SortOrder
    lastLongitude?: SortOrder
    lastAltitude?: SortOrder
    battery?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type AlarmCountOrderByAggregateInput = {
    id?: SortOrder
    alarmId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    areaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlarmMaxOrderByAggregateInput = {
    id?: SortOrder
    alarmId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    areaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlarmMinOrderByAggregateInput = {
    id?: SortOrder
    alarmId?: SortOrder
    name?: SortOrder
    status?: SortOrder
    areaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAlertStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | EnumAlertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertStatusFilter<$PrismaModel> | $Enums.AlertStatus
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
    isSet?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type SensorScalarRelationFilter = {
    is?: SensorWhereInput
    isNot?: SensorWhereInput
  }

  export type AlertCountOrderByAggregateInput = {
    id?: SortOrder
    sensorDbId?: SortOrder
    sensorId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    time?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    decidedAt?: SortOrder
    decision?: SortOrder
    metadata?: SortOrder
  }

  export type AlertMaxOrderByAggregateInput = {
    id?: SortOrder
    sensorDbId?: SortOrder
    sensorId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    time?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    decidedAt?: SortOrder
    decision?: SortOrder
  }

  export type AlertMinOrderByAggregateInput = {
    id?: SortOrder
    sensorDbId?: SortOrder
    sensorId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    time?: SortOrder
    timestamp?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    decidedAt?: SortOrder
    decision?: SortOrder
  }

  export type EnumAlertStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | EnumAlertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertStatusWithAggregatesFilter<$PrismaModel> | $Enums.AlertStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertStatusFilter<$PrismaModel>
    _max?: NestedEnumAlertStatusFilter<$PrismaModel>
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
    isSet?: boolean
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DroneOSScalarRelationFilter = {
    is?: DroneOSWhereInput
    isNot?: DroneOSWhereInput
  }

  export type DroneFlightHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    droneDbId?: SortOrder
    sensorId?: SortOrder
    alertId?: SortOrder
    dispatchedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DroneFlightHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    droneDbId?: SortOrder
    sensorId?: SortOrder
    alertId?: SortOrder
    dispatchedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DroneFlightHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    droneDbId?: SortOrder
    sensorId?: SortOrder
    alertId?: SortOrder
    dispatchedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfflineMapCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    tileRoot?: SortOrder
    minZoom?: SortOrder
    maxZoom?: SortOrder
    north?: SortOrder
    south?: SortOrder
    east?: SortOrder
    west?: SortOrder
    isActive?: SortOrder
    downloadStatus?: SortOrder
    downloadProgress?: SortOrder
    downloadError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfflineMapAvgOrderByAggregateInput = {
    minZoom?: SortOrder
    maxZoom?: SortOrder
    north?: SortOrder
    south?: SortOrder
    east?: SortOrder
    west?: SortOrder
    downloadProgress?: SortOrder
  }

  export type OfflineMapMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    tileRoot?: SortOrder
    minZoom?: SortOrder
    maxZoom?: SortOrder
    north?: SortOrder
    south?: SortOrder
    east?: SortOrder
    west?: SortOrder
    isActive?: SortOrder
    downloadStatus?: SortOrder
    downloadProgress?: SortOrder
    downloadError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfflineMapMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    tileRoot?: SortOrder
    minZoom?: SortOrder
    maxZoom?: SortOrder
    north?: SortOrder
    south?: SortOrder
    east?: SortOrder
    west?: SortOrder
    isActive?: SortOrder
    downloadStatus?: SortOrder
    downloadProgress?: SortOrder
    downloadError?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OfflineMapSumOrderByAggregateInput = {
    minZoom?: SortOrder
    maxZoom?: SortOrder
    north?: SortOrder
    south?: SortOrder
    east?: SortOrder
    west?: SortOrder
    downloadProgress?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SensorCreateNestedManyWithoutAreaInput = {
    create?: XOR<SensorCreateWithoutAreaInput, SensorUncheckedCreateWithoutAreaInput> | SensorCreateWithoutAreaInput[] | SensorUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutAreaInput | SensorCreateOrConnectWithoutAreaInput[]
    createMany?: SensorCreateManyAreaInputEnvelope
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
  }

  export type AlarmCreateNestedManyWithoutAreaInput = {
    create?: XOR<AlarmCreateWithoutAreaInput, AlarmUncheckedCreateWithoutAreaInput> | AlarmCreateWithoutAreaInput[] | AlarmUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: AlarmCreateOrConnectWithoutAreaInput | AlarmCreateOrConnectWithoutAreaInput[]
    createMany?: AlarmCreateManyAreaInputEnvelope
    connect?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
  }

  export type DroneOSCreateNestedManyWithoutAreaInput = {
    create?: XOR<DroneOSCreateWithoutAreaInput, DroneOSUncheckedCreateWithoutAreaInput> | DroneOSCreateWithoutAreaInput[] | DroneOSUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: DroneOSCreateOrConnectWithoutAreaInput | DroneOSCreateOrConnectWithoutAreaInput[]
    createMany?: DroneOSCreateManyAreaInputEnvelope
    connect?: DroneOSWhereUniqueInput | DroneOSWhereUniqueInput[]
  }

  export type SensorUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<SensorCreateWithoutAreaInput, SensorUncheckedCreateWithoutAreaInput> | SensorCreateWithoutAreaInput[] | SensorUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutAreaInput | SensorCreateOrConnectWithoutAreaInput[]
    createMany?: SensorCreateManyAreaInputEnvelope
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
  }

  export type AlarmUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<AlarmCreateWithoutAreaInput, AlarmUncheckedCreateWithoutAreaInput> | AlarmCreateWithoutAreaInput[] | AlarmUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: AlarmCreateOrConnectWithoutAreaInput | AlarmCreateOrConnectWithoutAreaInput[]
    createMany?: AlarmCreateManyAreaInputEnvelope
    connect?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
  }

  export type DroneOSUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<DroneOSCreateWithoutAreaInput, DroneOSUncheckedCreateWithoutAreaInput> | DroneOSCreateWithoutAreaInput[] | DroneOSUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: DroneOSCreateOrConnectWithoutAreaInput | DroneOSCreateOrConnectWithoutAreaInput[]
    createMany?: DroneOSCreateManyAreaInputEnvelope
    connect?: DroneOSWhereUniqueInput | DroneOSWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SensorUpdateManyWithoutAreaNestedInput = {
    create?: XOR<SensorCreateWithoutAreaInput, SensorUncheckedCreateWithoutAreaInput> | SensorCreateWithoutAreaInput[] | SensorUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutAreaInput | SensorCreateOrConnectWithoutAreaInput[]
    upsert?: SensorUpsertWithWhereUniqueWithoutAreaInput | SensorUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: SensorCreateManyAreaInputEnvelope
    set?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    disconnect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    delete?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    update?: SensorUpdateWithWhereUniqueWithoutAreaInput | SensorUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: SensorUpdateManyWithWhereWithoutAreaInput | SensorUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: SensorScalarWhereInput | SensorScalarWhereInput[]
  }

  export type AlarmUpdateManyWithoutAreaNestedInput = {
    create?: XOR<AlarmCreateWithoutAreaInput, AlarmUncheckedCreateWithoutAreaInput> | AlarmCreateWithoutAreaInput[] | AlarmUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: AlarmCreateOrConnectWithoutAreaInput | AlarmCreateOrConnectWithoutAreaInput[]
    upsert?: AlarmUpsertWithWhereUniqueWithoutAreaInput | AlarmUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: AlarmCreateManyAreaInputEnvelope
    set?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    disconnect?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    delete?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    connect?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    update?: AlarmUpdateWithWhereUniqueWithoutAreaInput | AlarmUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: AlarmUpdateManyWithWhereWithoutAreaInput | AlarmUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: AlarmScalarWhereInput | AlarmScalarWhereInput[]
  }

  export type DroneOSUpdateManyWithoutAreaNestedInput = {
    create?: XOR<DroneOSCreateWithoutAreaInput, DroneOSUncheckedCreateWithoutAreaInput> | DroneOSCreateWithoutAreaInput[] | DroneOSUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: DroneOSCreateOrConnectWithoutAreaInput | DroneOSCreateOrConnectWithoutAreaInput[]
    upsert?: DroneOSUpsertWithWhereUniqueWithoutAreaInput | DroneOSUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: DroneOSCreateManyAreaInputEnvelope
    set?: DroneOSWhereUniqueInput | DroneOSWhereUniqueInput[]
    disconnect?: DroneOSWhereUniqueInput | DroneOSWhereUniqueInput[]
    delete?: DroneOSWhereUniqueInput | DroneOSWhereUniqueInput[]
    connect?: DroneOSWhereUniqueInput | DroneOSWhereUniqueInput[]
    update?: DroneOSUpdateWithWhereUniqueWithoutAreaInput | DroneOSUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: DroneOSUpdateManyWithWhereWithoutAreaInput | DroneOSUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: DroneOSScalarWhereInput | DroneOSScalarWhereInput[]
  }

  export type SensorUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<SensorCreateWithoutAreaInput, SensorUncheckedCreateWithoutAreaInput> | SensorCreateWithoutAreaInput[] | SensorUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutAreaInput | SensorCreateOrConnectWithoutAreaInput[]
    upsert?: SensorUpsertWithWhereUniqueWithoutAreaInput | SensorUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: SensorCreateManyAreaInputEnvelope
    set?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    disconnect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    delete?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    update?: SensorUpdateWithWhereUniqueWithoutAreaInput | SensorUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: SensorUpdateManyWithWhereWithoutAreaInput | SensorUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: SensorScalarWhereInput | SensorScalarWhereInput[]
  }

  export type AlarmUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<AlarmCreateWithoutAreaInput, AlarmUncheckedCreateWithoutAreaInput> | AlarmCreateWithoutAreaInput[] | AlarmUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: AlarmCreateOrConnectWithoutAreaInput | AlarmCreateOrConnectWithoutAreaInput[]
    upsert?: AlarmUpsertWithWhereUniqueWithoutAreaInput | AlarmUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: AlarmCreateManyAreaInputEnvelope
    set?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    disconnect?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    delete?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    connect?: AlarmWhereUniqueInput | AlarmWhereUniqueInput[]
    update?: AlarmUpdateWithWhereUniqueWithoutAreaInput | AlarmUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: AlarmUpdateManyWithWhereWithoutAreaInput | AlarmUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: AlarmScalarWhereInput | AlarmScalarWhereInput[]
  }

  export type DroneOSUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<DroneOSCreateWithoutAreaInput, DroneOSUncheckedCreateWithoutAreaInput> | DroneOSCreateWithoutAreaInput[] | DroneOSUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: DroneOSCreateOrConnectWithoutAreaInput | DroneOSCreateOrConnectWithoutAreaInput[]
    upsert?: DroneOSUpsertWithWhereUniqueWithoutAreaInput | DroneOSUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: DroneOSCreateManyAreaInputEnvelope
    set?: DroneOSWhereUniqueInput | DroneOSWhereUniqueInput[]
    disconnect?: DroneOSWhereUniqueInput | DroneOSWhereUniqueInput[]
    delete?: DroneOSWhereUniqueInput | DroneOSWhereUniqueInput[]
    connect?: DroneOSWhereUniqueInput | DroneOSWhereUniqueInput[]
    update?: DroneOSUpdateWithWhereUniqueWithoutAreaInput | DroneOSUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: DroneOSUpdateManyWithWhereWithoutAreaInput | DroneOSUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: DroneOSScalarWhereInput | DroneOSScalarWhereInput[]
  }

  export type AreaCreateNestedOneWithoutSensorsInput = {
    create?: XOR<AreaCreateWithoutSensorsInput, AreaUncheckedCreateWithoutSensorsInput>
    connectOrCreate?: AreaCreateOrConnectWithoutSensorsInput
    connect?: AreaWhereUniqueInput
  }

  export type AlarmCreateNestedOneWithoutSensorsInput = {
    create?: XOR<AlarmCreateWithoutSensorsInput, AlarmUncheckedCreateWithoutSensorsInput>
    connectOrCreate?: AlarmCreateOrConnectWithoutSensorsInput
    connect?: AlarmWhereUniqueInput
  }

  export type AlertCreateNestedManyWithoutSensorInput = {
    create?: XOR<AlertCreateWithoutSensorInput, AlertUncheckedCreateWithoutSensorInput> | AlertCreateWithoutSensorInput[] | AlertUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSensorInput | AlertCreateOrConnectWithoutSensorInput[]
    createMany?: AlertCreateManySensorInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutSensorInput = {
    create?: XOR<AlertCreateWithoutSensorInput, AlertUncheckedCreateWithoutSensorInput> | AlertCreateWithoutSensorInput[] | AlertUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSensorInput | AlertCreateOrConnectWithoutSensorInput[]
    createMany?: AlertCreateManySensorInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type AreaUpdateOneWithoutSensorsNestedInput = {
    create?: XOR<AreaCreateWithoutSensorsInput, AreaUncheckedCreateWithoutSensorsInput>
    connectOrCreate?: AreaCreateOrConnectWithoutSensorsInput
    upsert?: AreaUpsertWithoutSensorsInput
    disconnect?: boolean
    delete?: AreaWhereInput | boolean
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutSensorsInput, AreaUpdateWithoutSensorsInput>, AreaUncheckedUpdateWithoutSensorsInput>
  }

  export type AlarmUpdateOneWithoutSensorsNestedInput = {
    create?: XOR<AlarmCreateWithoutSensorsInput, AlarmUncheckedCreateWithoutSensorsInput>
    connectOrCreate?: AlarmCreateOrConnectWithoutSensorsInput
    upsert?: AlarmUpsertWithoutSensorsInput
    disconnect?: boolean
    delete?: AlarmWhereInput | boolean
    connect?: AlarmWhereUniqueInput
    update?: XOR<XOR<AlarmUpdateToOneWithWhereWithoutSensorsInput, AlarmUpdateWithoutSensorsInput>, AlarmUncheckedUpdateWithoutSensorsInput>
  }

  export type AlertUpdateManyWithoutSensorNestedInput = {
    create?: XOR<AlertCreateWithoutSensorInput, AlertUncheckedCreateWithoutSensorInput> | AlertCreateWithoutSensorInput[] | AlertUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSensorInput | AlertCreateOrConnectWithoutSensorInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutSensorInput | AlertUpsertWithWhereUniqueWithoutSensorInput[]
    createMany?: AlertCreateManySensorInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutSensorInput | AlertUpdateWithWhereUniqueWithoutSensorInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutSensorInput | AlertUpdateManyWithWhereWithoutSensorInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutSensorNestedInput = {
    create?: XOR<AlertCreateWithoutSensorInput, AlertUncheckedCreateWithoutSensorInput> | AlertCreateWithoutSensorInput[] | AlertUncheckedCreateWithoutSensorInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutSensorInput | AlertCreateOrConnectWithoutSensorInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutSensorInput | AlertUpsertWithWhereUniqueWithoutSensorInput[]
    createMany?: AlertCreateManySensorInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutSensorInput | AlertUpdateWithWhereUniqueWithoutSensorInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutSensorInput | AlertUpdateManyWithWhereWithoutSensorInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type AreaCreateNestedOneWithoutDronesInput = {
    create?: XOR<AreaCreateWithoutDronesInput, AreaUncheckedCreateWithoutDronesInput>
    connectOrCreate?: AreaCreateOrConnectWithoutDronesInput
    connect?: AreaWhereUniqueInput
  }

  export type DroneFlightHistoryCreateNestedManyWithoutDroneInput = {
    create?: XOR<DroneFlightHistoryCreateWithoutDroneInput, DroneFlightHistoryUncheckedCreateWithoutDroneInput> | DroneFlightHistoryCreateWithoutDroneInput[] | DroneFlightHistoryUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: DroneFlightHistoryCreateOrConnectWithoutDroneInput | DroneFlightHistoryCreateOrConnectWithoutDroneInput[]
    createMany?: DroneFlightHistoryCreateManyDroneInputEnvelope
    connect?: DroneFlightHistoryWhereUniqueInput | DroneFlightHistoryWhereUniqueInput[]
  }

  export type DroneFlightHistoryUncheckedCreateNestedManyWithoutDroneInput = {
    create?: XOR<DroneFlightHistoryCreateWithoutDroneInput, DroneFlightHistoryUncheckedCreateWithoutDroneInput> | DroneFlightHistoryCreateWithoutDroneInput[] | DroneFlightHistoryUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: DroneFlightHistoryCreateOrConnectWithoutDroneInput | DroneFlightHistoryCreateOrConnectWithoutDroneInput[]
    createMany?: DroneFlightHistoryCreateManyDroneInputEnvelope
    connect?: DroneFlightHistoryWhereUniqueInput | DroneFlightHistoryWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type AreaUpdateOneWithoutDronesNestedInput = {
    create?: XOR<AreaCreateWithoutDronesInput, AreaUncheckedCreateWithoutDronesInput>
    connectOrCreate?: AreaCreateOrConnectWithoutDronesInput
    upsert?: AreaUpsertWithoutDronesInput
    disconnect?: boolean
    delete?: AreaWhereInput | boolean
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutDronesInput, AreaUpdateWithoutDronesInput>, AreaUncheckedUpdateWithoutDronesInput>
  }

  export type DroneFlightHistoryUpdateManyWithoutDroneNestedInput = {
    create?: XOR<DroneFlightHistoryCreateWithoutDroneInput, DroneFlightHistoryUncheckedCreateWithoutDroneInput> | DroneFlightHistoryCreateWithoutDroneInput[] | DroneFlightHistoryUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: DroneFlightHistoryCreateOrConnectWithoutDroneInput | DroneFlightHistoryCreateOrConnectWithoutDroneInput[]
    upsert?: DroneFlightHistoryUpsertWithWhereUniqueWithoutDroneInput | DroneFlightHistoryUpsertWithWhereUniqueWithoutDroneInput[]
    createMany?: DroneFlightHistoryCreateManyDroneInputEnvelope
    set?: DroneFlightHistoryWhereUniqueInput | DroneFlightHistoryWhereUniqueInput[]
    disconnect?: DroneFlightHistoryWhereUniqueInput | DroneFlightHistoryWhereUniqueInput[]
    delete?: DroneFlightHistoryWhereUniqueInput | DroneFlightHistoryWhereUniqueInput[]
    connect?: DroneFlightHistoryWhereUniqueInput | DroneFlightHistoryWhereUniqueInput[]
    update?: DroneFlightHistoryUpdateWithWhereUniqueWithoutDroneInput | DroneFlightHistoryUpdateWithWhereUniqueWithoutDroneInput[]
    updateMany?: DroneFlightHistoryUpdateManyWithWhereWithoutDroneInput | DroneFlightHistoryUpdateManyWithWhereWithoutDroneInput[]
    deleteMany?: DroneFlightHistoryScalarWhereInput | DroneFlightHistoryScalarWhereInput[]
  }

  export type DroneFlightHistoryUncheckedUpdateManyWithoutDroneNestedInput = {
    create?: XOR<DroneFlightHistoryCreateWithoutDroneInput, DroneFlightHistoryUncheckedCreateWithoutDroneInput> | DroneFlightHistoryCreateWithoutDroneInput[] | DroneFlightHistoryUncheckedCreateWithoutDroneInput[]
    connectOrCreate?: DroneFlightHistoryCreateOrConnectWithoutDroneInput | DroneFlightHistoryCreateOrConnectWithoutDroneInput[]
    upsert?: DroneFlightHistoryUpsertWithWhereUniqueWithoutDroneInput | DroneFlightHistoryUpsertWithWhereUniqueWithoutDroneInput[]
    createMany?: DroneFlightHistoryCreateManyDroneInputEnvelope
    set?: DroneFlightHistoryWhereUniqueInput | DroneFlightHistoryWhereUniqueInput[]
    disconnect?: DroneFlightHistoryWhereUniqueInput | DroneFlightHistoryWhereUniqueInput[]
    delete?: DroneFlightHistoryWhereUniqueInput | DroneFlightHistoryWhereUniqueInput[]
    connect?: DroneFlightHistoryWhereUniqueInput | DroneFlightHistoryWhereUniqueInput[]
    update?: DroneFlightHistoryUpdateWithWhereUniqueWithoutDroneInput | DroneFlightHistoryUpdateWithWhereUniqueWithoutDroneInput[]
    updateMany?: DroneFlightHistoryUpdateManyWithWhereWithoutDroneInput | DroneFlightHistoryUpdateManyWithWhereWithoutDroneInput[]
    deleteMany?: DroneFlightHistoryScalarWhereInput | DroneFlightHistoryScalarWhereInput[]
  }

  export type AreaCreateNestedOneWithoutAlarmsInput = {
    create?: XOR<AreaCreateWithoutAlarmsInput, AreaUncheckedCreateWithoutAlarmsInput>
    connectOrCreate?: AreaCreateOrConnectWithoutAlarmsInput
    connect?: AreaWhereUniqueInput
  }

  export type SensorCreateNestedManyWithoutAlarmInput = {
    create?: XOR<SensorCreateWithoutAlarmInput, SensorUncheckedCreateWithoutAlarmInput> | SensorCreateWithoutAlarmInput[] | SensorUncheckedCreateWithoutAlarmInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutAlarmInput | SensorCreateOrConnectWithoutAlarmInput[]
    createMany?: SensorCreateManyAlarmInputEnvelope
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
  }

  export type SensorUncheckedCreateNestedManyWithoutAlarmInput = {
    create?: XOR<SensorCreateWithoutAlarmInput, SensorUncheckedCreateWithoutAlarmInput> | SensorCreateWithoutAlarmInput[] | SensorUncheckedCreateWithoutAlarmInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutAlarmInput | SensorCreateOrConnectWithoutAlarmInput[]
    createMany?: SensorCreateManyAlarmInputEnvelope
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
  }

  export type AreaUpdateOneWithoutAlarmsNestedInput = {
    create?: XOR<AreaCreateWithoutAlarmsInput, AreaUncheckedCreateWithoutAlarmsInput>
    connectOrCreate?: AreaCreateOrConnectWithoutAlarmsInput
    upsert?: AreaUpsertWithoutAlarmsInput
    disconnect?: boolean
    delete?: AreaWhereInput | boolean
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutAlarmsInput, AreaUpdateWithoutAlarmsInput>, AreaUncheckedUpdateWithoutAlarmsInput>
  }

  export type SensorUpdateManyWithoutAlarmNestedInput = {
    create?: XOR<SensorCreateWithoutAlarmInput, SensorUncheckedCreateWithoutAlarmInput> | SensorCreateWithoutAlarmInput[] | SensorUncheckedCreateWithoutAlarmInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutAlarmInput | SensorCreateOrConnectWithoutAlarmInput[]
    upsert?: SensorUpsertWithWhereUniqueWithoutAlarmInput | SensorUpsertWithWhereUniqueWithoutAlarmInput[]
    createMany?: SensorCreateManyAlarmInputEnvelope
    set?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    disconnect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    delete?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    update?: SensorUpdateWithWhereUniqueWithoutAlarmInput | SensorUpdateWithWhereUniqueWithoutAlarmInput[]
    updateMany?: SensorUpdateManyWithWhereWithoutAlarmInput | SensorUpdateManyWithWhereWithoutAlarmInput[]
    deleteMany?: SensorScalarWhereInput | SensorScalarWhereInput[]
  }

  export type SensorUncheckedUpdateManyWithoutAlarmNestedInput = {
    create?: XOR<SensorCreateWithoutAlarmInput, SensorUncheckedCreateWithoutAlarmInput> | SensorCreateWithoutAlarmInput[] | SensorUncheckedCreateWithoutAlarmInput[]
    connectOrCreate?: SensorCreateOrConnectWithoutAlarmInput | SensorCreateOrConnectWithoutAlarmInput[]
    upsert?: SensorUpsertWithWhereUniqueWithoutAlarmInput | SensorUpsertWithWhereUniqueWithoutAlarmInput[]
    createMany?: SensorCreateManyAlarmInputEnvelope
    set?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    disconnect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    delete?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    connect?: SensorWhereUniqueInput | SensorWhereUniqueInput[]
    update?: SensorUpdateWithWhereUniqueWithoutAlarmInput | SensorUpdateWithWhereUniqueWithoutAlarmInput[]
    updateMany?: SensorUpdateManyWithWhereWithoutAlarmInput | SensorUpdateManyWithWhereWithoutAlarmInput[]
    deleteMany?: SensorScalarWhereInput | SensorScalarWhereInput[]
  }

  export type SensorCreateNestedOneWithoutAlertsInput = {
    create?: XOR<SensorCreateWithoutAlertsInput, SensorUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: SensorCreateOrConnectWithoutAlertsInput
    connect?: SensorWhereUniqueInput
  }

  export type EnumAlertStatusFieldUpdateOperationsInput = {
    set?: $Enums.AlertStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type SensorUpdateOneRequiredWithoutAlertsNestedInput = {
    create?: XOR<SensorCreateWithoutAlertsInput, SensorUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: SensorCreateOrConnectWithoutAlertsInput
    upsert?: SensorUpsertWithoutAlertsInput
    connect?: SensorWhereUniqueInput
    update?: XOR<XOR<SensorUpdateToOneWithWhereWithoutAlertsInput, SensorUpdateWithoutAlertsInput>, SensorUncheckedUpdateWithoutAlertsInput>
  }

  export type DroneOSCreateNestedOneWithoutFlightHistoryInput = {
    create?: XOR<DroneOSCreateWithoutFlightHistoryInput, DroneOSUncheckedCreateWithoutFlightHistoryInput>
    connectOrCreate?: DroneOSCreateOrConnectWithoutFlightHistoryInput
    connect?: DroneOSWhereUniqueInput
  }

  export type DroneOSUpdateOneRequiredWithoutFlightHistoryNestedInput = {
    create?: XOR<DroneOSCreateWithoutFlightHistoryInput, DroneOSUncheckedCreateWithoutFlightHistoryInput>
    connectOrCreate?: DroneOSCreateOrConnectWithoutFlightHistoryInput
    upsert?: DroneOSUpsertWithoutFlightHistoryInput
    connect?: DroneOSWhereUniqueInput
    update?: XOR<XOR<DroneOSUpdateToOneWithWhereWithoutFlightHistoryInput, DroneOSUpdateWithoutFlightHistoryInput>, DroneOSUncheckedUpdateWithoutFlightHistoryInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumAlertStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | EnumAlertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertStatusFilter<$PrismaModel> | $Enums.AlertStatus
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
    isSet?: boolean
  }

  export type NestedEnumAlertStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | EnumAlertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertStatusWithAggregatesFilter<$PrismaModel> | $Enums.AlertStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertStatusFilter<$PrismaModel>
    _max?: NestedEnumAlertStatusFilter<$PrismaModel>
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
    isSet?: boolean
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type SensorCreateWithoutAreaInput = {
    id?: string
    sensorId: string
    name: string
    sensorType: string
    latitude: number
    longitude: number
    ipAddress?: string | null
    rtspUrl?: string | null
    battery?: string | null
    status: string
    sendDrone?: string
    activeShuruMode: string
    addedBy?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    alarm?: AlarmCreateNestedOneWithoutSensorsInput
    alerts?: AlertCreateNestedManyWithoutSensorInput
  }

  export type SensorUncheckedCreateWithoutAreaInput = {
    id?: string
    sensorId: string
    name: string
    sensorType: string
    latitude: number
    longitude: number
    ipAddress?: string | null
    rtspUrl?: string | null
    battery?: string | null
    status: string
    sendDrone?: string
    activeShuruMode: string
    alarmId?: string | null
    addedBy?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    alerts?: AlertUncheckedCreateNestedManyWithoutSensorInput
  }

  export type SensorCreateOrConnectWithoutAreaInput = {
    where: SensorWhereUniqueInput
    create: XOR<SensorCreateWithoutAreaInput, SensorUncheckedCreateWithoutAreaInput>
  }

  export type SensorCreateManyAreaInputEnvelope = {
    data: SensorCreateManyAreaInput | SensorCreateManyAreaInput[]
  }

  export type AlarmCreateWithoutAreaInput = {
    id?: string
    alarmId: string
    name: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sensors?: SensorCreateNestedManyWithoutAlarmInput
  }

  export type AlarmUncheckedCreateWithoutAreaInput = {
    id?: string
    alarmId: string
    name: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sensors?: SensorUncheckedCreateNestedManyWithoutAlarmInput
  }

  export type AlarmCreateOrConnectWithoutAreaInput = {
    where: AlarmWhereUniqueInput
    create: XOR<AlarmCreateWithoutAreaInput, AlarmUncheckedCreateWithoutAreaInput>
  }

  export type AlarmCreateManyAreaInputEnvelope = {
    data: AlarmCreateManyAreaInput | AlarmCreateManyAreaInput[]
  }

  export type DroneOSCreateWithoutAreaInput = {
    id?: string
    droneId?: string | null
    droneOSName: string
    droneType: string
    videoLink?: string | null
    gpsFix: string
    minHDOP: number
    minSatCount: number
    maxWindSpeed: number
    droneSpeed: number
    targetAltitude: number
    gpsLost: string
    telemetryLost: string
    minBatteryLevel: number
    usbAddress: string
    batteryFailSafe: string
    gpsName: string
    maxAltitude: number
    latitude?: number | null
    longitude?: number | null
    addedBy?: string
    lastLatitude?: number | null
    lastLongitude?: number | null
    lastAltitude?: number | null
    battery?: number | null
    droneMode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flightHistory?: DroneFlightHistoryCreateNestedManyWithoutDroneInput
  }

  export type DroneOSUncheckedCreateWithoutAreaInput = {
    id?: string
    droneId?: string | null
    droneOSName: string
    droneType: string
    videoLink?: string | null
    gpsFix: string
    minHDOP: number
    minSatCount: number
    maxWindSpeed: number
    droneSpeed: number
    targetAltitude: number
    gpsLost: string
    telemetryLost: string
    minBatteryLevel: number
    usbAddress: string
    batteryFailSafe: string
    gpsName: string
    maxAltitude: number
    latitude?: number | null
    longitude?: number | null
    addedBy?: string
    lastLatitude?: number | null
    lastLongitude?: number | null
    lastAltitude?: number | null
    battery?: number | null
    droneMode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flightHistory?: DroneFlightHistoryUncheckedCreateNestedManyWithoutDroneInput
  }

  export type DroneOSCreateOrConnectWithoutAreaInput = {
    where: DroneOSWhereUniqueInput
    create: XOR<DroneOSCreateWithoutAreaInput, DroneOSUncheckedCreateWithoutAreaInput>
  }

  export type DroneOSCreateManyAreaInputEnvelope = {
    data: DroneOSCreateManyAreaInput | DroneOSCreateManyAreaInput[]
  }

  export type SensorUpsertWithWhereUniqueWithoutAreaInput = {
    where: SensorWhereUniqueInput
    update: XOR<SensorUpdateWithoutAreaInput, SensorUncheckedUpdateWithoutAreaInput>
    create: XOR<SensorCreateWithoutAreaInput, SensorUncheckedCreateWithoutAreaInput>
  }

  export type SensorUpdateWithWhereUniqueWithoutAreaInput = {
    where: SensorWhereUniqueInput
    data: XOR<SensorUpdateWithoutAreaInput, SensorUncheckedUpdateWithoutAreaInput>
  }

  export type SensorUpdateManyWithWhereWithoutAreaInput = {
    where: SensorScalarWhereInput
    data: XOR<SensorUpdateManyMutationInput, SensorUncheckedUpdateManyWithoutAreaInput>
  }

  export type SensorScalarWhereInput = {
    AND?: SensorScalarWhereInput | SensorScalarWhereInput[]
    OR?: SensorScalarWhereInput[]
    NOT?: SensorScalarWhereInput | SensorScalarWhereInput[]
    id?: StringFilter<"Sensor"> | string
    sensorId?: StringFilter<"Sensor"> | string
    name?: StringFilter<"Sensor"> | string
    sensorType?: StringFilter<"Sensor"> | string
    latitude?: FloatFilter<"Sensor"> | number
    longitude?: FloatFilter<"Sensor"> | number
    ipAddress?: StringNullableFilter<"Sensor"> | string | null
    rtspUrl?: StringNullableFilter<"Sensor"> | string | null
    battery?: StringNullableFilter<"Sensor"> | string | null
    status?: StringFilter<"Sensor"> | string
    sendDrone?: StringFilter<"Sensor"> | string
    activeShuruMode?: StringFilter<"Sensor"> | string
    areaId?: StringNullableFilter<"Sensor"> | string | null
    alarmId?: StringNullableFilter<"Sensor"> | string | null
    addedBy?: StringFilter<"Sensor"> | string
    createdAt?: DateTimeFilter<"Sensor"> | Date | string
    updatedAt?: DateTimeFilter<"Sensor"> | Date | string
  }

  export type AlarmUpsertWithWhereUniqueWithoutAreaInput = {
    where: AlarmWhereUniqueInput
    update: XOR<AlarmUpdateWithoutAreaInput, AlarmUncheckedUpdateWithoutAreaInput>
    create: XOR<AlarmCreateWithoutAreaInput, AlarmUncheckedCreateWithoutAreaInput>
  }

  export type AlarmUpdateWithWhereUniqueWithoutAreaInput = {
    where: AlarmWhereUniqueInput
    data: XOR<AlarmUpdateWithoutAreaInput, AlarmUncheckedUpdateWithoutAreaInput>
  }

  export type AlarmUpdateManyWithWhereWithoutAreaInput = {
    where: AlarmScalarWhereInput
    data: XOR<AlarmUpdateManyMutationInput, AlarmUncheckedUpdateManyWithoutAreaInput>
  }

  export type AlarmScalarWhereInput = {
    AND?: AlarmScalarWhereInput | AlarmScalarWhereInput[]
    OR?: AlarmScalarWhereInput[]
    NOT?: AlarmScalarWhereInput | AlarmScalarWhereInput[]
    id?: StringFilter<"Alarm"> | string
    alarmId?: StringFilter<"Alarm"> | string
    name?: StringFilter<"Alarm"> | string
    status?: StringFilter<"Alarm"> | string
    areaId?: StringNullableFilter<"Alarm"> | string | null
    createdAt?: DateTimeFilter<"Alarm"> | Date | string
    updatedAt?: DateTimeFilter<"Alarm"> | Date | string
  }

  export type DroneOSUpsertWithWhereUniqueWithoutAreaInput = {
    where: DroneOSWhereUniqueInput
    update: XOR<DroneOSUpdateWithoutAreaInput, DroneOSUncheckedUpdateWithoutAreaInput>
    create: XOR<DroneOSCreateWithoutAreaInput, DroneOSUncheckedCreateWithoutAreaInput>
  }

  export type DroneOSUpdateWithWhereUniqueWithoutAreaInput = {
    where: DroneOSWhereUniqueInput
    data: XOR<DroneOSUpdateWithoutAreaInput, DroneOSUncheckedUpdateWithoutAreaInput>
  }

  export type DroneOSUpdateManyWithWhereWithoutAreaInput = {
    where: DroneOSScalarWhereInput
    data: XOR<DroneOSUpdateManyMutationInput, DroneOSUncheckedUpdateManyWithoutAreaInput>
  }

  export type DroneOSScalarWhereInput = {
    AND?: DroneOSScalarWhereInput | DroneOSScalarWhereInput[]
    OR?: DroneOSScalarWhereInput[]
    NOT?: DroneOSScalarWhereInput | DroneOSScalarWhereInput[]
    id?: StringFilter<"DroneOS"> | string
    droneId?: StringNullableFilter<"DroneOS"> | string | null
    droneOSName?: StringFilter<"DroneOS"> | string
    droneType?: StringFilter<"DroneOS"> | string
    videoLink?: StringNullableFilter<"DroneOS"> | string | null
    gpsFix?: StringFilter<"DroneOS"> | string
    minHDOP?: FloatFilter<"DroneOS"> | number
    minSatCount?: IntFilter<"DroneOS"> | number
    maxWindSpeed?: FloatFilter<"DroneOS"> | number
    droneSpeed?: FloatFilter<"DroneOS"> | number
    targetAltitude?: FloatFilter<"DroneOS"> | number
    gpsLost?: StringFilter<"DroneOS"> | string
    telemetryLost?: StringFilter<"DroneOS"> | string
    minBatteryLevel?: FloatFilter<"DroneOS"> | number
    usbAddress?: StringFilter<"DroneOS"> | string
    batteryFailSafe?: StringFilter<"DroneOS"> | string
    gpsName?: StringFilter<"DroneOS"> | string
    maxAltitude?: FloatFilter<"DroneOS"> | number
    latitude?: FloatNullableFilter<"DroneOS"> | number | null
    longitude?: FloatNullableFilter<"DroneOS"> | number | null
    addedBy?: StringFilter<"DroneOS"> | string
    lastLatitude?: FloatNullableFilter<"DroneOS"> | number | null
    lastLongitude?: FloatNullableFilter<"DroneOS"> | number | null
    lastAltitude?: FloatNullableFilter<"DroneOS"> | number | null
    battery?: FloatNullableFilter<"DroneOS"> | number | null
    droneMode?: StringNullableFilter<"DroneOS"> | string | null
    areaId?: StringNullableFilter<"DroneOS"> | string | null
    createdAt?: DateTimeFilter<"DroneOS"> | Date | string
    updatedAt?: DateTimeFilter<"DroneOS"> | Date | string
  }

  export type AreaCreateWithoutSensorsInput = {
    id?: string
    areaId: string
    name: string
    latitude: number
    longitude: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addedBy?: string
    alarms?: AlarmCreateNestedManyWithoutAreaInput
    drones?: DroneOSCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutSensorsInput = {
    id?: string
    areaId: string
    name: string
    latitude: number
    longitude: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addedBy?: string
    alarms?: AlarmUncheckedCreateNestedManyWithoutAreaInput
    drones?: DroneOSUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutSensorsInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutSensorsInput, AreaUncheckedCreateWithoutSensorsInput>
  }

  export type AlarmCreateWithoutSensorsInput = {
    id?: string
    alarmId: string
    name: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    area?: AreaCreateNestedOneWithoutAlarmsInput
  }

  export type AlarmUncheckedCreateWithoutSensorsInput = {
    id?: string
    alarmId: string
    name: string
    status?: string
    areaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlarmCreateOrConnectWithoutSensorsInput = {
    where: AlarmWhereUniqueInput
    create: XOR<AlarmCreateWithoutSensorsInput, AlarmUncheckedCreateWithoutSensorsInput>
  }

  export type AlertCreateWithoutSensorInput = {
    id?: string
    sensorId: string
    type: string
    message: string
    time: string
    timestamp?: Date | string
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    decidedAt?: Date | string | null
    decision?: string | null
    metadata?: InputJsonValue | null
  }

  export type AlertUncheckedCreateWithoutSensorInput = {
    id?: string
    sensorId: string
    type: string
    message: string
    time: string
    timestamp?: Date | string
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    decidedAt?: Date | string | null
    decision?: string | null
    metadata?: InputJsonValue | null
  }

  export type AlertCreateOrConnectWithoutSensorInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutSensorInput, AlertUncheckedCreateWithoutSensorInput>
  }

  export type AlertCreateManySensorInputEnvelope = {
    data: AlertCreateManySensorInput | AlertCreateManySensorInput[]
  }

  export type AreaUpsertWithoutSensorsInput = {
    update: XOR<AreaUpdateWithoutSensorsInput, AreaUncheckedUpdateWithoutSensorsInput>
    create: XOR<AreaCreateWithoutSensorsInput, AreaUncheckedCreateWithoutSensorsInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutSensorsInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutSensorsInput, AreaUncheckedUpdateWithoutSensorsInput>
  }

  export type AreaUpdateWithoutSensorsInput = {
    areaId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedBy?: StringFieldUpdateOperationsInput | string
    alarms?: AlarmUpdateManyWithoutAreaNestedInput
    drones?: DroneOSUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutSensorsInput = {
    areaId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedBy?: StringFieldUpdateOperationsInput | string
    alarms?: AlarmUncheckedUpdateManyWithoutAreaNestedInput
    drones?: DroneOSUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AlarmUpsertWithoutSensorsInput = {
    update: XOR<AlarmUpdateWithoutSensorsInput, AlarmUncheckedUpdateWithoutSensorsInput>
    create: XOR<AlarmCreateWithoutSensorsInput, AlarmUncheckedCreateWithoutSensorsInput>
    where?: AlarmWhereInput
  }

  export type AlarmUpdateToOneWithWhereWithoutSensorsInput = {
    where?: AlarmWhereInput
    data: XOR<AlarmUpdateWithoutSensorsInput, AlarmUncheckedUpdateWithoutSensorsInput>
  }

  export type AlarmUpdateWithoutSensorsInput = {
    alarmId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneWithoutAlarmsNestedInput
  }

  export type AlarmUncheckedUpdateWithoutSensorsInput = {
    alarmId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUpsertWithWhereUniqueWithoutSensorInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutSensorInput, AlertUncheckedUpdateWithoutSensorInput>
    create: XOR<AlertCreateWithoutSensorInput, AlertUncheckedCreateWithoutSensorInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutSensorInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutSensorInput, AlertUncheckedUpdateWithoutSensorInput>
  }

  export type AlertUpdateManyWithWhereWithoutSensorInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutSensorInput>
  }

  export type AlertScalarWhereInput = {
    AND?: AlertScalarWhereInput | AlertScalarWhereInput[]
    OR?: AlertScalarWhereInput[]
    NOT?: AlertScalarWhereInput | AlertScalarWhereInput[]
    id?: StringFilter<"Alert"> | string
    sensorDbId?: StringFilter<"Alert"> | string
    sensorId?: StringFilter<"Alert"> | string
    type?: StringFilter<"Alert"> | string
    message?: StringFilter<"Alert"> | string
    time?: StringFilter<"Alert"> | string
    timestamp?: DateTimeFilter<"Alert"> | Date | string
    status?: EnumAlertStatusFilter<"Alert"> | $Enums.AlertStatus
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    decidedAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    decision?: StringNullableFilter<"Alert"> | string | null
    metadata?: JsonNullableFilter<"Alert">
  }

  export type AreaCreateWithoutDronesInput = {
    id?: string
    areaId: string
    name: string
    latitude: number
    longitude: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addedBy?: string
    sensors?: SensorCreateNestedManyWithoutAreaInput
    alarms?: AlarmCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutDronesInput = {
    id?: string
    areaId: string
    name: string
    latitude: number
    longitude: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addedBy?: string
    sensors?: SensorUncheckedCreateNestedManyWithoutAreaInput
    alarms?: AlarmUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutDronesInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutDronesInput, AreaUncheckedCreateWithoutDronesInput>
  }

  export type DroneFlightHistoryCreateWithoutDroneInput = {
    id?: string
    sensorId?: string | null
    alertId?: string | null
    dispatchedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DroneFlightHistoryUncheckedCreateWithoutDroneInput = {
    id?: string
    sensorId?: string | null
    alertId?: string | null
    dispatchedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DroneFlightHistoryCreateOrConnectWithoutDroneInput = {
    where: DroneFlightHistoryWhereUniqueInput
    create: XOR<DroneFlightHistoryCreateWithoutDroneInput, DroneFlightHistoryUncheckedCreateWithoutDroneInput>
  }

  export type DroneFlightHistoryCreateManyDroneInputEnvelope = {
    data: DroneFlightHistoryCreateManyDroneInput | DroneFlightHistoryCreateManyDroneInput[]
  }

  export type AreaUpsertWithoutDronesInput = {
    update: XOR<AreaUpdateWithoutDronesInput, AreaUncheckedUpdateWithoutDronesInput>
    create: XOR<AreaCreateWithoutDronesInput, AreaUncheckedCreateWithoutDronesInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutDronesInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutDronesInput, AreaUncheckedUpdateWithoutDronesInput>
  }

  export type AreaUpdateWithoutDronesInput = {
    areaId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedBy?: StringFieldUpdateOperationsInput | string
    sensors?: SensorUpdateManyWithoutAreaNestedInput
    alarms?: AlarmUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutDronesInput = {
    areaId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedBy?: StringFieldUpdateOperationsInput | string
    sensors?: SensorUncheckedUpdateManyWithoutAreaNestedInput
    alarms?: AlarmUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type DroneFlightHistoryUpsertWithWhereUniqueWithoutDroneInput = {
    where: DroneFlightHistoryWhereUniqueInput
    update: XOR<DroneFlightHistoryUpdateWithoutDroneInput, DroneFlightHistoryUncheckedUpdateWithoutDroneInput>
    create: XOR<DroneFlightHistoryCreateWithoutDroneInput, DroneFlightHistoryUncheckedCreateWithoutDroneInput>
  }

  export type DroneFlightHistoryUpdateWithWhereUniqueWithoutDroneInput = {
    where: DroneFlightHistoryWhereUniqueInput
    data: XOR<DroneFlightHistoryUpdateWithoutDroneInput, DroneFlightHistoryUncheckedUpdateWithoutDroneInput>
  }

  export type DroneFlightHistoryUpdateManyWithWhereWithoutDroneInput = {
    where: DroneFlightHistoryScalarWhereInput
    data: XOR<DroneFlightHistoryUpdateManyMutationInput, DroneFlightHistoryUncheckedUpdateManyWithoutDroneInput>
  }

  export type DroneFlightHistoryScalarWhereInput = {
    AND?: DroneFlightHistoryScalarWhereInput | DroneFlightHistoryScalarWhereInput[]
    OR?: DroneFlightHistoryScalarWhereInput[]
    NOT?: DroneFlightHistoryScalarWhereInput | DroneFlightHistoryScalarWhereInput[]
    id?: StringFilter<"DroneFlightHistory"> | string
    droneDbId?: StringFilter<"DroneFlightHistory"> | string
    sensorId?: StringNullableFilter<"DroneFlightHistory"> | string | null
    alertId?: StringNullableFilter<"DroneFlightHistory"> | string | null
    dispatchedAt?: DateTimeFilter<"DroneFlightHistory"> | Date | string
    createdAt?: DateTimeFilter<"DroneFlightHistory"> | Date | string
    updatedAt?: DateTimeFilter<"DroneFlightHistory"> | Date | string
  }

  export type AreaCreateWithoutAlarmsInput = {
    id?: string
    areaId: string
    name: string
    latitude: number
    longitude: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addedBy?: string
    sensors?: SensorCreateNestedManyWithoutAreaInput
    drones?: DroneOSCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutAlarmsInput = {
    id?: string
    areaId: string
    name: string
    latitude: number
    longitude: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    addedBy?: string
    sensors?: SensorUncheckedCreateNestedManyWithoutAreaInput
    drones?: DroneOSUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutAlarmsInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutAlarmsInput, AreaUncheckedCreateWithoutAlarmsInput>
  }

  export type SensorCreateWithoutAlarmInput = {
    id?: string
    sensorId: string
    name: string
    sensorType: string
    latitude: number
    longitude: number
    ipAddress?: string | null
    rtspUrl?: string | null
    battery?: string | null
    status: string
    sendDrone?: string
    activeShuruMode: string
    addedBy?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    area?: AreaCreateNestedOneWithoutSensorsInput
    alerts?: AlertCreateNestedManyWithoutSensorInput
  }

  export type SensorUncheckedCreateWithoutAlarmInput = {
    id?: string
    sensorId: string
    name: string
    sensorType: string
    latitude: number
    longitude: number
    ipAddress?: string | null
    rtspUrl?: string | null
    battery?: string | null
    status: string
    sendDrone?: string
    activeShuruMode: string
    areaId?: string | null
    addedBy?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    alerts?: AlertUncheckedCreateNestedManyWithoutSensorInput
  }

  export type SensorCreateOrConnectWithoutAlarmInput = {
    where: SensorWhereUniqueInput
    create: XOR<SensorCreateWithoutAlarmInput, SensorUncheckedCreateWithoutAlarmInput>
  }

  export type SensorCreateManyAlarmInputEnvelope = {
    data: SensorCreateManyAlarmInput | SensorCreateManyAlarmInput[]
  }

  export type AreaUpsertWithoutAlarmsInput = {
    update: XOR<AreaUpdateWithoutAlarmsInput, AreaUncheckedUpdateWithoutAlarmsInput>
    create: XOR<AreaCreateWithoutAlarmsInput, AreaUncheckedCreateWithoutAlarmsInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutAlarmsInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutAlarmsInput, AreaUncheckedUpdateWithoutAlarmsInput>
  }

  export type AreaUpdateWithoutAlarmsInput = {
    areaId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedBy?: StringFieldUpdateOperationsInput | string
    sensors?: SensorUpdateManyWithoutAreaNestedInput
    drones?: DroneOSUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutAlarmsInput = {
    areaId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    addedBy?: StringFieldUpdateOperationsInput | string
    sensors?: SensorUncheckedUpdateManyWithoutAreaNestedInput
    drones?: DroneOSUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type SensorUpsertWithWhereUniqueWithoutAlarmInput = {
    where: SensorWhereUniqueInput
    update: XOR<SensorUpdateWithoutAlarmInput, SensorUncheckedUpdateWithoutAlarmInput>
    create: XOR<SensorCreateWithoutAlarmInput, SensorUncheckedCreateWithoutAlarmInput>
  }

  export type SensorUpdateWithWhereUniqueWithoutAlarmInput = {
    where: SensorWhereUniqueInput
    data: XOR<SensorUpdateWithoutAlarmInput, SensorUncheckedUpdateWithoutAlarmInput>
  }

  export type SensorUpdateManyWithWhereWithoutAlarmInput = {
    where: SensorScalarWhereInput
    data: XOR<SensorUpdateManyMutationInput, SensorUncheckedUpdateManyWithoutAlarmInput>
  }

  export type SensorCreateWithoutAlertsInput = {
    id?: string
    sensorId: string
    name: string
    sensorType: string
    latitude: number
    longitude: number
    ipAddress?: string | null
    rtspUrl?: string | null
    battery?: string | null
    status: string
    sendDrone?: string
    activeShuruMode: string
    addedBy?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    area?: AreaCreateNestedOneWithoutSensorsInput
    alarm?: AlarmCreateNestedOneWithoutSensorsInput
  }

  export type SensorUncheckedCreateWithoutAlertsInput = {
    id?: string
    sensorId: string
    name: string
    sensorType: string
    latitude: number
    longitude: number
    ipAddress?: string | null
    rtspUrl?: string | null
    battery?: string | null
    status: string
    sendDrone?: string
    activeShuruMode: string
    areaId?: string | null
    alarmId?: string | null
    addedBy?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SensorCreateOrConnectWithoutAlertsInput = {
    where: SensorWhereUniqueInput
    create: XOR<SensorCreateWithoutAlertsInput, SensorUncheckedCreateWithoutAlertsInput>
  }

  export type SensorUpsertWithoutAlertsInput = {
    update: XOR<SensorUpdateWithoutAlertsInput, SensorUncheckedUpdateWithoutAlertsInput>
    create: XOR<SensorCreateWithoutAlertsInput, SensorUncheckedCreateWithoutAlertsInput>
    where?: SensorWhereInput
  }

  export type SensorUpdateToOneWithWhereWithoutAlertsInput = {
    where?: SensorWhereInput
    data: XOR<SensorUpdateWithoutAlertsInput, SensorUncheckedUpdateWithoutAlertsInput>
  }

  export type SensorUpdateWithoutAlertsInput = {
    sensorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sensorType?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    rtspUrl?: NullableStringFieldUpdateOperationsInput | string | null
    battery?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sendDrone?: StringFieldUpdateOperationsInput | string
    activeShuruMode?: StringFieldUpdateOperationsInput | string
    addedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneWithoutSensorsNestedInput
    alarm?: AlarmUpdateOneWithoutSensorsNestedInput
  }

  export type SensorUncheckedUpdateWithoutAlertsInput = {
    sensorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sensorType?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    rtspUrl?: NullableStringFieldUpdateOperationsInput | string | null
    battery?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sendDrone?: StringFieldUpdateOperationsInput | string
    activeShuruMode?: StringFieldUpdateOperationsInput | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    alarmId?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DroneOSCreateWithoutFlightHistoryInput = {
    id?: string
    droneId?: string | null
    droneOSName: string
    droneType: string
    videoLink?: string | null
    gpsFix: string
    minHDOP: number
    minSatCount: number
    maxWindSpeed: number
    droneSpeed: number
    targetAltitude: number
    gpsLost: string
    telemetryLost: string
    minBatteryLevel: number
    usbAddress: string
    batteryFailSafe: string
    gpsName: string
    maxAltitude: number
    latitude?: number | null
    longitude?: number | null
    addedBy?: string
    lastLatitude?: number | null
    lastLongitude?: number | null
    lastAltitude?: number | null
    battery?: number | null
    droneMode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    area?: AreaCreateNestedOneWithoutDronesInput
  }

  export type DroneOSUncheckedCreateWithoutFlightHistoryInput = {
    id?: string
    droneId?: string | null
    droneOSName: string
    droneType: string
    videoLink?: string | null
    gpsFix: string
    minHDOP: number
    minSatCount: number
    maxWindSpeed: number
    droneSpeed: number
    targetAltitude: number
    gpsLost: string
    telemetryLost: string
    minBatteryLevel: number
    usbAddress: string
    batteryFailSafe: string
    gpsName: string
    maxAltitude: number
    latitude?: number | null
    longitude?: number | null
    addedBy?: string
    lastLatitude?: number | null
    lastLongitude?: number | null
    lastAltitude?: number | null
    battery?: number | null
    droneMode?: string | null
    areaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DroneOSCreateOrConnectWithoutFlightHistoryInput = {
    where: DroneOSWhereUniqueInput
    create: XOR<DroneOSCreateWithoutFlightHistoryInput, DroneOSUncheckedCreateWithoutFlightHistoryInput>
  }

  export type DroneOSUpsertWithoutFlightHistoryInput = {
    update: XOR<DroneOSUpdateWithoutFlightHistoryInput, DroneOSUncheckedUpdateWithoutFlightHistoryInput>
    create: XOR<DroneOSCreateWithoutFlightHistoryInput, DroneOSUncheckedCreateWithoutFlightHistoryInput>
    where?: DroneOSWhereInput
  }

  export type DroneOSUpdateToOneWithWhereWithoutFlightHistoryInput = {
    where?: DroneOSWhereInput
    data: XOR<DroneOSUpdateWithoutFlightHistoryInput, DroneOSUncheckedUpdateWithoutFlightHistoryInput>
  }

  export type DroneOSUpdateWithoutFlightHistoryInput = {
    droneId?: NullableStringFieldUpdateOperationsInput | string | null
    droneOSName?: StringFieldUpdateOperationsInput | string
    droneType?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    gpsFix?: StringFieldUpdateOperationsInput | string
    minHDOP?: FloatFieldUpdateOperationsInput | number
    minSatCount?: IntFieldUpdateOperationsInput | number
    maxWindSpeed?: FloatFieldUpdateOperationsInput | number
    droneSpeed?: FloatFieldUpdateOperationsInput | number
    targetAltitude?: FloatFieldUpdateOperationsInput | number
    gpsLost?: StringFieldUpdateOperationsInput | string
    telemetryLost?: StringFieldUpdateOperationsInput | string
    minBatteryLevel?: FloatFieldUpdateOperationsInput | number
    usbAddress?: StringFieldUpdateOperationsInput | string
    batteryFailSafe?: StringFieldUpdateOperationsInput | string
    gpsName?: StringFieldUpdateOperationsInput | string
    maxAltitude?: FloatFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    addedBy?: StringFieldUpdateOperationsInput | string
    lastLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAltitude?: NullableFloatFieldUpdateOperationsInput | number | null
    battery?: NullableFloatFieldUpdateOperationsInput | number | null
    droneMode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneWithoutDronesNestedInput
  }

  export type DroneOSUncheckedUpdateWithoutFlightHistoryInput = {
    droneId?: NullableStringFieldUpdateOperationsInput | string | null
    droneOSName?: StringFieldUpdateOperationsInput | string
    droneType?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    gpsFix?: StringFieldUpdateOperationsInput | string
    minHDOP?: FloatFieldUpdateOperationsInput | number
    minSatCount?: IntFieldUpdateOperationsInput | number
    maxWindSpeed?: FloatFieldUpdateOperationsInput | number
    droneSpeed?: FloatFieldUpdateOperationsInput | number
    targetAltitude?: FloatFieldUpdateOperationsInput | number
    gpsLost?: StringFieldUpdateOperationsInput | string
    telemetryLost?: StringFieldUpdateOperationsInput | string
    minBatteryLevel?: FloatFieldUpdateOperationsInput | number
    usbAddress?: StringFieldUpdateOperationsInput | string
    batteryFailSafe?: StringFieldUpdateOperationsInput | string
    gpsName?: StringFieldUpdateOperationsInput | string
    maxAltitude?: FloatFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    addedBy?: StringFieldUpdateOperationsInput | string
    lastLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAltitude?: NullableFloatFieldUpdateOperationsInput | number | null
    battery?: NullableFloatFieldUpdateOperationsInput | number | null
    droneMode?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorCreateManyAreaInput = {
    id?: string
    sensorId: string
    name: string
    sensorType: string
    latitude: number
    longitude: number
    ipAddress?: string | null
    rtspUrl?: string | null
    battery?: string | null
    status: string
    sendDrone?: string
    activeShuruMode: string
    alarmId?: string | null
    addedBy?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlarmCreateManyAreaInput = {
    id?: string
    alarmId: string
    name: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DroneOSCreateManyAreaInput = {
    id?: string
    droneId?: string | null
    droneOSName: string
    droneType: string
    videoLink?: string | null
    gpsFix: string
    minHDOP: number
    minSatCount: number
    maxWindSpeed: number
    droneSpeed: number
    targetAltitude: number
    gpsLost: string
    telemetryLost: string
    minBatteryLevel: number
    usbAddress: string
    batteryFailSafe: string
    gpsName: string
    maxAltitude: number
    latitude?: number | null
    longitude?: number | null
    addedBy?: string
    lastLatitude?: number | null
    lastLongitude?: number | null
    lastAltitude?: number | null
    battery?: number | null
    droneMode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SensorUpdateWithoutAreaInput = {
    sensorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sensorType?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    rtspUrl?: NullableStringFieldUpdateOperationsInput | string | null
    battery?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sendDrone?: StringFieldUpdateOperationsInput | string
    activeShuruMode?: StringFieldUpdateOperationsInput | string
    addedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alarm?: AlarmUpdateOneWithoutSensorsNestedInput
    alerts?: AlertUpdateManyWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateWithoutAreaInput = {
    sensorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sensorType?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    rtspUrl?: NullableStringFieldUpdateOperationsInput | string | null
    battery?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sendDrone?: StringFieldUpdateOperationsInput | string
    activeShuruMode?: StringFieldUpdateOperationsInput | string
    alarmId?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: AlertUncheckedUpdateManyWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateManyWithoutAreaInput = {
    sensorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sensorType?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    rtspUrl?: NullableStringFieldUpdateOperationsInput | string | null
    battery?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sendDrone?: StringFieldUpdateOperationsInput | string
    activeShuruMode?: StringFieldUpdateOperationsInput | string
    alarmId?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlarmUpdateWithoutAreaInput = {
    alarmId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensors?: SensorUpdateManyWithoutAlarmNestedInput
  }

  export type AlarmUncheckedUpdateWithoutAreaInput = {
    alarmId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sensors?: SensorUncheckedUpdateManyWithoutAlarmNestedInput
  }

  export type AlarmUncheckedUpdateManyWithoutAreaInput = {
    alarmId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DroneOSUpdateWithoutAreaInput = {
    droneId?: NullableStringFieldUpdateOperationsInput | string | null
    droneOSName?: StringFieldUpdateOperationsInput | string
    droneType?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    gpsFix?: StringFieldUpdateOperationsInput | string
    minHDOP?: FloatFieldUpdateOperationsInput | number
    minSatCount?: IntFieldUpdateOperationsInput | number
    maxWindSpeed?: FloatFieldUpdateOperationsInput | number
    droneSpeed?: FloatFieldUpdateOperationsInput | number
    targetAltitude?: FloatFieldUpdateOperationsInput | number
    gpsLost?: StringFieldUpdateOperationsInput | string
    telemetryLost?: StringFieldUpdateOperationsInput | string
    minBatteryLevel?: FloatFieldUpdateOperationsInput | number
    usbAddress?: StringFieldUpdateOperationsInput | string
    batteryFailSafe?: StringFieldUpdateOperationsInput | string
    gpsName?: StringFieldUpdateOperationsInput | string
    maxAltitude?: FloatFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    addedBy?: StringFieldUpdateOperationsInput | string
    lastLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAltitude?: NullableFloatFieldUpdateOperationsInput | number | null
    battery?: NullableFloatFieldUpdateOperationsInput | number | null
    droneMode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightHistory?: DroneFlightHistoryUpdateManyWithoutDroneNestedInput
  }

  export type DroneOSUncheckedUpdateWithoutAreaInput = {
    droneId?: NullableStringFieldUpdateOperationsInput | string | null
    droneOSName?: StringFieldUpdateOperationsInput | string
    droneType?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    gpsFix?: StringFieldUpdateOperationsInput | string
    minHDOP?: FloatFieldUpdateOperationsInput | number
    minSatCount?: IntFieldUpdateOperationsInput | number
    maxWindSpeed?: FloatFieldUpdateOperationsInput | number
    droneSpeed?: FloatFieldUpdateOperationsInput | number
    targetAltitude?: FloatFieldUpdateOperationsInput | number
    gpsLost?: StringFieldUpdateOperationsInput | string
    telemetryLost?: StringFieldUpdateOperationsInput | string
    minBatteryLevel?: FloatFieldUpdateOperationsInput | number
    usbAddress?: StringFieldUpdateOperationsInput | string
    batteryFailSafe?: StringFieldUpdateOperationsInput | string
    gpsName?: StringFieldUpdateOperationsInput | string
    maxAltitude?: FloatFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    addedBy?: StringFieldUpdateOperationsInput | string
    lastLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAltitude?: NullableFloatFieldUpdateOperationsInput | number | null
    battery?: NullableFloatFieldUpdateOperationsInput | number | null
    droneMode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flightHistory?: DroneFlightHistoryUncheckedUpdateManyWithoutDroneNestedInput
  }

  export type DroneOSUncheckedUpdateManyWithoutAreaInput = {
    droneId?: NullableStringFieldUpdateOperationsInput | string | null
    droneOSName?: StringFieldUpdateOperationsInput | string
    droneType?: StringFieldUpdateOperationsInput | string
    videoLink?: NullableStringFieldUpdateOperationsInput | string | null
    gpsFix?: StringFieldUpdateOperationsInput | string
    minHDOP?: FloatFieldUpdateOperationsInput | number
    minSatCount?: IntFieldUpdateOperationsInput | number
    maxWindSpeed?: FloatFieldUpdateOperationsInput | number
    droneSpeed?: FloatFieldUpdateOperationsInput | number
    targetAltitude?: FloatFieldUpdateOperationsInput | number
    gpsLost?: StringFieldUpdateOperationsInput | string
    telemetryLost?: StringFieldUpdateOperationsInput | string
    minBatteryLevel?: FloatFieldUpdateOperationsInput | number
    usbAddress?: StringFieldUpdateOperationsInput | string
    batteryFailSafe?: StringFieldUpdateOperationsInput | string
    gpsName?: StringFieldUpdateOperationsInput | string
    maxAltitude?: FloatFieldUpdateOperationsInput | number
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    addedBy?: StringFieldUpdateOperationsInput | string
    lastLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastAltitude?: NullableFloatFieldUpdateOperationsInput | number | null
    battery?: NullableFloatFieldUpdateOperationsInput | number | null
    droneMode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateManySensorInput = {
    id?: string
    sensorId: string
    type: string
    message: string
    time: string
    timestamp?: Date | string
    status?: $Enums.AlertStatus
    createdAt?: Date | string
    decidedAt?: Date | string | null
    decision?: string | null
    metadata?: InputJsonValue | null
  }

  export type AlertUpdateWithoutSensorInput = {
    sensorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decision?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: InputJsonValue | InputJsonValue | null
  }

  export type AlertUncheckedUpdateWithoutSensorInput = {
    sensorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decision?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: InputJsonValue | InputJsonValue | null
  }

  export type AlertUncheckedUpdateManyWithoutSensorInput = {
    sensorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    decidedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    decision?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: InputJsonValue | InputJsonValue | null
  }

  export type DroneFlightHistoryCreateManyDroneInput = {
    id?: string
    sensorId?: string | null
    alertId?: string | null
    dispatchedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DroneFlightHistoryUpdateWithoutDroneInput = {
    sensorId?: NullableStringFieldUpdateOperationsInput | string | null
    alertId?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DroneFlightHistoryUncheckedUpdateWithoutDroneInput = {
    sensorId?: NullableStringFieldUpdateOperationsInput | string | null
    alertId?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DroneFlightHistoryUncheckedUpdateManyWithoutDroneInput = {
    sensorId?: NullableStringFieldUpdateOperationsInput | string | null
    alertId?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorCreateManyAlarmInput = {
    id?: string
    sensorId: string
    name: string
    sensorType: string
    latitude: number
    longitude: number
    ipAddress?: string | null
    rtspUrl?: string | null
    battery?: string | null
    status: string
    sendDrone?: string
    activeShuruMode: string
    areaId?: string | null
    addedBy?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SensorUpdateWithoutAlarmInput = {
    sensorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sensorType?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    rtspUrl?: NullableStringFieldUpdateOperationsInput | string | null
    battery?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sendDrone?: StringFieldUpdateOperationsInput | string
    activeShuruMode?: StringFieldUpdateOperationsInput | string
    addedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneWithoutSensorsNestedInput
    alerts?: AlertUpdateManyWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateWithoutAlarmInput = {
    sensorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sensorType?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    rtspUrl?: NullableStringFieldUpdateOperationsInput | string | null
    battery?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sendDrone?: StringFieldUpdateOperationsInput | string
    activeShuruMode?: StringFieldUpdateOperationsInput | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: AlertUncheckedUpdateManyWithoutSensorNestedInput
  }

  export type SensorUncheckedUpdateManyWithoutAlarmInput = {
    sensorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sensorType?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    rtspUrl?: NullableStringFieldUpdateOperationsInput | string | null
    battery?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    sendDrone?: StringFieldUpdateOperationsInput | string
    activeShuruMode?: StringFieldUpdateOperationsInput | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    addedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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