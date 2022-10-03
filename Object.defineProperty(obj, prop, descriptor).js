Object.defineProperty(nameObj, nameKey, descriptor)

user.name = "Вася";

// 2. указание значения через дескриптор
Object.defineProperty(user, "name", { 
    value: "Вася", 
    configurable: true, 
    writable: true, 
    enumerable: true 
});