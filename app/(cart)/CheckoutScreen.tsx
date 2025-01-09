import React, { useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { ThemedView } from '../../components/ui/ThemedView';
import { ThemedText } from '../../components/ui/ThemedText';
import { Button } from '../../components/ui/Button';
import { useCart } from '../../contexts/CartContext';
import { Address } from '../../contexts/AddressContext';

type PaymentMethod = 'credit-card' | 'apple-pay' | 'affirm';

interface CheckoutStep {
  title: string;
  isComplete: boolean;
}

export default function CheckoutScreen() {
  const { total, items } = useCart();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState<Address | undefined>();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit-card');
  const [isProcessing, setIsProcessing] = useState(false);

  const steps: CheckoutStep[] = [
    { title: 'Shipping', isComplete: !!selectedAddress },
    { title: 'Payment', isComplete: !!paymentMethod },
    { title: 'Review', isComplete: false },
  ];

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.replace({
        pathname: '/cart/confirmation'
      });
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const renderShippingStep = () => (
    <ThemedView>
      <ThemedText style={styles.stepTitle}>Shipping Address</ThemedText>
      {selectedAddress ? (
        <ThemedView style={styles.addressCard}>
          <ThemedText>{selectedAddress.firstName} {selectedAddress.lastName}</ThemedText>
          <ThemedText>{selectedAddress.address1}</ThemedText>
          {selectedAddress.address2 && <ThemedText>{selectedAddress.address2}</ThemedText>}
          <ThemedText>{selectedAddress.city}, {selectedAddress.state} {selectedAddress.zipCode}</ThemedText>
        </ThemedView>
      ) : (
        <ThemedText style={styles.noAddress}>No shipping address selected</ThemedText>
      )}
      <Button
        title="Add New Address"
        onPress={() => router.push({
          pathname: '/cart/AddAddressScreen'
        })}
      />
    </ThemedView>
  );

  const renderPaymentStep = () => (
    <ThemedView>
      <ThemedText style={styles.stepTitle}>Payment Method</ThemedText>
      <TouchableOpacity
        style={[
          styles.paymentOption,
          paymentMethod === 'credit-card' && styles.selectedPayment,
        ]}
        onPress={() => setPaymentMethod('credit-card')}
      >
        <ThemedText>Credit Card</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.paymentOption,
          paymentMethod === 'apple-pay' && styles.selectedPayment,
        ]}
        onPress={() => setPaymentMethod('apple-pay')}
      >
        <ThemedText>Apple Pay</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.paymentOption,
          paymentMethod === 'affirm' && styles.selectedPayment,
        ]}
        onPress={() => setPaymentMethod('affirm')}
      >
        <ThemedText>Affirm</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );

  const renderReviewStep = () => (
    <ThemedView>
      <ThemedText style={styles.stepTitle}>Order Review</ThemedText>
      {items.map(item => (
        <ThemedView key={item.product.id + item.size} style={styles.orderItem}>
          <ThemedText>{item.product.name}</ThemedText>
          <ThemedText>Size: {item.size}</ThemedText>
          <ThemedText>Quantity: {item.quantity}</ThemedText>
          <ThemedText>${(item.product.salePrice * item.quantity).toFixed(2)}</ThemedText>
        </ThemedView>
      ))}
      <ThemedView style={styles.totalContainer}>
        <ThemedText>Total</ThemedText>
        <ThemedText style={styles.totalAmount}>${total.toFixed(2)}</ThemedText>
      </ThemedView>
    </ThemedView>
  );

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.stepsContainer}>
        {steps.map((step, index) => (
          <TouchableOpacity
            key={step.title}
            style={[
              styles.stepIndicator,
              currentStep >= index && styles.activeStep,
            ]}
            onPress={() => setCurrentStep(index)}
            disabled={index > currentStep}
          >
            <ThemedText
              style={[
                styles.stepText,
                currentStep >= index && styles.activeStepText,
              ]}
            >
              {step.title}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </ThemedView>

      <ThemedView style={styles.content}>
        {currentStep === 0 && renderShippingStep()}
        {currentStep === 1 && renderPaymentStep()}
        {currentStep === 2 && renderReviewStep()}

        <ThemedView style={styles.navigation}>
          {currentStep > 0 && (
            <Button
              title="Back"
              onPress={() => setCurrentStep(prev => prev - 1)}
            />
          )}
          {currentStep < steps.length - 1 && (
            <Button
              title="Next"
              onPress={() => setCurrentStep(prev => prev + 1)}
              disabled={
                (currentStep === 0 && !selectedAddress) ||
                (currentStep === 1 && !paymentMethod)
              }
            />
          )}
          {currentStep === steps.length - 1 && (
            <Button 
              title="Place Order" 
              onPress={handlePayment}
              loading={isProcessing} 
            />
          )}
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stepsContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 10,
  },
  stepIndicator: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  activeStep: {
    backgroundColor: '#007AFF',
  },
  stepText: {
    color: '#666',
  },
  activeStepText: {
    color: '#fff',
  },
  content: {
    padding: 20,
  },
  stepTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addressCard: {
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 16,
  },
  noAddress: {
    textAlign: 'center',
    opacity: 0.5,
    marginBottom: 16,
  },
  paymentOption: {
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  selectedPayment: {
    borderColor: '#007AFF',
    backgroundColor: '#f0f8ff',
  },
  orderItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    marginTop: 20,
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 10,
  },
});