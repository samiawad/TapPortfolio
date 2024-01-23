var sum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            // Check whether 1st number + 2nd number OR 1st number - 2nd number equal the target number
            if(nums[i] + nums[j] == target || nums[i] - nums[j] == target) {
                return [i, j];
            }
        }
    }
};