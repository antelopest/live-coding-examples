const isPalindrome = (str: string): boolean => {
  str = str.toLowerCase().replace(/[^\p{L}]/gu, '');
  let reverse = str.split('').reverse().join('');

  return str === reverse;
}

console.log(isPalindrome("А роза упала на лапу Азора"));
console.log(isPalindrome("Do geese see God?"));
console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("Бряк"));