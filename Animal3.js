// список свойств и методов для Animal
var Animal = {
    type: 'Invertebrates', // Значение type по умолчанию
    displayType: function() {  // Метод отображающий тип объекта Animal
      console.log(this.type);
    }
  };
  
  // Создаём объект Animal
  var animal1 = Object.create(Animal);
  animal1.displayType(); // Выведет:Invertebrates
  
  // Создаём объект Animal и присваиваем ему type = Fishes
  var fish = Object.create(Animal);
  fish.type = 'Fishes';
  fish.displayType(); // Выведет:Fishes