import {Collection, DefaultCallback} from './types';

function arrayFilter(array: Array<unknown>, callback: DefaultCallback) {
  const {length} = array;
  const result = [];
  for (let index = 0; index < length; index += 1) {
    if (!callback(array[index], index, array)) continue;
    result.push(array[index]);
  }

  return result;
}

function objectFilter(object: Record<PropertyKey, unknown>, callback: DefaultCallback) {
  const keys = Object.keys(object);
  const {length} = keys;
  const result = [];
  for (let index = 0; index < length; index += 1) {
    const key = keys[index];
    if (!callback(object[key], key, object)) continue;
    result.push(object[key]);
  }

  return result;
}

function matchWithKey(match: PropertyKey): DefaultCallback {
  return (value) => {
    return value[match];
  };
}

function matchWithProperty(match: Array<unknown>): DefaultCallback {
  const [matchKey, matchValue] = match;

  return (value) => {
    return value[matchKey as PropertyKey] === matchValue;
  };
}

function matchWithObject(match: Record<PropertyKey, unknown>): DefaultCallback {
  return (value) => {
    for (const prop in match) {
      if (match[prop] !== value[prop]) {
        return false;
      }
    }

    return true;
  };
}

function createCallback(param): DefaultCallback {
  if (Array.isArray(param)) {
    return matchWithProperty(param);
  }

  if (typeof param === 'string') {
    return matchWithKey(param);
  }

  return matchWithObject(param);
}

export function filter(param: Collection, predicate: DefaultCallback | Collection): Collection {
  if (typeof predicate !== 'function') {
    predicate = createCallback(predicate);
  }

  return Array.isArray(param) ? arrayFilter(param, predicate) : objectFilter(param, predicate);
}
