let user = {
    name: "Джон",
    go: function() { alert(this.name) }
  }
  
  (user.go)() // ошибка!

//   let user = {
//     name: "Джон",
//     go: function() { alert(this.name) }
//   };
  
//   (user.go)() // Джон

// Ошибка появляется, потому что точка с запятой пропущена после user = {...}.

// JavaScript не вставляет автоматически точку с запятой перед круглой скобкой (user.go)(), поэтому читает этот код так:

// let user = { go:... }(user.go)()