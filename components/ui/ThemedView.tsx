import React from 'react';
import { View, ViewProps } from 'react-native';
import { useAppTheme } from '../../contexts/ThemeContext';

interface ThemedViewProps extends ViewProps {
  variant?: 'primary' | 'secondary' | 'card';
}

export const ThemedView: React.FC<ThemedViewProps> = ({
  style,
  variant = 'primary',
  ...props
}) => {
  const { theme } = useAppTheme();

  const getBackgroundColor = () => {
    switch (variant) {
      case 'primary':
        return theme.background;
      case 'secondary':
        return theme.card;
      case 'card':
        return theme.card;
      default:
        return theme.background;
    }
  };

  return (
    <View
      style={[
        {
          backgroundColor: getBackgroundColor(),
        },
        style,
      ]}
      {...props}
    />
  );
};