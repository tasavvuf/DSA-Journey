let str = "abcabcbb"
let set = new Set(str)
console.log(set)
let l = 0;
let maxLen = 0;

for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) {
        set.delete(s[l]);
        l++;
    }

    set.add(s[r]);
    maxLen = Math.max(maxLen, r - l + 1);
}