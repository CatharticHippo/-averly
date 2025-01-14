import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { router } from 'expo-router';
import { ThemedView } from '../../components/ui/ThemedView';
import { ThemedText } from '../../components/ui/ThemedText';
import { Button } from '../../components/ui/Button';
import { useCart } from '../../contexts/CartContext';
import CartItem from '../../components/cart/CartItem';

export default function CartScreen() {
  const { items, total, itemCount } = useCart();

  if (itemCount === 0) {
    return (
      <ThemedView style={styles.emptyContainer}>
        <ThemedText style={styles.emptyText}>Your cart is empty</ThemedText>
        <Button 
          title="Start Shopping" 
          onPress={() => router.push('/(tabs)/shop')}
        />
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartItem item={item} />}
        keyExtractor={item => `${item.product.id}-${item.size}`}
        ListHeaderComponent={
          <ThemedText style={styles.title}>Shopping Cart ({itemCount})</ThemedText>
        }
        contentContainerStyle={styles.list}
      />
      <ThemedView style={styles.footer}>
        <ThemedView style={styles.totalContainer}>
          <ThemedText variant="secondary">Total</ThemedText>
          <ThemedText style={styles.totalAmount}>${total.toFixed(2)}</ThemedText>
        </ThemedView>
        <Button
          title="Proceed to Checkout"
          onPress={() => router.push('/(cart)/ShippingScreen')}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    padding: 20,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    gap: 16,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});