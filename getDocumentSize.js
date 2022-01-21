// возвращает размер открытого документа
function getDocumentSize() {
    var totalHeight=(document.body.scrollHeight > document.body.offsetHeight)?document.body.scrollHeight:document.body.offsetHeight;
    var totalWidth=(document.body.scrollWidth > document.body.offsetWidth)?document.body.scrollWidth:document.body.offsetWidth;
    return {width:totalWidth, height:totalHeight};
  }