import { beforeEach, expect, test, it } from 'vitest';
import { Person, Character } from './strictly-speaking';
import { describe } from 'node:test';

test('instances are equal to object literals with the same properties', () => {
  expect(new Person('Maya', 18)).toEqual({ name: 'Maya', age: 18 });
});

test('instances are not strictly equal to object literals with the same properties', () => {
  expect(new Person('Maya', 18)).not.toStrictEqual({ name: 'Maya', age: 18 });
});

describe('Characters', () => {
  let character;

  beforeEach(() => {
    character = new Character('Emma', 23, 'human');
  });

  it('should create a character with a first name, last name, and role', () => {
    expect(character).toEqual({
      name: 'Emma',
      age: 23,
      role: 'human',
      level: 1,
      createdAt: expect.any(Date),
    });
  });
});
