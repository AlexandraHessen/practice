<input type=button id=button1Y value='кнопка 1 успех'>
<input type=button id=button1N value='кнопка 1 ошибка'>

<script>

    "use strict";

    function createButtonPromise(buttonYId,buttonNId,result) {

        return new Promise( (resolve,reject) => {
            var buttonYElem=document.getElementById(buttonYId);
            buttonYElem.addEventListener("click", ()=>{resolve(result)} );
            var buttonNElem=document.getElementById(buttonNId);
            buttonNElem.addEventListener("click", ()=>{reject("ошибка!!!")} );
        });

    }

    createButtonPromise('button1Y','button1N',111)
    .then( result => {
            console.log("промис решён с результатом "+result);
        }
    )
    .catch( error => {
            console.log("промис отклонён с ошибкой "+error);
        }
    )
    ;

</script>