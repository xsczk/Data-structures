/**
 * Write a function called constructNote, which accepts two strings,
 * a message and some letters. The function should return true
 * if the message can be built with the letters that you are given,
 * or it should return false.
 *
 * Assume that there are only lowercase letters and no space or special characters
 * in both the message and the letters.
 *
 * @example
 * constructNote('aa', 'abc') // false
 * constructNote('abc', 'dcba') // true
 * constructNote('aabbcc', 'bcabcaddff') // true
 *
 * @param message given message
 * @param letters given some letters
 * @return {boolean} whether the `message` can be built with the given `letters`
 */

// Using frequency counter approach
function constructNote(message: string, letters: string): boolean {
   if (message.trim() === '') return true
   const map = new Map<string, number>()
   for (const char of message) {
      if (map.has(char)) {
         const currVal = map.get(char);
         map.set(char, currVal + 1);
      } else {
         map.set(char, 1)
      }
   }
   for (const letter of letters) {
      if (!map.has(letter)) continue;
      const currVal = map.get(letter);
      map.set(letter, currVal - 1);
      if (map.get(letter) === 0) map.delete(letter);
      if (!map.size) return true
   }
   return false
}

console.log(constructNote('aa', 'abc')) // false
console.log(constructNote('abc', 'dcba')) // true
console.log(constructNote('aabbcc', 'ebfavfkbcabcaddff')) // true
console.log(constructNote('', 'abc')) // false