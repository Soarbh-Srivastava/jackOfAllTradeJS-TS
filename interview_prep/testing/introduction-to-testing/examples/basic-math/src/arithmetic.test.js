import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './arithmetic';

describe('add', () => {
  it('should add two postive number and return there sum');
  expect(add(2, 2)).toBe(4);
});

describe('subtract', () => {
  it('should sub two positive number and return there sub');
  expect(subtract(2, 2)).toBe(0);
});

describe('multiply', () => {
  it('should multiply two postive number then return the positve value');
  expect(multiply(2, 2)).toBe(4);
});

describe('divide', () => {
  it(
    'should divide two positive and return a postive double  number  and i case of division with throw error',
  );
  expect(divide(6, 3)).toBe(2);
});
