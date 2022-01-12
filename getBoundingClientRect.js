// получение координат элемента относительно верхнего левого угла страницы
function getElementPos(elem) {
    var bbox=elem.getBoundingClientRect();
    return {
        left: bbox.left+window.pageXOffset,
        top: bbox.top+window.pageYOffset
    };
}

// то же, кроссбраузерный вариант (в т.ч. для IE8-)
function getElementPos(elem) {
    var bbox=elem.getBoundingClientRect();

    var body=document.body;
    var docEl=document.documentElement;

    var scrollTop=window.pageYOffset||docEl.scrollTop||body.scrollTop;
    var scrollLeft=window.pageXOffset||docEl.scrollLeft||body.scrollLeft;

    var clientTop=docEl.clientTop||body.clientTop||0;
    var clientLeft=docEl.clientLeft||body.clientLeft||0;

    var top=bbox.top+scrollTop-clientTop;
    var left=bbox.left+scrollLeft-clientLeft;

    return {
        left: left,
        top: top
    };
}
