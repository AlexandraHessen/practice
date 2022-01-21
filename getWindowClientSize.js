// возвращает размер клиентской области окна
function getWindowClientSize() {
    var uaB=navigator.userAgent.toLowerCase();
    var isOperaB = (uaB.indexOf('opera')  > -1);
    var isIEB=(!isOperaB && uaB.indexOf('msie') > -1);
  
    var clientWidth=((document.compatMode||isIEB)&&!isOperaB)?
      (document.compatMode=='CSS1Compat')?
      document.documentElement.clientWidth:
      document.body.clientWidth:
      (document.parentWindow||document.defaultView).innerWidth;
  
    var clientHeight=((document.compatMode||isIEB)&&!isOperaB)?
      (document.compatMode=='CSS1Compat')?
      document.documentElement.clientHeight:
      document.body.clientHeight:
      (document.parentWindow||document.defaultView).innerHeight;
  
    return {width:clientWidth, height:clientHeight};
  }