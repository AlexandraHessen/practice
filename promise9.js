Promise.resolve("1")
    // Promise.resolve вернул "1"
    .then(data => {
        console.log(data); // => "1"
    })

    // .then ничего не вернул
    .then(data => {
        console.log(data); // => "undefined"
        return "2";
    })

    // .then вернул "2"
    .then(data => {
        console.log(data); // => "2"
    })