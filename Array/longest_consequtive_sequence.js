var longestConsecutive = function(nums) {
    let map = new Map();

    for(num of nums) {
        map.set(num, true);
    }

    for(num of nums) {
        if(map.has(num-1)) {
            map.set(num, false);
        }else{
            if(map.has(num + 1)) {
                map.set(num, true)
                map.set(num+1, false)
            }
        }
    }

    let longestStreak = 0;


    for (const num of nums) {
        if (!map.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (map.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};
