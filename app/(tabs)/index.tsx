import React from 'react';
import { StyleSheet, ScrollView, FlatList } from 'react-native';
import { ThemedView } from '../../components/ui/ThemedView';
import { ThemedText } from '../../components/ui/ThemedText';
import { Button } from '../../components/ui/Button';
import { router } from 'expo-router';
import { useFavorites } from '../../contexts/FavoritesContext';
import ProductCard from '../../components/shop/ProductCard';

export default function HomeScreen() {
  const { favorites } = useFavorites();

  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        <ThemedView style={styles.header}>
          <ThemedText style={styles.title}>Welcome to Saverly</ThemedText>
          <ThemedText style={styles.subtitle}>
            Let's get started by choosing your favorite brands
          </ThemedText>
          <Button 
            title="Select Your Brands" 
            onPress={() => router.push('/shop/BrandSelectionScreen')}
            style={styles.browseButton}
          />
        </ThemedView>

        {favorites.length > 0 && (
          <ThemedView style={styles.favoritesSection}>
            <ThemedText style={styles.sectionTitle}>
              Your Favorite Items ({favorites.length})
            </ThemedText>
            <FlatList
              data={favorites}
              renderItem={({ item }) => <ProductCard product={item} />}
              keyExtractor={item => item.id}
              numColumns={2}
              scrollEnabled={false}
              contentContainerStyle={styles.favoriteGrid}
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
  header: {
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    opacity: 0.7,
    marginBottom: 24,
    textAlign: 'center',
  },
  browseButton: {
    marginBottom: 20,
    width: '100%',
  },
  favoritesSection: {
    padding: 20,
    paddingTop: 0,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  favoriteGrid: {
    padding: 8,
  },
});