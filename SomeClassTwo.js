function SomeClassOne() {
    this.val = 'One';
}

var o = new SomeClassOne();
console.log(o.val);

function SomeClassTwo() {
    this.val = 'Two';
    return this.val;
}

o = new SomeClassTwo();
console.log(o.val); 