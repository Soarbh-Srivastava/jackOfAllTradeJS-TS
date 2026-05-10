function reverseWords(sentence) {
    var word = sentence.split(" ");
    var l = 0;
    var r = word.length - 1;
    while (l <= r) {
        var temp = word[l];
        word[l] = word[r];
        word[r] = temp;
        l++;
        r--;
    }
    return word.join(" ");
}
var sentence = " This is word ";
console.log(reverseWords(sentence));
