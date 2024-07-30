class MyArray {
    constructor() {
        this.length = 0;// TO TRACK>>
        this.data = {};// THE DATA 
    }
    // Method to get an element at a specific index

    get(index) {
        return this.data[index];
    }

    // Method to add an element at the end(push)
    push(element) {
        this.data[this.length] = element;
        this.length++;
        return this.length;
    }

    //// Method to remove the last element(pop)
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        const lastElement = this.data(this.length - 1);
        delete this.data[this.length - 1];
        this.length--;
        return lastElement;
    }


    // Method to delete an element at a specific index
    delete(index) {
        const element = this.data[index];
        this._shiftItems(index);
        return element;
    }


    // Method to remove the first element and shift all other elements to the left
    shift() {
        if (this.length === 0) return undefined;
        const firstElemet = this.data[0];
        this._shiftItems(0);
        return firstElemet;
    }
    // Private method to shift elements to the left

    
    _shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];

        }
        delete this.data[this.length - 1];
        this.length--;

    }
}