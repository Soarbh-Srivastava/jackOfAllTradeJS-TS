function reverseWords(sentence: string) {
  let word = sentence.trim().split("\s+");

  let l = 0;
  let r = word.length - 1;

  while (l <= r) {
    let temp = word[l];
    word[l] = word[r];
    word[r] = temp;
    l++;
    r--;
  }
  return word.join(" ");
}

let sentence = " This is word ";

console.log(reverseWords(sentence));
