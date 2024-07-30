class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null; // Initialize first to null, as the stack starts empty
        this.length = 0;   // Initialize length to zero
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
        } else {
            newNode.next = this.first; // Point new node's next to current first
            this.first = newNode;      // Update first to the new node
        }
        this.length++;
    }

    pop() {
        if (this.length === 0) {
            return null; // Stack is empty, return null or throw an error
        }
        const poppedValue = this.first.value; // Get value of the first node
        this.first = this.first.next; // Update first to the next node
        this.length--; // Decrease length
        return poppedValue; // Return the popped value
    }

    // Method to visualize the stack (for testing)
    printStack() {
        let current = this.first;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

let theStack = new Stack();
theStack.push(0);
theStack.push(1);
theStack.push(2);

console.log("Popped value:", theStack.pop()); // Output: Popped value: 2
console.log("Popped value:", theStack.pop()); // Output: Popped value: 1

theStack.printStack();  // Output: 0
