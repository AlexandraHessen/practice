<script>

    "use strict";

    console.log('точка 1');

    var pr=new Promise( (resolve,reject) => {
        console.log("я создан, запущен...");
        setTimeout( () => {
            console.log("я решён!");
            resolve(5);
            }, 1000);
    });

    console.log('точка 2');

    pr.then( result => {
            console.log("промис решён с результатом "+result);
        }
    );

    console.log('точка 3');

</script>