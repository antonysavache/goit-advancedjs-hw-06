// Завдання 6: Типізація функцій

// Функція, що не повертає значення (void)
function showMessage(message: string): void {
  console.log(message);
}

// Функція, що повертає число
function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// Функція, що ніколи не завершується нормально (never)
function customError(): never {
  throw new Error('Error');
}

// Демонстрация работы
showMessage('Hello TypeScript!');
console.log('Calculation result:', calc(10, 5));

// customError(); // Викличе помилку
