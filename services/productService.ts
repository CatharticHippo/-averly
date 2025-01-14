import { Product } from '../types/product';

const PRODUCTS: { [key: string]: Product[] } = {
  // THE NORTH FACE
  northface: [
    {
      id: 'tnf-tee-1',
      brandId: 'northface',
      name: 'Essential Cotton T-Shirt',
      description: 'Comfortable cotton blend basic tee with logo.',
      originalPrice: 35.00,
      salePrice: 24.99,
      discount: 29,
      images: ['https://via.placeholder.com/300'],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'White', 'Grey'],
      category: 'Shirts & Tops'
    },
    {
      id: 'tnf-fleece-1',
      brandId: 'northface',
      name: 'Classic Fleece Pullover',
      description: 'Warm and cozy fleece for everyday wear.',
      originalPrice: 89.00,
      salePrice: 59.99,
      discount: 33,
      images: ['https://via.placeholder.com/300'],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Navy', 'Black', 'Forest Green'],
      category: 'Jackets & Outerwear'
    },
    {
      id: 'tnf-pants-1',
      brandId: 'northface',
      name: 'Hiking Cargo Pants',
      description: 'Durable cargo pants with stretch fabric.',
      originalPrice: 75.00,
      salePrice: 49.99,
      discount: 33,
      images: ['https://via.placeholder.com/300'],
      sizes: ['30x30', '32x32', '34x34', '36x34'],
      colors: ['Khaki', 'Grey', 'Black'],
      category: 'Pants & Bottoms'
    },
    {
      id: 'tnf-shorts-1',
      brandId: 'northface',
      name: 'Trail Running Shorts',
      description: 'Lightweight shorts with built-in liner.',
      originalPrice: 45.00,
      salePrice: 29.99,
      discount: 33,
      images: ['https://via.placeholder.com/300'],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Grey'],
      category: 'Activewear'
    }
  ],

  // TIMBERLAND
  timberland: [
    {
      id: 'timb-tee-1',
      brandId: 'timberland',
      name: 'Tree Logo T-Shirt',
      description: 'Organic cotton tee with classic tree logo.',
      originalPrice: 30.00,
      salePrice: 19.99,
      discount: 33,
      images: ['https://via.placeholder.com/300'],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Wheat'],
      category: 'Shirts & Tops'
    },
    {
      id: 'timb-polo-1',
      brandId: 'timberland',
      name: 'Classic Pique Polo',
      description: 'Traditional polo shirt with embroidered logo.',
      originalPrice: 55.00,
      salePrice: 39.99,
      discount: 27,
      images: ['https://via.placeholder.com/300'],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Navy', 'White', 'Grey'],
      category: 'Shirts & Tops'
    },
    {
      id: 'timb-jeans-1',
      brandId: 'timberland',
      name: 'Straight Fit Denim',
      description: 'Classic straight fit jeans with stretch.',
      originalPrice: 80.00,
      salePrice: 54.99,
      discount: 31,
      images: ['https://via.placeholder.com/300'],
      sizes: ['30x30', '32x32', '34x34', '36x34'],
      colors: ['Dark Wash', 'Medium Wash', 'Light Wash'],
      category: 'Denim'
    }
  ],

  // VANS
  vans: [
    {
      id: 'vans-tee-1',
      brandId: 'vans',
      name: 'Off The Wall Tee',
      description: 'Classic logo t-shirt with skateboard graphic.',
      originalPrice: 25.00,
      salePrice: 17.99,
      discount: 28,
      images: ['https://via.placeholder.com/300'],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'White', 'Grey'],
      category: 'Shirts & Tops'
    },
    {
      id: 'vans-hoodie-1',
      brandId: 'vans',
      name: 'Classic Pullover Hoodie',
      description: 'Comfortable cotton blend hoodie with front pocket.',
      originalPrice: 65.00,
      salePrice: 44.99,
      discount: 31,
      images: ['https://via.placeholder.com/300'],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Grey', 'Navy'],
      category: 'Shirts & Tops'
    },
    {
      id: 'vans-shorts-1',
      brandId: 'vans',
      name: 'Range Shorts',
      description: 'Casual chino shorts with classic fit.',
      originalPrice: 45.00,
      salePrice: 29.99,
      discount: 33,
      images: ['https://via.placeholder.com/300'],
      sizes: ['28', '30', '32', '34', '36'],
      colors: ['Khaki', 'Black', 'Navy'],
      category: 'Pants & Bottoms'
    }
  ],

  // DICKIES
  dickies: [
    {
      id: 'dickies-shirt-1',
      brandId: 'dickies',
      name: 'Work Shirt',
      description: 'Classic work shirt with buttoned pockets.',
      originalPrice: 45.00,
      salePrice: 29.99,
      discount: 33,
      images: ['https://via.placeholder.com/300'],
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Navy', 'Black', 'Khaki'],
      category: 'Shirts & Tops'
    },
    {
      id: 'dickies-pants-1',
      brandId: 'dickies',
      name: '874 Original Work Pants',
      description: 'Classic fit work pants with wrinkle resistance.',
      originalPrice: 50.00,
      salePrice: 34.99,
      discount: 30,
      images: ['https://via.placeholder.com/300'],
      sizes: ['30x30', '32x32', '34x34', '36x34'],
      colors: ['Black', 'Navy', 'Brown'],
      category: 'Pants & Bottoms'
    },
    {
      id: 'dickies-shorts-1',
      brandId: 'dickies',
      name: 'Relaxed Fit Work Shorts',
      description: 'Durable work shorts with multiple pockets.',
      originalPrice: 40.00,
      salePrice: 27.99,
      discount: 30,
      images: ['https://via.placeholder.com/300'],
      sizes: ['30', '32', '34', '36', '38'],
      colors: ['Khaki', 'Black', 'Navy'],
      category: 'Pants & Bottoms'
    }
  ],
