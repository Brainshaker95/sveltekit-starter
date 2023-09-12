import type { JsonArray, JsonPrimitive } from 'type-fest';

export type Maybe<T> = T | undefined;
export type Nullish = Maybe<null>;
export type MaybeNullish<T> = T | Nullish;
export type AllSettled<T> = Promise<PromiseSettledResult<T>[]>;

export type StrictJson<T> =
  JsonArray
  | JsonPrimitive
  | { [Key in keyof T]: StrictJson<T[Key]> } & { [Key in keyof T]?: Maybe<StrictJson<T[Key]>> };
