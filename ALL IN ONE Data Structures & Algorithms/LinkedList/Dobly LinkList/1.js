// Node class for the doubly linked list
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  // Doubly Linked List class
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    // Push method: Adds a node with the given value to the end of the list
    push(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this;
    }
  
    // Pop method: Removes the last node from the list and returns its value
    pop() {
      if (!this.head) return undefined;
      const poppedNode = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = poppedNode.prev;
        this.tail.next = null;
        poppedNode.prev = null;
      }
      this.length--;
      return poppedNode.value;
    }
  
    // Unshift method: Adds a node with the given value to the beginning of the list
    unshift(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
      this.length++;
      return this;
    }
  
    // Shift method: Removes the first node from the list and returns its value
    shift() {
      if (!this.head) return undefined;
      const shiftedNode = this.head;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = shiftedNode.next;
        this.head.prev = null;
        shiftedNode.next = null;
      }
      this.length--;
      return shiftedNode.value;
    }
  }
  
  