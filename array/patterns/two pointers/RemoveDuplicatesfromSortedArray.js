let nums = [1,1,1,2,2,3]
let i=0
for(let j=0;j<nums.length;j++){
    if(nums[i]!==nums[j]){
        i++
        nums[i]=nums[j]
    }
}
console.log (i) 