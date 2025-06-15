// Завдання 2: Тип для гнучкої змінної

let anything: any = -20;
anything = 'Text';
anything = {};

console.log('Anything can store any type:', anything);

// Альтернативно можна использовать unknown, но тогда нужна проверка типов:
let flexibleVar: unknown = -20;
flexibleVar = 'Text';
flexibleVar = {};

console.log('Unknown type requires type checking:', flexibleVar);
