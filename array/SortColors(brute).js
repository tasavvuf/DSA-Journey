let a = [2,0,1];
let i = 0;
let j = a.length - 1;

while (i <= j) {
    if (a[i] === 2) {
        a.splice(i, 1);
        a.push(2);
        j--;          // end shrinks
        // ❗ don't increment i (new element came here)
    } 
    else if (a[i] === 0) {
        a.splice(i, 1);
        a.unshift(0);
        i++;          // safe, 0 is placed correctly
    } 
    else {
        i++;          // 1 is fine, move ahead
    }
}

console.log(a);