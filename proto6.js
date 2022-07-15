var a = {
    b: 1
},
c = Object.create(a);​
console.log(c.b);
delete c.b;
console.log(c.b);
delete a.b;
console.log(c.b);
a.z = 2;
console.log(c.z);
c.z = 3;
console.log(a.z);