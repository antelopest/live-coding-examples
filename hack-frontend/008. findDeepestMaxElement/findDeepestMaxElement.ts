const findDeepestMaxElement = (
  arr: any[],
): number => {
  const map = new Map<number, number[]>();

  const findDeep = (node: number[], depth: number = 0): void => {
    const hasArray = node.some(v => Array.isArray(v));

    if (!hasArray) {
      map.set(depth, (map.get(depth) || []).concat([...node]));
      return;
    }

    for (const v of node) {
      if (Array.isArray(v)) {
        findDeep(v, depth + 1);
      }
    }
  }

  findDeep(arr, 0);

  const maxDepth = Math.max(...map.keys());
  const max = Math.max(...map.get(maxDepth)!);

  return max;
}


console.log(findDeepestMaxElement([10, [5, [15, [50, 22]], 20, [15]]])); // 50
console.log(findDeepestMaxElement([1, [[20, 1, [101]], 2], [[-2], [[102]]]])); // 102
console.log(findDeepestMaxElement([1, [[20, 1, [101]], 2], [[-2], [[102, 100]]]])); // 102