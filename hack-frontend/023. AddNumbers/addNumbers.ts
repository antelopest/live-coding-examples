const addNumbers = (arr1: number[], arr2: number[]): number[] => {
  let operand1 = BigInt(arr1.join(''));
  let operand2 = BigInt(arr2.join(''));
  return [...(operand1 + operand2).toString()].map(Number);
}

console.log(addNumbers([1, 2, 3], [4, 5, 6])); // 5,7,9
console.log(addNumbers([5, 4, 4], [4, 5, 6])); // 1,0,0,0