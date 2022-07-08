function foo() {
    return baz;
    var baz = true;
    function baz() {}
};
console.log(foo()); //f baz 