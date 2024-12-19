/**
 * Write a function called isSubsequence which takes in two strings
 * and checks whether the characters in the first string
 * form a subsequence of the characters in the second string.
 * In other words, the function should check whether the characters
 * in the first string appear somewhere in the second string,
 * without their order changing.
 */
function isSubsequence(str1: string, str2: string): boolean {
  let idx1 = 0;
  let idx2 = 0;
  while (idx2 < str2.length) {
    const char1 = str1[idx1];
    const char2 = str2[idx2];
    if (char1 === char2) idx1++;
    idx2++;
    if (idx1 === str1.length) return true;
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'eracadabra')); // false
console.log(isSubsequence('abc', 'acb')); // false (order matters)
console.log(isSubsequence('makfsns', 'mkdmkamskdmkmfptsofnkajnsdbu')); // true

/**
 * using multiple pointers pattern: This will check if substring
 * in first string appear exact somewhere inside second string
 */
