import { test, expect, describe } from 'vitest';
import { lerp } from './math';

describe('lerp', () => {

  test('should return  a known value', () => {
    {
      const result = lerp(0, 10, 0.5);
      expect(result).toBe(5);
    }
    {
      const result = lerp(0, 20, 0.5);
      expect(result).toBe(10);
    }
    {
      const result = lerp(0, 100, 0.25);
      expect(result).toBe(25);
    }
    {
      const result = lerp(0, 100, 0.33);
      expect(result).toBe(33);
    }
    {
      const result = lerp(0, 100, 0.74);
      expect(result).toBe(74);
    }
  });

});