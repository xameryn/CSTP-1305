var removeDuplicates = function(nums) {

    let i = 0;
    while(i < nums.length) {
        if(nums.indexOf(nums[i]) != nums.lastIndexOf(nums[i])) nums.splice(i, 1);
        else i++;
    }
    
    return nums;
};

let arr = [1,1,2]
console.log(removeDuplicates(arr))