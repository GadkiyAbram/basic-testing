// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const value = 'value exists';
    const result = resolveValue(value);

    await expect(result).resolves.toBe(value);
    // Write your test here
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const errorMsg = 'Error Message received!';

    expect(() => {
      throwError(errorMsg);
    }).toThrowError(errorMsg);
    // Write your test here
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => {
      throwError();
    }).toThrowError('Oops!');
    // Write your test here
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    // const result = throwCustomError();

    expect(() => {
      throwCustomError();
    }).toThrow(MyAwesomeError);
    // Write your test here
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    const result = rejectCustomError();

    await expect(result).rejects.toThrow(MyAwesomeError);
    // Write your test here
  });
});
