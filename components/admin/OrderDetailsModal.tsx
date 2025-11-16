import React from 'react';
import { Order } from '../../types';

interface OrderDetailsModalProps {
    order: Order;
    onClose: () => void;
    onUpdateStatus: (orderId: string, status: 'Completed' | 'Failed') => void;
}

const StatusBadge: React.FC<{ status: Order['status'] }> = ({ status }) => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-semibold";
    if (status === 'Completed') {
        return <span className={`${baseClasses} bg-green-100 text-green-800`}>مكتمل</span>;
    }
    if (status === 'Pending') {
        return <span className={`${baseClasses} bg-yellow-100 text-yellow-800`}>قيد المراجعة</span>;
    }
    return <span className={`${baseClasses} bg-red-100 text-red-800`}>فشل</span>;
};

const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({ order, onClose, onUpdateStatus }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6 border-b pb-4">
                    <h2 className="text-2xl font-bold text-slate-800">تفاصيل الطلب <span className="font-mono">#{order.id}</span></h2>
                    <button onClick={onClose} className="text-3xl text-slate-400 hover:text-slate-800 transition-colors">&times;</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <h3 className="font-semibold text-slate-500 text-sm">العميل</h3>
                        <p className="text-lg">{order.userName}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-500 text-sm">تاريخ الطلب</h3>
                        <p className="text-lg">{order.date}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-500 text-sm">الإجمالي</h3>
                        <p className="text-lg font-bold">{order.total.toLocaleString('ar-EG')} جنيه</p>
                    </div>
                     <div>
                        <h3 className="font-semibold text-slate-500 text-sm">الحالة</h3>
                        <p className="text-lg"><StatusBadge status={order.status} /></p>
                    </div>
                </div>

                <h3 className="text-lg font-bold mt-6 mb-2 border-t pt-4">المنتجات</h3>
                <ul className="divide-y divide-slate-200">
                    {order.items.map(item => (
                        <li key={item.id} className="flex items-center py-3">
                            <img src={item.images[0]} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4"/>
                            <div className="flex-grow">
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-sm text-slate-500">الكمية: {item.quantity}</p>
                            </div>
                            <p className="font-semibold">{(item.price * item.quantity).toLocaleString('ar-EG')} جنيه</p>
                        </li>
                    ))}
                </ul>

                <div className="mt-6 border-t pt-4">
                    <h3 className="text-lg font-bold mb-2">معلومات الدفع</h3>
                     <p><span className="font-semibold">طريقة الدفع:</span> {order.paymentMethod}</p>
                    {order.paymentProof ? (
                         <a href={order.paymentProof} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mt-2 inline-block">عرض إيصال الدفع</a>
                    ) : (
                        <p className="text-slate-500 mt-2">لا يوجد إيصال مرفق (مثال).</p>
                    )}
                </div>

                {order.status === 'Pending' && (
                    <div className="flex justify-end space-x-4 rtl:space-x-reverse pt-4 border-t mt-6">
                        <button onClick={() => { onUpdateStatus(order.id, 'Failed'); onClose(); }} className="bg-red-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-red-700 transition-colors">
                            رفض الطلب
                        </button>
                        <button onClick={() => { onUpdateStatus(order.id, 'Completed'); onClose(); }} className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-700 transition-colors">
                            تأكيد الطلب
                        </button>
                    </div>
                )}
                 {order.status !== 'Pending' && (
                     <div className="flex justify-end pt-4 border-t mt-6">
                         <button type="button" onClick={onClose} className="bg-slate-200 text-slate-800 font-semibold py-2 px-6 rounded-lg hover:bg-slate-300 transition-colors">
                            إغلاق
                        </button>
                     </div>
                 )}
            </div>
        </div>
    );
};

export default OrderDetailsModal;
