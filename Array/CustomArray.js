class CustomArray 
{
    constructor() {
        this.data = []
    }

    push(item) {
        let index = this.data.length;
        this.data.length++;
        this.data[ index ]  = item;
    }

    insertAt(index, item) {
        if(this.index > this.data.length) {
            throw new Error("Array size is small.")
        }
        this.data.length++;
        let lastIdx = this.data.length - 1;

        while(lastIdx >= index) {
            this.data[lastIdx] = this.data[lastIdx - 1];
            lastIdx--;
        }
        this.data[index] = item;
    }

    pop() {
        if(this.data.length === 0) {
            throw new Error("Cannot pop from an empty array.")
        }
        let index = this.data.length - 1;
        let result = this.data[ index ];
        this.data.length--;
        return result;
    }

    get(index) {
        if (index < 0 || index >= this.data.length || this.data[index] === undefined) {
            throw new Error('Index out of bounds');
        }
        return this.data[index];
    }

    clear() {
        this.data = []
    }

    update(index, item) {
        if (index < 0 || index >= this.data.length || this.data[index] === undefined) {
            throw new Error('Index out of bounds');
        }
        this.data[index] = item;
    }

    delete(index) {
        if (index < 0 || index >= this.data.length || this.data[index] === undefined) {
            throw new Error('Index out of bounds');
        }
        
        let removedElement = this.data[index];
        while(index < this.data.length - 1) {
            this.data[index] = this.data[index + 1]
            index++;
        }
        this.data.length--;
    }
}


