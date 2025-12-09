const diffetence = (a: number[], b: number[]): number[] => {
  const set = new Set(b);
  return a.filter(v => !set.has(v));
}

console.log(diffetence([5,6,7], [7,8,9]));
console.log(diffetence([1, 4, 3, 2], [1,2]));
