export const toLowerCase = <T extends string>(string: T): Lowercase<T> => <Lowercase<T>>string.toLowerCase();

export const toUpperCase = <T extends string>(string: T): Uppercase<T> => <Uppercase<T>>string.toUpperCase();
