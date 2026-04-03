let nums = [1,1,1,2,2,3]
let i =0
for(let j=0;j<nums.length;j++){
    if(i<2 || nums[i-2]!==nums[j]){
        nums[i]=nums[j]
         i ++    }
}
console.log(i)