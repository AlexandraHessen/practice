const fs = require('fs');

async function main() {
    console.log('start'); //A

    setTimeout(() => console.log('setTimeout'), 0); //B
    setImmediate(() => console.log('setImmediate')); //C

    Promise.resolve()
        .then(() => {
            console.log('promise'); //D
            process.nextTick(() => console.log('promise next tick')); //E
        });

    fs.readFile('index.js', () => {
        console.log('read file'); //F
        setTimeout(() => console.log('read file setTimeout'), 0); //G
        setImmediate(() => console.log('read file setImmediate')); //H
        process.nextTick(() => console.log('read file nextTick')); //I
    });

    const response = await Promise.resolve('async/await');
    console.log(response); //J

    process.nextTick(() => console.log('nextTick')); //K
    setTimeout(() => console.log('setTimeout'), 0); //L

    console.log('end'); //M
}