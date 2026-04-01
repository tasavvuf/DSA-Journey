let nums1 = [1,2,3,0,0,0] 
let m = 3
let nums2 = [2,5,6]
let  n = 3
nums1 = nums1.filter((e)=>e!==0)
nums2 = nums2.filter((e)=>e!==0)
let i =0
while(i<m){
    console.log("i is",nums1[i])
    console.log(nums1)
    let j=0
    for(j;j<n;j++){
        console.log("j is" , j)
         if(nums1[i]>=nums2[j]){
            console.log("condition matched at",nums1[i],nums2[j])
             let temp = nums2.shift(nums2[j])
            nums1.splice(i, 0, temp );
            i++
           
    }
    }
   
    i++
    
}
if(nums2.length!==0){
      nums1 =   nums1.concat(nums2)
        console.log("finally",nums1)
    }