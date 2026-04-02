nums = [0,1,0,3,12]
val = 0
let i = 0;

for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
        nums[i] = nums[j];
        i++;
    }
}
while(i<nums.length){
    nums[i]=0
    i++
}
console.log(nums)