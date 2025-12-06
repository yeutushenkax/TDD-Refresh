import { sum, subtract, multiply } from '../src/calculator';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
})

test('2 - 1 = 1', () => {
  expect(subtract(2, 1)).toBe(1);
})

test('2 * 3 = 6', () => {
  expect(multiply(2, 3)).toBe(6);
})