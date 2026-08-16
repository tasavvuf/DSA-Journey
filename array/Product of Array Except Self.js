let a = [-1, 1, 0, -3, 3];

let left = new Array(a.length);
let right = new Array(a.length);
let ans = new Array(a.length);

let prefix = 1;

for (let i = 0; i < a.length; i++) {
    left[i] = prefix;
    prefix *= a[i];
}

let suffix = 1;

for (let i = a.length - 1; i >= 0; i--) {
    right[i] = suffix;
    suffix *= a[i];
}

for (let i = 0; i < a.length; i++) {
    ans[i] = left[i] * right[i];
}

console.log(left);
console.log(right);
console.log(ans);