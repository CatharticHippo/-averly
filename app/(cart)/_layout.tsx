import React from 'react';
import { Stack } from 'expo-router';
import { useAppTheme } from '../../contexts/ThemeContext';

export default function CartLayout() {
  const { theme } = useAppTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTintColor: theme.text,
        headerTitleStyle: {
          color: theme.text,
        },
        contentStyle: {
          backgroundColor: theme.background,
        },
      }}
    >
      <Stack.Screen 
        name="CartScreen"
        options={{ 
          title: 'Cart',
          headerBackTitle: 'Back'
        }} 
      />
      <Stack.Screen 
        name="CheckoutScreen" 
        options={{ 
          title: 'Checkout',
          headerBackTitle: 'Cart'
        }} 
      />
      <Stack.Screen 
        name="AddAddressScreen" 
        options={{ 
          title: 'Add Address',
          headerBackTitle: 'Checkout'
        }} 
      />
      <Stack.Screen 
        name="shipping" 
        options={{ 
          title: 'Shipping',
          headerBackTitle: 'Cart'
        }} 
      />
      <Stack.Screen 
        name="payment" 
        options={{ 
          title: 'Payment',
          headerBackTitle: 'Shipping'
        }} 
      />
      <Stack.Screen 
        name="confirmation" 
        options={{ 
          title: 'Order Confirmed',
          headerShown: false,
          gestureEnabled: false,
          headerBackVisible: false
        }} 
      />
    </Stack>
  );
}