class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (currentNode.val > val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else if (currentNode.val < val) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      } else {
        return undefined;
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    let currentNode = this.root;
    while (true) {
      if (currentNode.val === val) return currentNode;
      if (currentNode.val > val) {
        if (!currentNode.left) return false;
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) return false;
        currentNode = currentNode.right;
      }
    }
  }

  //   Other approach
  search(val) {
    if (!this.root) return false;
    let currentNode = this.root;
    let found = false;
    while (currentNode && !found) {
      if (currentNode.val > val) {
        currentNode = currentNode.left;
      } else if (currentNode.val < val) {
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return currentNode;
  }
}

const tree = new BinarySearchTree();
tree.insert(90);
tree.insert(75);
tree.insert(110);
tree.insert(130);
tree.insert(60);
tree.insert(82);
tree.insert(25);
tree.insert(50);
tree.insert(100);

console.log(tree.find(26));
console.log(tree.search(75));

// expected output:
//               90
//         75         110
//      60    82  100     130
//  25
//     50
