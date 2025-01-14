import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { ThemedView } from '../../components/ui/ThemedView';
import { ThemedText } from '../../components/ui/ThemedText';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

interface ShippingForm {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
}

export default function ShippingScreen() {
  const [form, setForm] = useState<ShippingForm>({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
  });

  const [errors, setErrors] = useState<Partial<ShippingForm>>({});

  const validate = (): boolean => {
    const newErrors: Partial<ShippingForm> = {};
    
    if (!form.firstName) newErrors.firstName = 'Required';
    if (!form.lastName) newErrors.lastName = 'Required';
    if (!form.address1) newErrors.address1 = 'Required';
    if (!form.city) newErrors.city = 'Required';
    if (!form.state) newErrors.state = 'Required';
    if (!form.zipCode) newErrors.zipCode = 'Required';
    if (!form.phone) newErrors.phone = 'Required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validate()) {
      // Save shipping info to context if needed
      router.push('/(cart)/PaymentScreen');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText style={styles.title}>Shipping Information</ThemedText>

        <ThemedView style={styles.row}>
          <Input
            style={styles.halfInput}
            label="First Name"
            value={form.firstName}
            onChangeText={(value) => setForm(prev => ({ ...prev, firstName: value }))}
            error={errors.firstName}
          />
          <Input
            style={styles.halfInput}
            label="Last Name"
            value={form.lastName}
            onChangeText={(value) => setForm(prev => ({ ...prev, lastName: value }))}
            error={errors.lastName}
          />
        </ThemedView>

        <Input
          label="Street Address"
          value={form.address1}
          onChangeText={(value) => setForm(prev => ({ ...prev, address1: value }))}
          error={errors.address1}
        />

        <Input
          label="Apt, Suite, etc. (optional)"
          value={form.address2}
          onChangeText={(value) => setForm(prev => ({ ...prev, address2: value }))}
        />

        <ThemedView style={styles.row}>
          <Input
            style={styles.cityInput}
            label="City"
            value={form.city}
            onChangeText={(value) => setForm(prev => ({ ...prev, city: value }))}
            error={errors.city}
          />
          <Input
            style={styles.stateInput}
            label="State"
            value={form.state}
            onChangeText={(value) => setForm(prev => ({ ...prev, state: value }))}
            error={errors.state}
          />
          <Input
            style={styles.zipInput}
            label="ZIP Code"
            value={form.zipCode}
            onChangeText={(value) => setForm(prev => ({ ...prev, zipCode: value }))}
            keyboardType="numeric"
            error={errors.zipCode}
          />
        </ThemedView>

        <Input
          label="Phone Number"
          value={form.phone}
          onChangeText={(value) => setForm(prev => ({ ...prev, phone: value }))}
          keyboardType="phone-pad"
          error={errors.phone}
        />

        <ThemedView style={styles.buttons}>
          <Button
            title="Continue to Payment"
            onPress={handleContinue}
          />
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  halfInput: {
    flex: 1,
  },
  cityInput: {
    flex: 2,
  },
  stateInput: {
    flex: 1,
  },
  zipInput: {
    flex: 1,
  },
  buttons: {
    marginTop: 24,
    gap: 12,
  },
});