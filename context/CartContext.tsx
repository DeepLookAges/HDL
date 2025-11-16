import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Product, CartItem } from '../types';

const calculateEffectivePrice = (product: Pick<Product, 'price' | 'discount_percentage' | 'valid_until_date'>) => {
    const { price, discount_percentage, valid_until_date } = product;

    if (discount_percentage && discount_percentage > 0) {
        const now = new Date();
        const validUntil = valid_until_date ? new Date(valid_until_date) : null;
        if (validUntil) {
            validUntil.setHours(23, 59, 59, 999); // Set to end of day to be inclusive
        }

        if (!validUntil || validUntil >= now) {
            const finalPrice = price - (price * discount_percentage / 100);
            return { finalPrice, originalPrice: price };
        }
    }
    return { finalPrice: price, originalPrice: undefined };
};


interface CartContextType {
    cartItems: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    clearCart: () => void;
    getCartTotal: () => number;
    getItemCount: () => number;
    getEffectivePrice: (product: Product) => { finalPrice: number; originalPrice?: number };
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        setCartItems(prevItems => {
            const isItemInCart = prevItems.find(item => item.id === product.id);
            if (isItemInCart) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: string) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };
    
    const clearCart = () => {
        setCartItems([]);
    };

    const getEffectivePrice = (product: Product) => {
        return calculateEffectivePrice(product);
    };

    const getCartTotal = (): number => {
        return cartItems.reduce((total, item) => {
            const { finalPrice } = getEffectivePrice(item);
            return total + finalPrice * item.quantity;
        }, 0);
    };

    const getItemCount = (): number => {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getCartTotal, getItemCount, getEffectivePrice }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = (): CartContextType => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};