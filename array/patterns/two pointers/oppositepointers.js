let a = [1,2,3,4,6]
let target = 6 
let l = 0 //left side pointer
let r = a.length-1 // right side pointer 
while(l<r){
    let sum = a[l]+a[r]

    if(target == sum){
    console.log(l,r)
    break;
}
else if(target>sum) //too small
{
l++
console.log("we did left movement");

}
else if (target<sum)//too big
{
    console.log("we did right movement");

    r--
}
} 