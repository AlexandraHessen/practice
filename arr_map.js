const numbers = [1, 4, 9];
const roots = numbers.map(Math.sqrt);
// теперь roots равен [1, 2, 3], а numbers всё ещё равен [1, 4, 9]

const map = Array.prototype.map;
const charCodes = map.call('Hello World', (x) => x.charCodeAt(0));
// теперь charCodes равен [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]


const string = '12345';
const reversed = Array.prototype.map.call(string, (x) => x).reverse().join('');
// reversed равен '54321'
// Бонус: используйте '===' для проверки того, является ли строка палиндромом