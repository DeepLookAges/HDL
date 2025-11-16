import React, { useState, useMemo } from 'react';
import { useProducts } from '../../context/ProductsContext';
import { Product } from '../../types';
import AddProductModal from '../../components/admin/AddProductModal';
import EditProductModal from '../../components/admin/EditProductModal';
import ConfirmationModal from '../../components/admin/ConfirmationModal';

const EditIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
const TrashIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>;

const AdminProductsPage: React.FC = () => {
    const { products, addProduct, updateProduct, deleteProduct } = useProducts();
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [productToDelete, setProductToDelete] = useState<Product | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleAddProduct = (newProduct: Omit<Product, 'id'>) => {
        addProduct(newProduct);
        setSearchTerm(''); // Clear search to ensure new product is visible
    };
    
    const handleUpdateProduct = (updatedProduct: Product) => {
        updateProduct(updatedProduct);
        setEditingProduct(null); // Close modal
    };

    const handleDeleteRequest = (product: Product) => {
        setProductToDelete(product);
    };

    const confirmDelete = () => {
        if (!productToDelete) return;
        deleteProduct(productToDelete.id);
        setProductToDelete(null); // Close the modal and reset state
    };

    const cancelDelete = () => {
        setProductToDelete(null); // Close the modal
    };

    const filteredProducts = useMemo(() => {
        if (!searchTerm) {
            return products;
        }
        return products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [products, searchTerm]);


    return (
        <>
            <div>
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">إدارة المنتجات</h1>
                    <button 
                        onClick={() => setIsAddModalOpen(true)}
                        className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        إضافة منتج جديد
                    </button>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="ابحث عن منتج بالاسم..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="w-full p-3 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white text-slate-900"
                        />
                    </div>
                    <table className="w-full text-right">
                        <thead>
                            <tr className="border-b">
                                <th className="p-3">المنتج</th>
                                <th className="p-3">النوع</th>
                                <th className="p-3">السعر</th>
                                <th className="p-3">إجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProducts.map(product => (
                                <tr key={product.id} className="border-b last:border-0 hover:bg-slate-50">
                                    <td className="p-3 flex items-center space-x-3 rtl:space-x-reverse">
                                        <img src={product.images[0] || 'https://picsum.photos/seed/placeholder/48/48'} alt={product.name} className="w-12 h-12 object-cover rounded-md"/>
                                        <span className="font-semibold">{product.name}</span>
                                    </td>
                                    <td className="p-3">{product.category}</td>
                                    <td className="p-3">{product.price.toLocaleString('ar-EG')} جنيه</td>
                                    <td className="p-3">
                                        <div className="flex space-x-2 rtl:space-x-reverse">
                                            <button onClick={() => setEditingProduct(product)} className="text-blue-600 hover:text-blue-800 p-2" title="تعديل"><EditIcon /></button>
                                            <button onClick={() => handleDeleteRequest(product)} className="text-red-600 hover:text-red-800 p-2" title="حذف"><TrashIcon /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isAddModalOpen && <AddProductModal onClose={() => setIsAddModalOpen(false)} onAddProduct={handleAddProduct} />}
            {editingProduct && <EditProductModal product={editingProduct} onClose={() => setEditingProduct(null)} onUpdateProduct={handleUpdateProduct} />}
            <ConfirmationModal
                isOpen={!!productToDelete}
                onClose={cancelDelete}
                onConfirm={confirmDelete}
                title="تأكيد الحذف"
                message={`هل أنت متأكد أنك تريد حذف المنتج "${productToDelete?.name}" بشكل نهائي؟ لا يمكن التراجع عن هذا الإجراء.`}
            />
        </>
    );
};

export default AdminProductsPage;