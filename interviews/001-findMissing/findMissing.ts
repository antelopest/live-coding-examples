// Получим массив с пропущенным значением (сортировка неважна)
const arr: (number | undefined)[] = new Array(100).fill(0).map((v, i) => i + 1);
const randomNumber: number = Math.floor(Math.random() * 100) + 1;
arr[randomNumber] = undefined;

// Найти пропущенное значение
const findMissing = (arr: (number | undefined)[]): number | null => {
  const set = new Set(arr);
  let n: number | null = null; 

  for (let i = 1; i <= 100; i++) {
    if (set.has(i)) {
      continue;
    }

    n = i;
    break;
  }

  return n;
}

console.log(findMissing(arr));


// Самое эффективное решение
// Высчитать сумму всех чисел, вычесть текущую сумму чисел, получить разницу и вернуть
const effictiveFindMissing = (arr: (number | undefined)[]): number => {
  const s = (100 * 101) / 2;

  const sum = arr.reduce((acc: number, v: number | undefined): number => {
    if (typeof v === 'number') {
      acc += v;
    }

    return acc;
  }, 0);

  return s - sum;
}

console.log(effictiveFindMissing(arr));
