// Завдання 2: Використання Pick та generics

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends Pick<AllType, 'name' | 'color'>, U extends Pick<AllType, 'position' | 'weight'>>(
  top: T, 
  bottom: U
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// Демонстрация работы
const topObject = {
  name: 'Top Item',
  color: 'red',
  extra: 'some extra data' // Додаткові поля дозволені
};

const bottomObject = {
  position: 1,
  weight: 100,
  description: 'heavy item' // Додаткові поля дозволені
};

const result = compare(topObject, bottomObject);
console.log('Compared result:', result);
