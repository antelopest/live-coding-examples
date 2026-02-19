const firstDup = (str: string): string | undefined => {
  let lastDupChar: string | undefined = undefined;

  const chars = new Set<string>();

  for (let i = str.length - 1; i >= 0; i--) {
    const cur = str[i];

    if (chars.has(cur)) {
      lastDupChar = cur;
     } else {
      chars.add(cur);
     }
  }

  return lastDupChar;
}

console.log(firstDup('tweet'));
console.log(firstDup('like'));