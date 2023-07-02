// Uncomment the code below and write your tests
import {
  BankAccount,
  getBankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
} from '.';

import lodash from 'lodash';

const accountTest = new BankAccount(333);

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const newBankAccount = getBankAccount(444);
    expect(newBankAccount).toBeInstanceOf(BankAccount);
    expect(newBankAccount.getBalance()).toBe(444);
    // Write your test here
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => {
      accountTest.withdraw(555);
    }).toThrow(InsufficientFundsError);
    // Write your test here
  });

  test('should throw error when transferring more than balance', () => {
    const accountToTransfer = new BankAccount(444);

    expect(() => {
      accountTest.transfer(777, accountToTransfer);
    }).toThrow(InsufficientFundsError);
    // Write your test here
  });

  test('should throw error when transferring to the same account', () => {
    expect(() => {
      accountTest.transfer(333, accountTest);
    }).toThrow(TransferFailedError);
    // Write your test here
  });

  test('should deposit money', () => {
    accountTest.deposit(100);
    expect(accountTest.getBalance()).toBe(433);
    // Write your test here
  });

  test('should withdraw money', () => {
    accountTest.withdraw(133);
    expect(accountTest.getBalance()).toBe(300);
    // Write your test here
  });

  test('should transfer money', () => {
    const accountToTransfer = new BankAccount(1000);
    accountTest.transfer(200, accountToTransfer);

    expect(accountTest.getBalance()).toBe(100);
    expect(accountToTransfer.getBalance()).toBe(1200);
    // Write your test here
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const result = await accountTest.fetchBalance();

    if (result !== null) {
      expect(result).toBeGreaterThan(0);
    } else {
      expect(result).toBeNull();
    }

    // expect(result === null || typeof result === 'number').toBeTruthy();
    // Write your tests here
  });

  test('should set new balance if fetchBalance returned number', async () => {
    lodash.random = jest.fn(() => 1);

    await accountTest.synchronizeBalance();

    expect(accountTest.getBalance()).not.toBeNull();
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    lodash.random = jest.fn(() => 0);

    await expect(accountTest.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
    // Write your tests here
  });
});
