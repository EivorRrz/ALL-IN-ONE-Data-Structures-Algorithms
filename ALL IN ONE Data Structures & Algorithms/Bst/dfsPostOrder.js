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
    postOrderTraversal(node, result = []) {
        if (node !== null) {
            // Traverse the left subtree
            this.postOrderTraversal(node.left, result);
            // Traverse the right subtree
            this.postOrderTraversal(node.right, result);
            // Visit the root node
            result.push(node.value);
        }
        return result;
    }
}
