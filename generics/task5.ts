// Завдання 5: Generic інтерфейс KeyValuePair

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

// Демонстрация работы з різними типами
const stringNumberPair: KeyValuePair<string, number> = {
  key: 'age',
  value: 25
};

const numberBooleanPair: KeyValuePair<number, boolean> = {
  key: 1,
  value: true
};

const stringStringPair: KeyValuePair<string, string> = {
  key: 'username',
  value: 'john_doe'
};

// Складніші типи
interface User {
  name: string;
  email: string;
}

const userPair: KeyValuePair<string, User> = {
  key: 'user_123',
  value: {
    name: 'John Doe',
    email: 'john@example.com'
  }
};

console.log('String-Number pair:', stringNumberPair);
console.log('Number-Boolean pair:', numberBooleanPair);
console.log('String-String pair:', stringStringPair);
console.log('User pair:', userPair);

// Функція для роботи з парами
function displayPair<K, V>(pair: KeyValuePair<K, V>): void {
  console.log(`Key: ${pair.key}, Value: ${JSON.stringify(pair.value)}`);
}

displayPair(stringNumberPair);
displayPair(userPair);
