import { Product } from '../../types/product';

export async function scrapeBrandProducts(brandId: string): Promise<Product[]> {
  // In reality, this would use Puppeteer or similar to scrape websites
  return [
    {
      id: `${brandId}-1`,
      brandId,
      name: 'Classic Cotton Shirt',
      description: 'Essential Cotton Shirt for Everyday Wear',
      originalPrice: 49.99,
      salePrice: 29.99,
      discount: 40,
      images: ['https://via.placeholder.com/300'],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Blue'],
      url: `https://${brandId}.com/cotton-shirt`,
    },
    {
      id: `${brandId}-2`,
      brandId,
      name: 'Slim Fit Jeans',
      description: 'Classic 5-Pocket Slim Fit Jeans',
      originalPrice: 79.99,
      salePrice: 49.99,
      discount: 37,
      images: ['https://via.placeholder.com/300'],
      sizes: ['30x32', '32x32', '34x32', '36x32'],
      colors: ['Dark Blue', 'Light Blue', 'Black'],
      url: `https://${brandId}.com/slim-jeans`,
    },
  ];
}