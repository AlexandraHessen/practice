o = new Object();
o.prop = 'существует';

function changeO() {
  o.newprop = o.prop;
  delete o.prop;
}

o.hasOwnProperty('prop');   // вернёт true
changeO();
o.hasOwnProperty('prop');   // вернёт false

o = new Object();
o.prop = 'существует';
o.hasOwnProperty('prop');             // вернёт true
o.hasOwnProperty('toString');         // вернёт false
o.hasOwnProperty('hasOwnProperty');   // вернёт false