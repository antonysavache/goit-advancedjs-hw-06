// Завдання 1: Generic функція з Promise

function getPromise<T>(): Promise<T> {
  return new Promise<T>((resolve) => {
    resolve(['Text', 50] as T);
  });
}

// Правильне використання з типізацією
getPromise<[string, number]>()
  .then((data) => {
    console.log('Data from promise:', data);
    console.log('First element (string):', data[0]);
    console.log('Second element (number):', data[1]);
  });

// Альтернативний варіант без дженерика, але з правильною типізацією
function getSpecificPromise(): Promise<[string, number]> {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}

getSpecificPromise()
  .then((data) => {
    console.log('Specific promise data:', data);
  });
