// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    result = 0;
    for (i=0; i<nums.length; i++) {
        result ^= nums[i];   
    }  
    return result;
};

