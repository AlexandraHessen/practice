var x = {a: true, b: true};
var y = Object.create(x);
delete y.a
console.log(x); //{a: true, b: true}
console.log(y); //{__proto__: x}