import { useTimeout } from '@/packages';
import { renderHook, act } from '@testing-library/react-hooks';

import { describe, expect, test, vi } from 'vitest';

describe('useTimeout', () => {
  test('test callback', () => {
    vi.useFakeTimers();
    const callback = vi.fn();
    const delay = 2000;

    renderHook(() => useTimeout(callback, delay));

    expect(callback).not.toBeCalled();

    act(() => {
      vi.advanceTimersByTime(delay);
    });

    expect(callback).toBeCalled();
  });

  test('test clear callback', () => {
    vi.useFakeTimers();
    const callback = vi.fn();
    const delay = 2000;

    const { result } = renderHook(() => useTimeout(callback, delay));

    expect(callback).not.toBeCalled();

    act(() => {
      result.current();
      vi.advanceTimersByTime(delay);
    });

    expect(callback).not.toBeCalled();
  });

  vi.useRealTimers();
});
