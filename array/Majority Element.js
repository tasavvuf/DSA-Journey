let a = [2,1,1]
let major = a[0]
let count = 1
for (let i = 1 ; i<a.length ; i++){
    if (count === 0 ){
        major = a[i]
    }
    if (major === a[i]){
        count ++
    }else{
        count --
    }
}
console.log(major)