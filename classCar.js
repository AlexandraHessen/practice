function Car(_model,_number,_price) {
    this.model=_model;
    this.number=_number;
    this.price=_price;
    this.show=function() {
      alert( this.model + " / "
        + this.number + " / " + this.price );
    } 
  }

  var car1=new Car('Mercedes','1111-AAA',10000);
  var car2=new Car('BMW','222-BBB',9000);
  var car3=new Car('Skoda','333-CCC',4000);

  car1.show();
  car2.show();
  car3.show();