import type { JsonPrimitive } from 'type-fest';
import type { NotJsonable } from 'type-fest/source/jsonify';

export type Maybe<T> = T | undefined;
export type Nullable<T> = T | null;
export type Nullish<T> = Maybe<T> | Nullable<T>;

export type Json<T> = JsonValue<T>;
export type JsonArray<T> = Json<T>[] | readonly Json<T>[];
export type JsonObject<T> = { [Key in keyof T]: T[Key] extends NotJsonable ? never : Json<T[Key]> };
export type JsonValue<T> = Exclude<JsonPrimitive | JsonObject<T> | JsonArray<T>, undefined>;

export type AllSettled<T> = Promise<PromiseSettledResult<T>[]>;
