class CustomArray
{
    constructor(data) {
        if(data) {
            this.data = data;
        }else {
            this.data = [];
        }
    }

    static from(...values) {
        let initialArr = [];
        for(let value of values) {
            initialArr.push(value)
        }
        return new CustomArray(initialArr);
    }

    toString() {
        let arrStr = "";
        for(let value of this.data) {
            arrStr += " " + value;
        }
        return arrStr.trim();
    }

    push(item) {
        this.data.push(item);
        return this.data.length;
    }

    insertAt(index, value) {
        if(index > this.data.length) {
            throw new Error("Index out of bounds");
        }
        
        //increase size by one
        this.data.length++;
        let pointer = this.data.length - 1;
        while(pointer > index) {
            this.data[pointer] = this.data[pointer - 1];
            pointer--;

        }
        this.data[index] = value;
        return this.data.length;
    }

    pop() {
        if(!this.data.length) {
            throw new Error("Array has not any elements");
        }
        let removedItem = this.data[this.data.length - 1];
        this.data.length--;
        return removedItem;
    }

    get(index) {
        if (index < 0 || index >= this.data.length || this.data[index] === undefined) {
            throw new Error('Index out of bounds');
        }
        return this.data[index];
    }

    clear() {
        this.data = [];
    }

    contain(item) {
        if(!this.data.length) {
            throw new Error("Array has not any elements");
        }
        for(let element of this.data) {
            if(element === item) {
                return true;
            }
        }
        return false;
    }

    indexOf(item) {
        for(let i = 0; i < this.data.length; i++) {
            if(this.data[i] === item) {
                return i;
            }
        }
        return -1;
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


const arr = CustomArray.from(1,2,3,4,56);
console.log(arr.push(10));
console.log(arr.push(10));
console.log(arr.pop());
console.log(arr.update(1, -1))
console.log(arr.toString())
console.log(arr.contain(-1));
console.log(arr.indexOf(-1), arr.indexOf(10));