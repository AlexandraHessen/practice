// снова предполагаем, что функция печати определена
console.log('stringArray:', stringArray.join());
console.log('Сортировка:', stringArray.sort());

console.log('numberArray:', numberArray.join());
console.log('Сортировка без функции сравнения:', numberArray.sort());
console.log('Сортировка с функцией compareNumbers:', numberArray.sort(compareNumbers));

console.log('numericStringArray:', numericStringArray.join());
console.log('Сортировка без функции сравнения:', numericStringArray.sort());
console.log('Сортировка с функцией compareNumbers:', numericStringArray.sort(compareNumbers));

console.log('mixedNumericArray:', mixedNumericArray.join());
console.log('Сортировка без функции сравнения:', mixedNumericArray.sort());
console.log('Сортировка с функцией compareNumbers:', mixedNumericArray.sort(compareNumbers));