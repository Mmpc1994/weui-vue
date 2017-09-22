/* eslint-disable */
export function merge(target) {
  for (var i = 1, j = arguments.length; i < j; i++) {
    var source = arguments[i];
    for (var prop in source) {
      var value = source[prop];
      if (value !== undefined) {
        target[prop] = value;
      }
    }
  }

  return target;
}