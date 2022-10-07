let openRequest = indexedDB.open("store", 2);

openRequest.onupgradeneeded = function(event) {
  // версия существующей базы данных меньше 2 (или база данных не существует)
  let db = openRequest.result;
  switch(event.oldVersion) { // существующая (старая) версия базы данных
    case 0:
      // версия 0 означает, что на клиенте нет базы данных
      // выполнить инициализацию
    case 1:
      // на клиенте версия базы данных 1
      // обновить
  }
}