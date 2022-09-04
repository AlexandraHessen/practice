let user = {
    name: "John"
  };
  
  Object.defineProperty(user, "name", {
    writable: false
  });
  
  user.name = "Pete"; // Ошибка: Невозможно изменить доступное только для чтения свойство 'name'