import {filter} from '../src/filter';
import lodash from 'lodash';

const users = [
  {user: 'barney', age: 36, active: true},
  {user: 'fred', age: 40, active: false}
];

test('param: Array<Object>, callback: function', () => {
  const myResult = filter(users, (value) => !value.active);
  const lodashResult = lodash.filter(users, (value) => !value.active);

  expect(myResult).toEqual(lodashResult);
});

test('param: Array<Object>, callback: object', () => {
  const myResult = filter(users, {age: 36, active: true});
  const lodashResult = lodash.filter(users, {age: 36, active: true});

  expect(myResult).toEqual(lodashResult);
});

test('param: Array<Object>, callback: Array(2)', () => {
  const myResult = filter(users, ['active', false]);
  const lodashResult = lodash.filter(users, ['active', false]);

  expect(myResult).toEqual(lodashResult);
});

test('param: Array<Object>, callback: string', () => {
  const myResult = filter(users, 'active');
  const lodashResult = lodash.filter(users, 'active');

  expect(myResult).toEqual(lodashResult);
});

test('param: Array<number>, callback: function', () => {
  const array = [0, 1, 2, 3, 4, 5];
  const myResult = filter(array, (value) => value % 2);
  const lodashResult = lodash.filter(array, (value) => value % 2);

  expect(myResult).toEqual(lodashResult);
});
