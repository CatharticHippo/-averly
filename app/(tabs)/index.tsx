import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { ThemedView } from '../../components/ui/ThemedView';
import { ThemedText } from '../../components/ui/ThemedText';
import { useAppTheme } from '../../contexts/ThemeContext';
import { useFavorites } from '../../contexts/FavoritesContext';
import { getAllProducts } from '../../services/productService';
import { Product } from '../../types/product';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.85;
const CARD_MARGIN = 8;

export default function HomeScreen() {
  const { theme } = useAppTheme();
  const { favorites } = useFavorites();
  const [newDeals, setNewDeals] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const allProducts = await getAllProducts();
      // Get the first 5 products as "new deals"
      setNewDeals(allProducts.slice(0, 5));
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={[styles.saleCard, { backgroundColor: theme.card }]}
      onPress={() => router.push(`/shop/ProductDetailScreen?productId=${item.id}`)}
    >
      <Image
        source={{ uri: item.images[0] }}
        style={styles.productImage}
        resizeMode="cover"
      />
      <ThemedView style={styles.cardContent}>
        <ThemedView style={[styles.saleTag, { backgroundColor: theme.primary }]}>
          <ThemedText style={styles.saleTagText}>{item.discount}% OFF</ThemedText>
        </ThemedView>
        <ThemedText style={styles.brandName}>{item.brandId.toUpperCase()}</ThemedText>
        <ThemedText style={styles.productName}>{item.name}</ThemedText>
        <ThemedView style={styles.priceContainer}>
          <ThemedText style={[styles.salePrice, { color: theme.primary }]}>
            ${item.salePrice}
          </ThemedText>
          <ThemedText style={styles.originalPrice}>${item.originalPrice}</ThemedText>
        </ThemedView>
      </ThemedView>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <ThemedView style={styles.centered}>
        <ThemedText>Loading deals...</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        <ThemedView style={styles.header}>
          <ThemedText style={styles.title}>Welcome to $avrly</ThemedText>
          <ThemedText style={styles.subtitle}>Today's Best Deals</ThemedText>
        </ThemedView>

        <ThemedView style={styles.newSalesSection}>
          <ThemedText style={styles.sectionTitle}>New Price Drops</ThemedText>
          <FlatList
            data={newDeals}
            renderItem={renderProduct}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.saleList}
            snapToInterval={CARD_WIDTH + CARD_MARGIN * 2}
            decelerationRate="fast"
            pagingEnabled
          />
        </ThemedView>

        {favorites.length > 0 && (
          <ThemedView style={styles.favoritesSection}>
            <ThemedText style={styles.sectionTitle}>From Your Favorites</ThemedText>
            <FlatList
              data={favorites}
              renderItem={renderProduct}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.saleList}
              snapToInterval={CARD_WIDTH + CARD_MARGIN * 2}
              decelerationRate="fast"
              pagingEnabled
            />
          </ThemedView>
        )}
      </ScrollView>
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
  },
  header: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.7,
  },
  newSalesSection: {
    marginTop: 20,
  },
  favoritesSection: {
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  saleList: {
    paddingHorizontal: 20,
  },
  saleCard: {
    width: CARD_WIDTH,
    marginHorizontal: CARD_MARGIN,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: CARD_WIDTH * 0.75,
  },
  cardContent: {
    padding: 16,
  },
  saleTag: {
    position: 'absolute',
    top: -160,
    right: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  saleTagText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  brandName: {
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 4,
  },
  productName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  salePrice: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  originalPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    opacity: 0.5,
  },
});