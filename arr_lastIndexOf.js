const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
// expected output: 3

console.log(animals.lastIndexOf('Tiger'));
// expected output: 1

var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.lastIndexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
}

console.log(indices);
// [4, 2, 0]