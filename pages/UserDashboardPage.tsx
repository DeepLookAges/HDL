
import React, { useState } from 'react';
import { MOCK_PRODUCTS, MOCK_ORDERS } from '../constants';

const DownloadIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
);
const FileTextIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
);
const UserIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const HelpCircleIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
);

type Tab = 'products' | 'invoices' | 'settings' | 'support';

const UserDashboardPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('products');
    // Mock data for a logged-in user
    const userPurchasedProducts = MOCK_PRODUCTS.slice(0, 3);
    const userOrders = MOCK_ORDERS.filter(o => o.userId === 'USR-001');

    const renderContent = () => {
        switch (activeTab) {
            case 'products':
                return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">المنتجات التي اشتريتها</h2>
                        <div className="space-y-4">
                            {userPurchasedProducts.map(product => (
                                <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img src={product.images[0]} alt={product.name} className="w-16 h-16 object-cover rounded-md mr-4"/>
                                        <div>
                                            <h3 className="font-bold">{product.name}</h3>
                                            <p className="text-sm text-slate-500">{product.category}</p>
                                        </div>
                                    </div>
                                    <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 rtl:space-x-reverse">
                                        <DownloadIcon />
                                        <span>تحميل</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'invoices':
                return (
                     <div>
                        <h2 className="text-2xl font-bold mb-4">الفواتير</h2>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <table className="w-full text-right">
                                <thead>
                                    <tr className="border-b">
                                        <th className="p-2">رقم الطلب</th>
                                        <th className="p-2">التاريخ</th>
                                        <th className="p-2">الإجمالي</th>
                                        <th className="p-2">الحالة</th>
                                        <th className="p-2"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userOrders.map(order => (
                                        <tr key={order.id} className="border-b last:border-0">
                                            <td className="p-2">{order.id}</td>
                                            <td className="p-2">{order.date}</td>
                                            <td className="p-2">{order.total.toLocaleString('ar-EG')} جنيه</td>
                                            <td className="p-2">
                                                <span className={`px-2 py-1 rounded-full text-xs ${order.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                                    {order.status === 'Completed' ? 'مكتمل' : 'قيد المراجعة'}
                                                </span>
                                            </td>
                                            <td className="p-2">
                                                <button className="text-blue-600 hover:underline">عرض</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            case 'settings':
                 return (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">إعدادات الحساب</h2>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <form className="space-y-4">
                                <div>
                                    <label className="block font-semibold mb-1">الاسم</label>
                                    <input type="text" defaultValue="أحمد محمود" className="w-full p-2 border rounded-md bg-white text-slate-900" />
                                </div>
                                <div>
                                    <label className="block font-semibold mb-1">البريد الإلكتروني</label>
                                    <input type="email" defaultValue="ahmed@example.com" className="w-full p-2 border rounded-md bg-white text-slate-900" />
                                </div>
                                 <div>
                                    <label className="block font-semibold mb-1">كلمة المرور الجديدة</label>
                                    <input type="password" placeholder="اتركها فارغة لعدم التغيير" className="w-full p-2 border rounded-md bg-white text-slate-900" />
                                </div>
                                <button type="submit" className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-purple-700 transition-colors">حفظ التغييرات</button>
                            </form>
                        </div>
                    </div>
                );
            case 'support':
                return (
                     <div>
                        <h2 className="text-2xl font-bold mb-4">الدعم الفني</h2>
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <p className="mb-4">هل تواجه مشكلة أو لديك استفسار؟ تواصل معنا مباشرة عبر واتساب.</p>
                             <a href="#" className="inline-block bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition-colors">
                                تواصل عبر واتساب
                             </a>
                        </div>
                    </div>
                );
        }
    };

    const TabButton: React.FC<{ tabId: Tab; icon: React.ReactNode; label: string }> = ({ tabId, icon, label }) => (
        <button
            onClick={() => setActiveTab(tabId)}
            className={`w-full flex items-center space-x-3 rtl:space-x-reverse p-3 rounded-lg font-semibold transition-colors ${activeTab === tabId ? 'bg-blue-600 text-white' : 'hover:bg-slate-200'}`}
        >
            {icon}
            <span>{label}</span>
        </button>
    );

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold mb-8">لوحة التحكم</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <aside className="md:col-span-1">
                    <div className="bg-white p-4 rounded-lg shadow-md space-y-2">
                        <TabButton tabId="products" icon={<DownloadIcon />} label="تحميلاتي" />
                        <TabButton tabId="invoices" icon={<FileTextIcon />} label="الفواتير" />
                        <TabButton tabId="settings" icon={<UserIcon />} label="إعدادات الحساب" />
                        <TabButton tabId="support" icon={<HelpCircleIcon />} label="دعم فني" />
                    </div>
                </aside>
                <main className="md:col-span-3">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default UserDashboardPage;