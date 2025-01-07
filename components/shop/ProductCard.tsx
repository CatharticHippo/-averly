import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { Product } from '../../types/product';
import { ThemedView } from '../ui/ThemedView';
import { ThemedText } from '../ui/ThemedText';
import { useAppTheme } from '../../contexts/ThemeContext';
import { useFavorites } from '../../contexts/FavoritesContext';

interface ProductCardProps {
  product: Product;
}

const { width } = Dimensions.get('window');
const CARD_MARGIN = 8;
const CARD_WIDTH = (width - CARD_MARGIN * 4) / 2;

export default function ProductCard({ product }: ProductCardProps) {
  const { theme } = useAppTheme();
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  const handlePress = () => {
    router.push(`/shop/ProductDetailScreen?productId=${product.id}`);
  };

  const toggleFavorite = (e: any) => {
    e.stopPropagation();
    if (isFavorite(product.id)) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  const discountPercentage = Math.round(
    ((product.originalPrice - product.salePrice) / product.originalPrice) * 100
  );

  return (
    <TouchableOpacity onPress={handlePress}>
      <ThemedView style={[styles.card, { borderColor: theme.border }]}>
        <TouchableOpacity 
          style={styles.favoriteButton} 
          onPress={toggleFavorite}
        >
          <ThemedText style={{ fontSize: 20 }}>
            {isFavorite(product.id) ? '❤️' : '🤍'}
          </ThemedText>
        </TouchableOpacity>
        <Image
          source={{ uri: product.images[0] }}
          style={styles.image}
          resizeMode="cover"
        />
        <ThemedView style={styles.content}>
          <ThemedText variant="secondary" style={styles.brand}>
            {product.brandId.toUpperCase()}
          </ThemedText>
          <ThemedText numberOfLines={2} style={styles.name}>
            {product.name}
          </ThemedText>
          <ThemedView style={styles.priceContainer}>
            <ThemedText style={styles.salePrice}>
              ${product.salePrice}
            </ThemedText>
            <ThemedText style={styles.originalPrice}>
              ${product.originalPrice}
            </ThemedText>
            <ThemedText style={[styles.discount, { color: theme.error }]}>
              {discountPercentage}% OFF
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    margin: CARD_MARGIN,
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
  favoriteButton: {
    position: 'absolute',
    right: 8,
    top: 8,
    zIndex: 1,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: CARD_WIDTH,
  },
  content: {
    padding: 12,
  },
  brand: {
    fontSize: 12,
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
    flexWrap: 'wrap',
    gap: 4,
  },
  salePrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  originalPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    opacity: 0.7,
  },
  discount: {
    fontSize: 12,
    fontWeight: '600',
  },
});