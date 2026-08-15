let a = [7,1,5,3,6,4]
let buy = a[0]
let sell = a[0]
let profit =0
for(let i =1 ; i<a.length;i++){
if (a[i]>sell){
    sell = a[i]
} if(sell>=a[i]){
    profit+=sell-buy
    buy = sell =a[i] 
}

}
console.log(profit)