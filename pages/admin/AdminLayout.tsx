import React from 'react';
import { Outlet, NavLink, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const DashboardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>;
const PackageIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;
const ShoppingCartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const LogOutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>;
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;


const AdminLayout: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const navLinks = [
        { path: '/admin', name: 'لوحة التحكم', icon: <DashboardIcon />, end: true },
        { path: '/admin/products', name: 'المنتجات', icon: <PackageIcon />, end: false },
        { path: '/admin/orders', name: 'الطلبات', icon: <ShoppingCartIcon />, end: false },
        { path: '/admin/users', name: 'المستخدمون', icon: <UsersIcon />, end: false },
    ];
    
    const activeClass = "bg-blue-600 text-white";
    const inactiveClass = "text-slate-300 hover:bg-slate-700 hover:text-white";

    return (
        <div className="flex h-screen bg-slate-100">
            <aside className="w-64 bg-slate-800 text-white flex flex-col">
                <div className="p-6 text-center">
                    <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        HDL Admin
                    </h1>
                </div>
                <nav className="flex-grow px-4">
                    {navLinks.map(link => (
                         <NavLink 
                            key={link.path} 
                            to={link.path}
                            end={link.end}
                            className={({ isActive }) => `${isActive ? activeClass : inactiveClass} flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg font-semibold transition-colors mb-2`}
                         >
                            {link.icon}
                            <span>{link.name}</span>
                        </NavLink>
                    ))}
                    <div className="mt-4 pt-4 border-t border-slate-700">
                        <Link 
                            to="/"
                            className={`${inactiveClass} flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg font-semibold transition-colors mb-2`}
                        >
                            <HomeIcon />
                            <span>العودة للموقع</span>
                        </Link>
                    </div>
                </nav>
                 <div className="p-4 border-t border-slate-700">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                        <img src="https://picsum.photos/seed/admin/40/40" alt="Admin" className="w-10 h-10 rounded-full"/>
                        <div>
                            <p className="font-semibold">{user?.name}</p>
                            <p className="text-xs text-slate-400">{user?.role}</p>
                        </div>
                    </div>
                    <button onClick={handleLogout} className="w-full flex items-center justify-center space-x-3 rtl:space-x-reverse px-4 py-2 rounded-lg font-semibold bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-colors">
                        <LogOutIcon />
                        <span>تسجيل الخروج</span>
                    </button>
                 </div>
            </aside>
            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100">
                    <div className="container mx-auto px-6 py-8">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;