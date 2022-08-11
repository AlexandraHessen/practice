var proto = {};
var obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true

Object.getPrototypeOf('foo')
//TypeError: "foo" is not an object  // код ES5
Object.getPrototypeOf('foo')
String.prototype                   // код ES6