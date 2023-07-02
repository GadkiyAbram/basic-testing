// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    const resultOne = generateLinkedList(['a', 'b', 'c']);
    const resultTwo = generateLinkedList(['a', 'b', 'c']);
    const resultThree = generateLinkedList(['1', 'b', 'd']);

    expect(resultOne).toStrictEqual(resultTwo);
    expect(resultOne).not.toStrictEqual(resultThree);
    // Write your test here
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    // Write your test here
  });
});
