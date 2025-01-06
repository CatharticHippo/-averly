export interface Brand {
    id: string;
    name: string;
    logo: string;  // URL to logo image
    domain: string; // Website domain for future scraping/API calls
    clearanceUrl: string; // Direct URL to clearance section
    searchEndpoint?: string; // API endpoint if available
  }
  
  export const BRANDS: Brand[] = [
    {
      id: 'nike',
      name: 'Nike',
      logo: 'https://cdn.iconscout.com/icon/free/png-256/nike-1-202653.png',
      domain: 'nike.com',
      clearanceUrl: 'https://www.nike.com/w/sale-3yaep',
      searchEndpoint: 'https://api.nike.com/cic/browse/v2',
    },
    {
      id: 'adidas',
      name: 'Adidas',
      logo: 'https://cdn.iconscout.com/icon/free/png-256/adidas-9-202755.png',
      domain: 'adidas.com',
      clearanceUrl: 'https://www.adidas.com/us/sale',
    },
    {
      id: 'nordstrom',
      name: 'Nordstrom',
      logo: 'https://cdn.iconscout.com/icon/free/png-256/nordstrom-3-555163.png',
      domain: 'nordstrom.com',
      clearanceUrl: 'https://www.nordstrom.com/sale',
    },
    // Add more brands as needed
  ];
  
  export interface Product {
    id: string;
    brandId: string;
    name: string;
    description: string;
    originalPrice: number;
    salePrice: number;
    images: string[];
    sizes: string[];
    colors: string[];
    url: string;
  }
  
  // Example scraping function (to be implemented safely and legally)
  export const fetchBrandClearance = async (brand: Brand): Promise<Product[]> => {
    try {
      // This is where we'd implement the actual data fetching
      // For now, return mock data
      return [
        {
          id: `${brand.id}-1`,
          brandId: brand.id,
          name: 'Sample Product',
          description: 'Sample description',
          originalPrice: 100,
          salePrice: 60,
          images: ['https://via.placeholder.com/300'],
          sizes: ['S', 'M', 'L'],
          colors: ['Black', 'White'],
          url: `https://www.${brand.domain}/product-1`,
        },
      ];
    } catch (error) {
      console.error(`Error fetching ${brand.name} clearance:`, error);
      return [];
    }
  };