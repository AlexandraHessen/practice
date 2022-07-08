var x = {
    a:  true,
    b:  false
};
var y = x;
y.b = true;
console.log(x); // {a: true, b: true}