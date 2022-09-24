let map = function (array, callback) {
  const new_array = [];
  
  array.forEach(function (element, index, array) {
    new_array.push(callback(element));
  });
  
  return new_array;
};