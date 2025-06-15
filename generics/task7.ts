// Завдання 7: Використання Record<K, V>

export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Використовуємо Record замість звичайного об'єкта
const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: 'Admin User',
  [UserRole.editor]: 'Editor User',
  [UserRole.guest]: 'Guest User',
};

// Демонстрация работы
console.log('Role descriptions:', RoleDescription);

// Функція для отримання опису ролі
function getRoleDescription(role: UserRole): string {
  return RoleDescription[role];
}

console.log('Admin description:', getRoleDescription(UserRole.admin));
console.log('Editor description:', getRoleDescription(UserRole.editor));
console.log('Guest description:', getRoleDescription(UserRole.guest));

// Додатковий приклад з Record
type Permission = 'read' | 'write' | 'delete';
const RolePermissions: Record<UserRole, Permission[]> = {
  [UserRole.admin]: ['read', 'write', 'delete'],
  [UserRole.editor]: ['read', 'write'],
  [UserRole.guest]: ['read'],
};

console.log('Role permissions:', RolePermissions);

function getUserPermissions(role: UserRole): Permission[] {
  return RolePermissions[role];
}

console.log('Admin permissions:', getUserPermissions(UserRole.admin));
console.log('Guest permissions:', getUserPermissions(UserRole.guest));
