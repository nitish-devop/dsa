/*
    Array : It is collection of elements stored contiguously in memory.
    Javascript supoort same or multiple type of data elements in array.
    Example arr = [12,13,"Nitish"]

    ADT : Abstract Data Type
    ------------------------
    Operation : Insert, Delete, Update, Traverse
*/

function traverse(array) {
    array.forEach(element => {
        console.log(array)
    });
}

// insert item at given position
function insertAt(array, position, item) {
    // check if position is less than array size
    if(position < array.length) {
        for(let i = array.length; i > position; i--) {
            array[i] = array[i-1];
        }
        array[position] = item;
    }
}

function insertAt(array, position, item) {
    // Shift element if positon is less than size
    if(position < array.length) {
        for(let i = array.length; i > position; i--) {
            array[i] = array[i-1];
        }
        array[position] = item;
    }
    // else place it in last
    else { 
        array[ array.length ] = item;
    }
}

function deleteFrom(array, position) {
    if(position < array.length) {
        // we need to shift element to its previous index upto position
        let deletedItem = array[position];
        for(let i = position; i < array.length; i++) {
            array[i] = array[i+1];
        }
        return deletedItem;
    }
    else {
        return -1;
    }
}

const fruits = ["Apple", "Banana", "Orange"];

insertAt(fruits, fruits.length, "Kiwi");

traverse(fruits);

deleteFrom(fruits, 1);

traverse(fruits);