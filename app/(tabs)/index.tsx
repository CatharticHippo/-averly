import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from '../../components/ui/ThemedText';
import { ThemedView } from '../../components/ui/ThemedView';
import { Button } from '../../components/ui/Button';
import { router } from 'expo-router';

export default function TabOneScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Home</ThemedText>
      <Button 
        title="Go to Brand Selection" 
        onPress={() => router.push('/shop/BrandSelectionScreen')}
      />
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
    marginBottom: 20,
  },
});