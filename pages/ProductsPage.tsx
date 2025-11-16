
import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { MOCK_PRODUCTS } from '../constants';
import { Product, ProductCategory } from '../types';

const ProductsPage: React.FC = () => {
    const [products] = useState<Product[]>(MOCK_PRODUCTS);
    const [filterCategory, setFilterCategory] = useState<string>('all');
    const [filterPrice, setFilterPrice] = useState<string>('all');
    const [filterSort, setFilterSort] = useState<string>('default');

    const filteredProducts = useMemo(() => {
        let tempProducts = [...products];

        // Filter by category
        if (filterCategory !== 'all') {
            tempProducts = tempProducts.filter(p => p.category === filterCategory);
        }

        // Filter by price
        if (filterPrice !== 'all') {
            const [min, max] = filterPrice.split('-').map(Number);
            tempProducts = tempProducts.filter(p => p.price >= min && (max ? p.price <= max : true));
        }
        
        // Sort
        if (filterSort === 'price-asc') {
            tempProducts.sort((a, b) => a.price - b.price);
        } else if (filterSort === 'price-desc') {
            tempProducts.sort((a, b) => b.price - a.price);
        } else if (filterSort === 'bestseller') {
            tempProducts.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
        }

        return tempProducts;
    }, [products, filterCategory, filterPrice, filterSort]);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-center mb-10">جميع المنتجات</h1>

            {/* Filters */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-8 flex flex-wrap items-center justify-center gap-4">
                <div>
                    <label htmlFor="category" className="mr-2 font-semibold">النوع:</label>
                    <select id="category" value={filterCategory} onChange={e => setFilterCategory(e.target.value)} className="p-2 border rounded-md bg-white text-slate-900">
                        <option value="all">الكل</option>
                        {Object.values(ProductCategory).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="price" className="mr-2 font-semibold">السعر:</label>
                    <select id="price" value={filterPrice} onChange={e => setFilterPrice(e.target.value)} className="p-2 border rounded-md bg-white text-slate-900">
                        <option value="all">الكل</option>
                        <option value="0-100">0 - 100 جنيه</option>
                        <option value="101-500">101 - 500 جنيه</option>
                        <option value="501-">أكثر من 500 جنيه</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="sort" className="mr-2 font-semibold">ترتيب حسب:</label>
                    <select id="sort" value={filterSort} onChange={e => setFilterSort(e.target.value)} className="p-2 border rounded-md bg-white text-slate-900">
                        <option value="default">افتراضي</option>
                        <option value="bestseller">الأكثر مبيعًا</option>
                        <option value="price-asc">السعر: من الأقل للأعلى</option>
                        <option value="price-desc">السعر: من الأعلى للأقل</option>
                    </select>
                </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-xl text-slate-600">لا توجد منتجات تطابق معايير البحث.</p>
                </div>
            )}
        </div>
    );
};

export default ProductsPage;