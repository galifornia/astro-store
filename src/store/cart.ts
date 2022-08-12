import { atom } from 'nanostores';

interface Item {
  productId: string;
  price: number;
  quantity: number;
}

interface Cart {
  total: number;
  products: [Item] | [];
}

export const cart = atom<Cart>({ total: 0, products: [] });
