Promise.reject()
    // используем колбэки для .then и для .catch
    .then(
        data => console.log('ok'),   // => skip
        data => console.log('error') // => "error"
    )