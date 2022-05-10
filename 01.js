function isUnique(string) {
  // for (var i = 0; i < string.length; i++) {
  //   const char = string[i];

  //   if (string.lastIndexOf(char) !== i) {
  //     return false;
  //   }
  // }
  // return true;

new Set(string).size === string.length

}

console.log(isUnique("abcdef")); // -> true
console.log(isUnique("1234567")); // -> true
console.log(isUnique("abcABC")); // -> true
console.log(isUnique("abcadef")); // -> false
