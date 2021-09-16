function compressStr(str) {
  if (str.length <= 1) {
    return str;
  }

  let curr = str[0];
  let compStr = [...curr];
  let currCount = 1;

  let i = 1;

  while (i < str.length) {
    if (str[i] === curr) {
      currCount++;
    } else {
      compStr.push(currCount);
      if (i + 1 <= str.length) {
        compStr.push(str[i]);
        currCount = 1;
        curr = str[i];
      }
    }
    i++;
  }

  compStr.push(currCount);

  if (compStr.length >= str.length) {
    return str;
  } else {
    return compStr.join("");
  }
}

console.log(compressStr("aabaabb"));
