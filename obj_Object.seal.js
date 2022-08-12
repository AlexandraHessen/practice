var obj = {
    prop: function() {},
    foo: 'bar'
  };
  
  // Новые свойства могу быть добавлены, существующие свойства могут быть изменены или удалены.
  obj.foo = 'baz';
  obj.lumpy = 'woof';
  delete obj.prop;
  
  var o = Object.seal(obj);
  
  assert(o === obj);
  assert(Object.isSealed(obj) === true);
  
  // Изменение значений свойств на запечатанном объекте всё ещё работает.
  obj.foo = 'quux';
  
  // Но вы не можете преобразовать свойства данных в свойства доступа и наоборот.
  Object.defineProperty(obj, 'foo', { get: function() { return 'g'; } }); // выбросит TypeError
  
  // Теперь любые изменения, кроме изменения значений свойств, не будут работать.
  obj.quaxxor = 'дружелюбная утка'; // молча не добавит свойство
  delete obj.foo; // молча не удалит свойство
  
  // ...а в строгом режиме такие попытки будут выбрасывать исключения TypeError.
  function fail() {
    'use strict';
    delete obj.foo; // выбросит TypeError
    obj.sparky = 'arf'; // выбросит TypeError
  }
  fail();
  
  // Попытка добавить что-то через Object.defineProperty также выбросит исключение.
  Object.defineProperty(obj, 'ohai', { value: 17 }); // выбросит TypeError
  Object.defineProperty(obj, 'foo', { value: 'eit' }); // изменяем значение существующего свойства