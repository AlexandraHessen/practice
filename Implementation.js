const filter = function (array, callback) {
  
    const filtered_array = [];
  
    array.forEach(function (element, index, array) {
        if (callback(element, index, array)) {
            filtered_array.push(element);    
        }
    });
  
    return filtered_array;
  
};