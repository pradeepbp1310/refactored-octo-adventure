/*
Given an array of integers nums.
A pair (i,j) is called good if nums[i] == nums[j] and i < j.
Return the number of good pairs.
Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:
Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.

Example 3:
Input: nums = [1,2,3]
Output: 0
*/
/** Brute force O(n^2)
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && i !== j) {
                ++res;
            }
        }
    }
    return res;
};

// O(n)
var numIdenticalPairs = function (nums) {
    let obj = {}
    let count = 0;
    for (let val of nums) {
        if (obj[val]) {
            count += obj[val];
        }
        obj[val] = obj[val] + 1 || 1;
    }
    return count;
};
numIdenticalPairs([1, 2, 3, 1, 1, 3]); // 4
