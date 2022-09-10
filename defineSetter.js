var o = {};
o.__defineSetter__('value', function(val) { this.anotherValue = val; });
o.value = 5;
console.log(o.value);         // undefined
console.log(o.anotherValue);  // 5


// Способ, совместимый со стандартом

// Использование оператора set
var o = { set value(val) { this.anotherValue = val; } };
o.value = 5;
console.log(o.value);         // undefined
console.log(o.anotherValue);  // 5

// Использование метода Object.defineProperty()
var o = {};
Object.defineProperty(o, 'value', {
  set: function(val) {
    this.anotherValue = val;
  }
});
o.value = 5;
console.log(o.value);         // undefined
console.log(o.anotherValue);  // 5