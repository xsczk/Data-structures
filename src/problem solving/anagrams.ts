function isValidChar(char: string) {
  const code = char.charCodeAt(0);
  return !(code > 47 && code < 58);
}

/**
 * given two strings, write a function to determine
 * if the second string is an anagram of the first.
 * An anagram is a word, phrase or name formed by
 * rearranging the letters of another, such as cinema, formed from iceman
 */
function validAnagrams(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;
  const hash = new Map<string, number>();
  for (const char of str1) {
    if (!isValidChar(char)) return false;
    if (!hash.has(char)) hash.set(char, 1);
    else {
      const curr = hash.get(char);
      hash.set(char, curr + 1);
    }
  }
  for (const char of str2) {
    if (!hash.has(char)) return false;
    const curr = hash.get(char);
    hash.set(char, curr - 1);
  }
  return true;
}

console.log(validAnagrams('cinema', 'iceman'));
