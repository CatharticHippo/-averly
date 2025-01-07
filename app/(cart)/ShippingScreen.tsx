import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { ThemedView } from '../../components/ui/ThemedView';
import { ThemedText } from '../../components/ui/ThemedText';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

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

  const handleSubmit = () => {
    if (validate()) {
      router.push('/(cart)/PaymentScreen');
    }
  };

  const updateForm = (key: keyof ShippingForm, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors(prev => ({ ...prev, [key]: undefined }));
    }
  };

  // Rest of your component code remains the same
}

const styles = StyleSheet.create({
  // Your styles remain the same
});