function compareZP(a,b) {
    return b.zp-a.zp;
  }
  
  m.sort(compareZP);
  console.log( m );
//   [ {fio:'Сидоров', zp:1100}, {fio:'Иванов', zp:1000}, {fio:'Егоров', zp:850}, {fio:'Петров', zp:800} ]