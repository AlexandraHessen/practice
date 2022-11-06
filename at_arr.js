// Массив со значениями
const cart = ['apple', 'banana', 'pear'];

// Функция, которая возвращает последний элемент переданного массива
function returnLast(arr) {
  return arr.at(-1);
}

// Получить последний элемент нашего массива 'cart'
const item1 = returnLast(cart);
console.log(item1); // Выведет: 'pear'

// Добавить элемент в наш массив 'cart'
cart.push('orange');
const item2 = returnLast(cart);
console.log(item2); // Выведет: 'orange'