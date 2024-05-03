/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length < 3) {
        return false;
    }

    let i = 1;
    while(i < arr.length && arr[i-1] < arr[i]) {
        i++;
    }

    if(i == 1 || i == arr.length) {
        return false;
    }
    while(i < arr.length && arr[i] < arr[i-1]) {
        i++;
    }
    return i == arr.length;
};