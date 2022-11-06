import { atom } from 'nanostores';
import { User } from '../types/user';

interface State {
  user: User | null;
  showingCart: boolean;
  showingProfile: boolean;
}

export const state = atom<State>({
  showingCart: false,
  showingProfile: false,
  user: null,
});

export function addUser(u: User) {
  state.set({ ...state.get(), user: u });
}

export const toggleCart = () =>
  state.set({ ...state.get(), showingCart: !state.get().showingCart });

export const toggleProfile = () =>
  state.set({ ...state.get(), showingProfile: !state.get().showingProfile });
