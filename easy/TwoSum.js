/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {


let hashMap = {};
let result = [];

for(let i=0; i < nums.length; i++) {

    hashMap[nums[i]] = nums[i]
}

for(const i in hashMap) {
    let num = target - i;

    if(hashMap[num] != undefined) {
        
        let index1 = nums.indexOf(hashMap[num]);
        nums[index1] = "";
     
        let index2 = nums.indexOf(Number(i))
         

        result = [index1, index2];
        return result

    }
}


return result
}