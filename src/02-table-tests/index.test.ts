// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  { a: 13, b: 8, action: Action.Subtract, expected: 5 },
  { a: 3, b: 3, action: Action.Subtract, expected: 0 },
  { a: 3, b: 3, action: Action.Multiply, expected: 9 },
  { a: 3, b: 30, action: Action.Multiply, expected: 90 },
  { a: 2, b: 3, action: Action.Multiply, expected: 6 },
  { a: 1, b: 1, action: Action.Exponentiate, expected: 1 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 4, b: 3, action: Action.Exponentiate, expected: 64 },
  { a: 3, b: 3, action: Action.Divide, expected: 1 },
  { a: 14, b: 7, action: Action.Divide, expected: 2 },
  { a: 100, b: 10, action: Action.Divide, expected: 10 },
  { a: 100, b: 10, action: 'invalid action', expected: null },
  { a: 'aa100', b: '1b010', action: Action.Divide, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should work correctly',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });

      expect(result).toBe(expected);
    },
  );
});
