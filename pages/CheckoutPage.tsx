
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage: React.FC = () => {
    const { cartItems, getCartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('vodafone');
    const [receipt, setReceipt] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setReceipt(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock submission
        console.log('Order submitted', { paymentMethod, receipt });
        alert('تم استلام طلبك بنجاح! سيتم مراجعته وتأكيده قريبًا. سيتم توجيهك إلى لوحة التحكم الخاصة بك.');
        clearCart();
        navigate('/dashboard');
    };

    if (cartItems.length === 0) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold">لا يوجد منتجات في السلة لإتمام الدفع.</h2>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">إتمام الدفع</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-6">بيانات المشتري</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="name" className="block font-semibold mb-2">الاسم الكامل</label>
                                <input type="text" id="name" required className="w-full p-2 border rounded-md bg-white text-slate-900" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block font-semibold mb-2">البريد الإلكتروني</label>
                                <input type="email" id="email" required className="w-full p-2 border rounded-md bg-white text-slate-900" />
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold mb-6 mt-8">تفاصيل الدفع</h2>
                        
                        <div className="mb-6">
                            <label className="block font-semibold mb-2">اختر طريقة الدفع</label>
                            <div className="flex space-x-4 rtl:space-x-reverse">
                                <label className="flex items-center p-3 border rounded-md cursor-pointer has-[:checked]:bg-blue-50 has-[:checked]:border-blue-500">
                                    <input type="radio" name="payment" value="vodafone" checked={paymentMethod === 'vodafone'} onChange={(e) => setPaymentMethod(e.target.value)} className="mr-2"/>
                                    فودافون كاش
                                </label>
                                <label className="flex items-center p-3 border rounded-md cursor-pointer has-[:checked]:bg-blue-50 has-[:checked]:border-blue-500">
                                    <input type="radio" name="payment" value="orange" checked={paymentMethod === 'orange'} onChange={(e) => setPaymentMethod(e.target.value)} className="mr-2"/>
                                    أورانج كاش
                                </label>
                                 <label className="flex items-center p-3 border rounded-md cursor-pointer has-[:checked]:bg-blue-50 has-[:checked]:border-blue-500">
                                    <input type="radio" name="payment" value="fawry" checked={paymentMethod === 'fawry'} onChange={(e) => setPaymentMethod(e.target.value)} className="mr-2"/>
                                    فوري
                                </label>
                            </div>
                        </div>

                        <div className="mb-6">
                             <label htmlFor="receipt" className="block font-semibold mb-2">رفع صورة إيصال التحويل</label>
                             <input type="file" id="receipt" required onChange={handleFileChange} className="w-full p-2 border rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                             {receipt && <p className="text-sm text-green-600 mt-2">تم اختيار الملف: {receipt.name}</p>}
                        </div>

                        <button type="submit" className="w-full bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors text-lg">
                            تأكيد الطلب
                        </button>
                    </form>
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                        <h2 className="text-2xl font-bold border-b pb-4 mb-4">طلبك</h2>
                        <ul className="divide-y divide-slate-200 mb-4">
                            {cartItems.map(item => (
                                <li key={item.id} className="flex justify-between py-2">
                                    <span>{item.name} x {item.quantity}</span>
                                    <span className="font-semibold">{(item.price * item.quantity).toLocaleString('ar-EG')} جنيه</span>
                                </li>
                            ))}
                        </ul>
                         <div className="flex justify-between font-bold text-xl border-t pt-4">
                            <span>الإجمالي</span>
                            <span>{getCartTotal().toLocaleString('ar-EG')} جنيه</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;