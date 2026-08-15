let nums = [1,1,1,2,2,3]
let j = 1
for(let i = 0;i<nums.length-1;i++){
    if(nums[i+1]!== nums[i]){
        nums[j]=nums[i+1]
        j++
    }
    console.log("itreation no,",i," value of j is ",j , "and array is", nums) 
}
console.log(j)