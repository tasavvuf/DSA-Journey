let arr = [2,1,5,1,3,2] 
let k = 3
// we know size of wildow will be always same as k 
let sum = 0 
for(let i =0 ; i<k;i++){
    sum += arr[i]
}
console.log("sum at first itration is ",sum)
let max = sum
console.log("before",max)
for(let j = k;j<arr.length; j++){
    console.log("now we have range ",[j,j-k])
    sum += arr[j]
   
    sum-= arr[j-k]
   
    console.log("new sum is " ,sum)
    max = Math.max(sum,max)
    console.log("new max is " ,max )
}
console.log("final max is ",max)