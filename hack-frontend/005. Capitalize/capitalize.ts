const capitalize = (str: string): string => {
  return str
    .split(' ')
    .map((v) => v.charAt(0).toUpperCase() + v.slice(1))
    .join(' ');
}

console.log(capitalize("что-то произошло")); // Что-то Произошло
console.log(capitalize("foo-bar baz")); // Foo-bar Baz

// function capitalize(input) {
//   // Используем регулярное выражение для поиска слов
//   return input.replace(/\p{L}[\p{L}-]*/gu, word =>
//     word.charAt(0).toUpperCase() + word.slice(1)
//   );
// }