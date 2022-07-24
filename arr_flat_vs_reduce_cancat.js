var arr1 = [1, 2, [3, 4]];
arr1.flat();

// В одномерный массив
arr1.reduce((acc, val) => acc.concat(val), []);// [1, 2, 3, 4]

//или
const flatSingle = arr => [].concat(...arr);