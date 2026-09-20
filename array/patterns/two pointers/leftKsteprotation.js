let k = 7
let arr = [1, 2, 3, 4, 5];
let temp = []
for (i = 0 ; i < arr.length ; i++){
  temp[i] = arr[(i+k) % arr.length]
}
console.log(temp)