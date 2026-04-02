let nums =[3,2,2,3]
let val = 3
let i = 0 
for(let j=0;j<nums.length;j++){
    if(val!==nums[j]){
        nums[i]=nums[j]
        i++
    }
}
return i 