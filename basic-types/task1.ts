// Завдання 1: Перетворіть JavaScript код на TypeScript

let age: number = 50;
let name: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined;
let callback = (a: number): number => { return 100 + a };

// Демонстрация работы
console.log('Age:', age);
console.log('Name:', name);
console.log('Toggle:', toggle);
console.log('Empty:', empty);
console.log('Not initialized:', notInitialize);
console.log('Callback result:', callback(50));
