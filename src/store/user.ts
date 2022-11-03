import { atom } from 'nanostores';

interface User {
  id: string;
  name: string;
  email: string;
}

export const userStore = atom<User>();

export function addUser(user: User) {
  userStore.set(user);
}
