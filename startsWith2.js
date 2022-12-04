var str = 'Быть или не быть, вот в чём вопрос.';

console.log(str.startsWith('Быть'));        // true
console.log(str.startsWith('не быть'));     // false
console.log(str.startsWith('не быть', 9));  // true