const compress = (list: number[]): string => {
  if (list.length === 0) return "";

  list = [...list].sort((a, b) => a - b);

  const result: string[] = [];

  let start = list[0];
  let prev = list[0];

  for (let i = 1; i <= list.length; i++) {
    const curr = list[i];

    if (curr === prev + 1) {
      prev = curr;
      continue;
    }

    if (start === prev) {
      result.push(String(start));
    } else {
      result.push(`${start}-${prev}`);
    }

    start = curr;
    prev = curr;
  }

  return result.join(",");
};

console.log(compress([-10, -8, -7, -6])); // -10,-8--6
console.log(compress([1, 4, 5, 2, 3, 9, 8, 11, 0])); // "0-5,8-9,11"
console.log(compress([Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER + 1])); // "-9007199254740991--9007199254740990"