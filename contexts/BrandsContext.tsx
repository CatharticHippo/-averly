import * as React from 'react';
import { createContext, useContext, useState } from 'react';

interface BrandsContextType {
  selectedBrands: Set<string>;
  toggleBrand: (brandId: string) => void;
  hasSelectedBrands: boolean;
  clearSelectedBrands: () => void;
}

const BrandsContext = createContext<BrandsContextType>({
  selectedBrands: new Set(),
  toggleBrand: () => {},
  hasSelectedBrands: false,
  clearSelectedBrands: () => {},
});

export function BrandsProvider({ children }: { children: React.ReactNode }) {
  const [selectedBrands, setSelectedBrands] = useState<Set<string>>(new Set());

  const toggleBrand = (brandId: string) => {
    setSelectedBrands(prev => {
      const newSet = new Set(prev);
      if (newSet.has(brandId)) {
        newSet.delete(brandId);
      } else {
        newSet.add(brandId);
      }
      return newSet;
    });
  };

  const clearSelectedBrands = () => {
    setSelectedBrands(new Set());
  };

  return (
    <BrandsContext.Provider
      value={{
        selectedBrands,
        toggleBrand,
        hasSelectedBrands: selectedBrands.size > 0,
        clearSelectedBrands,
      }}
    >
      {children}
    </BrandsContext.Provider>
  );
}

export const useSelectedBrands = () => useContext(BrandsContext);