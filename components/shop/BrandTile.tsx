import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useAppTheme } from '../../contexts/ThemeContext';
import { ThemedText } from '../ui/ThemedText';

interface BrandTileProps extends Omit<TouchableOpacityProps, 'style'> {
  brand: {
    id: string;
    name: string;
    logo: string;
  };
  isSelected: boolean;
  size: number;
}

export const BrandTile: React.FC<BrandTileProps> = ({
  brand,
  isSelected,
  size,
  ...props
}) => {
  const { theme } = useAppTheme();

  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.container,
        {
          width: size,
          height: size,
          backgroundColor: isSelected ? theme.primary : theme.card,
          borderColor: isSelected ? theme.primary : theme.border,
        },
      ]}
    >
      <ThemedText style={styles.logo}>{brand.logo}</ThemedText>
      <ThemedText
        style={[
          styles.name,
          {
            color: isSelected ? '#FFFFFF' : theme.text,
          },
        ]}
      >
        {brand.name}
      </ThemedText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 12,
    margin: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 32,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});