//Brute Force Approach
const twoSum1 = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j= 0; j < nums.length; j++) {
            if(i != j) {
                if(nums[i] + nums[j] == target) {
                    return [i, j];
                }
            }
        }
    }
    return [-1,-1];
}

// using HashMap
const twoSum2 = function(nums, target) {
    const map = new Map();
    for(let i = 0; i < nums.length; i++) {
        const remaining = target - nums[i]
        if(map.has(remaining)) {
            return [map.get(remaining), i];
        }else {
            map.set(nums[i], i);
        }
    }
    return [-1, -1];
}

console.log(twoSum1([2,7,11,15], 9))
console.log(twoSum2([2,7,11,15], 9))