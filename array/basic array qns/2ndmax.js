let arr = [1,11,233,67,89,23,123,34]
let max = Math.max(arr[0],arr[1])
let smax = Math.min(arr[0],arr[1])
for(let i = 2 ;i<arr.length;i++){
    if(arr[i]>max){
        smax= Math.max(smax,max)
        max = arr[i]
    }
    else if(smax < arr[i] && max != arr[i]){
        smax = arr[i]
    }
}
console.log(max , smax)