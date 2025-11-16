import React, { useState, useEffect } from 'react';
import { Product, ProductCategory } from '../../types';

interface EditProductModalProps {
    product: Product;
    onClose: () => void;
    onUpdateProduct: (product: Product) => void;
}

const EditProductModal: React.FC<EditProductModalProps> = ({ product, onClose, onUpdateProduct }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState<number | ''>('');
    const [category, setCategory] = useState<ProductCategory>(ProductCategory.TEMPLATE);
    const [images, setImages] = useState('');
    const [features, setFeatures] = useState('');
    const [demoAudio, setDemoAudio] = useState('');
    const [demoVideo, setDemoVideo] = useState('');
    const [usageInfo, setUsageInfo] = useState('');
    const [targetAudience, setTargetAudience] = useState('');
    const [bestseller, setBestseller] = useState(false);
    const [discountPercentage, setDiscountPercentage] = useState<number | ''>('');
    const [validUntilDate, setValidUntilDate] = useState('');

    useEffect(() => {
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setCategory(product.category);
        setImages(product.images.join(', '));
        setFeatures(product.features.join(', '));
        setDemoAudio(product.demo_audio || '');
        setDemoVideo(product.demo_video || '');
        setUsageInfo(product.usageInfo);
        setTargetAudience(product.targetAudience);
        setBestseller(product.bestseller || false);
        setDiscountPercentage(product.discount_percentage || '');
        setValidUntilDate(product.valid_until_date ? new Date(product.valid_until_date).toISOString().split('T')[0] : '');
    }, [product]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim() || price === '' || price <= 0) {
            alert('يرجى إدخال اسم وسعر صحيح للمنتج.');
            return;
        }

        const updatedProduct: Product = {
            ...product,
            name,
            description,
            price: Number(price),
            category,
            images: images.split(',').map(img => img.trim()).filter(img => img),
            features: features.split(',').map(feat => feat.trim()).filter(feat => feat),
            demo_audio: demoAudio || undefined,
            demo_video: demoVideo || undefined,
            usageInfo,
            targetAudience,
            bestseller,
            discount_percentage: discountPercentage ? Number(discountPercentage) : undefined,
            valid_until_date: validUntilDate || undefined,
        };
        
        onUpdateProduct(updatedProduct);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                    <h2 className="text-2xl font-bold text-slate-800">تعديل المنتج</h2>
                    <button onClick={onClose} className="text-3xl text-slate-400 hover:text-slate-800 transition-colors">&times;</button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">اسم المنتج <span className="text-red-500">*</span></label>
                            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required className="w-full p-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900" />
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-slate-700 mb-1">السعر (بالجنيه) <span className="text-red-500">*</span></label>
                            <input type="number" id="price" value={price} onChange={e => setPrice(e.target.value === '' ? '' : Number(e.target.value))} required className="w-full p-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="discountPercentage" className="block text-sm font-medium text-slate-700 mb-1">نسبة الخصم (٪ - اختياري)</label>
                            <input type="number" id="discountPercentage" value={discountPercentage} onChange={e => setDiscountPercentage(e.target.value === '' ? '' : Number(e.target.value))} className="w-full p-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900" placeholder="e.g. 15" />
                        </div>
                        <div>
                            <label htmlFor="validUntilDate" className="block text-sm font-medium text-slate-700 mb-1">تاريخ انتهاء الخصم (اختياري)</label>
                            <input type="date" id="validUntilDate" value={validUntilDate} onChange={e => setValidUntilDate(e.target.value)} className="w-full p-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">الوصف</label>
                        <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} rows={3} className="w-full p-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900"></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-1">النوع</label>
                            <select id="category" value={category} onChange={e => setCategory(e.target.value as ProductCategory)} className="w-full p-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900">
                                {Object.values(ProductCategory).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                            </select>
                        </div>
                         <div>
                            <label htmlFor="images" className="block text-sm font-medium text-slate-700 mb-1">روابط الصور (مفصولة بفاصلة)</label>
                            <input type="text" id="images" value={images} onChange={e => setImages(e.target.value)} className="w-full p-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900" placeholder="https://example.com/img1.jpg, ..."/>
                        </div>
                    </div>
                    
                    <div>
                        <label htmlFor="features" className="block text-sm font-medium text-slate-700 mb-1">المميزات (مفصولة بفاصلة)</label>
                        <input type="text" id="features" value={features} onChange={e => setFeatures(e.target.value)} className="w-full p-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900" placeholder="Editable, High Quality, ..."/>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="demoAudio" className="block text-sm font-medium text-slate-700 mb-1">رابط ديمو الصوت (اختياري)</label>
                            <input type="url" id="demoAudio" value={demoAudio} onChange={e => setDemoAudio(e.target.value)} className="w-full p-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900" />
                        </div>
                        <div>
                            <label htmlFor="demoVideo" className="block text-sm font-medium text-slate-700 mb-1">رابط ديمو الفيديو (اختياري)</label>
                            <input type="url" id="demoVideo" value={demoVideo} onChange={e => setDemoVideo(e.target.value)} className="w-full p-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900" />
                        </div>
                    </div>

                     <div>
                        <label htmlFor="usageInfo" className="block text-sm font-medium text-slate-700 mb-1">معلومات الاستخدام</label>
                        <textarea id="usageInfo" value={usageInfo} onChange={e => setUsageInfo(e.target.value)} rows={2} className="w-full p-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900"></textarea>
                    </div>

                     <div>
                        <label htmlFor="targetAudience" className="block text-sm font-medium text-slate-700 mb-1">الجمهور المستهدف</label>
                        <textarea id="targetAudience" value={targetAudience} onChange={e => setTargetAudience(e.target.value)} rows={2} className="w-full p-2 border border-slate-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900"></textarea>
                    </div>

                    <div className="flex items-center pt-2">
                        <input type="checkbox" id="bestseller" checked={bestseller} onChange={e => setBestseller(e.target.checked)} className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                        <label htmlFor="bestseller" className="mr-2 block text-sm text-slate-900">
                            تعليم كـ "الأكثر مبيعًا"
                        </label>
                    </div>

                    <div className="flex justify-end space-x-4 rtl:space-x-reverse pt-4 border-t mt-6">
                        <button type="button" onClick={onClose} className="bg-slate-200 text-slate-800 font-semibold py-2 px-6 rounded-lg hover:bg-slate-300 transition-colors">
                            إلغاء
                        </button>
                        <button type="submit" className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                            حفظ التغييرات
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProductModal;