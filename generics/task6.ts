// Завдання 6: Використання Partial<T>

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

// Використовуємо Partial<T> щоб зробити всі поля опціональними
function createOrUpdateUser(initialValues: Partial<User>): void {
  // Оновлення користувача
  console.log('Updating user with values:', initialValues);
  
  // Тут може бути логіка оновлення тільки переданих полів
  const defaultUser: User = {
    name: 'Default Name',
    surname: 'Default Surname', 
    email: 'default@email.com',
    password: 'defaultPassword'
  };
  
  // Об'єднуємо дефолтні значення з переданими
  const updatedUser: User = { ...defaultUser, ...initialValues };
  console.log('Final user:', updatedUser);
}

// Тепер це працює без помилок
createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });

// Можна передати будь-яку комбінацію полів
createOrUpdateUser({ name: 'John' });
createOrUpdateUser({ name: 'Jane', surname: 'Doe', email: 'jane@example.com' });
createOrUpdateUser({}); // Навіть порожній об'єкт

// Демонстрація з повним об'єктом
createOrUpdateUser({
  name: 'Full',
  surname: 'User',
  email: 'full@user.com',
  password: 'fullPassword'
});
