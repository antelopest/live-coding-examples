const flatten = (array: any[]): number[] => {

  let stack: any[] = [...array];
  const result: any[] = [];

  while (stack.length) {
    const value = stack.pop();

    if (Array.isArray(value)) {
      stack.push(...value);
    } else {
      result.push(value);
    }
  }

  return result.reverse();
}

console.log(flatten([0, [1, [2, 3]], 4])); // [0, 1, 2, 3, 4]
console.log(flatten([1, "string", [2, [3, "4"]], { a: 1 }])); // [ 1, 'string', 2, 3, '4', { a: 1 } ]
console.log(flatten([[], [1], [[2, 3]], [[4], [5, [6]]]])); // [ 1, 2, 3, 4, 5, 6 ]
