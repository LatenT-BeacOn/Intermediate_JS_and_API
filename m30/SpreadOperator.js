const max=Math.max(6,23,5,43,89)
console.log(max);

const numbers=[3,4,2,5,26];
//const ArrayMax=Math.max(numbers);
console.log(numbers);
console.log(...numbers);
//console.log(ArrayMax);
const ArrayMax=Math.max(...numbers);
console.log(ArrayMax);

//spread operator to copy
const nums=[1,2,4];
const nums2=nums;
const nums3=[...nums];
nums2.push(12);
console.log(nums);
console.log(nums2)
console.log(nums3);
// output:
// [ 1, 2, 4, 12 ]
// [ 1, 2, 4, 12 ]
// [ 1, 2, 4 ]


