// Рассмотрим пример:
['1', '2', '3'].map(parseInt);
// Хотя ожидаемый результат вызова равен [1, 2, 3],
// в действительности получаем [1, NaN, NaN]

// Функция parseInt часто используется с одним аргументом, но она принимает два.
// Первый аргумент является выражением, а второй - основанием системы счисления.
// В функцию callback Array.prototype.map передаёт 3 аргумента:
// элемент, его индекс и сам массив.
// Третий аргумент игнорируется parseInt, но не второй, следовательно,
// возможна путаница. Смотрите запись в блоге для дополнительной информации.

const returnInt = (element) => parseInt(element, 10);

['1', '2', '3'].map(returnInt);
// Результатом является массив чисел (как и ожидалось)

// Простейший способ добиться вышеозначенного поведения и избежать чувства "чё за!?":
['1', '2', '3'].map(Number); // [1, 2, 3]