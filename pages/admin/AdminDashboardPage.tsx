import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MOCK_ORDERS, MOCK_USERS } from '../../constants';

const StatCard: React.FC<{ title: string, value: string, icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 rtl:space-x-reverse">
        <div className="bg-blue-100 text-blue-600 p-4 rounded-full" title={title}>{icon}</div>
        <div>
            <p className="text-sm text-slate-500 font-semibold">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
        </div>
    </div>
);

// Icons
const DollarSignIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
const ShoppingCartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const ActivityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>;


const AdminDashboardPage: React.FC = () => {
    // Stats calculation
    const totalRevenue = MOCK_ORDERS.reduce((sum, order) => order.status === 'Completed' ? sum + order.total : sum, 0);
    const totalOrders = MOCK_ORDERS.length;
    const totalUsers = MOCK_USERS.length;
    const pendingOrders = MOCK_ORDERS.filter(o => o.status === 'Pending').length;

    // Mock chart data for the last 7 days
    const chartData = [
        { name: 'قبل 6 أيام', orders: 2, revenue: 650 },
        { name: 'قبل 5 أيام', orders: 3, revenue: 800 },
        { name: 'قبل 4 أيام', orders: 1, revenue: 150 },
        { name: 'قبل 3 أيام', orders: 5, revenue: 1250 },
        { name: 'قبل يومين', orders: 4, revenue: 950 },
        { name: 'أمس', orders: 6, revenue: 1575 },
        { name: 'اليوم', orders: 2, revenue: 350 },
    ];

    const recentOrders = [...MOCK_ORDERS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">لوحة التحكم</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard title="إجمالي الإيرادات" value={`${totalRevenue.toLocaleString('ar-EG')} جنيه`} icon={<DollarSignIcon />} />
                <StatCard title="إجمالي الطلبات" value={totalOrders.toString()} icon={<ShoppingCartIcon />} />
                <StatCard title="إجمالي المستخدمين" value={totalUsers.toString()} icon={<UsersIcon />} />
                <StatCard title="طلبات قيد المراجعة" value={pendingOrders.toString()} icon={<ActivityIcon />} />
            </div>

            {/* Orders Graph */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-bold mb-4">أداء الطلبات (آخر 7 أيام)</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip />
                        <Legend />
                        <Line yAxisId="left" type="monotone" dataKey="orders" name="الطلبات" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line yAxisId="right" type="monotone" dataKey="revenue" name="الإيرادات (جنيه)" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Recent Orders Table */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">أحدث العمليات</h2>
                <table className="w-full text-right">
                    <thead>
                        <tr className="border-b">
                            <th className="p-2">رقم الطلب</th>
                            <th className="p-2">العميل</th>
                            <th className="p-2">التاريخ</th>
                            <th className="p-2">الإجمالي</th>
                            <th className="p-2">الحالة</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrders.map(order => (
                            <tr key={order.id} className="border-b last:border-0 hover:bg-slate-50">
                                <td className="p-2 font-mono">{order.id}</td>
                                <td className="p-2">{order.userName}</td>
                                <td className="p-2">{order.date}</td>
                                <td className="p-2">{order.total.toLocaleString('ar-EG')} جنيه</td>
                                <td className="p-2">
                                     <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                        order.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                                        order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                                    }`}>
                                        {order.status === 'Completed' ? 'مكتمل' : order.status === 'Pending' ? 'قيد المراجعة' : 'فشل'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AdminDashboardPage;
