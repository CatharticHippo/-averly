import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { ThemedView } from '../ui/ThemedView';
import { ThemedText } from '../ui/ThemedText';
import { Button } from '../ui/Button';
import { useSelectedBrands } from '../../contexts/BrandsContext';
import { useAppTheme } from '../../contexts/ThemeContext';

type SortOption = 'newest' | 'price-low' | 'price-high' | 'biggest-discount';

interface FilterPanelProps {
  visible: boolean;
  onClose: () => void;
  onApplyFilters: (filters: any) => void;
}

const BRANDS = [
  { id: 'northface', name: 'The North Face', logo: '🏔️' },
  { id: 'timberland', name: 'Timberland', logo: '👢' },
  { id: 'vans', name: 'Vans', logo: '🛹' },
  { id: 'dickies', name: 'Dickies', logo: '👖' },
  { id: 'jansport', name: 'JanSport', logo: '🎒' },
  { id: 'eastpak', name: 'Eastpak', logo: '🎒' },
  { id: 'kipling', name: 'Kipling', logo: '🐒' },
  { id: 'napapijri', name: 'Napapijri', logo: '🧥' },
  { id: 'smartwool', name: 'Smartwool', logo: '🧦' },
  { id: 'icebreaker', name: 'Icebreaker', logo: '❄️' },
  { id: 'altra', name: 'Altra Running', logo: '🏃' },
];

const CATEGORIES = [
  'Jackets',
  'Footwear',
  'Bags',
  'Accessories',
  'Pants',
  'Shirts',
];

const FilterPanel: React.FC<FilterPanelProps> = ({ visible, onClose, onApplyFilters }) => {
  const { theme } = useAppTheme();
  const { selectedBrands, toggleBrand } = useSelectedBrands();
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState<SortOption>('newest');

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  const handleApply = () => {
    onApplyFilters({
      brands: Array.from(selectedBrands),
      categories: Array.from(selectedCategories),
      sortBy,
    });
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <ThemedView style={styles.modalContainer}>
        <ThemedView style={[styles.container, { backgroundColor: theme.background }]}>          
          <ThemedView style={styles.header}>
            <ThemedText style={styles.title}>Filter & Sort</ThemedText>
            <TouchableOpacity onPress={onClose}>
              <ThemedText style={{ color: theme.primary }}>Close</ThemedText>
            </TouchableOpacity>
          </ThemedView>

          <ScrollView style={styles.content}>
            {/* Sort Options */}
            <ThemedText style={styles.sectionTitle}>Sort By</ThemedText>
            <ThemedView style={styles.sortOptions}>
              {[
                { value: 'newest', label: 'Newest' },
                { value: 'price-low', label: 'Price: Low to High' },
                { value: 'price-high', label: 'Price: High to Low' },
                { value: 'biggest-discount', label: 'Biggest Discount' },
              ].map(option => (
                <TouchableOpacity
                  key={option.value}
                  style={[
                    styles.sortOption,
                    {
                      backgroundColor: sortBy === option.value ? theme.primary : 'transparent',
                      borderColor: sortBy === option.value ? theme.primary : theme.border,
                    }
                  ]}
                  onPress={() => setSortBy(option.value as SortOption)}
                >
                  <ThemedText
                    style={{
                      color: sortBy === option.value ? '#FFFFFF' : theme.text,
                    }}
                  >
                    {option.label}
                  </ThemedText>
                </TouchableOpacity>
              ))}
            </ThemedView>

            {/* Brands */}
            <ThemedText style={styles.sectionTitle}>Brands</ThemedText>
            <ThemedView style={styles.brandsGrid}>
              {BRANDS.map(brand => (
                <TouchableOpacity
                  key={brand.id}
                  style={[
                    styles.brandTile,
                    {
                      backgroundColor: selectedBrands.has(brand.id) ? theme.primary : 'transparent',
                      borderColor: selectedBrands.has(brand.id) ? theme.primary : theme.border,
                    }
                  ]}
                  onPress={() => toggleBrand(brand.id)}
                >
                  <ThemedText style={styles.brandLogo}>{brand.logo}</ThemedText>
                  <ThemedText
                    style={[
                      styles.brandName,
                      { color: selectedBrands.has(brand.id) ? '#FFFFFF' : theme.text }
                    ]}
                  >
                    {brand.name}
                  </ThemedText>
                </TouchableOpacity>
              ))}
            </ThemedView>

            {/* Categories */}
            <ThemedText style={styles.sectionTitle}>Categories</ThemedText>
            <ThemedView style={styles.categoriesGrid}>
              {CATEGORIES.map(category => (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.categoryTile,
                    {
                      backgroundColor: selectedCategories.has(category) ? theme.primary : 'transparent',
                      borderColor: selectedCategories.has(category) ? theme.primary : theme.border,
                    }
                  ]}
                  onPress={() => handleCategoryToggle(category)}
                >
                  <ThemedText
                    style={{
                      color: selectedCategories.has(category) ? '#FFFFFF' : theme.text,
                    }}
                  >
                    {category}
                  </ThemedText>
                </TouchableOpacity>
              ))}
            </ThemedView>
          </ScrollView>

          <ThemedView style={styles.footer}>
            <Button title="Clear All" onPress={() => {
              setSelectedCategories(new Set());
              setSortBy('newest');
            }} />
            <Button title="Apply Filters" onPress={handleApply} />
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </Modal>
  );
};

export default FilterPanel;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
    marginTop: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  sortOptions: {
    paddingHorizontal: 20,
  },
  sortOption: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 8,
  },
  brandsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 12,
    gap: 8,
  },
  brandTile: {
    width: '31%',
    aspectRatio: 1,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  brandLogo: {
    fontSize: 24,
    marginBottom: 4,
  },
  brandName: {
    fontSize: 12,
    textAlign: 'center',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 12,
    gap: 8,
  },
  categoryTile: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    gap: 12,
  },
});
