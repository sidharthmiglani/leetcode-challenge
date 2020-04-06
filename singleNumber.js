// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    /*
    This is done using XOR operarions
    We know i^i = 0 and i^0 = i
    */
   result = 0;
    for (i=0; i<nums.length; i++) {
        result ^= nums[i];   
    }  
    return result;
};

