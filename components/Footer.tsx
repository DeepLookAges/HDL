
import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors">
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-slate-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">HDL</h3>
                        <p className="text-slate-600 mt-2">Hamza Digital Lab</p>
                        <p className="text-slate-500 mt-4 text-sm">منتجات رقمية عالية الجودة لمساعدتك في تحقيق أهدافك الإبداعية.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800">روابط سريعة</h4>
                        <ul className="mt-4 space-y-2">
                            <li><Link to="/products" className="text-slate-600 hover:text-blue-500">المنتجات</Link></li>
                            <li><Link to="/about" className="text-slate-600 hover:text-blue-500">من نحن</Link></li>
                            <li><Link to="/faq" className="text-slate-600 hover:text-blue-500">الأسئلة الشائعة</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800">قانوني</h4>
                        <ul className="mt-4 space-y-2">
                            <li><Link to="/privacy-policy" className="text-slate-600 hover:text-blue-500">سياسة الخصوصية</Link></li>
                            <li><Link to="/terms" className="text-slate-600 hover:text-blue-500">شروط الاستخدام</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-800">تابعنا</h4>
                        <div className="flex space-x-4 mt-4">
                            <SocialIcon href="https://hamzahilal.art">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12h6"/><path d="M10.5 8.5 12 7l1.5 1.5"/><path d="m12 17-1.5-1.5L12 14l1.5 1.5L12 17Z"/><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z"/></svg>
                            </SocialIcon>
                            <SocialIcon href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </SocialIcon>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-200 pt-8 text-center text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} HDL - Hamza Digital Lab. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
