import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../context/ProductsContext';
import { useCart } from '../context/CartContext';
import ImageZoomModal from '../components/ImageZoomModal';

const CheckCircleIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

const ProductDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { addToCart } = useCart();
    const { products } = useProducts();
    const product = products.find(p => p.id === id);
    const [mainImage, setMainImage] = useState(product?.images[0]);
    const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);

    React.useEffect(() => {
        if (product && product.images.length > 0) {
            setMainImage(product.images[0]);
        }
    }, [product]);

    if (!product) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold">المنتج غير موجود</h2>
                <Link to="/products" className="text-blue-600 hover:underline mt-4 inline-block">العودة إلى المنتجات</Link>
            </div>
        );
    }
    
    return (
        <>
            <div className="bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Image Gallery */}
                        <div>
                            <div 
                                className="mb-4 rounded-lg overflow-hidden shadow-lg cursor-zoom-in"
                                onClick={() => setIsZoomModalOpen(true)}
                            >
                                <img src={mainImage} alt={product.name} className="w-full h-auto object-cover" />
                            </div>
                            <div className="flex space-x-2 rtl:space-x-reverse">
                                {product.images.map((img, index) => (
                                    <button key={index} onClick={() => setMainImage(img)} className={`w-20 h-20 rounded-md overflow-hidden border-2 ${mainImage === img ? 'border-blue-500' : 'border-transparent'}`}>
                                        <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div>
                            <span className="text-sm font-semibold text-blue-600">{product.category}</span>
                            <h1 className="text-4xl font-bold my-2">{product.name}</h1>
                            <p className="text-3xl font-bold text-purple-700 mb-6">{product.price.toLocaleString('ar-EG')} جنيه</p>
                            
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 rtl:sm:space-x-reverse mb-8">
                                 <button onClick={() => addToCart(product)} className="flex-1 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">أضف إلى السلة</button>
                                 <Link to="/checkout" onClick={() => addToCart(product)} className="flex-1 text-center bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors">شراء الآن</Link>
                            </div>
                            
                            {/* Description */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold border-b pb-2 mb-4">الوصف</h3>
                                <p className="text-slate-600 leading-relaxed">{product.description}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm">
                                <div>
                                    <h4 className="font-bold mb-2">الاستخدامات</h4>
                                    <p className="text-slate-600">{product.usageInfo}</p>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2">لمن هذا المنتج؟</h4>
                                    <p className="text-slate-600">{product.targetAudience}</p>
                                </div>
                            </div>

                             {/* Features */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold border-b pb-2 mb-4">المميزات</h3>
                                <ul className="space-y-3">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-center">
                                            <CheckCircleIcon />
                                            <span className="mr-3">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Demo & Seller Section */}
                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
                         <div className="lg:col-span-2">
                            {(product.demo_video || product.demo_audio) && (
                                <div className="mb-12">
                                    <h2 className="text-2xl font-bold mb-4">تجربة المنتج (Demo)</h2>
                                    {product.demo_video && (
                                         <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                                             <iframe src={product.demo_video} title={`${product.name} Video Demo`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
                                         </div>
                                    )}
                                    {product.demo_audio && (
                                        <div className="mt-4">
                                            <audio controls className="w-full">
                                                <source src={product.demo_audio} type="audio/mpeg" />
                                                متصفحك لا يدعم عنصر الصوت.
                                            </audio>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        <div>
                            <div className="bg-slate-100 p-6 rounded-lg">
                                 <h3 className="text-xl font-bold mb-4">معلومات البائع</h3>
                                 <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                    <img src="https://picsum.photos/seed/hamza/100/100" alt="Hamza Hilal" className="w-16 h-16 rounded-full"/>
                                    <div>
                                        <h4 className="font-bold text-lg">حمزة هلال</h4>
                                        <p className="text-slate-600 text-sm">مصمم ومطور منتجات رقمية</p>
                                    </div>
                                 </div>
                                 <p className="text-sm text-slate-700 my-4">
                                    شغوف بإنشاء حلول رقمية مبتكرة تساعد المبدعين وأصحاب المشاريع على تحقيق رؤيتهم.
                                 </p>
                                 <a href="https://hamzahilal.art" target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-slate-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-slate-900 transition-colors">
                                    معرض الأعمال (Portfolio)
                                 </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ImageZoomModal 
                isOpen={isZoomModalOpen} 
                onClose={() => setIsZoomModalOpen(false)} 
                imageUrl={mainImage}
            />
        </>
    );
};

export default ProductDetailsPage;