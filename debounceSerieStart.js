"use strict";

// функция позволяет установить обработчик func, который не срабатывает слишком часто -
// если immediate=false - func будет вызван в конце серии событий,
// если immediate=true - func будет вызван в начале серии событий
// серия событий - последовательность событий, интервалы между которыми
// не превыщают interval миллисекунд
function debounceSerie(func,interval,immediate) {
    var timer;
    return function() {
        var context=this, args=arguments;
        var later=function() {
            timer=null;
            if ( !immediate )
                func.apply(context,args);
        };
        var callNow=immediate&&!timer;
        clearTimeout(timer);
        timer=setTimeout(later,interval);
        if ( callNow )
            func.apply(context,args);
    };
};

var fireButton=document.getElementById('IFire');
fireButton.addEventListener('click',debounceSerie(fire,1000,true));
// fire будет вызван не раньше чем через секунду после предыдущего выстрела

var fireCount=0;
function fire() {
    fireCount++;
    console.log('Выстрел №'+fireCount);
}