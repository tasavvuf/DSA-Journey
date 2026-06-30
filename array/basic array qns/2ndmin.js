let arr = [1,11,233,67,89,23,123,34]
let min = Math.min(arr[0],arr[1])
let smin = Math.max(arr[0],arr[1])
for (let i = 2;i<arr.length;i++){
    if(arr[i]<min ){
        smin = Math.min(smin,min)
        min = arr[i]
    }
    else if (arr[i]<smin && min != arr[i]){
        smin = arr[i]
    }
}
console.log(min , smin)