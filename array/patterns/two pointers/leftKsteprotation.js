let k = 7
let arr = [1, 2, 3, 4, 5];
k = k%arr.length
console.log("new",k)
for (let i = 0; i < k; i++) {
  let copy = arr[0];

  for (let j = 0; j < arr.length - 1; j++) {
    arr[j] = arr[j + 1];
  }
  arr[arr.length - 1] = copy;
  console.log(i, "th run", arr, copy);
}
console.log("final", arr);