var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        // Find complement
        const complement = target - nums[i];

        // Check if complement is present
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        // Set the current number and its index in the map
        map.set(nums[i], i);
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
