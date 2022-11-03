import { atom } from 'nanostores';

interface Category {
  id: string;
  name: string;
}

interface Review {
  title: string;
  author: string;
  body: string;
  date: string;
}

interface Product {
  productId: string;
  title: string;
  description: string;
  brand: string;
  rating: number;
  reviews: Review[];
  categories: Category[];
  price: number;
}

export const products = atom<Product[]>([]);
