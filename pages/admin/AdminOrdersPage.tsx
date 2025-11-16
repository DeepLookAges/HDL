import React, { useState } from 'react';
import { MOCK_ORDERS } from '../../constants';
import { Order } from '../../types';
import OrderDetailsModal from '../../components/admin/OrderDetailsModal';

const AdminOrdersPage: React.FC = () => {
    const [orders, setOrders] = useState(MOCK_ORDERS);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    const handleUpdateOrderStatus = (orderId: string, status: 'Completed' | 'Failed') => {
        setOrders(prevOrders => 
            prevOrders.map(o => o.id === orderId ? { ...o, status } : o)
        );
        setSelectedOrder(prevOrder => prevOrder ? { ...prevOrder, status } : null);
    };

    return (
        <>
            <div>
                <h1 className="text-3xl font-bold mb-6">إدارة الطلبات</h1>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <table className="w-full text-right">
                        <thead>
                            <tr className="border-b">
                                <th className="p-3">رقم الطلب</th>
                                <th className="p-3">العميل</th>
                                <th className="p-3">التاريخ</th>
                                <th className="p-3">الإجمالي</th>
                                <th className="p-3">الحالة</th>
                                <th className="p-3">إجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.id} className="border-b last:border-0 hover:bg-slate-50">
                                    <td className="p-3 font-mono">{order.id}</td>
                                    <td className="p-3">{order.userName}</td>
                                    <td className="p-3">{order.date}</td>
                                    <td className="p-3">{order.total.toLocaleString('ar-EG')} جنيه</td>
                                    <td className="p-3">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                            order.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                                            order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                                        }`}>
                                            {order.status === 'Completed' ? 'مكتمل' : order.status === 'Pending' ? 'قيد المراجعة' : 'فشل'}
                                        </span>
                                    </td>
                                    <td className="p-3">
                                        <button 
                                            onClick={() => setSelectedOrder(order)}
                                            className="text-blue-600 hover:underline font-semibold"
                                        >
                                            التفاصيل
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {selectedOrder && <OrderDetailsModal order={selectedOrder} onClose={() => setSelectedOrder(null)} onUpdateStatus={handleUpdateOrderStatus} />}
        </>
    );
};

export default AdminOrdersPage;