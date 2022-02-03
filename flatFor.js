"use strict";

let a=[ 5, 7, 
        [ 4, [2], 8, [1,3], 2 ], 
        [ 9, [] ], 
        1, 8
      ];
function treeSum(arr){
    let sum=0;     // Обязательно приравниваем к 0, чтобы показать, что это будет числовая операция, в противном случае не будет работать
    for(let i=0; i<arr.length; i++){
        if (typeof arr[i]=='number')
        //  arr[i]*1===arr[i]
        // Array.isArray(arr)
            sum += arr[i];
        else
            sum += treeSum(arr[i]);
        }
        return sum;

        }
console.log(treeSum(a));

// flat() разворачивает массив 
// var arr1 = [1, 2, [3, 4]];
// arr1.flat();
// // [1, 2, 3, 4]

// var arr3 = [1, 2, [3, 4, [5, 6]]];
// arr3.flat(2);
// // [1, 2, 3, 4, 5, 6]

// var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// arr4.flat(Infinity);
