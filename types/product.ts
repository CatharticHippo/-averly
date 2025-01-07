export interface Product {
  id: string;
  brandId: string;
  name: string;
  description: string;
  originalPrice: number;
  salePrice: number;
  discount?: number;  // Made optional since we can calculate it
  images: string[];
  sizes: string[];
  colors: string[];
  url?: string;      // Made optional for now
}