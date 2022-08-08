const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (sum, currentValue) => sum + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10

const euros = [29.76, 41.85, 46.5];
const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});
average // 39.37

let arr1  = [1, 2, 3, 4, 5];

let result = arr1.reduce((acc, numb) => acc + numb, 0);

alert(result); // 15


let arr = [1, 2 , 3]
let sum=arr.reduce((acc, num)=> acc+num, 0)
console.log(sum);

arr.sort( (a, b) => a - b );