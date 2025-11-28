interface Tree {
  type: string,
  value?: number,
  children?: Tree[];
}

type NodeTree = {
  type: string,
  value: number
}

const getNodeTree = (tree: Tree): NodeTree => {
  if (typeof tree.value !== "number") {
    throw new Error("Node mush have a value");
  }
  return { type: tree.type, value: tree.value };
}

const getNodes = (tree: Tree, type: string, nodes: NodeTree[] = []): NodeTree[] => {
  if (tree.type === type) {
    nodes.push(getNodeTree(tree));
  }

  if (Array.isArray(tree.children) && tree.children.length > 0) {
    tree.children.forEach((chilren) => {
      getNodes(chilren, type, nodes);
    });
  }

  return nodes;
}

console.log(
  getNodes(
    {
      "type": "nested",
      "children": [
        {
          "type": "nested", "children": [
            { "type": "added", "value": 50 }
          ]
        },
        { "type": "added", "value": 51 }
      ]
    },
    "added"
  )
);

console.log(
  getNodes(
    {
      "type": "nested",
      "children": [
        {
          "type": "nested", "children": [
            {
              "type": "nested", "children": [
                { "type": "added", "value": 60 }
              ]
            }
          ]
        }
      ]
    },
    "added"
  )
);

console.log(
  getNodes(

    {
      "type": "nested",
      "children": [
        { "type": "added", "value": 42 },
        {
          "type": "nested",
          "children": [
            { "type": "added", "value": 43 }
          ]
        },
        { "type": "added", "value": 44 }
      ]
    },
    "added"
  )
);



