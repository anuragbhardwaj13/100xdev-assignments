/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[,'-.!?]/g,"");
  let i = 0;
  let j = str.length - 1;
  for (i; i <= j; ) {
    // console.log(str[i]+" ith")
    // console.log(str[j]+" jth")
    if (str[i] == " ") {
      // console.log(str[i]+" ith space")
      i++;
    }
    if (str[j] == " ") {
      // console.log(str[j]+" jth space")
      j--;
    }
    if (str[i] !== str[j]) {
      //  console.log(str[i]+" ith incorrect")
      //  console.log(str[j]+" jth incorrect")
      return false;
    }
    i++;
    j--;
  }
  return true;
}
//  console.log(isPalindrome("Eva, can I see bees in a cave?"));
module.exports = isPalindrome;
