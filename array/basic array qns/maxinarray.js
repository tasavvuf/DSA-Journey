let arr = [1,11,233,67,89,23,123,34]
let max = arr[0]
for(let i = 1 ; i<arr.length ;i++){
    if(max<arr[i]){
        max = arr[i]
    }
}
console.log(max)