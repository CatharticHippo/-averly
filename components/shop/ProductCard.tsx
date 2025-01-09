import React from 'react';
import { StyleSheet, TouchableOpacity, Image, ViewStyle } from 'react-native';
import { ThemedView } from '../ui/ThemedView';
import { ThemedText } from '../ui/ThemedText';
import { useAppTheme } from '../../contexts/ThemeContext';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
  style?: ViewStyle;
  onPress?: () => void;
}

export default function ProductCard({ product, style, onPress }: ProductCardProps) {
  const { theme } = useAppTheme();

  return (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: theme.card }, style]} 
      onPress={onPress}
    >
      <Image
        source={{ uri: product.images[0] }}
        style={styles.image}
        resizeMode="cover"
      />
      <ThemedView style={styles.saleTag}>
        <ThemedText style={styles.saleTagText}>{product.discount}% OFF</ThemedText>
      </ThemedView>
      <ThemedView style={styles.content}>
        <ThemedText style={styles.brand}>{product.brandId.toUpperCase()}</ThemedText>
        <ThemedText style={styles.name} numberOfLines={2}>{product.name}</ThemedText>
        <ThemedView style={styles.priceContainer}>
          <ThemedText style={styles.salePrice}>${product.salePrice}</ThemedText>
          <ThemedText style={styles.originalPrice}>${product.originalPrice}</ThemedText>
        </ThemedView>
      </ThemedView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  saleTag: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#3EB489',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  saleTagText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    padding: 12,
  },
  brand: {
    fontSize: 12,
    opacity: 0.7,
    marginBottom: 4,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  salePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3EB489',
  },
  originalPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    opacity: 0.5,
  },
});