import type { JsonArray, JsonPrimitive } from 'type-fest';
import type { NotJsonable } from 'type-fest/source/jsonify';

export type Maybe<T> = T | undefined;
export type Nullish = Maybe<null>;
export type MaybeNullish<T> = T | Nullish;
export type AllSettled<T> = Promise<PromiseSettledResult<T>[]>;

export type StrictJson<T> =
  JsonArray
  | JsonPrimitive
  | { [Key in keyof T]: T[Key] extends NotJsonable ? never : StrictJson<T[Key]> };
