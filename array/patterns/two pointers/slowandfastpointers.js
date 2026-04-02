let nums = [1,1,1,2,2,2,2,2,3,3]
let i = 0;
console.log("rn i is ",i)
for (let j = 1; j < nums.length; j++) {
    console.log("j",j)
    if (nums[j] !== nums[i]) {
        console.log("conditon match at index",i,j,"and values",nums[i],nums[j]);

        i++;
        console.log("now i is" ,i);
        console.log("before",nums.length)
        nums[i] = nums[j];//  here is something i dont understand how they manuplate the array 
        console.log("new array",nums)
                console.log("after",nums.length)

    }
}

console.log("ans",i + 1) 