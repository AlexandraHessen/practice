let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // 4

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.

const styles=["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
let midleArr=Math.floor(styles.length/2);
styles[midleArr]="Классика";
console.log(styles);
console.log(styles.shift());
styles.unshift("Рэп", "Регги")

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // arr => "a","b",function