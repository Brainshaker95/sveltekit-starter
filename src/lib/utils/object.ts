import type { ValueOf } from '$types/core';

export type AnyObject<T> = Partial<Record<keyof T, ValueOf<T>>>;
export type ObjectKeys<T> = (keyof T)[];
export type ObjectValues<T> = ValueOf<T>[];
export type ObjectEntries<T> = [keyof T, ValueOf<T>][];

export const objectKeys = <T extends AnyObject<T>>(
  object: T,
): ObjectKeys<T> => (<ObjectKeys<T>>Object.keys(object));

export const objectValues = <T extends AnyObject<T>>(
  object: T,
): ObjectValues<T> => (<ObjectValues<T>>Object.values(object));

export const objectEntries = <T extends AnyObject<T>>(
  object: T,
): ObjectEntries<T> => (<ObjectEntries<T>>Object.entries(object));

export const object = Object.freeze({
  keys: objectKeys,
  values: objectValues,
  entries: objectEntries,
});
