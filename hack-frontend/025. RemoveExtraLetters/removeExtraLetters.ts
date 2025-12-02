const removeExtraLetters = (str: string): string => {

  let arr: string[] = str.trim().split(' ');

  arr = arr.reduce((acc, v): string[] => {
    let lastChar: string = '';
    let word: string = '';

    for (let char of v) {
      if (lastChar === char) {
        continue;
      }

      lastChar = char;
      word = word + lastChar;
    }

    acc.push(word);

    return acc;
  }, []);

  return arr.join(' ');
}

// or

function removeExtraLetters1(str: string) {
  // Заменяем повторяющиеся подряд символы на один
  return str.replace(/(.)\1+/g, '$1');
}


console.log(removeExtraLetters("heeeeello")); // helo
console.log(removeExtraLetters("нууужно")); // нужно
console.log(removeExtraLetters("ллллиииишшшнийййй тттексттт")); // лишний текст