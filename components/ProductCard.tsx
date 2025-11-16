import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
    product: Product;
}

const ShoppingCartPlusIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
);

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart, getEffectivePrice } = useCart();

    const { finalPrice, originalPrice } = getEffectivePrice(product);
    const hasDiscount = originalPrice !== undefined && originalPrice > finalPrice;

    const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
    };

    return (
        <Link to={`/products/${product.id}`} className="group block overflow-hidden">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                <div className="relative overflow-hidden">
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                     {product.bestseller && (
                        <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded z-10">الأكثر مبيعًا</span>
                    )}
                     {hasDiscount && product.discount_percentage && (
                        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">خصم {product.discount_percentage}%</span>
                    )}
                </div>
                <div className="p-4 flex flex-col flex-grow">
                    <span className="text-xs text-slate-500 mb-1">{product.category}</span>
                    <h3 className="text-lg font-bold text-slate-800 mb-2 truncate">{product.name}</h3>
                    <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                             <p className="text-xl font-bold text-blue-600">{finalPrice.toLocaleString('ar-EG')} جنيه</p>
                             {hasDiscount && (
                                <p className="text-sm text-slate-500 line-through">{originalPrice?.toLocaleString('ar-EG')} جنيه</p>
                            )}
                        </div>
                        <div className="flex items-center space-x-2">
                             <button onClick={handleAddToCart} className="text-purple-600 hover:text-white border border-purple-600 hover:bg-purple-600 p-2 rounded-full transition-colors duration-200" title="أضف إلى السلة">
                                <ShoppingCartPlusIcon />
                            </button>
                            <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-600">Details</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;