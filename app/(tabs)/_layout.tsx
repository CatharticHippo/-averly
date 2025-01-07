import { Tabs } from 'expo-router';
import { useAppTheme } from '../../contexts/ThemeContext';
import { useCart } from '../../contexts/CartContext';
import { Text } from 'react-native';

export default function TabLayout() {
  const { theme } = useAppTheme();
  const { itemCount } = useCart();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.primary,
        tabBarStyle: { backgroundColor: theme.background },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: 'Shop',
          tabBarLabel: 'Shop',
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart',
          tabBarLabel: 'Cart',
          tabBarBadge: itemCount ? itemCount : undefined,
        }}
      />
    </Tabs>
  );
}