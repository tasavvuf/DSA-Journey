// on first try we get the O(n) thats the optimal it self
let a = [7, 1, 5, 3, 6, 4];
let buy = a[0];
let maxprofit = 0
for(i=0;i<a.length;i++){
    if(a[i]<buy){
        buy = a[i]
    }
    else{
        profit = a[i]-buy
        if(profit>maxprofit){
            maxprofit=profit
        }
    }
}
console.log(maxprofit)