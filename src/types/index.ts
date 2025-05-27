export interface Product {
  id: string;
  name: string;
  category: 'keyboard' | 'mouse' | 'headset' | 'accessory';
  price: number;
  image: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  hasRGB: boolean;
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: 'review' | 'guide' | 'news';
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  author: string;
  products: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}