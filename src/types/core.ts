export type Json =
  | string
  | number
  | boolean
  | Json[]
  | { [x: string]: Json };

export type ValueOf<T> = T[keyof T];

export type Indexable<V, K extends string | number = string | number> = Record<K, V>;
