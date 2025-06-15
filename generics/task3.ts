// Завдання 3: Generic функція merge

function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

// Демонстрация работы
const obj1 = { name: 'John', age: 30 };
const obj2 = { city: 'New York', country: 'USA' };
const obj3 = { isActive: true, score: 95.5 };

const merged1 = merge(obj1, obj2);
console.log('Merged 1:', merged1);
// TypeScript знає, що merged1 має всі поля з obj1 та obj2

const merged2 = merge(merged1, obj3);
console.log('Merged 2:', merged2);
// TypeScript знає, що merged2 має всі поля з попереднього об'єкта та obj3

// Демонстрация типової безпеки
console.log('Name:', merged2.name);
console.log('City:', merged2.city);
console.log('Is active:', merged2.isActive);
