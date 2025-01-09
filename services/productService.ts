import { Product } from '../types/product';

const PRODUCTS: { [key: string]: Product[] } = {
  northface: [
    {
      id: 'northface-1',
      brandId: 'northface',
      name: 'Thermoball Eco Jacket',
      description: 'Lightweight yet warm, this sustainable jacket is perfect for cold weather.',
      originalPrice: 199,
      salePrice: 139.99,
      discount: 30,
      url: 'https://northface.com/thermoball',
      images: ['https://via.placeholder.com/300'],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Green'],
      category: 'Jackets'
    },
    {
      id: 'northface-2',
      brandId: 'northface',
      name: 'Recon Backpack',
      description: 'Versatile backpack for hiking or daily use with laptop compartment.',
      originalPrice: 99,
      salePrice: 69.99,
      discount: 29,
      url: 'https://northface.com/recon',
      images: ['https://via.placeholder.com/300'],
      sizes: ['One Size'],
      colors: ['Black', 'Grey', 'Blue'],
      category: 'Bags'
    }
  ],
  timberland: [
    {
      id: 'timberland-1',
      brandId: 'timberland',
      name: '6-Inch Premium Boots',
      description: 'Iconic waterproof boots with premium leather upper.',
      originalPrice: 198,
      salePrice: 149.99,
      discount: 24,
      url: 'https://timberland.com/premium-boots',
      images: ['https://via.placeholder.com/300'],
      sizes: ['7', '8', '9', '10', '11', '12'],
      colors: ['Wheat', 'Black', 'Brown'],
      category: 'Footwear'
    }
  ],
  vans: [
    {
      id: 'vans-1',
      brandId: 'vans',
      name: 'Old Skool Classic',
      description: 'The iconic side stripe skate shoe.',
      originalPrice: 70,
      salePrice: 49.99,
      discount: 29,
      url: 'https://vans.com/old-skool',
      images: ['https://via.placeholder.com/300'],
      sizes: ['6', '7', '8', '9', '10', '11', '12'],
      colors: ['Black/White', 'Navy', 'Red'],
      category: 'Footwear'
    }
  ],
  // Add more products with categories as needed
};

export async function getProductsForBrand(brandId: string): Promise<Product[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return PRODUCTS[brandId] || [];
}

export async function getAllProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return Object.values(PRODUCTS).flat();
}