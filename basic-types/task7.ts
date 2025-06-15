// Завдання 7: Enum та функція для перевірки вихідних

enum DayOfWeek {
  Monday = 'Monday',
  Tuesday = 'Tuesday', 
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday'
}

function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

// Демонстрация работы
console.log('Monday is weekend:', isWeekend(DayOfWeek.Monday)); // false
console.log('Saturday is weekend:', isWeekend(DayOfWeek.Saturday)); // true
console.log('Sunday is weekend:', isWeekend(DayOfWeek.Sunday)); // true
console.log('Friday is weekend:', isWeekend(DayOfWeek.Friday)); // false
