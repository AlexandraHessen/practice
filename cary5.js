function makeCounter() {
    var currentCount = 1;

    return function () {
        return currentCount++;
    };
}

var counter = makeCounter(); // [[Scope]] -> {currentCount: 1}

alert(counter()); // 1, [[Scope]] -> {currentCount: 1}
alert(counter()); // 2, [[Scope]] -> {currentCount: 2}
alert(counter()); // 3, [[Scope]] -> {currentCount: 3}

sum()()()()()

var add = function (a) {
    var sum = a;
    var inner = function (b) {
        if (b) {
            sum += b;
            return inner;
        } else {
            return sum;
        }
    };
    return inner;
};