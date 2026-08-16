let a = [-2,1,-3,4,-1,2,1,-5,4]
let sum = 0 
let max = -Infinity

for(let i = 0 ; i <a.length; i++){
    sum += a[i]
    if(sum > max){
        max = sum
    }
    if(sum <0){
        sum = 0 
    }
}
console.log(max)