
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const ShoppingCartIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
);

const UserIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);

const MenuIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
);

const CloseIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
);


const Header: React.FC = () => {
    const { getItemCount } = useCart();
    const { isAuthenticated, user, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { path: '/', name: 'الرئيسية' },
        { path: '/products', name: 'المنتجات' },
        { path: '/about', name: 'من نحن' },
        { path: '/payments', name: 'طرق الدفع' },
        { path: '/contact', name: 'تواصل معنا' },
    ];

    const activeLinkClass = "text-blue-500 font-bold";
    const inactiveLinkClass = "hover:text-blue-500 transition-colors";

    const renderNavLinks = () => navLinks.map(link => (
        <NavLink key={link.path} to={link.path} className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass} onClick={() => setIsMenuOpen(false)}>
            {link.name}
        </NavLink>
    ));

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            HDL
                        </Link>
                    </div>
                    <nav className="hidden md:flex md:items-center md:space-x-8 md:mr-10">
                        {renderNavLinks()}
                    </nav>
                    <div className="flex items-center space-x-4">
                        <Link to="/cart" className="relative text-slate-600 hover:text-blue-500">
                            <ShoppingCartIcon />
                            {getItemCount() > 0 && (
                                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {getItemCount()}
                                </span>
                            )}
                        </Link>
                        {isAuthenticated ? (
                             <div className="relative group">
                                <Link to={user?.role === 'Admin' ? '/admin' : '/dashboard'} className="text-slate-600 hover:text-blue-500">
                                    <UserIcon />
                                </Link>
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    <div className="px-4 py-2 text-sm text-slate-700">مرحباً, {user?.name}</div>
                                    <Link to={user?.role === 'Admin' ? '/admin' : '/dashboard'} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">لوحة التحكم</Link>
                                    <button onClick={logout} className="block w-full text-right px-4 py-2 text-sm text-slate-700 hover:bg-slate-100">تسجيل الخروج</button>
                                </div>
                            </div>
                        ) : (
                            <Link to="/login" className="text-slate-600 hover:text-blue-500">
                                <UserIcon />
                            </Link>
                        )}
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white py-4">
                    <nav className="flex flex-col items-center space-y-4">
                        {renderNavLinks()}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
