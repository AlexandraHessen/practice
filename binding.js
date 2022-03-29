<!-- View -->
Имя друга: <input type=text id='IFriendNameInput'
    onchange="friendViewChanged()"><br />
Имя друга: <span id='IFriendNameSpan'></span><br />

<script>

"use strict";

// Model
var friend={ };

Object.defineProperty(friend, 'fio', {
        get: function() { return this._shadowFio },
        set: function(newVal) { this._shadowFio=newVal; friendDataChanged(); },
        configurable: true
    }
);

function friendDataChanged() { // изменилась Model
    // переносим во View
    document.getElementById('IFriendNameInput').value=friend.fio;
    document.getElementById('IFriendNameSpan').innerHTML=friend.fio;
}

function friendViewChanged() { // изменилось View
    // переносим в Model
    friend.fio=document.getElementById('IFriendNameInput').value;
    console.log('фио='+friend.fio);
}


// вносим изменение в Model
friend.fio='Иванов Петя';
// оно автоматически отображается в View

</script>