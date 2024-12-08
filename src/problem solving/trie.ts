class Trie {
  characters: { [key: string]: Trie };
  isWord: boolean;

  constructor() {
    this.characters = {};
    this.isWord = false;
  }

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
   * @example
   * ar secondTrie = new Trie();
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

  /**
   * Write a function called `findWord` which accepts a string
   * and returns the characters object for the last character
   * in that word if the string is a word in the Trie,
   * otherwise it returns undefined. Try to solve this
   * without having to find every single word in the Trie.
   * `addWord` is implement to help you test the function.
   * @example
   * var t = new Trie();
   * t.addWord('fun')
   * t.addWord('fast')
   * t.addWord('fat')
   * t.addWord('fate')
   * t.addWord('father')
   *
   * t.findWord('taco') // undefined
   * t.findWord('fat').characters // {t: Trie}
   * t.findWord('father').characters // {}
   * t.findWord('father').isWord // true
   */
  findWord(word: string): Trie | undefined {
    let currNode: Trie = this;
    for (const char of word) {
      /** The character does not found in the current Trie */
      if (!currNode.characters[char]) return undefined;
      currNode = currNode.characters[char];
    }
    if (currNode.isWord) return currNode;

    /** The word does not end at a valid `char` node */
    return undefined;
  }

  /**
   * Write a function on the Trie.prototype called getWords
   * which returns an array of all of the words in the Trie.
   *
   * @example
   * var t = new Trie();
   * t.addWord('fun')
   * t.addWord('fast')
   * t.addWord('fat')
   * t.addWord('fate')
   * t.addWord('father')
   * t.addWord('forget')
   * t.addWord('awesome')
   * t.addWord('argue')
   *
   * t.getWords() // ["fun", "fast", "fat", "fate", "father", "forget", "awesome", "argue"]
   * t.getWords().length // 8
   *
   * @return an array of all the words in the Trie
   */
  getWords(prefix = '', currNode: Trie = this): string[] {
    let words: string[] = [];

    /** If the current node is the end of a word, add the prefix to the words array */
    if (currNode.isWord) words.push(prefix);

    /** Traverse each child of current node */
    for (const char in currNode.characters) {
      if (currNode.characters.hasOwnProperty(char)) {
        words = words.concat(
          currNode.characters[char].getWords(`${prefix}${char}`),
        );
      }
    }
    return words;
  }

  getWordsAnotherApproach(words: string[] = [], prefix = '') {
    if (this.isWord) words.push(prefix);
    for (const char in this.characters) {
      if (this.characters.hasOwnProperty(char)) {
        this.characters[char].getWordsAnotherApproach(
          words,
          `${prefix}${char}`,
        );
      }
    }
    return words;
  }

  /**
   * Write a function on the Trie class named autoComplete
   * which accepts a string and returns an array
   * of all the possible options in the Trie for that string.
   *
   * @example
   * var t = new Trie();
   * t.addWord('fun')
   * t.addWord('fast')
   * t.addWord('fat')
   * t.addWord('fate')
   * t.addWord('father')
   * t.addWord('forget')
   * t.addWord('awesome')
   * t.addWord('argue')
   *
   * t.autoComplete('fa') // ["fast","fat", "fate", "father"]
   * t.autoComplete('a') // ["awesome", "argue"]
   * t.autoComplete('arz') // []
   */
  autoComplete(prefix: string): string[] {
    let currNode: Trie = this;
    let char: string;
    for (let i = 0; i < prefix.length; i++) {
      char = prefix[i];
      if (!currNode.characters?.[char]) return [];
      currNode = currNode.characters[char];
    }
    /** Using getWords method to resolve this with prefix is the input `str`,
     * and currNode is the starting node to traverse from Trie */
    return this.getWords(prefix, currNode);
  }

  autoCompleteAnotherApproach(prefix: string): string[] {
    let currNode: Trie = this;
    let char: string;
    for (let i = 0; i < prefix.length; i++) {
      char = prefix[i];
      if (!currNode.characters?.[char]) return [];
      currNode = currNode.characters[char];
    }
    return currNode.getWordsAnotherApproach([], prefix);
  }

  /**
   * Write a function called removeWord which accepts a string
   * and removes the word from the Trie.
   * addWord is implemented to help you test the function.
   *
   * @example
   * var t = new Trie();
   * t.addWord('fun')
   * t.addWord('fast')
   * t.addWord('fat')
   * t.addWord('fate')
   * t.addWord('father')
   * t.addWord('forget')
   * t.addWord('awesome')
   * t.addWord('argue')
   *
   *
   * t.removeWord('fat')
   * t.characters.f.characters.a.characters.t.isWord // false
   * t.characters.f.characters.a.characters.t.characters.e.isWord // true
   *
   * t.removeWord('argue')
   *
   * t.characters.a.characters.r // undefined
   */
  removeWord(word: string) {
    this._removeWord(word, 0);
  }

  private _removeWord(word: string, index = 0) {
    if (word.length === 0) return false;
    if (word.length === index) {
      /** If we reach the end of the word, mark it as not a word */
      if (!this.isWord) return false;
      this.isWord = false;
      /** We can delete this character (node) if it does not have any child */
      return Object.keys(this.characters).length === 0;
    }
    const char = word[index];
    const nextNode: Trie = this.characters[char];
    if (!nextNode) return false;
    const shouldDelNode = nextNode._removeWord(word, index + 1);
    if (shouldDelNode) {
      delete this.characters[char];
      /**
       * the currentNode deleted so we check if the previous node
       * now does not have any child either AND it is NOT a word
       * (this prevents from deleting another valid word)
       * we can delete it safety
       */
      return Object.keys(this.characters).length === 0 && !this.isWord;
    }
    /**
     * If we cannot delete the currentNode, so does the previousNode
     * because if we return true here,
     * it will run into delete statement in the previous recursion
     */
    return false;
  }
}

const firstTrie = new Trie();
firstTrie.addWord('hello');
firstTrie.addWord('helu');
// console.log(firstTrie.characters.h.characters.e.characters.l);
console.log(firstTrie.findWord('he')?.characters);

const t = new Trie();
t.addWord('fun');
t.addWord('fast');
t.addWord('fat');
t.addWord('fate');
t.addWord('father');
t.addWord('forget');
t.addWord('awesome');
t.addWord('argue');
t.addWord('ar');

const ex = {
  characters: {
    f: {
      characters: {
        u: {
          characters: {
            n: {
              characters: {},
              isWord: true,
            },
          },
          isWord: false,
        },
        a: {
          characters: {
            s: {
              characters: {
                t: {
                  characters: {},
                  isWord: true,
                },
              },
              isWord: false,
            },
            t: {
              characters: {
                e: {
                  characters: {},
                  isWord: true,
                },
              },
              isWord: true,
            },
          },
          isWord: false,
        },
      },
      isWord: false,
    },
  },
  isWord: false,
};

// console.log(t.findWord('taco')); // undefined
// console.log(t.findWord('fat').characters); // {t: Trie}
// console.log(t.findWord('father').characters); // {}
// console.log(t.findWord('father').isWord) // true

// console.log(t.getWordsAnotherApproach());
// console.log(t.autoCompleteAnotherApproach('fa'));

console.log(t.characters.a.characters.r);
t.removeWord('argue');
console.log(t.characters.a.characters.r);
