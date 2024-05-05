const productOfNumbers = function(nums) {
    let left = [];
    left[0] = 1;
    let leftProduct  = 1;
    for(let i = 1; i < nums.length; i++) {
        leftProduct = leftProduct * nums[i-1]
        left[i] = leftProduct;
    }

    let right = [];
    right[nums.length - 1] = 1;
    let rightProduct  = 1;
    for(let i = nums.length - 2; i >= 0; i--) {
        rightProduct = rightProduct * nums[i+1];
        right[i] = rightProduct;
    }

    let ans = []
    for(let i = 0; i < nums.length; i++) {
        ans[i] = left[i] * right[i];
    }
    return ans;
}


// solve in O(1) space complexity

const productOfNumbers2 = function(nums) {
   
    let ans = Array(nums.length).fill(0);

    // store sum of left element
    let temp = 1;
    for(let i = 0; i < nums.length; i++) {
        ans[i] =  temp;
        temp = temp * nums[i];
    }
    console.log(ans)
    temp = 1;
    for(let i = nums.length -1; i >= 0; i--) {
        ans[i] = ans[i] * temp;
      
        temp = temp * nums[i];
    }
    console.log(ans);
    return ans;
}

productOfNumbers2([1,2,3,4]);

