let arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// выравнивается только один уровень
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]