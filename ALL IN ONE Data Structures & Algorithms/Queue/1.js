class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;  // Front of the queue
        this.last = null;   // End of the queue
        this.length = 0;    // Number of elements in the queue
        this.minStack = []; // Auxiliary stack to track minimum values
    }

    // Add an element to the end of the queue (enqueue)
    enque(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
        } else {
            this.last.next = newNode;
        }
        this.last = newNode;
        this.length++;

        // Update minimum stack
        if (this.minStack.length === 0 || value <= this.getMin()) {
            this.minStack.push(value);
        }
    }

    // Remove and return the first element in the queue (dequeue)
    deque() {
        if (this.length === 0) {
            return null; // Queue is empty
        }
        const removedValue = this.first.value;
        this.first = this.first.next;
        this.length--;

        // Update minimum stack
        if (removedValue === this.getMin()) {
            this.minStack.pop();
        }

        return removedValue;
    }

    // Get the minimum value in the queue
    getMin() {
        if (this.minStack.length === 0) {
            return null; // No minimum value found
        }
        return this.minStack[this.minStack.length - 1];
    }

    // Print all elements in the queue (for testing)
    printQueue() {
        let current = this.first;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Example usage:
let myQueue = new Queue();
myQueue.enque(2);
myQueue.enque(1);
myQueue.enque(3);

console.log("Minimum value:", myQueue.getMin()); // Output: Minimum value: 1

myQueue.deque(); // Remove 2 from the queue

console.log("Minimum value after dequeue:", myQueue.getMin()); // Output: Minimum value after dequeue: 1

myQueue.printQueue(); // Output: 1 -> 3 (since 2 was dequeued)
