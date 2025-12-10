const recursiveSum = (obj: any): number => {
  const getSum = (_obj: object, arr: number[] = []): number[] => {
    for (const e of Object.values(_obj)) {
      if (typeof e === 'number') {
        arr.push(e);
        continue;
      }

      if (typeof e === 'object' && e !== null) {
        getSum(e, arr);
      }
    }

    return arr;
  }

  const operands: number[] = getSum(obj, []);

  return operands.reduce((sum, v) => sum + v, 0);
}

console.log(recursiveSum({
  x: 5,
  y: {
    z: 7,
    w: {
      v: -3,
    },
  },
}));

console.log(recursiveSum({
  a: "text",
  b: {
    c: true,
    d: null,
    e: 5,
  }
}));


const effectiveRecursiveSum = (obj: any): number => {

  let sum = 0;

  for (const value of Object.values(obj)) {
    if (typeof value === 'number') {
      sum += value;
    } else if (typeof value === 'object' && value !== null) {
      sum += recursiveSum(value);
    }
  }

  return sum;
};


console.log(effectiveRecursiveSum({
  x: 5,
  y: {
    z: 7,
    w: {
      v: -3,
    },
  },
}));

console.log(effectiveRecursiveSum({
  a: "text",
  b: {
    c: true,
    d: null,
    e: 5,
  }
}));
