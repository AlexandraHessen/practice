// безымянный
var Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle.name);
  // отобразится: "Rectangle"
  
  // именованный
  var Rectangle = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle.name);
  // отобразится: "Rectangle2" 