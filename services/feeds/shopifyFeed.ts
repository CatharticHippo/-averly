import { Product } from '../../types/product';

export async function fetchShopifyProducts(brandId: string): Promise<Product[]> {
  // In reality, this would fetch from Shopify's API
  return [
    {
      id: `${brandId}-1`,
      brandId,
      name: 'Ultraboost 21',
      description: 'Running Shoes with Responsive Boost',
      originalPrice: 180,
      salePrice: 126,
      discount: 30,
      images: ['https://via.placeholder.com/300'],
      sizes: ['7', '8', '9', '10', '11'],
      colors: ['Cloud White', 'Core Black'],
      url: 'https://adidas.com/ultraboost21',
    },
    {
      id: `${brandId}-2`,
      brandId,
      name: 'Tiro Track Jacket',
      description: 'Men\'s Soccer Track Jacket',
      originalPrice: 45,
      salePrice: 31.99,
      discount: 29,
      images: ['https://via.placeholder.com/300'],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy'],
      url: 'https://adidas.com/tiro',
    },
  ];
}