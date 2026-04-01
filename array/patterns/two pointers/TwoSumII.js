let a = [2,7,11,15]
let target = 9 
let l = 0
let r = a.length - 1
while(l<r){
    let sum = a[l]+a[r]
    if(sum == target){
        console.log([l,r]) 
        break
    }
    else if(sum>target){
        r--
        console.log("r--");
        
    }
    else if(sum<target){
        l++
        console.log("l++")
    }
}