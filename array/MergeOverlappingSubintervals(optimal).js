let a = [[1,4],[0,2],[3,5]]
let merged = []
a.sort((a,b)=>a[0]-b[0])
console.log(a)
for (const i of a) {
    if(merged.length==0 || merged[merged.length-1][1]<i[0]){
        merged.push(i)
    }
    else {
        merged[merged.length-1][1] = Math.max(merged[merged.length-1][1] ,i[1] )
    }
    
}
console.log(merged)