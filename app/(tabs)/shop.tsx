import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { ThemedView } from '../../components/ui/ThemedView';
import { ThemedText } from '../../components/ui/ThemedText';
import FilterPanel from '../../components/shop/FilterPanel';
import ProductCard from '../../components/shop/ProductCard';
import { useSelectedBrands } from '../../contexts/BrandsContext';
import { useAppTheme } from '../../contexts/ThemeContext';
import { Product } from '../../types/product';
import { getAllProducts } from '../../services/productService';

const { width } = Dimensions.get('window');
const COLUMN_GAP = 16;
const NUM_COLUMNS = 2;
const CARD_WIDTH = (width - COLUMN_GAP * (NUM_COLUMNS + 1)) / NUM_COLUMNS;

export default function ShopScreen() {
  const { theme } = useAppTheme();
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setIsLoading(true);
      const allProducts = await getAllProducts();
      setProducts(allProducts);
      setFilteredProducts(allProducts);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilters = (filters: any) => {
    let filtered = [...products];

    // Apply brand filters
    if (filters.brands.length > 0) {
      filtered = filtered.filter(product => filters.brands.includes(product.brandId));
    }

    // Apply category filters
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => filters.categories.includes(product.category));
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.salePrice - b.salePrice);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.salePrice - a.salePrice);
        break;
      case 'biggest-discount':
        filtered.sort((a, b) => b.discount - a.discount);
        break;
    }

    setFilteredProducts(filtered);
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <ProductCard
      product={item}
      style={{ width: CARD_WIDTH }}
      onPress={() => router.push(`/shop/ProductDetailScreen?productId=${item.id}`)}
    />
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText style={styles.title}>Shop</ThemedText>
        <TouchableOpacity
          style={[styles.filterButton, { borderColor: theme.border }]}
          onPress={() => setShowFilters(true)}
        >
          <ThemedText>Filter & Sort</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.productGrid}
        columnWrapperStyle={styles.row}
        ListEmptyComponent={
          <ThemedView style={styles.emptyState}>
            <ThemedText>No products found</ThemedText>
          </ThemedView>
        }
      />

      {showFilters && (
        <FilterPanel
          visible={showFilters}
          onClose={() => setShowFilters(false)}
          onApplyFilters={handleFilters}
        />
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  filterButton: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
  },
  productGrid: {
    padding: COLUMN_GAP,
  },
  row: {
    gap: COLUMN_GAP,
    justifyContent: 'flex-start',
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});