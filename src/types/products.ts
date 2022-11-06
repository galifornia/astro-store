export interface Category {
  id: string;
  name: string;
}

export interface Review {
  title: string;
  author: string;
  body: string;
  date: string;
}

export interface Product {
  productId: string;
  title: string;
  description: string;
  brand: string;
  rating: number;
  reviews: Review[];
  categories: Category[];
  price: number;
}
