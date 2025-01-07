import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ThemedView } from '../ui/ThemedView';
import { ThemedText } from '../ui/ThemedText';
import { useCart } from '../../contexts/CartContext';
import { useAppTheme } from '../../contexts/ThemeContext';

interface CartItemProps {
  item: {
    product: {
      id: string;
      name: string;
      salePrice: number;
      images: string[];
      brandId: string;
    };
    quantity: number;
    size: string;
  };
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const { theme } = useAppTheme();

  const handleQuantityChange = (change: number) => {
    const newQuantity = item.quantity + change;
    if (newQuantity < 1) return;
    updateQuantity(item.product.id, item.size, newQuantity);
  };

  return (
    <ThemedView style={[styles.container, { borderColor: theme.border }]}>
      <Image 
        source={{ uri: item.product.images[0] }} 
        style={styles.image}
      />
      <ThemedView style={styles.details}>
        <ThemedText style={styles.brand}>
          {item.product.brandId.toUpperCase()}
        </ThemedText>
        <ThemedText style={styles.name}>
          {item.product.name}
        </ThemedText>
        <ThemedText variant="secondary">
          Size: {item.size}
        </ThemedText>
        <ThemedView style={styles.priceQuantity}>
          <ThemedText style={styles.price}>
            ${(item.product.salePrice * item.quantity).toFixed(2)}
          </ThemedText>
          <ThemedView style={styles.quantityControls}>
            <TouchableOpacity
              onPress={() => handleQuantityChange(-1)}
              style={[styles.quantityButton, { borderColor: theme.border }]}
            >
              <ThemedText>-</ThemedText>
            </TouchableOpacity>
            <ThemedText style={styles.quantity}>{item.quantity}</ThemedText>
            <TouchableOpacity
              onPress={() => handleQuantityChange(1)}
              style={[styles.quantityButton, { borderColor: theme.border }]}
            >
              <ThemedText>+</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </ThemedView>
      </ThemedView>
      <TouchableOpacity
        onPress={() => removeItem(item.product.id, item.size)}
        style={styles.removeButton}
      >
        <ThemedText style={{ color: theme.error }}>✕</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 12,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  details: {
    flex: 1,
    marginLeft: 12,
  },
  brand: {
    fontSize: 12,
    opacity: 0.7,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 4,
  },
  priceQuantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  quantityButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantity: {
    fontSize: 16,
    minWidth: 24,
    textAlign: 'center',
  },
  removeButton: {
    padding: 8,
  },
});