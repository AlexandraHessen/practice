        // let sum = function (a, b) {
        //     return a + b;
        // };

        // let sum=(a, b)=> a+b;
        // console.log (sum(2, 3))

        // let double = function(n) { return n * 2 }

        // let double =n=> n*2;

        // function sayHi() {
        //     alert("Привет");
        // }

        // let sayHi=()=>alert('Привет!');
        // sayHi()

        // function ask(question, yes, no) {
        //     if (confirm(question)) yes()
        //     else no();
        // }

        // function showOk() {
        //     alert("Вы согласны.");
        // }

        // function showCancel() {
        //     alert("Вы отменили выполнение.");
        // }

        // // использование: функции showOk, showCancel передаются в качестве аргументов ask
        // ask("Вы согласны?", showOk, showCancel);

        // function showMessage() {
        //     alert('Всем привет!');
        // }

        // let abc=(a, b, c)=>a*b*c

        // let ask = (question, yes, no) => {
        //     if (confirm(question)) yes()
        //     else no();
        // }

        // ask(
        //     "Вы согласны?",
        //     () => alert("Вы согласны."),
        //     () => alert("Вы отменили выполнение.")
        // )

        // let str=prompt('Введите строку:');        
        // let strArr=str.toLowerCase().split('');
        // let vowArr=['a', 'e', 'i', 'o', 'u'];
        // function delVowel(v){
        //     return(vowArr.indexOf(v)==-1);
        // }
        // let strArrV=strArr.filter(delVowel);
        // alert(strArrV);
        // console.log(strArrV.tostr());

        // let strPl = prompt('Введите строку:') 
        // function delVow(str) {


        // }

        // let delVow=str=>{
        //     let vow = 'aeiouAEIOU';
        //     for (let i = 0; i < str.length; i++) {
        //         if ((vow.indexOf(str[i])) !== -1)
        //             str = str.replace(str[i], '')
        //     }
        //     return str;

        // }
        // alert(delVow(strPl));

        // let strPl=prompt('Введите слово:');
        // let obj={};
        // // function isIsogram (str){
        // //     str=str.toLowerCase().split('');
        // //     let obj={};
        // //     for (let i=0; i<str.length; i++){
        // //         if (!(str[i] in obj))
        // //             obj[str[i]]=0;
        // //         obj[str[i]]++;
        // //         if (obj[str[i]]!=1){
        // //             return false;
        // //         }
        // //     }
        // //      return true;
        // //     }

        //     let isIsogram=str=>{
        //         str=str.toLowerCase().split('');
        //     let obj={};
        //     for (let i=0; i<str.length; i++){
        //         if (!(str[i] in obj))
        //             obj[str[i]]=0;
        //         obj[str[i]]++;
        //         if (obj[str[i]]!=1){
        //             return false;
        //         }
        //     }
        //      return true;
        //     }


        //     (isIsogram(strPl))? 
        //     alert(`Это изограм.`):
        //     alert(`Это не изограм.`)



        //     // if (isIsogram(strPl)){
        //     //     alert(`Это изограм.`)
        //     // } else{
        //     //     alert(`Это не изограм.`)
        //     // }   
        // console.log(isIsogram(strPl));

        let ask = (question, yes, no) => {
            if (confirm(question)) yes()
            else no();
        }

        ask(
            "Вы согласны?",
            () => alert("Вы согласны."),
            () => alert("Вы отменили выполнение.")
        )