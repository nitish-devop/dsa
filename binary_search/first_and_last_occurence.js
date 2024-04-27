/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var lowerBound = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let ans = nums.length;

    while(start <= end) {
        let mid = Math.floor((start + end) / 2);

        if(nums[mid] >= target) {
            ans = mid;
            end = mid - 1;
        }else {
            start = mid + 1;
        }
    }
    return ans;
}

var upperBound = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let ans = nums.length;

    while(start <= end) {
        let mid = Math.floor((start + end) / 2);

        if(nums[mid] > target) {
            ans = mid;
            end = mid - 1;
        }else {
            start = mid + 1;
        }
    }
    return ans;
}

var searchRange = function(nums, target) {
    let lb = lowerBound(nums, target);
    let ub = upperBound(nums, target);

    if(lb == nums.length || nums[lb] != target)
        return [-1,-1];
    else return [lb, ub - 1];
};