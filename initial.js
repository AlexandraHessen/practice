var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x,
    initialValue
);
// sum == 6

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
  });
  // flattened равен [0, 1, 2, 3, 4, 5]

