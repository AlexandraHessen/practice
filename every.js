if (!Array.prototype.every) {
    Array.prototype.every = function(callbackfn, thisArg) {
      'use strict';
      var T, k;
  
      if (this == null) {
        throw new TypeError('this is null or not defined');
      }
  
      // 1. Положим O равным результату вызова ToObject над значением
      //    this, переданным в качестве аргумента.
      var O = Object(this);
  
      // 2. Положим lenValue равным результату вызова внутреннего метода Get
      //    объекта O с аргументом "length".
      // 3. Положим len равным ToUint32(lenValue).
      var len = O.length >>> 0;
  
      // 4. Если IsCallable(callbackfn) равен false, выкинем исключение TypeError.
      if (typeof callbackfn !== 'function') {
        throw new TypeError();
      }
  
      // 5. Если thisArg присутствует, положим T равным thisArg; иначе положим T равным undefined.
      if (arguments.length > 1) {
        T = thisArg;
      }
  
      // 6. Положим k равным 0.
      k = 0;
  
      // 7. Пока k < len, будем повторять
      while (k < len) {
  
        var kValue;
  
        // a. Положим Pk равным ToString(k).
        //   Это неявное преобразование для левостороннего операнда в операторе in
        // b. Положим kPresent равным результату вызова внутреннего метода
        //    HasProperty объекта O с аргументом Pk.
        //   Этот шаг может быть объединён с шагом c
        // c. Если kPresent равен true, то
        if (k in O) {
  
          // i. Положим kValue равным результату вызова внутреннего метода Get
          //    объекта O с аргументом Pk.
          kValue = O[k];
  
          // ii. Положим testResult равным результату вызова внутреннего метода Call
          //     функции callbackfn со значением T в качестве this и списком аргументов,
          //     содержащим kValue, k и O.
          var testResult = callbackfn.call(T, kValue, k, O);
  
          // iii. Если ToBoolean(testResult) равен false, вернём false.
          if (!testResult) {
            return false;
          }
        }
        k++;
      }
      return true;
    };
  }