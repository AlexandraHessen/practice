var a = {};​
function clear(obj) {
    obj.foo = 123;
    obj = null;
}​
clear(a);
console.log(a);
