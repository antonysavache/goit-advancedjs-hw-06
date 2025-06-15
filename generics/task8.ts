// Завдання 8: Використання Omit<T, K>

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Використовуємо Omit щоб виключити поле 'errors'
type Params = Omit<Form, 'errors'>;

// Демонстрация работы
const formData: Form = {
  email: 'user@example.com',
  firstName: 'John',
  lastName: 'Doe',
  phone: '+1234567890',
  errors: {
    email: ['Invalid format'],
    phone: ['Too short']
  }
};

const params: Params = {
  email: 'user@example.com',
  firstName: 'John',
  lastName: 'Doe',
  phone: '+1234567890'
  // errors: {} // Це поле недоступне в типі Params
};

console.log('Original form:', formData);
console.log('Params without errors:', params);

// Функція для конвертації Form в Params
function formToParams(form: Form): Params {
  const { errors, ...params } = form;
  return params;
}

const convertedParams = formToParams(formData);
console.log('Converted params:', convertedParams);

// Додатковий приклад - функція для обробки параметрів
function processParams(params: Params): void {
  console.log('Processing params:');
  Object.entries(params).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
}

processParams(params);
processParams(convertedParams);
