"use strict";

var user = {};

Object.defineProperty(user, "name", {
  value: "Вася",
  writable: false, // запретить присвоение "user.name="
  configurable: false // запретить удаление "delete user.name"
});

// Теперь попытаемся изменить это свойство.

// в strict mode присвоение "user.name=" вызовет ошибку
user.name = "Петя";