var noProto = Object.create(null);

console.log(typeof noProto.__proto__); // undefined
console.log(Object.getPrototypeOf(noProto)); // null

noProto.__proto__ = 17;

console.log(noProto.__proto__); // 17
console.log(Object.getPrototypeOf(noProto)); // null

var protoHidden = {};
Object.defineProperty(protoHidden, '__proto__',
                      { value: 42, writable: true, configurable: true, enumerable: true });

console.log(protoHidden.__proto__); // 42
console.log(Object.getPrototypeOf(protoHidden) === Object.prototype); // true