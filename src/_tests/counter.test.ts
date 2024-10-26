import { expect, it, describe } from 'vitest';
import { counter } from './counter';

describe('counter', () => {
  it('starts with zero', () => {
    expect(counter.count).toBe(0);
  });

  it('increment by one', () => {
    counter.increment();
    expect(counter.count).toBe(1);
  });

  it('decrement by one', () => {
    counter.decrement();
    expect(counter.count).toBe(0);
  });

  it('reset to zero', () => {
    counter.increment();
    counter.increment();
    counter.increment();
    counter.increment();
    counter.reset();
    expect(counter.count).toBe(0);
  });
});
