import lodash from 'lodash';
import {reduce} from '../src/reduce';

test('Array', () => {
  const myResult = reduce(
    [1, 2],
    function (sum, n) {
      return sum + n;
    },
    0
  );
  const lodashResult = lodash.reduce(
    [1, 2],
    function (sum, n) {
      return sum + n;
    },
    0
  );

  expect(myResult).toBe(lodashResult);
});

test('Object', () => {
  const myResult = reduce(
    {a: 1, b: 2, c: 1},
    function (result, value, key) {
      (result[value] || (result[value] = [])).push(key);

      return result;
    },
    {}
  );
  const lodashResult = lodash.reduce(
    {a: 1, b: 2, c: 1},
    function (result, value, key) {
      (result[value] || (result[value] = [])).push(key);

      return result;
    },
    {}
  );

  expect(myResult).toEqual(lodashResult);
});
