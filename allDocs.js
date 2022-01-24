// Я хочу применить remove() ко всем документам
db.allDocs({include_docs: true})
  .then(function (result) {
    result.rows.forEach(function (row) {
      // Метод remove возвращает promise
      db.remove(row.doc);
    });
  })
  .then(function () {
    // А здесь я наивно уверен, что все документы уже удалены!
  });