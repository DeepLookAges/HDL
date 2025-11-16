
import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const WhatsAppIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.161l.217.324-1.245 4.565 4.639-1.219.356.216z"/></svg>
);


const AboutPage: React.FC = () => {
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('مرحباً، لدي استفسار')}`;

    return (
        <div className="bg-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">من نحن</h1>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-16">
                        <div className="md:col-span-1">
                            <img src="https://a.top4top.io/p_3607pqnrt1.jpeg" alt="Hamza Hilal" className="rounded-full shadow-lg mx-auto" />
                        </div>
                        <div className="md:col-span-2">
                            <h2 className="text-3xl font-bold mb-4">من هو حمزة هلال؟</h2>
                            <p className="text-slate-600 leading-relaxed">
                                أنا مصمم جرافيك ومطور منتجات رقمية، أمتلك شغفًا كبيرًا بإنشاء حلول إبداعية تساعد الأفراد والعلامات التجارية على النمو. مع سنوات من الخبرة في مجالات التصميم، المونتاج، وتطوير الدورات التعليمية، أسعى دائمًا لتقديم قيمة حقيقية من خلال منتجات سهلة الاستخدام وذات جودة عالية.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-8 rounded-lg mb-16">
                        <h2 className="text-3xl font-bold text-center mb-4">فلسفة HDL</h2>
                        <p className="text-slate-700 text-center max-w-2xl mx-auto leading-relaxed">
                            في Hamza Digital Lab، نؤمن بأن الأدوات الرقمية الاحترافية يجب أن تكون في متناول الجميع. فلسفتنا تقوم على ثلاثة أعمدة: الجودة الفائقة، سهولة الاستخدام، والدعم المستمر. كل منتج نقدمه هو نتيجة بحث دقيق وتصميم متقن، بهدف تمكينك من تحقيق إبداعك بأفضل صورة ممكنة.
                        </p>
                    </div>

                     <div className="mb-16">
                        <h2 className="text-3xl font-bold text-center mb-8">من أعمالنا</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <img src="https://j.top4top.io/p_3607u579z1.jpg" alt="Work sample 1" className="rounded-lg shadow-md hover:scale-105 transition-transform"/>
                            <img src="https://l.top4top.io/p_3607idlmz1.png" alt="Work sample 2" className="rounded-lg shadow-md hover:scale-105 transition-transform"/>
                            <img src="https://b.top4top.io/p_36075cqql1.jpg" alt="Work sample 3" className="rounded-lg shadow-md hover:scale-105 transition-transform"/>
                            <img src="https://g.top4top.io/p_3607c5xg81.jpg" alt="Work sample 4" className="rounded-lg shadow-md hover:scale-105 transition-transform"/>
                            <img src="https://j.top4top.io/p_3607s1r721.png" alt="Work sample 5" className="rounded-lg shadow-md hover:scale-105 transition-transform"/>
                            <img src="https://k.top4top.io/p_36070lc561.jpeg" alt="Work sample 6" className="rounded-lg shadow-md hover:scale-105 transition-transform"/>
                        </div>
                    </div>

                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">تواصل معنا مباشرة</h2>
                        <p className="text-slate-600 mb-6">هل لديك سؤال أو مشروع مخصص؟ يسعدنا التحدث إليك.</p>
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-green-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-green-600 transition-colors duration-300 shadow-lg"
                        >
                            <WhatsAppIcon />
                            <span>واتساب مباشر</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
