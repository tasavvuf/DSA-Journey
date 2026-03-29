let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log("before")
console.table(arr);
for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr[i].length; j++) {
      let temp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = temp;
    }
}
arr.forEach(element => {
  element.reverse()
});
console.log("after")
console.table(arr);
// it is a optimal solution there is no better than O(n^2) in time and space with O(1) 