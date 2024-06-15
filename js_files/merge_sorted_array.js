

var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m, ...nums2); // replace the elements from m to the end of the array with the elements of nums2
    nums1.sort((a, b) => a - b); // sort the array
    return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))