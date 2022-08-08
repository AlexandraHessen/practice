function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }
  
  console.log([4, 6, 8, 12].find(isPrime)); // undefined, не найдено
  console.log([4, 5, 8, 12].find(isPrime)); // 5


  let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"},
    {id: 1, name: "Маша"}
  ];

  let user = users.find(((item)=>item.id === 1))
  let userFilt = users.filter((item)=>item.id === 1)