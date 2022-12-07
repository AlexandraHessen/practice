function check(a, x) {
    let arr = [];
    for (let i = 0; i < a.length; i++) {
        if (x.includes(a[i])) {
            arr.push(a[i]);
        }
    }
    return arr;
}