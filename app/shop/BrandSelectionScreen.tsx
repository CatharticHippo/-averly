import React, { useState } from 'react';
import { StyleSheet, FlatList, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { ThemedView } from '../../components/ui/ThemedView';
import { ThemedText } from '../../components/ui/ThemedText';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { BrandTile } from '../../components/shop/BrandTile';

// Sample brands data - replace with your actual brands
const BRANDS = [
  { id: '1', name: 'Nike', logo: '👟' },
  { id: '2', name: 'Adidas', logo: '🏃' },
  { id: '3', name: 'Zara', logo: '👕' },
  { id: '4', name: 'H&M', logo: '👗' },
  { id: '5', name: 'Uniqlo', logo: '🧥' },
  { id: '6', name: 'GAP', logo: '👖' },
  { id: '7', name: 'Levi\'s', logo: '🎽' },
  { id: '8', name: 'North Face', logo: '🧥' },
  { id: '9', name: 'Under Armour', logo: '🎽' },
  { id: '10', name: 'Puma', logo: '👟' },
  // Add more brands as needed
];

const NUM_COLUMNS = 2;
const SCREEN_PADDING = 20;
const GRID_SPACING = 12;
const screenWidth = Dimensions.get('window').width;
const tileSize = (screenWidth - SCREEN_PADDING * 2 - GRID_SPACING) / NUM_COLUMNS;

export default function BrandSelectionScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<Set<string>>(new Set());
  
  const filteredBrands = BRANDS.filter(brand => 
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleBrandSelection = (brandId: string) => {
    setSelectedBrands(prev => {
      const newSet = new Set(prev);
      if (newSet.has(brandId)) {
        newSet.delete(brandId);
      } else {
        newSet.add(brandId);
      }
      return newSet;
    });
  };

  const handleContinue = () => {
    if (selectedBrands.size > 0) {
      // Save selected brands and navigate to main app
      router.replace('/(tabs)');
    }
  };

  const renderBrand = ({ item }: { item: typeof BRANDS[0] }) => (
    <BrandTile
      brand={item}
      isSelected={selectedBrands.has(item.id)}
      onPress={() => toggleBrandSelection(item.id)}
      size={tileSize - GRID_SPACING}
    />
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Choose Your Brands</ThemedText>
      <ThemedText variant="secondary" style={styles.subtitle}>
        Select your favorite brands to see their best deals
      </ThemedText>

      <Input
        placeholder="Search brands"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchInput}
      />

      <FlatList
        data={filteredBrands}
        renderItem={renderBrand}
        keyExtractor={item => item.id}
        numColumns={NUM_COLUMNS}
        contentContainerStyle={styles.grid}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <ThemedText style={styles.emptyText}>
            No brands found
          </ThemedText>
        }
      />

      <ThemedView style={styles.footer}>
        <ThemedText variant="secondary">
          {selectedBrands.size} brands selected
        </ThemedText>
        <Button
          title="Continue"
          onPress={handleContinue}
          disabled={selectedBrands.size === 0}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SCREEN_PADDING,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 60,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
  },
  searchInput: {
    marginBottom: 16,
  },
  grid: {
    paddingBottom: 100,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 32,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: SCREEN_PADDING,
    gap: 12,
    alignItems: 'center',
  },
});