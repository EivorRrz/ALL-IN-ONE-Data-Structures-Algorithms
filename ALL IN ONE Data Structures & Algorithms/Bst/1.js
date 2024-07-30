class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class bst {
  constructor() {
    this.root = null;
  }
  // Insert a new value into the BST
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }
  // Recursive helper to insert a new node

  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }
  
  // Check if a value is in the BST
  includes(value) {
    return this._includesNode(this.root, value);
  }
  _includesNode(node, value) {
    if (node === null) {
      return false;
    }
    if (value === node.value) {
      return true;
    } else if (value < node.value) {
      return this._includesNode(node.left, value);
    } else {
      return this._includesNode(node.right, value);
    }
  }
}
const tree = new bst();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log(tree.includes(10)); // true
console.log(tree.includes(7)); // true
console.log(tree.includes(20)); // false
