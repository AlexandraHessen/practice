const observer = new MutationObserver(
    function (mutations) {
        let scoreboardWidth = 205;
        // let resultLength = firstNumb.length;

        // if (resultLength > 10) {
        //     scoreboard.style.fontSize = scoreboardWidth / resultLength + 'px';
        // }
        // console.log("this.currentValue "+this.currentValue);
        if (str.toString().length > 10) {
            res.style.fontSize = 350 / str.toString().length + 'px';
            // if (secondNumb.toString().length > 12) {
            //     scoreboard.style.fontSize = 205 / secondNumb.toString().length + 'px';
            // }
        } else {
            res.style.fontSize = '39px';
        }

        // if (firstNumb.toString().length > 10) {
        //     scoreboard.style.fontSize = 205 / firstNumb.toString().length + 'px';
        //     if (secondNumb.toString().length > 12) {
        //         scoreboard.style.fontSize = 205 / secondNumb.toString().length + 'px';
        //     }
        // } else if (secondNumb.toString().length > 10) {
        //     scoreboard.style.fontSize = 205 / secondNumb.toString().length + 'px';
        // } else {
        //     scoreboard.style.fontSize = '39px';
        // }
    }
);
observer.observe(currentValueOnScreen, {
    childList: true
});