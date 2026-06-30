let arr = [1, 2, 3, 4, 5];
let temp = []
for (let i = arr.length-1;i>=0;i--){
    temp.push(arr[i])
}
console.log(temp)
//better  version 
let temp1 = new Array(arr.length)
let j = 0 
for(let i = arr.length-1 ; i>=0; i--){
    temp1[j]=arr[i];
    j++
}
console.log(temp1)