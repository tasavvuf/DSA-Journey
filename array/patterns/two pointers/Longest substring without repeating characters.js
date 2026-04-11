let s = "abcabcbb"
let set = new Set()
let l = 0;
let maxLen = 0;
console.log("run start")
for (let r = 0; r < s.length; r++) {
     console.log("l :",s[l], `index ${l}   `,"r:",s[r],`index ${r}`)
    while (set.has(s[r])) {
        set.delete(s[l]);
        l++;
        console.log("while loop run");
        console.log("l :",s[l], `index ${l}   `,"r:",s[r],`index ${r}`)

    }

    set.add(s[r]);
    console.log(set)
    maxLen = Math.max(maxLen, r - l + 1);
    console.log("max len ",maxLen);
    
}
console.log(maxLen)