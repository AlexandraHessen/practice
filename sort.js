var m=[
    { fio:'Иванов', zp:1000 },
    { fio:'Петров', zp:800 },
    { fio:'Сидоров', zp:1100 },
    { fio:'Егоров', zp:850 }
  ];
//   Если мы его хотим отсортировать по возрастанию фамилии, функция сравнения может быть такой:
  function compareFIO(a,b) {
    if ( a.fio<b.fio )  return -1;
    if ( a.fio>b.fio )  return 1;
    return 0;
  }
  
  m.sort(compareFIO);
  console.log( m );