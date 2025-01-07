import React, { useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { ThemedView } from '../../components/ui/ThemedView';
import { ThemedText } from '../../components/ui/ThemedText';
import { Button } from '../../components/ui/Button';
import { useCart } from '../../contexts/CartContext';

export default function OrderConfirmationScreen() {
  const { items, total, clearCart } = useCart();

  useEffect(() => {
    return () => {
      clearCart();
    };
  }, []);

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText style={styles.emoji}>🎉</ThemedText>
        <ThemedText style={styles.title}>Order Confirmed!</ThemedText>
        <ThemedText style={styles.subtitle}>
          Thank you for your purchase
        </ThemedText>

        <ThemedView style={styles.orderDetails}>
          <ThemedText style={styles.sectionTitle}>Order Summary</ThemedText>
          {items.map(item => (
            <ThemedView key={`${item.product.id}-${item.size}`} style={styles.item}>
              <ThemedText style={styles.itemName}>
                {item.product.name} ({item.size})
              </ThemedText>
              <ThemedText>
                {item.quantity} × ${item.product.salePrice}
              </ThemedText>
            </ThemedView>
          ))}
          <ThemedView style={styles.total}>
            <ThemedText style={styles.totalLabel}>Total</ThemedText>
            <ThemedText style={styles.totalAmount}>${total.toFixed(2)}</ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedText style={styles.message}>
          You will receive an email confirmation shortly.
        </ThemedText>

        <Button
          title="Continue Shopping"
          onPress={() => router.replace('/(tabs)')}
          style={styles.button}
        />
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  emoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
    marginBottom: 32,
  },
  orderDetails: {
    width: '100%',
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  itemName: {
    flex: 1,
    marginRight: 16,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    marginBottom: 24,
    opacity: 0.7,
  },
  button: {
    width: '100%',
  },
});