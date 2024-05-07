var lengthOfLongestSubstring = function(s) {
    
    let ans = 0;
    
    let map = new Map();

    let i = 0;
    let j = 0;

    while(j < s.length){
        if(map.has(s[j])) {
            i = Math.max(map.get(s[j]), i);
        }

        ans = Math.max(ans, (j-i+1));
        map.set(s[j], j + 1);
        j++;
    }
    return ans;
};