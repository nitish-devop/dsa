var groupAnagrams = function(strs) {
    map = new Map();
    
    strs.forEach((element) => {
        let key = [...element].sort()
        let str = key.join("")
        if(map.has(str)) {
            map.get(str).push(element)
        }else {
            map.set(str, [element])
        }
    })
   
    return [...map.values()]
};

