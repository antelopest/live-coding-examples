interface INode {
  value: number;
  children?: INode[]
}

const getTreeVal = (node: INode): number => {
  let sum: number = node.value;

  if (node.children && node.children.length) {
    for (const child of node.children) {
      sum += getTreeVal(child);
    }
  }

  return sum;
}


console.log(getTreeVal(
  {
    value: 10,
    children: []
  }
)); // 10

console.log(getTreeVal(
  {
    value: -5,
    children: [
      {
        value: -10,
        children: [
          { value: -15 }
        ]
      }
    ]
  }
)); // -30

console.log(getTreeVal(
  {
    value: 0,
    children: [
      {
        value: 0,
        children: []
      }
    ]
  }
)); // 0