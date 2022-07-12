function foo() {
    var x;

    function x() {}

    console.log(typeof x); //function
    //!!! даже если поменять местами!!
};
foo(); // ???