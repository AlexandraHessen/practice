
    "use strict";

    var ajaxHandlerScript="http://fe.it-academy.by/TestAjax3.php";

    function getIP() {

        var domain1=document.getElementById('DomName1').value;
        var domain2=document.getElementById('DomName2').value;
        var domain3=document.getElementById('DomName3').value;

        var ip1, ip2, ip3;

        fetch(ajaxHandlerScript+"?func=GET_DOMAIN_IP&domain="+domain1,{method: 'get'})
            .then( response => response.text() )
            .then( txt => {
                    ip1=txt;
                    return fetch(ajaxHandlerScript+"?func=GET_DOMAIN_IP&domain="+domain2,{method: 'get'});
                } )
            .then( response => response.text() )
            .then( txt => {
                    ip2=txt;
                    return fetch(ajaxHandlerScript+"?func=GET_DOMAIN_IP&domain="+domain3,{method: 'get'});
                } )
            .then( response => response.text() )
            .then( txt => {
                    ip3=txt;
                    alert(ip1+'\n'+ip2+'\n'+ip3);
                } )
            .catch( error => { alert('ошибка!\n'+error); } )
            ;
    }