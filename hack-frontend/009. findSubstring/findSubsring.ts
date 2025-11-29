const findSubstring = (substring: string, arr: string[]): string[] => {
  return arr.filter((v) => {
    return v.includes(substring);
  });
}

console.log(findSubstring("oo", ["food", "door", "moon"]));
console.log(findSubstring("xyz", ["apple", "banana", "cherry"]));