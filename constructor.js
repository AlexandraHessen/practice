function User(name) {
    // this = {};  (неявно)
  
    // добавляет свойства к this
    this.name = name;
    this.isAdmin = false;
  
    // return this;  (неявно)
  }

  let user = new User("Вася")

  let user = {
    name: "Вася",
    isAdmin: false
  };