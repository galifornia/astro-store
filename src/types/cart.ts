export interface Item {
  productId: string;
  price: number;
  quantity: number;
}

export interface Cart {
  total: number;
  products: [Item] | [];
}
