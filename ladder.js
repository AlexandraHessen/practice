let ladder = {
    step: 0,
    up() {
        this.step++
    },

    down() {
        this.step--
    },

    showStep() {
        console.log(this.step);
    }

}

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1