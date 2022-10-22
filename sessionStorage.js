// Получаем ссылку на текстовое поле,
// изменение которого будем отслеживать.
var field = document.getElementById("field");

// Проверяем наличие значения 'autosave'
// (это может произойти только если страница будет случайно обновлена)
if (sessionStorage.getItem("autosave")) {
  // Восстанавливаем содержимое текстового поля
  field.value = sessionStorage.getItem("autosave");
}

// Отслеживаем все изменения в текстовом поле
field.addEventListener("change", function() {
  // И сохраняем их в объект session storage
  sessionStorage.setItem("autosave", field.value);
});