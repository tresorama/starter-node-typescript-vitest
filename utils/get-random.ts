import { clamp, lerp } from "./math";

export const getRandomInteger = (min: number, max: number) => {
  const value = lerp(min, max, Math.random());
  return clamp(min, max, Math.round(value));
};

export const getRandomArrayItem = <T>(array: T[]): T => {
  const index = getRandomInteger(0, array.length - 1);
  return array[index];
}; 