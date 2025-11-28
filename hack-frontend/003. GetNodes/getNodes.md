# Извлечение нод по типу

Дана древовидная структура следующего формата:

```ts
const tree = {
  type: "nested",
  children: [
    { type: "added", value: 42 },
    {
      type: "nested",
      children: [{ type: "added", value: 43 }],
    },
    { type: "added", value: 44 },
  ],
};
```

Необходимо написать функцию <b>getNodes(tree, type)</b>, которая возвращает все ноды в порядке следования, соответствующие переданному типу. Глубина вложенности любая.

## Примеры

Input 1:

```ts
{
  "type": "nested",
  "children": [
    { "type": "nested", "children": [
      { "type": "added", "value": 50 }
    ] },
    { "type": "added", "value": 51 }
  ]
}
```

Output 1:

```ts
[
  { "type": "added", "value": 50 },
  { "type": "added", "value": 51 }
]
```
Input 2:

```ts
{
  "type": "nested",
  "children": [
    { "type": "nested", "children": [
      { "type": "nested", "children": [
        { "type": "added", "value": 60 }
      ] }
    ] }
  ]
}
```

Output 2:

```ts
[
  { "type": "added", "value": 60 }
]
```

Input 3:

```ts
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
}
```

Output 3:

```ts
[
  { "type": "added", "value": 42 },
  { "type": "added", "value": 43 },
  { "type": "added", "value": 44 }
]
```

