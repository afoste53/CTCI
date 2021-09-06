function isPermdPalindrome(str) {
  let [...chars] = str;
  chars.sort();

  let t, middleCharacter;

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === " ") {
      continue;
    } else if (!t) {
      t = chars[i];
    } else if (t === chars[i]) {
      t = null;
    } else if (middleCharacter) {
      return false;
    } else {
      middleCharacter = chars[i - 1];
      t = chars[i];
    }
  }

  return true;
}

console.log(isPermdPalindrome("tac ocat"));
console.log(isPermdPalindrome("ccjjididopp"));
console.log(isPermdPalindrome("aaannaa"));
console.log(isPermdPalindrome("civic"));
console.log(isPermdPalindrome("radar"));
console.log(isPermdPalindrome("reviver"));
console.log(isPermdPalindrome("refer the het "));
console.log(isPermdPalindrome("civic lands"));