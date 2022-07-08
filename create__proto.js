function create(__proto) {
    function F() {
        this.f = 10;
    }
    F.prototype = __proto;
    return new F();
}

function F(){}
F.prototype = {a: 5};

var newObj = new F(); === {__proto__: F.prototype};