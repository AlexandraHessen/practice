const array1 = ['a', 'b', 'c'];

let arr =[]
arr =  array1.map(element => {
     return element = `${element} строк `
 });

 console.log(array1); //['a', 'b', 'c']
 console.log(arr); //['a строк ', 'b строк ', 'c строк ']

 arr.reverse()