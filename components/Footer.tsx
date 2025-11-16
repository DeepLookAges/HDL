import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; 'aria-label': string; }> = ({ href, children, 'aria-label': ariaLabel }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors" aria-label={ariaLabel}>
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
                            <SocialIcon href="https://x.com/HamzaHilalo" aria-label="X (formerly Twitter)">
                                <svg role="img" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153zM16.91 20.644h2.039L6.486 3.24H4.298l12.612 17.404z"/>
                                </svg>
                            </SocialIcon>
                            <SocialIcon href="https://hamzadox.gumroad.com/" aria-label="Gumroad">
                               <svg role="img" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.134 17.866c-3.234 0-5.86-2.625-5.86-5.86s2.626-5.86 5.86-5.86c3.235 0 5.86 2.625 5.86 5.86s-2.625 5.86-5.86 5.86zm-1.09-3.328h5.103c.58 0 1.05-.47 1.05-1.05s-.47-1.05-1.05-1.05h-5.103c.58 0-1.05.47-1.05 1.05s.47 1.05 1.05 1.05zm5.127-2.316a.86.86 0 110-1.72.86.86 0 010 1.72z"/>
                                </svg>
                            </SocialIcon>
                            <SocialIcon href="https://www.youtube.com/@karikaturi111" aria-label="YouTube">
                                <svg role="img" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                            </SocialIcon>
                            <SocialIcon href="https://www.tiktok.com/@karikaturi111" aria-label="TikTok">
                               <svg role="img" width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                                </svg>
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