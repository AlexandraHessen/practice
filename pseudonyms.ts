type Pet = 'cat' | 'dog' | 'hamster';

let petT: Pet;

petT = 'cat'; // Ok
petT = 'dog'; // Ok
petT = 'hamster'; // Ok
petT = 'alligator'; // Compiler error