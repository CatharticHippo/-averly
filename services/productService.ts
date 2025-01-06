import { Product } from '../types/product';
import { fetchNikeProducts } from './api/brandApis';
import { fetchShopifyProducts } from './feeds/shopifyFeed';
import { scrapeBrandProducts } from '../server/scrapers/brandScrapers';

export async function getProductsForBrand(brandId: string): Promise<Product[]> {
  // In a real app, this would determine the best data source for each brand
  switch (brandId) {
    case 'nike':
      return fetchNikeProducts();
    case 'adidas':
      return fetchShopifyProducts('adidas');
    default:
      return scrapeBrandProducts(brandId);
  }
}