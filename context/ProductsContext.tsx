
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Product } from '../types';
import { MOCK_PRODUCTS } from '../constants';

interface ProductsContextType {
    products: Product[];
    addProduct: (product: Omit<Product, 'id' | 'bestseller'> & { bestseller?: boolean }) => void;
    updateProduct: (product: Product) => void;
    deleteProduct: (productId: string) => void;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);

    const addProduct = (productData: Omit<Product, 'id' | 'bestseller'> & { bestseller?: boolean }) => {
        const newProduct: Product = {
            ...productData,
            id: `prod-${new Date().getTime()}`,
            bestseller: true, // Automatically make new product a bestseller
        };

        setProducts(prevProducts => {
            let productsWithNew = [newProduct, ...prevProducts];
            const bestsellers = productsWithNew.filter(p => p.bestseller);

            if (bestsellers.length > 3) {
                // Keep the 3 newest bestsellers (which are at the start of the bestsellers array)
                const bestsellersToKeep = bestsellers.slice(0, 3).map(b => b.id);
                productsWithNew = productsWithNew.map(p => {
                    if (p.bestseller && !bestsellersToKeep.includes(p.id)) {
                        return { ...p, bestseller: false };
                    }
                    return p;
                });
            }
            return productsWithNew;
        });
    };

    const updateProduct = (updatedProduct: Product) => {
        setProducts(prevProducts =>
            prevProducts.map(p => (p.id === updatedProduct.id ? updatedProduct : p))
        );
    };

    const deleteProduct = (productId: string) => {
        setProducts(prevProducts => prevProducts.filter(p => p.id !== productId));
    };

    return (
        <ProductsContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = (): ProductsContextType => {
    const context = useContext(ProductsContext);
    if (context === undefined) {
        throw new Error('useProducts must be used within a ProductsProvider');
    }
    return context;
};
