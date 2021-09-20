/** return the first non-repeating character in a string
 *  ex. "aaabcccc" -> "b"
 *      "aaabbcceff" -> "e"
 *      "aabbcc" -> "_"
 */

function firstNonRepeat(str) {
  // if empty string, return "_"
  if (!str) return "_";

  // create map to remember if we've seen letter before
  let map = new Map();

  for (let i = 0; i < str.length; i++) {
    // letter is in map -> set to -1
    if (map.get(str[i])) {
      map.set(str[i], -1);
    } else {
      // letter is not in map yet -> set to 1
      map.set(str[i], 1);
    }
  }

  // loop through all keys, return the first that is set to true
  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) === 1) return str[i];
  }

  // if we've made it this far, there's no hope
  return "_";
}

module.exports = firstNonRepeat;