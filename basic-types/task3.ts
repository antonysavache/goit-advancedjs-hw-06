// Завдання 3: Виправлення коду з unknown типом

let some: unknown;
some = 'Text';
let str: string;

// Потрібна перевірка типу або type assertion
// Варіант 1: Type guard
if (typeof some === 'string') {
  str = some;
}

// Варіант 2: Type assertion
str = some as string;

// Варіант 3: Type assertion з іншим синтаксисом
str = <string>some;

console.log('String value:', str);
