var str = 'abc12aa3b9c8';
var counter = 3;
str = str
  .split('')
  .reverse()
  .map(function(char){
    if( !isNaN( char ) && counter-- > 0 )
      return '-';
    return char
  })
  .reverse()
  .join('');
console.log( str );