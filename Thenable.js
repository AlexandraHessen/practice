class Thenable {
    constructor(num) {
      this.num = num;
    }
    then(resolve, reject) {
      alert(resolve);
      // выполнить resolve со значением this.num * 2 через 1000мс
      setTimeout(() => resolve(this.num * 2), 1000); // (*)
    }
  };
  
  async function f() {
    // код будет ждать 1 секунду,
    // после чего значение result станет равным 2
    let result = await new Thenable(1);
    alert(result);
  }
  
  f();