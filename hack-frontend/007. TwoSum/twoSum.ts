const twoSum = (nums: number[], target: number): number[] => {

  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map.has(diff)) {
      return [map.get(diff)!, i];
    }

    map.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([3, 3], 6)); // [0, 1]
console.log(twoSum([2, 7, 11, 5, 9, 10, 15], 9)); // [0, 1]