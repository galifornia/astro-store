import { atom } from 'nanostores';

interface User {
  id: string;
  name: string;
  email: string;
}

export const users = atom<User[]>([]);

export function addUser(user: User) {
  users.set([...users.get(), user]);
}
