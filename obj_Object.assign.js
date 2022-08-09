var obj = Object.create({ foo: 1 }, { // foo является унаследованным свойством.
    bar: {
      value: 2  // bar является неперечисляемым свойством.
    },
    baz: {
      value: 3,
      enumerable: true  // baz является собственным перечисляемым свойством.
    }
  });
  
  var copy = Object.assign({}, obj);
  console.log(copy); // { baz: 3 }