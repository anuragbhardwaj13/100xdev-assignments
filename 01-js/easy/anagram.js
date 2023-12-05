/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length != str2.length) {
    return false;
  }
  let charArr = new Array(26);
  charArr.fill(0);
  // console.log(charArr);
  for (let i = 0; i < str1.length; i++) {
    if (charArr[str1.charCodeAt(i) - 97] === " ") {
      continue;
    }
    charArr[str1.charCodeAt(i) - 97] = 1;
  }
  // console.log(charArr);

  for (let i = 0; i < str2.length; i++) {
    if (charArr[str2.charCodeAt(i) - 97] === " ") {
      continue;
    }
    charArr[str2.charCodeAt(i) - 97] = 0;
  }
  // console.log(charArr);

  for (let i = 0; i < charArr.length; i++) {
    if (charArr[i] != 0) {
      return false;
    }
  }

  return true;
}

// console.log(isAnagram("hello", "world"));
module.exports = isAnagram;
