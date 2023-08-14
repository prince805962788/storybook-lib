import { Button } from '@/packages';
import { render, screen, fireEvent } from '@testing-library/react';

import { describe, expect, test, vi } from 'vitest';

describe('Button', () => {
  test('test onClick', () => {
    const handleClick = vi.fn();
    render(
      <Button type="default" onClick={handleClick}>
        Click
      </Button>,
    );
    const button = screen.getByRole('button', { name: 'Click' });

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});
