<script>

"use strict";

var friend={
    gender:'муж',
    age:25,

    get fio() { return this._shadowFio },
    set fio(newVal) { this._shadowFio=newVal; friendChanged(); },
};

function friendChanged() {
    console.log('обнаружено, что друг изменился: фио=' + friend.fio + ' пол=' + friend.gender);
}

console.log('вношу изменения...');
friend.fio='Иванов Петя';
friend.gender='мужской';
console.log('изменения внесены: фио=' + friend.fio + ' пол=' + friend.gender);

</script>
