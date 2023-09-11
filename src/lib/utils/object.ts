import type { Simplify, ValueOf } from 'type-fest';

export type AnyObject<T> = Simplify<Partial<Record<keyof T, ValueOf<T>>>>;
export type ObjectKeys<T> = Simplify<(keyof T)[]>;
export type ObjectValues<T> = Simplify<ValueOf<T>[]>;
export type ObjectEntries<T> = Simplify<[keyof T, ValueOf<T>][]>;

export const objectKeys = <T extends AnyObject<T>>(
  object: T,
): ObjectKeys<T> => (<ObjectKeys<T>>Object.keys(object));

export const objectValues = <T extends AnyObject<T>>(
  object: T,
): ObjectValues<T> => (<ObjectValues<T>>Object.values(object));

export const objectEntries = <T extends AnyObject<T>>(
  object: T,
): ObjectEntries<T> => (<ObjectEntries<T>>Object.entries(object));

export const objectAssign = <T extends AnyObject<T>>(
  object: T,
  source: Partial<T>,
): T => Object.assign(object, source);
