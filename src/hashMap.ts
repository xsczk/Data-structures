class HashTable {
  keyMap: any[];

  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key: string) {
    let total = 0;
    let PRIME_NUMBER = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const val = char.charCodeAt(0) - 96;
      total = (total * PRIME_NUMBER + val) % this.keyMap.length;
    }
    return total;
  }

  set(key: string, value: any) {
    const index = this._hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
  }

  get(key: string) {
    const index = this._hash(key);
    if (!this.keyMap[index]) return undefined;
    for (let i = 0; i < this.keyMap[index].length; i++) {
      const subEl = this.keyMap[index][i];
      if (subEl[0] === key) return subEl[1];
    }
  }
}

let hashTable = new HashTable(4);
hashTable.set('hello world', 'goodbye');
hashTable.set('dogs', 'are cool');
hashTable.set('cats', 'are fine');
hashTable.set('I love', 'fries chicken');
hashTable.set('avenger', 'infinity war');

hashTable.set('Are we done', 'Yes');
console.log(hashTable.get('Are we done'));
console.log(hashTable.keyMap);
