import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { ThemedView } from '../../components/ui/ThemedView';
import { ThemedText } from '../../components/ui/ThemedText';
import { Button } from '../../components/ui/Button';
import { useSelectedBrands } from '../../contexts/BrandsContext';
import { useAppTheme } from '../../contexts/ThemeContext';

// Previous imports remain the same...

const BRANDS = [
  { id: 'nike', name: 'Nike', logo: '👟' },
  { id: 'adidas', name: 'Adidas', logo: '🏃' },
  { id: 'northface', name: 'The North Face', logo: '🏔️' },
  { id: 'patagonia', name: 'Patagonia', logo: '🌲' },
  { id: 'lululemon', name: 'Lululemon', logo: '🧘' },
];

// Rest of the component remains the same...

const { width } = Dimensions.get('window');
const CARD_MARGIN = 12;
const GRID_SPACING = 12;
const NUM_COLUMNS = 2;
const CARD_WIDTH = (width - CARD_MARGIN * 2 - GRID_SPACING) / NUM_COLUMNS;

export default function BrandSelectionScreen() {
  const { theme } = useAppTheme();
  const { selectedBrands, toggleBrand } = useSelectedBrands();

  console.log('Currently selected brands:', Array.from(selectedBrands));

  const handleContinue = () => {
    console.log('Continuing with selected brands:', Array.from(selectedBrands));
    router.push('/(tabs)/shop');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Choose Your Brands</ThemedText>
      <ThemedText style={styles.subtitle}>
        Select your favorite brands to see their best deals
      </ThemedText>

      <FlatList
        data={BRANDS}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.brandCard,
              {
                backgroundColor: selectedBrands.has(item.id) ? theme.primary : 'transparent',
                borderColor: selectedBrands.has(item.id) ? theme.primary : theme.border,
              },
            ]}
            onPress={() => {
              toggleBrand(item.id);
              console.log(`Toggled brand ${item.id}`);
            }}
          >
            <ThemedText style={styles.brandLogo}>{item.logo}</ThemedText>
            <ThemedText
              style={[
                styles.brandName,
                {
                  color: selectedBrands.has(item.id) ? '#FFFFFF' : theme.text,
                },
              ]}
            >
              {item.name}
            </ThemedText>
          </TouchableOpacity>
        )}
        numColumns={2}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.grid}
      />

      <ThemedView style={styles.footer}>
        <ThemedText>
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 40,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
    marginBottom: 24,
  },
  grid: {
    paddingBottom: 100,
  },
  brandCard: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    margin: CARD_MARGIN / 2,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandLogo: {
    fontSize: 32,
    marginBottom: 8,
  },
  brandName: {
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    alignItems: 'center',
    gap: 12,
  },
});