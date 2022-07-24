var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // забираем последнее значение
    const next = stack.pop();
    if (Array.isArray(next)) {
      // добавляем к массиву элементы не модифицируя исходное значение
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  //разворачиваем массив, чтобы восстановить порядок элементов
  return res.reverse();
}
flatten(arr1);// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]