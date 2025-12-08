const compressString = (str: string): string => {

  if (str.length === 0) return "";

  let count: number = 1;
  let result: string = "";

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      result += str[i - 1] + (count > 1 ? count : "");
      count = 1;
    }
  }

  return result;
}

console.log(compressString("AAB")); // A2B
console.log(compressString("ABC")); // ABC
console.log(compressString("AABBCCDD")); // A2B2C2D2