// JUICY COUTURE
'juicy-couture': [
  {
    id: 'juicy-bag-1',
    brandId: 'juicy-couture',
    name: 'Velour Crossbody Bag',
    description: 'Classic velour crossbody with signature charm detail.',
    originalPrice: 89.00,
    salePrice: 59.99,
    discount: 33,
    images: ['https://via.placeholder.com/300'],
    sizes: ['One Size'],
    colors: ['Pink', 'Black', 'Purple'],
    category: 'Bags & Accessories'
  },
  {
    id: 'juicy-wallet-1',
    brandId: 'juicy-couture',
    name: 'Crown Logo Wallet',
    description: 'Zip-around wallet with iconic crown embellishment.',
    originalPrice: 58.00,
    salePrice: 39.99,
    discount: 31,
    images: ['https://via.placeholder.com/300'],
    sizes: ['One Size'],
    colors: ['Gold', 'Silver', 'Rose Gold'],
    category: 'Bags & Accessories'
  }
],

// NAUTICA
nautica: [
  {
    id: 'nautica-watch-1',
    brandId: 'nautica',
    name: 'Maritime Chronograph Watch',
    description: 'Water-resistant chronograph with nautical details.',
    originalPrice: 165.00,
    salePrice: 99.99,
    discount: 39,
    images: ['https://via.placeholder.com/300'],
    sizes: ['One Size'],
    colors: ['Navy/Gold', 'Black/Silver', 'Brown/Rose Gold'],
    category: 'Bags & Accessories'
  },
  {
    id: 'nautica-bag-1',
    brandId: 'nautica',
    name: 'Maritime Weekender Bag',
    description: 'Durable canvas weekender with leather trim.',
    originalPrice: 120.00,
    salePrice: 79.99,
    discount: 33,
    images: ['https://via.placeholder.com/300'],
    sizes: ['One Size'],
    colors: ['Navy', 'Khaki', 'Grey'],
    category: 'Bags & Accessories'
  }
],

