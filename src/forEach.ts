import {Collection} from './types';

function isArrayLike(value: Collection): boolean {
  // 유사 배열 객체는 함수가 아니고 length가 있는 객체
  return value && typeof value !== 'function' && value.length >= 0;
}

function arrayEach(param: Collection, callback: (...args) => boolean) {
  const {length} = param;
  for (let index = 0; index < length; index += 1) {
    if (callback(param[index], index, param) === false) {
      break;
    }
  }

  return param;
}

function objectEach(object: Collection, callback: (...args) => boolean) {
  const keys = Object.keys(object);
  const {length} = keys;
  for (let index = 0; index < length; index += 1) {
    const key = keys[index];
    if (callback(object[key], key, object) === false) {
      break;
    }
  }

  return object;
}

export function forEach(param: Collection, callback: (...args) => boolean): Collection {
  return Array.isArray(param) || isArrayLike(param) ? arrayEach(param, callback) : objectEach(param, callback);
}
