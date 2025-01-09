import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { router } from 'expo-router';
import { ThemedView } from '../../components/ui/ThemedView';
import { ThemedText } from '../../components/ui/ThemedText';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

interface AddressForm {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
}

export default function AddAddressScreen() {
  const [form, setForm] = useState<AddressForm>({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
  });

  const [errors, setErrors] = useState<Partial<AddressForm>>({});

  const validate = (): boolean => {
    const newErrors: Partial<AddressForm> = {};
    
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

  const handleSubmit = () => {
    if (validate()) {
      // Save address logic would go here
      router.back();
    }
  };

  const updateForm = (key: keyof AddressForm, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors(prev => ({ ...prev, [key]: undefined }));
    }
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText style={styles.title}>Add New Address</ThemedText>

        <View style={styles.row}>
          <Input
            style={styles.halfInput}
            label="First Name"
            value={form.firstName}
            onChangeText={(value) => updateForm('firstName', value)}
            error={errors.firstName}
          />
          <Input
            style={styles.halfInput}
            label="Last Name"
            value={form.lastName}
            onChangeText={(value) => updateForm('lastName', value)}
            error={errors.lastName}
          />
        </View>

        <Input
          label="Street Address"
          value={form.address1}
          onChangeText={(value) => updateForm('address1', value)}
          error={errors.address1}
        />

        <Input
          label="Apt, Suite, etc. (optional)"
          value={form.address2}
          onChangeText={(value) => updateForm('address2', value)}
        />

        <Input
          label="City"
          value={form.city}
          onChangeText={(value) => updateForm('city', value)}
          error={errors.city}
        />

        <View style={styles.row}>
          <Input
            style={styles.stateInput}
            label="State"
            value={form.state}
            onChangeText={(value) => updateForm('state', value)}
            error={errors.state}
          />
          <Input
            style={styles.zipInput}
            label="ZIP Code"
            value={form.zipCode}
            onChangeText={(value) => updateForm('zipCode', value)}
            keyboardType="numeric"
            error={errors.zipCode}
          />
        </View>

        <Input
          label="Phone Number"
          value={form.phone}
          onChangeText={(value) => updateForm('phone', value)}
          keyboardType="phone-pad"
          error={errors.phone}
        />

        <Button
          title="Save Address"
          onPress={handleSubmit}
          style={styles.submitButton}
        />
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
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  halfInput: {
    flex: 1,
  },
  stateInput: {
    flex: 1,
  },
  zipInput: {
    flex: 1,
  },
  submitButton: {
    marginTop: 20,
  },
});