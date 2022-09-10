var obj = {
    get foo() {
      return Math.random() > 0.5 ? 'foo' : 'bar';
    }
  };
  
  
  // Нестандартный и устаревший способ
  obj.__lookupGetter__('foo');
  // (function() { return Math.random() > 0.5 ? 'foo' : 'bar'; })
  
  
  // Способ, совместимый со стандартом
  Object.getOwnPropertyDescriptor(obj, 'foo').get;
  // (function() { return Math.random() > 0.5 ? 'foo' : 'bar'; })