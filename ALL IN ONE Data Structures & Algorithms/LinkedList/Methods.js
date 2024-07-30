//create the node >> imp  -whenever we are linking we have to use .next>>
class Node {
    constructor(value) {
        this.head = value;
        this.next = null;

    }
}

//create the linkelist
class LinkList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head;
        this.length = 1;
    }


    push(value) {
        let newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

    }

    pop(_value) {
        let temp = this.head;
        let prev = this.head;

        while (temp.next) {
            prev = temp;
            temp = prev.next
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;

        return temp;

    }

    shift() {
        if (!this.head) {
            return undefined;
        }
        // 1->point the first node:
        let temp = this.head;
        //2> move  the head to next element>>
        this.head = this.head.next;
        //remove the first element>> delete the reference>
        temp.next = null;
        this.length--;
        if (this.length === 0) {
            this.tail = null
        }
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

        }
        newNode.next = this.head;//assign to head>>
        this.head = newNode;
        this.length++;
        return this;

    }
    //getFirst element>>
    getFirst() {
        return this.head;

    }

    //getLast element>>
    getLast() {
        if (!this.head) {
            return null;
        }
        //let the temp be the first node>>
        let temp = this.head;
        //while loop<<
        while (temp) {
            if (!temp.next) {
                return temp;//return last node>>
            }
            //it goes to the loop agaiN>
            temp = temp.next;
        }

    }
    //get elements by index number>>
    getIndex(index) {// we have to put the index vlaue here>
        let counter = 0;//to keep track of the current index
        let temp = this.head;
        while (temp) {
            if (counter === index) {
                return temp;
            }
            counter++;
            temp = temp.next;
        }
        return null;

    }
    //set methd>>

    set(index, value) {
        let toUpdate = this.getIndex(index);
        if (toUpdate) {
            toUpdate.value = value// store or update here;
            return true;
        }
        return false;

    }

    insertMethod(index, value) {
        if (index < 0 && index > this.length) return false;

        const newNode = new Node(value);

        if (index === 0) {
            newNode.next = this.head;
            // // Inserting at the beginning of the list
            this.head = newNode;
        } else {
            // Inserting in the middle or end of the list

            let prevNode = this.getIndex(index - 1);
            newNode.next = prevNode.next;
            prevNode.next = newNode;
        }

    }
    //size
    size() {
        return this.length;
    }
    //clear()
    clear() {
        this.head = null;
        this.tail = 0;
    }

}
const myLinkedList = new LinkList(1)
myLinkedList.push(10)
myLinkedList.pop()
console.log(myLinkedList)