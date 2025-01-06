import { Product } from '../../types/product';

// Simulating Nike API response
export async function fetchNikeProducts(): Promise<Product[]> {
  // In reality, this would fetch from Nike's API
  return [
    {
      id: 'nike-1',
      brandId: 'nike',
      name: 'Air Max 270',
      description: 'Nike Air Max 270 Running Shoes',
      originalPrice: 150,
      salePrice: 89.99,
      discount: 40,
      images: ['https://via.placeholder.com/300'],
      sizes: ['7', '8', '9', '10', '11'],
      colors: ['Black/White', 'Red/Black'],
      url: 'https://nike.com/airmax270',
    },
    {
      id: 'nike-2',
      brandId: 'nike',
      name: 'Nike Dri-FIT',
      description: 'Men\'s Training T-Shirt',
      originalPrice: 35,
      salePrice: 24.99,
      discount: 29,
      images: ['https://via.placeholder.com/300'],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Grey', 'Navy'],
      url: 'https://nike.com/drifit',
    },
  ];
}