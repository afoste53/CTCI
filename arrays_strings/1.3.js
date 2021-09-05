// Given a string, replace all spaces with "%20"

function urlify1(str) {
  // original string but an array of characters
  let [...strChar1] = str;
  // new array that will include replaced spaces
  let strChar2 = [];

  for (let i = 0; i < str.length; i++) {
    if (strChar1[i] === " ") {
      strChar2.push("%");
      strChar2.push("2");
      strChar2.push("0");
    } else {
      strChar2.push(strChar1[i]);
    }
  }

  // return result as string
  return strChar2.toString();
}

function urlify2(str) {
  let L = str.length;

  // convert to arrray of characters
  let [...strArr1] = str;

  // modify length to make space for swapping " " with "%20"
  for (let i = 0; i < L; i++) {
    if (strArr1[i] == " ") {
      L += 2;
    }
  }

  // create new array with appropriate length
  let strArr2 = new Array(L);

  let j = L - 1;
  let i = strArr1.length - 1;
  for (let i = strArr1.length - 1; i >= 0; i--) {
    if (strArr1[i] === " ") {
      strArr2[j] = "0";
      strArr2[j - 1] = "2";
      strArr2[j - 2] = "%";
      j -= 3;
    } else {
      strArr2[j] = strArr1[i];
      j--;
    }
  }
  // return result as string
  return strArr2.toString();
}

let str1 = "A bland piece of poo";
let str2 = "nospaceshere";
let str3 = "the quick brown fox jumped over the lazy dog";

// v1
console.log("Str1 v1: ", urlify1(str1));
console.log("Str2 v1: ", urlify1(str2));
console.log("Str3 v1: ", urlify1(str3));

// v2
console.log("Str1 v2: ", urlify2(str1));
console.log("Str2 v2: ", urlify2(str2));
console.log("Str2 v2: ", urlify2(str3));
