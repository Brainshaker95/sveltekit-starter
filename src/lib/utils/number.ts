export const clamp = (min: number, value: number, max: number): number => Math.min(Math.max(value, min), max);

export const isNumberLike = (number: unknown): number is string | number => number !== null
  && String(number).length > 0
  && !Number.isNaN(Number(number));

export const randomFloat = (min = 0, max = 1): number => Math.random() * (max - min) + min;

export const randomInt = (min = 1, max = 100): number => {
  const theMin = Math.ceil(min);
  const theMax = Math.floor(max);

  return Math.floor(Math.random() * (theMax - theMin + 1)) + theMin;
};
