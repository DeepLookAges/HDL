
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { MOCK_PRODUCTS } from '../constants';

const DesignIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>;
const VideoIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 8l-6 4 6 4V8z"/><rect x="2" y="6" width="14" height="12" rx="2" ry="2"/></svg>;
const ProductIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>;
const CourseIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>;
const QualityIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
const SpeedIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H8.5c-.28 0-.53.11-.71.29L3 7.14a2 2 0 0 0 0 2.82l4.83 4.83c.18.18.43.29.71.29H13"/><path d="m22 2-2.5 2.5"/><path d="M20 8l-7 7"/></svg>;
const SupportIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z"/><path d="M12 18h.01"/><path d="M12 15v-4"/><path d="M12 8h.01"/></svg>;

const ServiceHighlight: React.FC<{ icon: React.ReactNode; title: string; }> = ({ icon, title }) => (
    <div className="flex flex-col items-center text-center p-4">
        <div className="text-blue-500 mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
    </div>
);

const WhyHDLItem: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4 rtl:space-x-reverse">
        <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-3 rounded-full">{icon}</div>
        <div>
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
            <p className="text-slate-600 mt-1">{description}</p>
        </div>
    </div>
);

const HomePage: React.FC = () => {
    const featuredProducts = MOCK_PRODUCTS.filter(p => p.bestseller).slice(0, 4);

    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20 md:py-32">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">Hamza Digital Lab</h1>
                    <p className="text-lg md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">منتجات رقمية – تصميمات – فيديوهات – كورسات</p>
                    <Link to="/products" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        تصفّح المنتجات
                    </Link>
                </div>
            </section>

            {/* Services Highlights Section */}
            <section className="py-16 bg-slate-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <ServiceHighlight icon={<DesignIcon />} title="تصميم" />
                        <ServiceHighlight icon={<VideoIcon />} title="فيديو" />
                        <ServiceHighlight icon={<ProductIcon />} title="منتجات رقمية" />
                        <ServiceHighlight icon={<CourseIcon />} title="كورسات" />
                    </div>
                </div>
            </section>

            {/* Why HDL Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">لماذا تختار HDL؟</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <WhyHDLItem icon={<QualityIcon />} title="جودة عالية" description="نقدم منتجات وخدمات مصممة بأعلى معايير الجودة والاحترافية." />
                        <WhyHDLItem icon={<SpeedIcon />} title="تسليم سريع" description="وصول فوري للمنتجات الرقمية وتنفيذ سريع للخدمات المطلوبة." />
                        <WhyHDLItem icon={<SupportIcon />} title="دعم فني محترم" description="فريق دعم فني جاهز لمساعدتك والإجابة على استفساراتك في أي وقت." />
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-16 bg-slate-100">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">منتجات مختارة</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                     <div className="text-center mt-12">
                        <Link to="/products" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-colors duration-300">
                            عرض كل المنتجات
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
