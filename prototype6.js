class User{}
console.log(User.__proto__ === Function.prototype); //true
//класс - функция и он создан с помощью Function.prototype

//7
const num=5
console.log(num.__proto__ ); //Number.prototype

var a = {
    b: 1
  },
  c = Object.create(a);
//Object.create - создаёт новый объект с указанным прототипом 
//Object.create(proto[, propertiesObject])
//proto - Объект, который станет прототипом вновь созданного объекта.
//поэтому в данном случае в с лежит не просто ссылка на объект а 
// а а - является прототипом для с

console.log(c.b); //1

delete c.b;
console.log(c.b); //1 потому что с ищет b не у себя а в прототипе
//а из дочернего мы не можем удалить свойство из прототипа

delete a.b; //а тут мы удалили свойство из самого прототипа
console.log(c.b); //undefined

a.z = 2;
console.log(c.z); //2

c.z = 3;
console.log(a.z); //2