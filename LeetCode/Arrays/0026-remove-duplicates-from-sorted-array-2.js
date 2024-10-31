/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;

    for(let j = 1; j < nums?.length; j++) {
        if (nums[i] !== nums[j]) {
            nums[++i] = nums[j];
        }
    }
    return ++i;
};

let nums = [0,0,1,1,1,2,2,3,3,4];
let length = removeDuplicates(nums);
let result = [];
for (let k = 0; k < length; k++) {
    result.push(nums[k]);
}
console.log('Length - ', length);
console.log('Array - ', result);