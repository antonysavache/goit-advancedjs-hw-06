// Завдання 4: Кортежі (Tuples)

// JavaScript версія
// let person = ['Max', 21];

// TypeScript версія з кортежем
let person: [string, number] = ['Max', 21];

// Демонстрация работы
console.log('Person name:', person[0]);
console.log('Person age:', person[1]);

// Типи гарантують правильний порядок
person[0] = 'Anna'; // OK - string
person[1] = 25;     // OK - number
// person[0] = 123; // Error - number не можна присвоїти string
// person[1] = 'text'; // Error - string не можна присвоїти number

console.log('Updated person:', person);
