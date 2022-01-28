<!-- View -->
Имя друга: <input type=text id='IFriendName' onchange="friendViewChanged()">

<script>

"use strict";

// Model
var friend={ fio:'' };

function friendViewChanged() { // изменилось View
    // переносим в Model
    friend.fio=document.getElementById('IFriendName').value;
    console.log('фио='+friend.fio);
}

</script>