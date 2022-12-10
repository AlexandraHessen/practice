function searchNum(num, arr) {
    let index = -1;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let i;
    if (num >= arr[0]) {
        i = 0;
        while ((arr[i] < num) && (arr[i] !== min)) i++;
    } else {
        i = arr.length - 1;
        while ((arr[i] > num) && (arr[i] !== max)) i--;
    }
    (arr[i] === num) && (index = i);
    return index;
}
