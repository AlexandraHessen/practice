let numbers = [2, 3, 4]; // инициализируем переменную, содержащую массив числовых значений 
let myObject = { // инициализируем переменную, содержащую объект 
  square: function( currentValue ) { // метод объекта, который принимает значение  
    return currentValue * currentValue; // возвращаем новое значение (текущее значение умноженное на себя) 
  }
};

let squared = Array.from( numbers, function( currentValue ) {
    return this.square( currentValue ); // с помощью ключевого слова this вызываем метод объекта и возвращаем результат его выполнения
}, myObject ); // объект, на который мы можем ссылаться внутри функции (с помощью клюевого слова this) 

console.log( squared ); // выводим значение переменной squared равное [4, 9, 16];