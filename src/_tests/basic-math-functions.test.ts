import { expect, describe, it } from 'vitest';
import { add, divide, multiply, subtract } from './basic-math-functions';

describe('add', () => {
  it('should add to numbers to eachother', () => {
    expect(add(1, 1)).toBe(2);
  });
});

describe('subtract', () => {
  it('should subtract one number from another', () => {
    expect(subtract(2, 1)).toBe(1);
  });
});

describe('multiplay', () => {
  it('should multiplay two numbers', () => {
    expect(multiply(2, 4)).toBe(8);
  });
});

describe('divide', () => {
  it('should devide two numbers', () => {
    expect(divide(4, 2)).toBe(2);
  });
});
