export interface Product {
    id: string;
    brandId: string;
    name: string;
    description: string;
    originalPrice: number;
    salePrice: number;
    discount: number;
    images: string[];
    sizes: string[];
    colors: string[];
    url: string;
  }