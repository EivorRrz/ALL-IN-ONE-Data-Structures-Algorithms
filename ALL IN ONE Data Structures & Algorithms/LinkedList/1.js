//create the node >>
class Node {
    constructor(value){
        this.head = value;
        this.next = null;

    }
}

//create the linkelist
class LinkList{
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head;
        this.length =1;
    }
}

const myLinkedList  =new LinkList(1)
console.log(myLinkedList)