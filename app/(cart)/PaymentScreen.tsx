import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { ThemedView } from '../../components/ui/ThemedView';
import { ThemedText } from '../../components/ui/ThemedText';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { useCart } from '../../contexts/CartContext';

interface PaymentForm {
  cardNumber: string;
  expiry: string;
  cvv: string;
  name: string;
}

export default function PaymentScreen() {
  const { total } = useCart();
  const [form, setForm] = useState<PaymentForm>({
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: '',
  });
  const [errors, setErrors] = useState<Partial<PaymentForm>>({});

  const formatCardNumber = (text: string) => {
    const cleaned = text.replace(/\D/g, '');
    const groups = cleaned.match(/(\d{1,4})/g);
    return groups ? groups.join(' ') : '';
  };

  const formatExpiry = (text: string) => {
    const cleaned = text.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
    }
    return cleaned;
  };

  const validate = (): boolean => {
    const newErrors: Partial<PaymentForm> = {};
    
    if (!form.cardNumber || form.cardNumber.replace(/\s/g, '').length !== 16) {
      newErrors.cardNumber = 'Invalid card number';
    }
    if (!form.expiry || form.expiry.length !== 5) {
      newErrors.expiry = 'Invalid expiry date';
    }
    if (!form.cvv || form.cvv.length !== 3) {
      newErrors.cvv = 'Invalid CVV';
    }
    if (!form.name) {
      newErrors.name = 'Required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      router.push('/cart/confirmation');
    }
  };

  const updateForm = (key: keyof PaymentForm, value: string) => {
    let formattedValue = value;
    if (key === 'cardNumber') {
      formattedValue = formatCardNumber(value);
    } else if (key === 'expiry') {
      formattedValue = formatExpiry(value);
    } else if (key === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 3);
    }

    setForm(prev => ({ ...prev, [key]: formattedValue }));
    if (errors[key]) {
      setErrors(prev => ({ ...prev, [key]: undefined }));
    }
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedText style={styles.title}>Payment Details</ThemedText>

      <ThemedView style={styles.form}>
        <ThemedView style={styles.totalContainer}>
          <ThemedText variant="secondary">Total to Pay:</ThemedText>
          <ThemedText style={styles.totalAmount}>${total.toFixed(2)}</ThemedText>
        </ThemedView>

        <Input
          label="Card Number"
          value={form.cardNumber}
          onChangeText={(value) => updateForm('cardNumber', value)}
          keyboardType="numeric"
          maxLength={19}
          error={errors.cardNumber}
        />

        <ThemedView style={styles.row}>
          <Input
            style={styles.expiryInput}
            label="Expiry (MM/YY)"
            value={form.expiry}
            onChangeText={(value) => updateForm('expiry', value)}
            keyboardType="numeric"
            maxLength={5}
            error={errors.expiry}
          />
          <Input
            style={styles.cvvInput}
            label="CVV"
            value={form.cvv}
            onChangeText={(value) => updateForm('cvv', value)}
            keyboardType="numeric"
            maxLength={3}
            error={errors.cvv}
          />
        </ThemedView>

        <Input
          label="Name on Card"
          value={form.name}
          onChangeText={(value) => updateForm('name', value)}
          autoCapitalize="words"
          error={errors.name}
        />

        <Button
          title="Place Order"
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
  },
  form: {
    padding: 20,
    gap: 16,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  expiryInput: {
    flex: 1,
  },
  cvvInput: {
    flex: 1,
  },
  submitButton: {
    marginTop: 8,
  },
});