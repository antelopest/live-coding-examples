const getNodes = (tree, type, nodes = []) => {
  if (tree.type === type) {
    nodes.push({ type: tree.type, value: tree.value });
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



