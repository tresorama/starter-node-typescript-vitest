import { test, expect, describe } from 'vitest';
import { getRandomArrayItem, getRandomColor, getRandomInteger, getRandomUnsplashImage } from './get-random';

describe('getRandomInteger', () => {

  test('should return a integer', () => {
    for (let i = 0; i < 10000; i++) {
      const result = getRandomInteger(-124, 200);
      const ONLY_INTEGER = /^-?\d+$/;
      expect(result).toMatch(ONLY_INTEGER);
    }
  });

  test('should return a integer in a range', () => {
    for (let i = 0; i < 10000; i++) {
      const result = getRandomInteger(10, 20);
      expect(String(result).split).toBe;
      expect(result).toBeGreaterThanOrEqual(10);
      expect(result).toBeLessThanOrEqual(20);
    }
  });
});

describe('getRandomArrayItem', () => {

  test('should return a random array item', () => {
    for (let i = 0; i < 10000; i++) {
      const a = [10, 20, 34, 56, 78.6, 2.7, 14567456];
      const result = getRandomArrayItem(a);
      expect(result).not.toBeUndefined();
      expect(a).toContain(result);
    }
  });

});

describe('getRandomColor', () => {

  test('should return a color string array item', () => {
    const result = getRandomColor().hsl;
    expect(result).not.toBeUndefined();
    expect(typeof result === 'string').toBeTruthy();
  });

});

describe('getRandomUnsplashImage', () => {

  test('should return a valid unsplash image url', () => {
    const result = getRandomUnsplashImage({});
    expect(result).not.toBeUndefined();
    expect(typeof result === 'string').toBeTruthy();
    console.log({ result });
  });

});