import { counter } from '@/packages';
import { describe, expect, test } from 'vitest';

describe('test counter', () => {
  test('number add', () => {
    const res = counter(1, 2);
    expect(res).toBe(3);
  });
  test('NaN add', () => {
    const res = counter(NaN, NaN);
    expect(res).toBeNaN();
  });
});
