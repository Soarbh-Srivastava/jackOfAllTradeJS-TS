function  hoistingTest(){
    // variable;
    console.log(a);
    console.log(b);
    console.log(c);
    var a;
    let b;
    const c;

    // function declaration hoisting
    test()
    function test(){}

    // function expression hoisting
    funcVars();
    funcLet();
    funcConst();

    var funcVar = testFunc1{}
    let funcLet = testFunc1{}
    const funcConst = testFunc1{}
}