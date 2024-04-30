const firstMissingPostive = function(nums) {
    let ans = 0;
    let n = nums.length;

    if(!nums.includes(1)) {
        return 1;
    }

    //ignore all negative number and number greater than n
    for(let i = 0; i < n; i++) {
        if(nums[i] <= 0 || nums[i] > n) {
            nums[i] = 1;
        }
    }

    // Now we have all element within the max index of array
    for(let i = 0; i < n; i++) {
        let a = Math.abs(nums[i]);
        if(a == n) {
            nums[0] = -Math.abs(nums[0])
        }else {
            nums[a] = -Math.abs(nums[a])
        }
    }

    for(let i = 1; i < n;i++) {
        if(nums[i] > 0) {
            return i;
        }
    }
    if(nums[0] > 0) return n;
    return n + 1;
   

}

const ans = firstMissingPostive([1,4,3,2,5,7]);

console.log(ans)