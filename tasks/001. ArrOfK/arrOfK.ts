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