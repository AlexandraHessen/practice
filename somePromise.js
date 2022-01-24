somePromise().then(function () {
    return anotherPromise();
  })
  .then(function () {
    return yetAnotherPromise();
  })
  // простое и полезное окончание цепочки промисов:
  .catch(console.log.bind(console));