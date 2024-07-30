class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;
        this.tail = this.head; // Update tail to point to the original head

        while (current !== null) {
            next = current.next; // Save the next node
            current.next = prev; // Reverse current node's pointer
            prev = current; // Move prev and current one step forward
            current = next;
        }

        this.head = prev; // Set the head to the last node (prev)

        return this.head;
    }
}
