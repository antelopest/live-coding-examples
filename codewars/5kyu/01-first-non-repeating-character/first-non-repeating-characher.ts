
const firstNonRepeatingLetter = (str: string): string => {
  const chars = new Map<string, number>();

  for (const cur of str) {
    let lower = cur.toLowerCase();
    let count = chars.get(lower) ?? 0;

    chars.set(lower, ++count);
  }

  for (const cur of str) {
    let lower = cur.toLowerCase();
    
    if (chars.get(lower) === 1) {
      return cur;
    }
  }

  return "";
}

console.log(firstNonRepeatingLetter("@#@@*")); // #
console.log(firstNonRepeatingLetter("かか何")); // 何
console.log(firstNonRepeatingLetter("🐐🦊🐐")); // 🦊