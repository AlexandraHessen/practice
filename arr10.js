let arr =[1,2,3,4]
arr[10]=0
arr.length //11

let arr =[1,2,3,4]
arr[5]=0      // (6) [1, 2, 3, 4, empty, 0]
delete arr[5] // (6) [1, 2, 3, 4, empty, empty]
arr.length    //  6