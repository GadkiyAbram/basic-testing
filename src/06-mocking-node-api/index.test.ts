// Uncomment the code below and write your tests
import { doStuffByTimeout, doStuffByInterval, readFileAsynchronously } from '.';
import path from 'path';
import fs from 'fs';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set timeout with provided callback and timeout', () => {
    const mockedTimeout = jest.spyOn(global, 'setTimeout');

    const cb = jest.fn();
    doStuffByTimeout(cb, 3000);
    jest.runAllTimers();

    expect(mockedTimeout).toHaveBeenCalledTimes(1);
    // Write your test here
  });

  test('should call callback only after timeout', () => {
    const mockedTimeout = jest.spyOn(global, 'setTimeout');

    const cb = jest.fn();
    expect(cb).not.toBeCalled();
    doStuffByTimeout(cb, 3000);
    jest.runAllTimers();

    expect(cb).toBeCalled();
    expect(mockedTimeout).toHaveBeenCalledTimes(1);
    // Write your test here
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should set interval with provided callback and timeout', () => {
    const mockedInterval = jest.spyOn(global, 'setInterval');

    const cb = jest.fn();
    doStuffByInterval(cb, 3000);

    expect(mockedInterval).toHaveBeenCalledTimes(1);
    // Write your test here
  });

  test('should call callback multiple times after multiple intervals', () => {
    jest.spyOn(global, 'setInterval');

    const cb = jest.fn();

    jest.runOnlyPendingTimers();
    doStuffByInterval(cb, 1000);
    jest.advanceTimersByTime(5000);

    expect(cb).toHaveBeenCalledTimes(5);
    // Write your test here
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    const filePath = '/file.txt';

    const mockJoin = jest.spyOn(path, 'join');

    await readFileAsynchronously(filePath);
    expect(mockJoin).toHaveBeenCalledTimes(1);
    expect(mockJoin).toHaveBeenLastCalledWith(__dirname, filePath);
    // Write your test here
  });

  test('should return null if file does not exist', async () => {
    const filePath = '/file.txt';
    jest.spyOn(fs, 'existsSync').mockReturnValueOnce(false);

    const result = await readFileAsynchronously(filePath);

    expect(result).toBeNull();

    // Write your test here
  });

  test('should return file content if file exists', async () => {
    const fileContent = 'some fake or not data';
    const filePath = '/file.txt';
    jest.spyOn(fs, 'existsSync').mockReturnValueOnce(true);
    jest.spyOn(fs.promises, 'readFile').mockResolvedValue(fileContent);

    const result = await readFileAsynchronously(filePath);
    expect(result).toBe(fileContent);
    // Write your test here
  });
});
