let pet: 'cat';

pet = 'cat'; // Ok
pet = 'dog'; // Compiler error


let pet: 'cat' | 'dog';

pet = 'cat'; // Ok
pet = 'dog'; // Ok
pet = 'zebra'; // Compiler error