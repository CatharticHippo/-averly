import React from 'react';
import { StyleSheet, ScrollView, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { ThemedView } from '../../components/ui/ThemedView';
import { ThemedText } from '../../components/ui/ThemedText';
import { useAppTheme } from '../../contexts/ThemeContext';

interface SaleItem {
  id: string;
  brand: string;
  name: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  image: string;
  isNewSale: boolean;
}

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.8;

const NEW_SALE_ITEMS: SaleItem[] = [
  {
    id: '1',
    brand: 'The North Face',
    name: 'Thermoball Eco Jacket',
    originalPrice: 199.99,
    salePrice: 139.99,
    discount: 30,
    image: 'https://via.placeholder.com/300',
    isNewSale: true,
  },
  {
    id: '2',
    brand: 'Timberland',
    name: 'Premium 6-Inch Boots',
    originalPrice: 198.00,
    salePrice: 129.99,
    discount: 34,
    image: 'https://via.placeholder.com/300',
    isNewSale: true,
  },
  {
    id: '3',
    brand: 'Vans',
    name: 'Classic Sk8-Hi',
    originalPrice: 75.00,
    salePrice: 49.99,
    discount: 33,
    image: 'https://via.placeholder.com/300',
    isNewSale: true,
  },
];

export default function HomeScreen() {
  const { theme } = useAppTheme();

  const renderSaleItem = ({ item }: { item: SaleItem }) => (
    <TouchableOpacity
      style={[styles.saleCard, { backgroundColor: theme.card }]}
      onPress={() => router.push(`/shop/ProductDetailScreen?productId=${item.id}`)}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.productImage}
        resizeMode="cover"
      />
      <ThemedView style={styles.saleTag}>
        <ThemedText style={styles.saleTagText}>{item.discount}% OFF</ThemedText>
      </ThemedView>
      <ThemedView style={styles.cardContent}>
        <ThemedText style={styles.brandName}>{item.brand}</ThemedText>
        <ThemedText style={styles.productName}>{item.name}</ThemedText>
        <ThemedView style={styles.priceContainer}>
          <ThemedText style={styles.salePrice}>${item.salePrice}</ThemedText>
          <ThemedText style={styles.originalPrice}>${item.originalPrice}</ThemedText>
        </ThemedView>
      </ThemedView>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText style={styles.title}>Welcome to $avrly</ThemedText>
        <ThemedText style={styles.subtitle}>Today's Best Deals</ThemedText>
      </ThemedView>

      <ThemedView style={styles.newSalesSection}>
        <ThemedText style={styles.sectionTitle}>New Price Drops</ThemedText>
        <FlatList
          data={NEW_SALE_ITEMS}
          renderItem={renderSaleItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.saleList}
          snapToInterval={CARD_WIDTH + 20}
          decelerationRate="fast"
          pagingEnabled
        />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginRight: 20,
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
    height: CARD_WIDTH,
  },
  saleTag: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#3EB489',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  saleTagText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  cardContent: {
    padding: 16,
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
    color: '#3EB489',
  },
  originalPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    opacity: 0.5,
  },
});