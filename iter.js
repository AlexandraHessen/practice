myIterable[Symbol.iterator] = function () {
    function isValidNumber(numb) {
        return typeof numb === "number" && isFinite(numb);
    };

    if (this.from > this.to ||
        !isValidNumber(this.from) ||
        !isValidNumber(this.to)) {
        throw new Error("Невалидное значение интервала!")

    }

    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return {
                    value: this.current++,
                    done: false
                };
            } else {
                return {
                    done: true
                };
            }
        }
    };
};

for (let item of myIterable) {
    console.log(item); // 1, 2, 3, 4
}