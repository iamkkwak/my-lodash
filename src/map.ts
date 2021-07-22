import {Collection, DefaultCallback} from './types';

// TODO: filter에 createCallback 함수 재사용하기
function createCallbackWithKey(key: PropertyKey): DefaultCallback {
  return (value) => {
    return value[key];
  };
}

function arrayMap(array: Array<unknown>, callback: DefaultCallback): Array<unknown> {
  const length = array ? array.length : 0;
  const result = new Array(length);
  for (let i = 0; i < length; i += 1) {
    result[i] = callback(array[i], i, array);
  }

  return result;
}

function objectMap(object: Record<PropertyKey, unknown>, callback: DefaultCallback): Array<unknown> {
  const keys = Object.keys(object);
  const {length} = keys;
  const result = new Array(length);
  for (let index = 0; index < length; index += 1) {
    const key = keys[index];
    result[index] = callback(object[key], key, object);
  }

  return result;
}

export function map(collection: Collection, callback: DefaultCallback | PropertyKey): Array<unknown> {
  if (typeof callback !== 'function') {
    callback = createCallbackWithKey(callback);
  }

  return Array.isArray(collection) ? arrayMap(collection, callback) : objectMap(collection, callback);
}
