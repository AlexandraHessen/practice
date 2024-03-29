// Шаги алгоритма ECMA-262, 5-е издание, 15.4.4.22
// Ссылка (en): http://es5.github.io/#x15.4.4.22
// Ссылка (ru): http://es5.javascript.ru/x15.4.html#x15.4.4.22
if ('function' !== typeof Array.prototype.reduceRight) {
    Array.prototype.reduceRight = function(callback/*, initialValue*/) {
      'use strict';
      if (null === this || 'undefined' === typeof this) {
        throw new TypeError('Array.prototype.reduce called on null or undefined');
      }
      if ('function' !== typeof callback) {
        throw new TypeError(callback + ' is not a function');
      }
      var t = Object(this), len = t.length >>> 0, k = len - 1, value;
      if (arguments.length >= 2) {
        value = arguments[1];
      } else {
        while (k >= 0 && !k in t) {
          k--;
        }
        if (k < 0) {
          throw new TypeError('Reduce of empty array with no initial value');
        }
        value = t[k--];
      }
      for (; k >= 0; k--) {
        if (k in t) {
          value = callback(value, t[k], k, t);
        }
      }
      return value;
    };
  }