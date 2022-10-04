let firstName = "Roman";

function logFistName() {
  console.log(firstName);
};

// если переменная объявлена внутри через const, то ее никто не перекрывает
function makeFirstNameLogger() {
  const firstName = "Alex";
  return function () {
    console.log(firstName);
  }
}


const customFirstNameLogger = makeFirstNameLogger();
customFirstNameLogger(); //"Alex"

logFistName(); //"Roman"
firstName = "Dasha";
logFistName(); //"Dasha"
customFirstNameLogger(); //Alex