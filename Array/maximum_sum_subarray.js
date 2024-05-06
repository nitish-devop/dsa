var maxSubArray = function(nums) {
    let ans = nums[0];
    let currSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (currSum <= 0) {
            currSum = 0;
        }
        currSum += nums[i];
        ans = Math.max(ans, currSum);
    }
    return ans;
};