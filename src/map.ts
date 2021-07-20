export function map(array: Array<unknown>, callback: (...args) => boolean): Array<unknown> {
  const length = array ? array.length : 0;
  const result = new Array(length);
  for (let i = 0; i < length; i += 1) {
    result[i] = callback(array[i], i, array);
  }

  return result;
}
