// "Named Class Expression"
// (в спецификации нет такого термина, но происходящее похоже на Named Function Expression)
let User = class MyClass {
    sayHi() {
      alert(MyClass); // имя MyClass видно только внутри класса
    }
  };
  
  new User().sayHi(); // работает, выводит определение MyClass
  
  alert(MyClass); // ошибка, имя MyClass не видно за пределами класса