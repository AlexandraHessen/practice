function getNumbersModulatordBy(modulus, loggerCallback) {
    // Функция, которая возвращает функцию - это подход из функционального программирования
    // Называется замыканием (Closure)
    return function(start, end) {
      loggerCallback({ message: "Конфигурация", config: configuration });
      loggerCallback({ message: "Полученный модулятор", modulus: modulus });
      loggerCallback({
        message: "Полученный start и end",
        start: start,
        end: end
      });
   