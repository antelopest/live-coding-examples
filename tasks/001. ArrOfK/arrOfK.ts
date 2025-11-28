const arrOfK = (nums: number[], k: number): number[] => {
  const map = nums.reduce(
    (acc, v) => {
      acc.set(v, (acc.get(v) || 0) + 1);
      return acc;
    },
    new Map<number, number>()
  );

  const entries: [number, number][] = [...map.entries()];
  const sorted: [number, number][] = entries.sort((a, b) => b[1] - a[1]);
  const top: [number, number][] = sorted.slice(0, k);
  const result: number[] = top.map(([num]) => num);

  return result;
}

console.log(arrOfK([1, 1, 1, 2, 2, 3], 2));
console.log(arrOfK([1, 2, 3, 4, 5], 2));

// bucket sort
const bucketSortArrOfK = (nums: number[], k: number): number[] => {
  const map = new Map<number, number>();

  for (const n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  const buckets: number[][] = Array(nums.length + 1)
    .fill(null)
    .map(() => []);

  for (const [num, freq] of map.entries()) {
    buckets[freq].push(num);
  }

  const result: number[] = [];

  for (let freq = buckets.length - 1; freq >= 0 && result.length < k; freq--) {
    if (buckets[freq].length > 0) {
      result.push(...buckets[freq]);
    }
  }

  return result.slice(0, k);
}

console.log(bucketSortArrOfK([1, 1, 1, 2, 2, 3], 2));
console.log(bucketSortArrOfK([1, 2, 3, 4, 5], 2));

// bucket sort
