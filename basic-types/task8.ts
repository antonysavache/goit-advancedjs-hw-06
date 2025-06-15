// Завдання 8: Створення типу Gender

type Gender = 'male' | 'female';

let myGender: Gender = 'male';

// Демонстрация работы
console.log('My gender:', myGender);

// Можна змінити на інше дозволене значення
myGender = 'female';
console.log('Updated gender:', myGender);

// myGender = 'other'; // Error - це значення не дозволено

// Функція для роботи з гендером
function getGenderDescription(gender: Gender): string {
  switch (gender) {
    case 'male':
      return 'Чоловіча стать';
    case 'female':
      return 'Жіноча стать';
    default:
      // TypeScript знає, що цей блок ніколи не виконається
      const exhaustiveCheck: never = gender;
      return exhaustiveCheck;
  }
}

console.log('Gender description:', getGenderDescription(myGender));
