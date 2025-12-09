const LETTERS = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

const isPangram = (sentence: string): boolean => {

  sentence = sentence.trim().toLocaleUpperCase();

  const map = new Map<string, number>();

  for (const char of LETTERS) {
    map.set(char, 0);
  }

  for (const char of sentence) {
    if (map.has(char)) {
      map.set(char, map.get(char)! + 1);
    }
  }

  for (const [key, count] of map.entries()) {
    if (count < 1) return false;
  }

  return true;
}

console.log(isPangram("the")); // false
console.log(isPangram("TheQuickBrownFoxJumpsOverTheLazyDog")); // true

const isPangramUseSet = (sentence: string): boolean => {
  const upper = sentence.toUpperCase();
  const set = new Set<string>(upper);

  return LETTERS.every((letter) => set.has(letter));
}

console.log(isPangramUseSet("the")); // false
console.log(isPangramUseSet("TheQuickBrownFoxJumpsOverTheLazyDog")); // true

const isPangramUseSet2 = (sentence: string): boolean => {
  sentence = sentence.toUpperCase();
  const set = new Set<string>();

  for (const char of sentence) {
    if (char >= 'A' && char <= 'Z') set.add(char);
  }

  return set.size === 26;
}

console.log(isPangramUseSet2("the")); // false
console.log(isPangramUseSet2("TheQuickBrownFoxJumpsOverTheLazyDog")); // true