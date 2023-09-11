export type Json = JsonPrimitive | JsonObject | JsonArray;
export type JsonPrimitive = string | number | boolean | null;
export type JsonArray = Json[] | readonly Json[];
export type JsonObject = { [Key in string]: Json } & { [Key in string]?: Json | undefined };

export type ValueOf<T> = T extends unknown ? T[keyof T] : never;

export type Indexable<V, K extends string | number = string | number> = Record<K, V>;

export type Prettify<T> = {
  [K in keyof T]: T[K];
};
