var obj = {
    a: 5,
    b: {
        c: 10;
    }
};

obj.__proto__ = {
    a: 10,
    b: {
        c: 20;
    }
};

delete obj.a;
console.log(obj.a);

delete obj.a;
console.log(obj.a);

delete obj.b;
console.log(obj.b.c);

delete obj.b.c;
console.log(obj.b.c);
