function binarySearchIterative(arr, target) {
    let start = 0;
    let end = arr.length;
    let result = -1;

    while(start <= end) {
        let mid = Math.floor((start + end) / 2);

        // if element found check its left part if any elements are there
        if(arr[mid] === target) {
            result = mid;
            end = mid - 1;
        }//if the target is greater ignore left half
        else if(arr[mid] < target) {
            start = mid + 1;
        } // if the target is smaller ignore right part
        else {
            end = mid - 1;
        }
    }
    return result;
}


function binarySearchRecursive(arr, start, end, target) {
   if(start > end) {
    return -1;
   }

    let mid = Math.floor((start + end) / 2);

    if(arr[mid] == target) {
        return mid;
    }else if(arr[mid] < target) {
        return binarySearchRecursive(arr, mid + 1, end, target)
    }else {
        // search in left part
       return binarySearchRecursive(arr, start, mid - 1, target)
    }
}

// Example
let arr = [3, 4, 6, 7, 9, 10, 12, 12, 12, 16, 17];

let target = 12;
let ans1 = binarySearchIterative(arr, target)
let ans2 = binarySearchRecursive(arr, 0, arr.length, target)
console.log(ans1, ans2)

target = 13;
 ans1 = binarySearchIterative(arr, target)
 ans2 = binarySearchRecursive(arr, 0, arr.length, target)
console.log(ans1, ans2)

