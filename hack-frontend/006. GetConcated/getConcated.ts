interface MyObject {
  value: string;
  order: number;
  expired: boolean;
}

const getConcated = (arr: MyObject[]): string => {
  const sorted: MyObject[] = arr.sort((a, b) => a.order - b.order);
  const filtered: MyObject[] = sorted.filter((o) => o.expired === false);
  const reversed: string[] = filtered.map((v) => v.value.split('').reverse().join(''));
  const concat: string = reversed.join('');
  const uniques: string[] = [...new Set(concat)];

  return uniques.join('');
}


/*
```
Input 1: [{ value: "aabb", order: 1, expired: false }, { value: "bbaa", order: 2, expired: false }]
Output 1: "ba"
Input 2: [{ value: "hello", order: 1, expired: false }, { value: "world", order: 2, expired: false }]
Output 2: "olehdrw"
```
*/

console.log(getConcated([{ value: "aabb", order: 1, expired: false }, { value: "bbaa", order: 2, expired: false }]));
console.log(getConcated([{ value: "hello", order: 1, expired: false }, { value: "world", order: 2, expired: false }]));