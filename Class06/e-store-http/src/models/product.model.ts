export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  stock: number;
  rating: { rate: number; count: number };
  inCart: boolean;
  quantity: number;
}

export interface AddProductReq {
  title: string;
  price: number;
  stock: number;
  description: string;
  category: string;
  image: string;
}
