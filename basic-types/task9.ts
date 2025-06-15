// Завдання 9: Створення типу для об'єктів page

type PageDetails = {
  createAt: Date;
  updateAt: Date;
};

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: PageDetails; // Опціональне поле
};

const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
};

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
  // details відсутні - це OK, тому що поле опціональне
};

// Демонстрация работы
console.log('Page 1:', page1);
console.log('Page 2:', page2);

// Функція для роботи зі сторінками
function getPageInfo(page: Page): string {
  const detailsInfo = page.details 
    ? `created: ${page.details.createAt.toDateString()}`
    : 'no details available';
  
  return `${page.title} - ${page.likes} likes (${detailsInfo})`;
}

console.log(getPageInfo(page1));
console.log(getPageInfo(page2));
