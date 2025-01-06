import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import { ThemedText } from './ThemedText';
import { useAppTheme } from '../../contexts/ThemeContext';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary';
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  loading = false,
  style,
  disabled,
  ...props
}) => {
  const { theme } = useAppTheme();

  const getBackgroundColor = () => {
    if (disabled) {
      return theme.border;
    }
    return variant === 'primary' ? theme.primary : 'transparent';
  };

  const getBorderColor = () => {
    if (disabled) {
      return theme.border;
    }
    return variant === 'primary' ? theme.primary : theme.border;
  };

  const getTextColor = () => {
    if (disabled) {
      return theme.secondaryText;
    }
    return variant === 'primary' ? '#FFFFFF' : theme.primary;
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: getBackgroundColor(),
          borderColor: getBorderColor(),
        },
        style,
      ]}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <ThemedText
          style={[
            styles.text,
            {
              color: getTextColor(),
            },
          ]}
        >
          {title}
        </ThemedText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});
