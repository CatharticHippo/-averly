import React, { useState } from 'react';
import { StyleSheet, ScrollView, Image, Dimensions, Pressable } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { ThemedView } from '../../components/ui/ThemedView';
import { ThemedText } from '../../components/ui/ThemedText';
import { Button } from '../../components/ui/Button';
import { useAppTheme } from '../../contexts/ThemeContext';
import { useCart } from '../../contexts/CartContext';

const { width } = Dimensions.get('window');

export default function ProductDetailScreen() {
  const { addItem } = useCart();
  const { productId } = useLocalSearchParams();
  const { theme } = useAppTheme();
  const [selectedSize, setSelectedSize] = useState('');
  const [product] = useState(() => {
    // For demo, getting Nike products and finding the one we want
    const products = [
      {
        id: 'nike-1',
        brandId: 'nike',
        name: 'Air Max 270',
        description: 'Nike Air Max 270 Running Shoes',
        originalPrice: 150,
        salePrice: 89.99,
        images: ['https://via.placeholder.com/300'],
        sizes: ['7', '8', '9', '10', '11'],
        colors: ['Black/White', 'Red/Black'],
      },
      {
        id: 'nike-2',
        brandId: 'nike',
        name: 'Nike Dri-FIT',
        description: 'Men\'s Training T-Shirt',
        originalPrice: 35,
        salePrice: 24.99,
        images: ['https://via.placeholder.com/300'],
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black', 'Grey', 'Navy'],
      }
    ];
    return products.find(p => p.id === productId) || products[0];
  });

  const discountPercentage = Math.round(
    ((product.originalPrice - product.salePrice) / product.originalPrice) * 100
  );

  const handleAddToCart = () => {
    addItem(product, selectedSize);
    router.push('/(tabs)/cart');
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: product.images[0] }}
        style={styles.image}
        resizeMode="cover"
      />
      
      <ThemedView style={styles.content}>
        <ThemedText style={styles.brand}>
          {product.brandId.toUpperCase()}
        </ThemedText>
        
        <ThemedText style={styles.name}>{product.name}</ThemedText>
        
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

        <ThemedText style={styles.sectionTitle}>Select Size</ThemedText>
        <ThemedView style={styles.sizeGrid}>
          {product.sizes.map((size) => (
            <Pressable
              key={size}
              onPress={() => setSelectedSize(size)}
              style={[
                styles.sizeButton,
                {
                  backgroundColor: selectedSize === size ? theme.primary : 'transparent',
                  borderColor: selectedSize === size ? theme.primary : theme.border,
                },
              ]}
            >
              <ThemedText
                style={[
                  styles.sizeText,
                  {
                    color: selectedSize === size ? '#FFFFFF' : theme.text,
                  },
                ]}
              >
                {size}
              </ThemedText>
            </Pressable>
          ))}
        </ThemedView>

        <ThemedText style={styles.description}>
          {product.description}
        </ThemedText>

        <Button
          title="Add to Cart"
          onPress={handleAddToCart}
          disabled={!selectedSize}
        />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width,
    height: width,
  },
  content: {
    padding: 20,
  },
  brand: {
    fontSize: 16,
    opacity: 0.7,
    marginBottom: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 24,
  },
  salePrice: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  originalPrice: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    opacity: 0.7,
  },
  discount: {
    fontSize: 16,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  sizeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 24,
  },
  sizeButton: {
    width: (width - 56) / 4,
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeText: {
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
});