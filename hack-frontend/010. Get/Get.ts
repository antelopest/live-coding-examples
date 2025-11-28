const get = (obj: any = {}, path: string = ""): any => {
  const properties: string[] = path.split('.');
  let current = obj;

  for (let prop of properties) {
    if (current === null || typeof current[prop] === "undefined") {
      return undefined;
    }

    current = current[prop];
  }

  return current;
}

console.log(get({ a: { b: { c: "d" } } }, "a.b.c"));
console.log(get({ a: { b: { c: "d" } } }, "a.b"));
console.log(get({ x: { y: { z: 42 } } }, "x.y.a"));