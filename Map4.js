let john = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // попробуем использовать объект

visitsCountObj[ben] = 234; // пробуем использовать объект ben в качестве ключа
visitsCountObj[john] = 123; // пробуйем использовать объект john в качестве ключа, при этом объект ben будет замещён

// Вот что там было записано!
alert( visitsCountObj["[object Object]"] ); // 123