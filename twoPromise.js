const first = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "один");
  });
  
  const second = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "два");
  });
  
  Promise.race([first, second]).then(res => console.log(res));