import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { router } from 'expo-router';
import { ThemedView } from '../../components/ui/ThemedView';
import { ThemedText } from '../../components/ui/ThemedText';
import { Button } from '../../components/ui/Button';
import { getAllProducts } from '../../services/productService';
import ProductCard from '../../components/shop/ProductCard';
import { Product } from '../../types/product';
import { useSelectedBrands } from '../../contexts/BrandsContext';

export default function ShopTab() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { selectedBrands, hasSelectedBrands } = useSelectedBrands();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const allProducts = await getAllProducts();
        console.log('All products:', allProducts);
        setProducts(allProducts);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  console.log('Selected brands:', Array.from(selectedBrands));
  console.log('Has selected brands:', hasSelectedBrands);

  if (!hasSelectedBrands) {
    return (
      <ThemedView style={styles.centered}>
        <ThemedText style={styles.message}>
          Select your favorite brands to see their deals
        </ThemedText>
        <Button
          title="Select Brands"
          onPress={() => router.push('/shop/BrandSelectionScreen')}
        />
      </ThemedView>
    );
  }

  if (loading) {
    return (
      <ThemedView style={styles.centered}>
        <ThemedText>Loading products...</ThemedText>
      </ThemedView>
    );
  }

  const filteredProducts = products.filter(product => 
    selectedBrands.has(product.brandId)
  );

  console.log('Filtered products:', filteredProducts);

  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.productGrid}
        ListHeaderComponent={
          <ThemedView style={styles.header}>
            <ThemedText style={styles.title}>Latest Deals</ThemedText>
            <ThemedText style={styles.subtitle}>
              {filteredProducts.length} items on sale from your favorite brands
            </ThemedText>
          </ThemedView>
        }
        ListEmptyComponent={
          <ThemedView style={styles.centered}>
            <ThemedText style={styles.message}>
              No deals available from your selected brands right now.
            </ThemedText>
            <Button
              title="Change Brands"
              onPress={() => router.push('/shop/BrandSelectionScreen')}
            />
          </ThemedView>
        }
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    opacity: 0.7,
  },
  header: {
    padding: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
  },
  productGrid: {
    padding: 8,
  },
});