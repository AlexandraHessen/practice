// function makeUser() {
//     return {
//       name: "Джон",
//       ref: this
//     };
//   };
  
//   let user = makeUser();
  
//   alert( user.ref.name ); // Error: Cannot read property 'name' of undefined

  function makeUser() {
    return {
      name: "Джон",
      ref() {
        return this;
      }
    };
  };
  
  let user = makeUser();
  
  alert( user.ref().name ); // Джон