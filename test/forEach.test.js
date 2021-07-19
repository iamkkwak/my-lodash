import {forEach} from '../src/forEach';

test('Array', () => {
  const array = [1, 2, 3];

  forEach(array, (value, key) => {
    expect(value).toBe(array[key]);
  });
});

test('Array-like', () => {
  const arrayLike = {
    0: 'zero',
    1: 'one',
    2: 'three',
    length: 3
  };

  forEach(arrayLike, (value, key) => {
    expect(value).toBe(arrayLike[key]);
  });

  const mySet = new Set('set');

  forEach(mySet, (value, key) => {
    expect(value).toBe(mySet[key]);
  });

  const myMap = new Map();
  myMap.set('hello', '안녕');
  myMap.set('javascript', '자바스크립트');

  forEach(myMap, (value, key) => {
    expect(value).toBe(myMap.get(key));
  });
});

test('Object', () => {
  const object = {
    num: 0,
    str: '문자열',
    arr: [1, 2, 3],
    obj: {key: 'value'},
    func: () => {
      /* */
    }
  };

  forEach(object, (value, key) => {
    expect(value).toBe(object[key]);
  });
});
