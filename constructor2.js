class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
  }
  
  // класс - это функция
  alert(typeof User); // function
  
  // ...или, если точнее, это метод constructor
  alert(User === User.prototype.constructor); // true
  
  // Методы находятся в User.prototype, например:
  alert(User.prototype.sayHi); // alert(this.name);
  
  // в прототипе ровно 2 метода
  alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi