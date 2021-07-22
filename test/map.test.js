import lodash from 'lodash';
import {map} from '../src/map';

const square = jest.fn((n) => n * n);
const toString = jest.fn((value, key) => `${key} - ${value}`);
const users = [{user: 'barney'}, {user: 'fred'}];

test('Array', () => {
  const myResult = map([4, 8], square);
  const lodashResult = lodash.map([4, 8], square);

  expect(myResult).toEqual(lodashResult);
});

test('Object', () => {
  const mySquareResult = map({a: 4, b: 8}, square);
  const lodashSqaureResult = lodash.map({a: 4, b: 8}, square);

  expect(mySquareResult).toEqual(lodashSqaureResult);

  const myStringResult = map({one: '하나', two: '둘'}, toString);
  const lodashStringResult = lodash.map({one: '하나', two: '둘'}, toString);

  expect(myStringResult).toEqual(lodashStringResult);
});

test('Property key', () => {
  const myResult = map(users, 'user');
  const lodashResult = lodash.map(users, 'user');

  expect(myResult).toEqual(lodashResult);
});
