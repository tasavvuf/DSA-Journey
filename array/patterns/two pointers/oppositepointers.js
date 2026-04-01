//Given sorted array, find two numbers whose sum = 6
//Count how many pairs have sum < target
let arr = [1,2,3,4,6]
let target = 6 
let l = 0 //left side pointer
let r = arr.length-1 // right side pointer 
while(l<r){
    let sum = arr[l]+arr[r]

    if(target == sum){
    console.log(l,r)
    break;
}
else if(target>sum) //too small
{
    console.log("pair",[arr[l],arr[r]],"are sum < target")
l++
console.log("we did left movement");

}
else if (target<sum)//too big
{
     r--
    console.log("we did right movement ");

   
}
} 
//Find two numbers whose difference = 3
let difference = 3
let a = 0 
let b = 1// we start from just next 
while(a<b){
    let diff = arr[b]-arr[a]
    if(diff ==  difference){
        console.log(a,b)
        break
    }
    else if(diff<difference)// too small
    {
        b++
        console.log("increase the b");
        
        
    }
    else if(diff > difference)//too big
        {
        a--
        console.log("decrease a");
        
    }

}
