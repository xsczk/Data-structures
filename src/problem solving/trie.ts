/**
 * This function should add the given word
 * starting from the given index to the Trie.
 *
 * It will be recursive and notify the correct child of this Trie
 * to add the word starting from a later index.
 *
 * Consider what the add function should do when it reaches the end of the word
 * as a word does not necessarily end at a leaf.
 *
 * You must mark nodes which are the ends of words
 * so that the words can be reconstructed later.
 *
 * @example
 * var firstTrie = new Trie();
 * firstTrie.addWord("fun")
 * firstTrie.characters // {f: Trie}
 * !!firstTrie.characters["f"] // true
 *
 * firstTrie.characters.f.characters.u // {u: Trie}
 * !!firstTrie.characters.f.characters.u // true
 *
 * firstTrie.characters.f.characters.u.characters.n.isWord // true
 * !!firstTrie.characters.f.characters.u.characters.n // true
 * !!firstTrie.characters.f.characters.u.characters.n.characters // {}
 *
 * !!firstTrie.characters.f.characters.u.characters.l // true
 *
 * var secondTrie = new Trie();
 * secondTrie.addWord("ha")
 * secondTrie.addWord("hat")
 * secondTrie.addWord("has")
 * secondTrie.addWord("have")
 * secondTrie.addWord("hate")
 *
 * secondTrie.characters.h.characters.a.isWord // true
 * secondTrie.characters.h.characters.a.characters.t.isWord // true
 * secondTrie.characters.h.characters.a.characters.v.isWord // false
 * secondTrie.characters.h.characters.a.characters.v.characters.e.isWord // true
 * secondTrie.characters.h.characters.a.characters.t.characters.e.isWord // true
 *
 * Object.keys(secondTrie.characters.h.characters.a.characters).length // 3
 */

class Trie {
  characters: { [key: string]: Trie };
  isWord: boolean;

  constructor() {
    this.characters = {};
    this.isWord = false;
  }

  /**
   * Using recursively
   * @param word
   * @param index
   */
  addWord(word: string, index = 0) {
    /** Base case: If we have reached the end of the word */
    if (index === word.length) {
      this.isWord = true;
      return;
    }
    const char = word[index];

    /** If the `char` doesn't exist in current node, create a new node */
    if (!this.characters[char]) this.characters[char] = new Trie();

    /** Recursively call addWord on the child Tri node for the next character */
    this.characters[char].addWord(word, index + 1);
  }
}

const firstTrie = new Trie();
firstTrie.addWord('hello');
firstTrie.addWord('helu');
console.log(firstTrie.characters.h.characters.e.characters.l);
