function fm(v,i,a) {
    return v*v; }
  var mm=[3,5,7];
  console.log( mm.map(fm) );
//   [ 9, 25, 49 ]
  console.log( mm.map(v=>v*v) );
//   [ 9, 25, 49 ]