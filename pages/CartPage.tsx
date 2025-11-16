import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const TrashIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
);

const CartPage: React.FC = () => {
    const { cartItems, removeFromCart, getCartTotal, getEffectivePrice } = useCart();

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-8">سلة المشتريات</h1>
            {cartItems.length === 0 ? (
                <div className="text-center bg-white p-12 rounded-lg shadow-md">
                    <p className="text-xl text-slate-600 mb-6">سلتك فارغة حاليًا.</p>
                    <Link to="/products" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                        ابدأ التسوق
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
                        <ul className="divide-y divide-slate-200">
                            {cartItems.map(item => {
                                const { finalPrice, originalPrice } = getEffectivePrice(item);
                                const hasDiscount = originalPrice !== undefined && originalPrice > finalPrice;

                                return (
                                <li key={item.id} className="flex items-center py-4">
                                    <img src={item.images[0]} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4" />
                                    <div className="flex-grow">
                                        <h3 className="font-bold text-lg">{item.name}</h3>
                                        <p className="text-slate-500 text-sm">{item.category}</p>
                                    </div>
                                    <div className="text-center mx-4">
                                        <div className="flex items-baseline justify-center gap-2">
                                            <p className="font-bold text-lg">{finalPrice.toLocaleString('ar-EG')} جنيه</p>
                                            {hasDiscount && (
                                                <p className="text-sm text-slate-400 line-through">{originalPrice?.toLocaleString('ar-EG')}</p>
                                            )}
                                        </div>
                                        <p className="text-sm text-slate-500">الكمية: {item.quantity}</p>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 p-2">
                                        <TrashIcon />
                                    </button>
                                </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                            <h2 className="text-2xl font-bold border-b pb-4 mb-4">ملخص الطلب</h2>
                            <div className="flex justify-between mb-2">
                                <span className="text-slate-600">الإجمالي الفرعي</span>
                                <span className="font-semibold">{getCartTotal().toLocaleString('ar-EG')} جنيه</span>
                            </div>
                            <div className="flex justify-between mb-6">
                                <span className="text-slate-600">الشحن</span>
                                <span className="font-semibold text-green-600">رقمي (مجاني)</span>
                            </div>
                            <div className="flex justify-between font-bold text-xl border-t pt-4">
                                <span>الإجمالي النهائي</span>
                                <span>{getCartTotal().toLocaleString('ar-EG')} جنيه</span>
                            </div>
                            <Link to="/checkout" className="block w-full text-center mt-6 bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">
                                إتمام الدفع
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;