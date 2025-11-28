const groupAnagrams = (arr: string[]): Array<string[]> => {
  const getKey = (str: string) => str.split('').sort().join('');
  const map = new Map<string, string[]>();

  for (const str of arr) {
    const key = getKey(str);
    map.set(key, [...(map.get(key) || []), str]);
  }

  return Array.from(map.values());
}

console.log(groupAnagrams(["ab", "ba", "abc", "bca"]));
console.log(groupAnagrams(["listen", "silent", "enlist"]));