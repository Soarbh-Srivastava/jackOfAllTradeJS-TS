function scopeTest() {
    if (true) {
        var legacyVar = "I leak out!";
        let modernLet = "I am trapped in this block!";
        const modernConst = "Me too!";
    }

    console.log(legacyVar); // "I leak out!" (var ignores the 'if' block)
    // console.log(modernLet); // ReferenceError: modernLet is not defined
    // console.log(modernConst); // ReferenceError: modernConst is not defined
}
scopeTest();