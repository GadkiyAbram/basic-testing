// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

// const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('throttledGetDataFromApi', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should create instance with provided base url', async () => {
    const mockedAxiosCreate = jest.spyOn(axios, 'create');

    jest.useFakeTimers();
    jest.runAllTimers();
    // await throttledGetDataFromApi('/api/users');

    // expect(mockedAxiosCreate).toHaveBeenLastCalledWith({ baseURL: BASE_URL });
    expect(mockedAxiosCreate).toHaveBeenCalledTimes(0);
  });

  test('should perform request to correct provided url', async () => {
    jest.useFakeTimers();
    jest.runOnlyPendingTimers();
    const mockedAxiosGet = jest
      .spyOn(axios.Axios.prototype, 'get')
      .mockResolvedValueOnce({ data: 'result' });

    await throttledGetDataFromApi('/api/users');
    expect(mockedAxiosGet).toHaveBeenCalledTimes(1);
    // Write your test here
  });

  test('should return response data', async () => {
    jest.runOnlyPendingTimers();
    jest
      .spyOn(axios.Axios.prototype, 'get')
      .mockResolvedValueOnce({ data: 'result' });

    const result = await throttledGetDataFromApi('/api/users');
    expect(result).toBe('result');
    // Write your test here
  });
});
