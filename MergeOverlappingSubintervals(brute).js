let a = [[1,4],[0,2],[3,5]]


let start 
let end
let merged = []
let i=0
let j
function isOverlap([next,prev]){
    if(prev[1]>=next[0]){
        return true
    }
    else{
        return false
    }
}
a= a.sort((a, b) => a[0] - b[0])
while (i<a.length){
 start = a[i][0]
 end = a[i][1]
 j= i+1
 while(j<a.length && isOverlap([a[j],[start,end]]) ){
    end = Math.max(end, a[j][1])
    j++
   
 }
merged.push([start,end])
 i = j


}
console.log(merged)