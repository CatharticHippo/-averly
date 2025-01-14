import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Image, Dimensions, Pressable } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { ThemedView } from '../../components/ui/ThemedView';
import { ThemedText } from '../../components/ui/ThemedText';
import { Button } from '../../components/ui/Button';
import { useAppTheme } from '../../contexts/ThemeContext';
import { useCart } from '../../contexts/CartContext';
import { getAllProducts } from '../../services/productService';
import { Product } from '../../types/product';

const { width } = Dimensions.get('window');

export default function ProductDetailScreen() {
  const { productId } = useLocalSearchParams();
  const { theme } = useAppTheme();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        // Log the productId we're looking for
        console.log('Looking for product ID:', productId);
        
        const allProducts = await getAllProducts();
        // Log all available product IDs
        console.log('Available product IDs:', allProducts.map(p => p.id));
        
        const foundProduct = allProducts.find(p => p.id === productId);
        
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError('Product not found');
          console.log('Product not found with ID:', productId);
        }
      } catch (err) {
        setError('Failed to load product');
        console.error('Error loading product:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [productId]);

  if (loading) {
    return (
      <ThemedView style={styles.centered}>
        <ThemedText>Loading product...</ThemedText>
      </ThemedView>
    );
  }

  if (error || !product) {
    return (
      <ThemedView style={styles.centered}>
        <ThemedText>{error || 'Product not found'}</ThemedText>
        <Button 
          title="Go Back" 
          onPress={() => router.back()}
          style={styles.errorButton}
        />
      </ThemedView>
    );
  }

  const handleAddToCart = () => {
    if (selectedSize) {
      addItem(product, selectedSize);
      router.push('/(tabs)/cart');
    }
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
            {product.discount}% OFF
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
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorButton: {
    marginTop: 20,
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
