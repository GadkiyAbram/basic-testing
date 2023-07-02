// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const dataToAdd = {
  data: { a: 3, b: 4, action: Action.Add },
  resultExpect: 7,
};
const dataToSubtract = {
  data: { a: 33, b: 30, action: Action.Subtract },
  resultExpect: 3,
};
const dataToMultiply = {
  data: { a: 3, b: 30, action: Action.Multiply },
  resultExpect: 90,
};
const dataToDivide = {
  data: { a: 30, b: 3, action: Action.Divide },
  resultExpect: 10,
};
const dataToExponentiate = {
  data: { a: 2, b: 3, action: Action.Exponentiate },
  resultExpect: 8,
};
const invalidAction = {
  data: { a: 2, b: 3, action: 'invalid' },
  resultExpect: null,
};
const invalidData = {
  data: { a: 'a3', b: 'b3', action: Action.Add },
  resultExpect: null,
};

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator(dataToAdd.data);

    expect(result).toBe(dataToAdd.resultExpect);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator(dataToSubtract.data);

    expect(result).toBe(dataToSubtract.resultExpect);
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator(dataToMultiply.data);

    expect(result).toBe(dataToMultiply.resultExpect);
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator(dataToDivide.data);

    expect(result).toBe(dataToDivide.resultExpect);
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator(dataToExponentiate.data);

    expect(result).toBe(dataToExponentiate.resultExpect);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator(invalidAction.data);

    expect(result).toBe(invalidAction.resultExpect);
  });

  test('should return null for invalid arguments', () => {
    const result = simpleCalculator(invalidData.data);

    expect(result).toBe(invalidData.resultExpect);
  });
});
