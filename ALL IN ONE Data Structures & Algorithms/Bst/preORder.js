class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    preOrderTraversal(node, result = []) {
        if (node !== null) {
            // Visit the root node
            result.push(node.value);
            // Traverse the left subtree
            this.preOrderTraversal(node.left, result);
            // Traverse the right subtree
            this.preOrderTraversal(node.right, result);
        }
        return result;
    }
}
const tree = new BinaryTree();
tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);
tree.root.right.left = new TreeNode(6);
tree.root.right.right = new TreeNode(7);

const result = tree.preOrderTraversal(tree.root);
console.log(result); 