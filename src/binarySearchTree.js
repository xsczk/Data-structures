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

  //   Another approach
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

  //   Breadth first search
  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  //  Depth first search - Pre order
  DFSPreOrder() {
    let data = [];

    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
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

// console.log(tree.find(26));
// console.log(tree.search(75));
console.log(tree.BFS());
// expected output: [90, 75, 110, 60, 82, 100, 130, 25, 50]

console.log(tree.DFSPreOrder());
// expected output: [90, 75, 60, 25, 50, 82, 110, 100, 130]

// expected output:
//               90
//         75         110
//      60    82  100     130
//  25
//     50
