/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const numsLength = nums.length;
    if(numsLength == 1) return nums[0];

    for (let i = 1; i < numsLength ; i++) {
        nums[i] = nums[i - 1] ^ nums[i];
    }

    return nums[numsLength - 1];
};