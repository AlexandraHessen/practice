// повторить с интервалом 2 секунды
let timerId = setInterval(() => alert('tick'), 2000);

// остановить вывод через 5 секунд
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);



var counter;
var tickTimer;

function start() {
    setTimeout(stop,1000);
    counter=0;
    tickTimer=setInterval(tick,0)
}

function tick() {
    counter++;
}

function stop() {
    clearInterval(tickTimer);
    alert('срабатываний в секунду: '+counter);
}