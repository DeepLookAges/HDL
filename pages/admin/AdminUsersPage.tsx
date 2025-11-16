import React from 'react';
import { MOCK_USERS } from '../../constants';

const AdminUsersPage: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">إدارة المستخدمين</h1>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="overflow-x-auto">
                    <table className="w-full text-right min-w-full">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="p-3 font-semibold text-sm text-slate-600 uppercase tracking-wider text-right">المستخدم</th>
                                <th className="p-3 font-semibold text-sm text-slate-600 uppercase tracking-wider text-right">رقم الهاتف</th>
                                <th className="p-3 font-semibold text-sm text-slate-600 uppercase tracking-wider text-center">الدور</th>
                                <th className="p-3 font-semibold text-sm text-slate-600 uppercase tracking-wider text-right">تاريخ التسجيل</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {MOCK_USERS.map(user => (
                                <tr key={user.id} className="hover:bg-slate-50">
                                    <td className="p-3 whitespace-nowrap">
                                        <div className="flex items-center space-x-3 rtl:space-x-reverse">
                                            <div className="flex-shrink-0">
                                                <img className="h-10 w-10 rounded-full" src={`https://i.pravatar.cc/40?u=${user.email}`} alt={user.name} />
                                            </div>
                                            <div>
                                                <div className="font-bold text-slate-900">{user.name}</div>
                                                <div className="text-sm text-slate-500">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-3 whitespace-nowrap text-slate-700">{user.phone || '-'}</td>
                                    <td className="p-3 whitespace-nowrap text-center">
                                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            user.role === 'Admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
                                        }`}>
                                            {user.role === 'Admin' ? 'مدير' : 'عميل'}
                                        </span>
                                    </td>
                                    <td className="p-3 whitespace-nowrap text-slate-700">{user.createdAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminUsersPage;