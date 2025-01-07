import { Product } from '../types/product';

const PRODUCTS: { [key: string]: Product[] } = {
  nike: [
    {
      id: 'nike-1',
      brandId: 'nike',
      name: 'Air Max 270',
      description: 'Nike Air Max 270 Running Shoes - Experience unmatched comfort and style with the revolutionary Air unit in the heel.',
      originalPrice: 150,
      salePrice: 89.99,
      discount: 40,
      url: 'https://nike.com/airmax270',
      images: ['https://via.placeholder.com/300'],
      sizes: ['7', '8', '9', '10', '11'],
      colors: ['Black/White', 'Red/Black'],
    },
    {
      id: 'nike-2',
      brandId: 'nike',
      name: 'Nike Dri-FIT',
      description: 'Men\'s Training T-Shirt - Stay cool and dry during your workouts with moisture-wicking technology.',
      originalPrice: 35,
      salePrice: 24.99,
      discount: 29,
      url: 'https://nike.com/drifit',
      images: ['https://via.placeholder.com/300'],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Grey', 'Navy'],
    }
  ],
  adidas: [
    {
      id: 'adidas-1',
      brandId: 'adidas',
      name: 'Ultraboost 22',
      description: 'Experience extraordinary comfort and energy return with these premium running shoes.',
      originalPrice: 180,
      salePrice: 129.99,
      discount: 28,
      url: 'https://adidas.com/ultraboost22',
      images: ['https://via.placeholder.com/300'],
      sizes: ['7', '8', '9', '10', '11'],
      colors: ['Core Black', 'Cloud White'],
    },
    {
      id: 'adidas-2',
      brandId: 'adidas',
      name: 'Track Jacket',
      description: 'Classic sports style with modern features.',
      originalPrice: 50,
      salePrice: 34.99,
      discount: 30,
      url: 'https://adidas.com/track-jacket',
      images: ['https://via.placeholder.com/300'],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Red'],
    }
  ],
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
    }
  ],
  patagonia: [
    {
      id: 'patagonia-1',
      brandId: 'patagonia',
      name: 'Better Sweater',
      description: 'Warm fleece jacket made with recycled materials.',
      originalPrice: 139,
      salePrice: 99.99,
      discount: 28,
      url: 'https://patagonia.com/better-sweater',
      images: ['https://via.placeholder.com/300'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Grey', 'Navy', 'Green'],
    },
    {
      id: 'patagonia-2',
      brandId: 'patagonia',
      name: 'Baggies Shorts',
      description: 'Quick-drying shorts perfect for water and land.',
      originalPrice: 55,
      salePrice: 39.99,
      discount: 27,
      url: 'https://patagonia.com/baggies',
      images: ['https://via.placeholder.com/300'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Blue', 'Yellow'],
    }
  ],
  lululemon: [
    {
      id: 'lululemon-1',
      brandId: 'lululemon',
      name: 'Align Leggings',
      description: 'Buttery soft leggings perfect for yoga and everyday wear.',
      originalPrice: 98,
      salePrice: 69.99,
      discount: 29,
      url: 'https://lululemon.com/align',
      images: ['https://via.placeholder.com/300'],
      sizes: ['0', '2', '4', '6', '8', '10', '12'],
      colors: ['Black', 'Navy', 'Purple'],
    },
    {
      id: 'lululemon-2',
      brandId: 'lululemon',
      name: 'Metal Vent Tech Shirt',
      description: 'Breathable training shirt with anti-odor technology.',
      originalPrice: 78,
      salePrice: 49.99,
      discount: 36,
      url: 'https://lululemon.com/metal-vent',
      images: ['https://via.placeholder.com/300'],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Grey', 'Black', 'Blue'],
    }
  ]
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