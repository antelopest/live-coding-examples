const isAnagramSort = (first: string, second: string): boolean => {

  const sort = (str: string): string => str.split('').sort().join('');

  const sortedFirst = sort(first);
  const sortedSecond = sort(second);

  return sortedFirst === sortedSecond;
}

console.log(isAnagramSort("finder", "friend"));
console.log(isAnagramSort("test", "sets"));
console.log(isAnagramSort("abc", "aaa"));

const isAnagram = (a: string, b: string): boolean => {
  if (a.length !== b.length) return false;

  const map = new Map<string, number>();

  for (const char of a) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (const char of b) {
    if (!map.has(char)) return false;
    map.set(char, map.get(char)! - 1);
    if (map.get(char)! < 0) return false;
  }

  return true;
}


console.log(isAnagram("finder", "friend"));
console.log(isAnagram("test", "sets"));
console.log(isAnagram("abc", "aaa"));