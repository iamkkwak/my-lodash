import {Collection} from './types';

function arrayReduce(array: Array<unknown>, iteratee: (...args) => unknown, initialValue: unknown) {
  let accumulator = initialValue || array[0];
  const {length} = array;
  for (let index = initialValue ? 0 : 1; index < length; index += 1) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }

  return accumulator;
}

function objectReduce(object: Record<PropertyKey, unknown>, iteratee: (...args) => unknown, initialValue: unknown) {
  let accumulator = initialValue || object[0];
  const keys = Object.keys(object);
  const {length} = keys;
  for (let index = initialValue ? 0 : 1; index < length; index += 1) {
    const key = keys[index];
    accumulator = iteratee(accumulator, object[key], key, object);
  }

  return accumulator;
}

export function reduce(collection: Collection, iteratee: (...args) => unknown, accumulator: unknown): unknown {
  return Array.isArray(collection)
    ? arrayReduce(collection, iteratee, accumulator)
    : objectReduce(collection, iteratee, accumulator);
}
