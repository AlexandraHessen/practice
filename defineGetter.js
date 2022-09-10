var o = {};
o.__defineGetter__('gimmeFive', function() { return 5; });
console.log(o.gimmeFive); // 5


// Способы, совместимые со стандартом

// Использование оператора get
var o = { get gimmeFive() { return 5; } };
console.log(o.gimmeFive); // 5


// Использование Object.defineProperty()
var o = {};
Object.defineProperty(o, 'gimmeFive', {
  get: function() {
    return 5;
  }
});
console.log(o.gimmeFive); // 5