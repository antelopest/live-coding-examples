# Построение маршрута

У нас есть набор билетов вида:

```
[
    { from: 'London', to: 'Moscow' },
    { from: 'NY', to: 'London' },
    { from: 'Moscow', to: 'SPb' },
    ...
]
```

Из этих билетов можно построить единственный, неразрывный маршрут.
Петель и повторов в маршруте нет. 
Нужно написать программу, которая возвращает эти же объекты билетов в порядке следования по маршруту.

## Примеры:

```
Input 1: 
[
  { from: "C", to: "D" },
  { from: "B", to: "C" },
  { from: "A", to: "B" },
  { from: "D", to: "E" }
]

Output 1: 
[
  { from: "A", to: "B" },
  { from: "B", to: "C" },
  { from: "C", to: "D" },
  { from: "D", to: "E" }
]

Input 2: 
[
  { from: "London", to: "Moscow" },
  { from: "NY", to: "London" },
  { from: "Moscow", to: "SPb" }
]

Output 2: 
[
  { from: "NY", to: "London" },
  { from: "London", to: "Moscow" },
  { from: "Moscow", to: "SPb" }
]

Input 3: 
[
    { from: "London", to: "Moscow" },
    { from: "Tokio", to: "NY" },
    { from: "NY", to: "London" },
    { from: "SPb", to: "Berlin" },
    { from: "Moscow", to: "SPb" }
]

Output 3: 
[
  { from: "Tokio", to: "NY" },
  { from: "NY", to: "London" },
  { from: "London", to: "Moscow" },
  { from: "Moscow", to: "SPb" },
  { from: "SPb", to: "Berlin" }
]
```