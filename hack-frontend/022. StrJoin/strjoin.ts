const strjoin = (separator: string, ...strings: string[]): string => {
  return strings.join(separator);
}

console.log(strjoin(' ', 'Hello', 'World')); // Hello World
console.log(strjoin('-', 'a', 'b', 'c', 'd')); // a-b-c-d
console.log(strjoin(':', 'one', 'two')); // one:two
console.log(strjoin('zero')); // ""