// SPYDER
spyder: [
  {
    id: 'spyder-gloves-1',
    brandId: 'spyder',
    name: 'Conduct GT Ski Gloves',
    description: 'Touch-screen compatible ski gloves with Thinsulate.',
    originalPrice: 75.00,
    salePrice: 49.99,
    discount: 33,
    images: ['https://via.placeholder.com/300'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Red'],
    category: 'Bags & Accessories'
  },
  {
    id: 'spyder-beanie-1',
    brandId: 'spyder',
    name: 'Core Sweater Beanie',
    description: 'Warm knit beanie with fleece lining.',
    originalPrice: 35.00,
    salePrice: 24.99,
    discount: 29,
    images: ['https://via.placeholder.com/300'],
    sizes: ['One Size'],
    colors: ['Black', 'Grey', 'Navy'],
    category: 'Bags & Accessories'
  }
],

// VOLCOM
volcom: [
  {
    id: 'volcom-backpack-1',
    brandId: 'volcom',
    name: 'Substrate Backpack',
    description: 'Skateboard-carrying backpack with laptop sleeve.',
    originalPrice: 65.00,
    salePrice: 44.99,
    discount: 31,
    images: ['https://via.placeholder.com/300'],
    sizes: ['One Size'],
    colors: ['Black', 'Camo', 'Grey'],
    category: 'Bags & Accessories'
  },
  {
    id: 'volcom-wallet-1',
    brandId: 'volcom',
    name: 'Stone Age Leather Wallet',
    description: 'Slim leather wallet with stone logo.',
    originalPrice: 35.00,
    salePrice: 24.99,
    discount: 29,
    images: ['https://via.placeholder.com/300'],
    sizes: ['One Size'],
    colors: ['Brown', 'Black'],
    category: 'Bags & Accessories'
  }
],

// EDDIE BAUER
'eddie-bauer': [
  {
    id: 'eb-pack-1',
    brandId: 'eddie-bauer',
    name: 'Stowaway Packable Daypack',
    description: 'Ultra-light packable backpack for travel.',
    originalPrice: 40.00,
    salePrice: 29.99,
    discount: 25,
    images: ['https://via.placeholder.com/300'],
    sizes: ['One Size'],
    colors: ['Black', 'Blue', 'Orange'],
    category: 'Bags & Accessories'
  },
  {
    id: 'eb-belt-1',
    brandId: 'eddie-bauer',
    name: 'Web Belts',
    description: 'Durable web belt with metal buckle.',
    originalPrice: 25.00,
    salePrice: 17.99,
    discount: 28,
    images: ['https://via.placeholder.com/300'],
    sizes: ['One Size'],
    colors: ['Black', 'Tan', 'Navy'],
    category: 'Bags & Accessories'
  }
],

// AIRWALK
airwalk: [
  {
    id: 'airwalk-bag-1',
    brandId: 'airwalk',
    name: 'Classic Skate Backpack',
    description: 'Skateboard-friendly backpack with padded straps.',
    originalPrice: 45.00,
    salePrice: 29.99,
    discount: 33,
    images: ['https://via.placeholder.com/300'],
    sizes: ['One Size'],
    colors: ['Black', 'Grey', 'Blue'],
    category: 'Bags & Accessories'
  },
  {
    id: 'airwalk-hat-1',
    brandId: 'airwalk',
    name: 'Classic Snapback',
    description: 'Adjustable snapback with embroidered logo.',
    originalPrice: 25.00,
    salePrice: 17.99,
    discount: 28,
    images: ['https://via.placeholder.com/300'],
    sizes: ['One Size'],
    colors: ['Black/White', 'Navy/Red', 'Grey/Black'],
    category: 'Bags & Accessories'
  }
],
// CALVIN KLEIN
'calvin-klein': [
  {
    id: 'ck-jacket-1',
    brandId: 'calvin-klein',
    name: 'Performance Down Puffer',
    description: 'Lightweight packable down jacket with water-resistant finish.',
    originalPrice: 198.00,
    salePrice: 129.99,
    discount: 34,
    images: ['https://via.placeholder.com/300'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Silver'],
    category: 'Jackets & Outerwear'
  },
  {
    id: 'ck-jacket-2',
    brandId: 'calvin-klein',
    name: 'Hooded Rain Jacket',
    description: 'Modern fit rain jacket with sealed seams.',
    originalPrice: 149.00,
    salePrice: 99.99,
    discount: 33,
    images: ['https://via.placeholder.com/300'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Khaki', 'Navy'],
    category: 'Jackets & Outerwear'
  },
  {
    id: 'ck-vest-1',
    brandId: 'calvin-klein',
    name: 'Quilted Performance Vest',
    description: 'Lightweight insulated vest for layering.',
    originalPrice: 128.00,
    salePrice: 89.99,
    discount: 30,
    images: ['https://via.placeholder.com/300'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Olive'],
    category: 'Jackets & Outerwear'
  }
],

// TOMMY HILFIGER
'tommy-hilfiger': [
  {
    id: 'th-jacket-1',
    brandId: 'tommy-hilfiger',
    name: 'Yacht Club Windbreaker',
    description: 'Classic nautical windbreaker with striped details.',
    originalPrice: 159.00,
    salePrice: 99.99,
    discount: 37,
    images: ['https://via.placeholder.com/300'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy/White', 'Red/Navy', 'White/Navy'],
    category: 'Jackets & Outerwear'
  },
  {
    id: 'th-jacket-2',
    brandId: 'tommy-hilfiger',
    name: 'Performance Ski Jacket',
    description: 'Waterproof ski jacket with removable hood.',
    originalPrice: 229.00,
    salePrice: 159.99,
    discount: 30,
    images: ['https://via.placeholder.com/300'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Red/Navy', 'Navy/White', 'Black/Red'],
    category: 'Jackets & Outerwear'
  },
  {
    id: 'th-jacket-3',
    brandId: 'tommy-hilfiger',
    name: 'Outdoor Field Jacket',
    description: 'Military-inspired jacket with multiple pockets.',
    originalPrice: 189.00,
    salePrice: 129.99,
    discount: 31,
    images: ['https://via.placeholder.com/300'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Olive', 'Khaki', 'Navy'],
    category: 'Jackets & Outerwear'
  }
],

// IZOD
'izod': [
  {
    id: 'izod-jacket-1',
    brandId: 'izod',
    name: 'Golf Rain Jacket',
    description: 'Lightweight water-resistant jacket for golf.',
    originalPrice: 89.00,
    salePrice: 59.99,
    discount: 33,
    images: ['https://via.placeholder.com/300'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Black', 'Grey'],
    category: 'Jackets & Outerwear'
  },
  {
    id: 'izod-vest-1',
    brandId: 'izod',
    name: 'Advantage Performance Vest',
    description: 'Stretch performance vest for golf and outdoor activities.',
    originalPrice: 75.00,
    salePrice: 49.99,
    discount: 33,
    images: ['https://via.placeholder.com/300'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Grey', 'Black'],
    category: 'Jackets & Outerwear'
  }
],

// VAN HEUSEN
'vanHeusen': [
  {
    id: 'vh-jacket-1',
    brandId: 'vanHeusen',
    name: 'Traveler Jacket',
    description: 'Wrinkle-resistant lightweight travel jacket.',
    originalPrice: 120.00,
    salePrice: 79.99,
    discount: 33,
    images: ['https://via.placeholder.com/300'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Khaki'],
    category: 'Jackets & Outerwear'
  },
  {
    id: 'vh-blazer-1',
    brandId: 'vanHeusen',
    name: 'Flex Outdoor Blazer',
    description: 'Stretch blazer with water-resistant finish.',
    originalPrice: 145.00,
    salePrice: 99.99,
    discount: 31,
    images: ['https://via.placeholder.com/300'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Grey', 'Black'],
    category: 'Jackets & Outerwear'
  }
],

// ARROW
'arrow': [
  {
    id: 'arrow-jacket-1',
    brandId: 'arrow',
    name: 'Adventure Series Jacket',
    description: 'Durable outdoor jacket with multiple pockets.',
    originalPrice: 110.00,
    salePrice: 74.99,
    discount: 32,
    images: ['https://via.placeholder.com/300'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Olive', 'Brown', 'Black'],
    category: 'Jackets & Outerwear'
  },
  {
    id: 'arrow-vest-1',
    brandId: 'arrow',
    name: 'Travel Vest',
    description: 'Multi-pocket vest for outdoor activities.',
    originalPrice: 85.00,
    salePrice: 59.99,
    discount: 29,
    images: ['https://via.placeholder.com/300'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Khaki', 'Navy', 'Black'],
    category: 'Jackets & Outerwear'
  }
]
  // ... more brands to follow
};

export async function getProductsForBrand(brandId: string): Promise<Product[]> {
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
  return PRODUCTS[brandId] || [];
}

export async function getAllProducts(): Promise<Product[]> {
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
  return Object.values(PRODUCTS).flat();
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const allProducts = await getAllProducts();
  return allProducts.filter(product => product.category === category);
}