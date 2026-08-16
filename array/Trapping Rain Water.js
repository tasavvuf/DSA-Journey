let height = [4,2,0,3,2,5]
let left = new Array(height.length)
let right = new Array(height.length)
let maxLeft = height[0]
let maxRight = height[height.length-1]
left[0]= maxLeft ; right[height.length -1] = maxRight
let total = 0
for (let i = 1 ; i<height.length;i++){
    maxLeft = Math.max(maxLeft , height[i])
    left[i] = maxLeft
}
for (let i = height.length-2 ; i>=0;i--){
    maxRight = Math.max(maxRight, height[i])
    right[i] = maxRight}
for (let i = 0 ; i <height.length ; i++) {
    total += Math.min(right[i],left[i]) - height[i]
}
console.log(total)
