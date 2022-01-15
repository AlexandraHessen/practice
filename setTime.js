let timerId = setTimeout(() => alert("ничего не происходит"), 1000);
alert(timerId); // идентификатор таймера

clearTimeout(timerId);
alert(timerId); // тот же идентификатор (не принимает значение null после отмены)

var counter;
var tickTimer;

function start() {
    setTimeout(stop,1000);
    counter=0;
    tickTimer=setTimeout(tick,0)
}

function tick() {
    counter++;
    tickTimer=setTimeout(tick,0)
}

function stop() {
    clearTimeout(tickTimer);
    alert('срабатываний в секунду: '+counter);
}