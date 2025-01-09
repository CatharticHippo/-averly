import React, { createContext, useContext, useState } from 'react';

export interface Address {
  id: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  isDefault?: boolean;
}

interface AddressContextType {
  addresses: Address[];
  addAddress: (address: Omit<Address, 'id'>) => void;
  removeAddress: (id: string) => void;
  setDefaultAddress: (id: string) => void;
  getDefaultAddress: () => Address | undefined;
}

const AddressContext = createContext<AddressContextType>({
  addresses: [],
  addAddress: () => {},
  removeAddress: () => {},
  setDefaultAddress: () => {},
  getDefaultAddress: () => undefined,
});

export function AddressProvider({ children }: { children: React.ReactNode }) {
  const [addresses, setAddresses] = useState<Address[]>([]);

  const addAddress = (newAddress: Omit<Address, 'id'>) => {
    const address = {
      ...newAddress,
      id: Date.now().toString(),
      isDefault: addresses.length === 0 ? true : newAddress.isDefault,
    };

    setAddresses(prev => [...prev, address]);
  };

  const removeAddress = (id: string) => {
    setAddresses(prev => prev.filter(address => address.id !== id));
  };

  const setDefaultAddress = (id: string) => {
    setAddresses(prev =>
      prev.map(address => ({
        ...address,
        isDefault: address.id === id,
      }))
    );
  };

  const getDefaultAddress = () => {
    return addresses.find(address => address.isDefault);
  };

  return (
    <AddressContext.Provider
      value={{
        addresses,
        addAddress,
        removeAddress,
        setDefaultAddress,
        getDefaultAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
}

export const useAddresses = () => useContext(AddressContext);