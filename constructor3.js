// перепишем класс User на чистых функциях

// 1. Создаём функцию constructor
function User(name) {
    this.name = name;
  }
  // каждый прототип функции имеет свойство constructor по умолчанию,
  // поэтому нам нет необходимости его создавать
  
  // 2. Добавляем метод в прототип
  User.prototype.sayHi = function() {
    alert(this.name);
  };
  
  // Использование:
  let user = new User("Иван");
  user.sayHi();