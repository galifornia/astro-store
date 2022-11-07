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

export const addUser = (u: User) => {
  const newState = { ...state.get(), user: u };
  state.set(newState);
  localStorage.setItem('app_state', JSON.stringify(newState));
};

export const toggleCart = () =>
  state.set({ ...state.get(), showingCart: !state.get().showingCart });

export const toggleProfile = () =>
  state.set({ ...state.get(), showingProfile: !state.get().showingProfile });
