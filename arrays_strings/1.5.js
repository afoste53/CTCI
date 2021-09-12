// Using sorting
function oneAway(str1, str2) {
  if (str1 == str2) {
    return true;
  } else if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  } else {
    let [...s1] = str1;
    let [...s2] = str2;

    s1.sort();
    s2.sort();

    let oddManOut = false;
    let i = 0;
    let j = 0;

    while (i < s1.length && j < s2.length) {
      if (s1[i] != s2[j]) {
        if (oddManOut) {
          return false;
        } else if (s1[i + 1] == s2[j]) {
          i++;
          oddManOut = true;
        } else if (s1[i] == s2[j + 1]) {
          j++;
          oddManOut = true;
        }
      }
      i++;
      j++;
    }

    return true;
  }
}

console.log(oneAway("cat", "cat"));
console.log(oneAway("cat", "atfjfj"));
console.log(oneAway("cat", "bat"));
console.log(oneAway("ct", "cat"));
console.log(oneAway("bake", "bake"));
