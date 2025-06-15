// Завдання 5: Union types та Literal types

// Union type - рядок або число
let mixedValue: string | number;
mixedValue = 'Hello';
mixedValue = 42;
console.log('Mixed value:', mixedValue);

// Literal type - тільки конкретні значення
let status: 'enable' | 'disable';
status = 'enable';
status = 'disable';
// status = 'active'; // Error - це значення не дозволено

console.log('Status:', status);

// Додатковий приклад з literal numbers
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6 = 6;
console.log('Dice roll:', diceRoll);
