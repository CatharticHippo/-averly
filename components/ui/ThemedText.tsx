import React from 'react';
import { Text, TextProps } from 'react-native';
import { useAppTheme } from '../../contexts/ThemeContext';

interface ThemedTextProps extends TextProps {
  variant?: 'primary' | 'secondary' | 'error' | 'success';
}

export const ThemedText: React.FC<ThemedTextProps> = ({
  style,
  variant = 'primary',
  ...props
}) => {
  const { theme } = useAppTheme();

  const getTextColor = () => {
    switch (variant) {
      case 'primary':
        return theme.text;
      case 'secondary':
        return theme.secondaryText;
      case 'error':
        return theme.error;
      case 'success':
        return theme.success;
      default:
        return theme.text;
    }
  };

  return (
    <Text
      style={[
        {
          color: getTextColor(),
        },
        style,
      ]}
      {...props}
    />
  );
};