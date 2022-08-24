Promise.reject(1)
    // skip
    // обработать reject можно только в .catch
    .then(data => {
        console.log(data);
    })

    // второй аргумент .then вместо .catch
    .then(null, data => console.log(data)) // => 1

    // после обработки ошибки попадаем в .then
    // => "ok"
    .then(() => console.log('ok'));