class CoffeeMachine {
    #waterLimit = 200;
  
    #checkWater(value) {
      if (value < 0) throw new Error("Отрицательный уровень воды");
      if (value > this.#waterLimit) throw new Error("Слишком много воды");
    }
  }
  
  let coffeeMachine = new CoffeeMachine();
  
  // снаружи  нет доступа к приватным методам класса
  coffeeMachine.#checkWater(); // Error
  coffeeMachine.#waterLimit = 1000; // Error