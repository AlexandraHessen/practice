// округление до произвольного модуля
function roundMod(n,m) {
    return Math.round(n/m)*m;
}

// получение целого случайного числа в заданном диапазоне
function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}
