
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-6">سياسة الخصوصية</h1>
                <div className="prose prose-lg max-w-none text-slate-700">
                    <p>هذه صفحة سياسة الخصوصية. المحتوى هنا هو مجرد مثال.</p>
                    <p>نحن في HDL ("نحن"، "لنا"، أو "الخاص بنا") نلتزم بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع واستخدام والكشف عن معلوماتك الشخصية عند زيارتك لموقعنا الإلكتروني.</p>
                    
                    <h2 className="text-xl font-bold mt-6">المعلومات التي نجمعها</h2>
                    <p>قد نجمع معلومات شخصية منك مثل اسمك وعنوان بريدك الإلكتروني عند تسجيلك للحصول على حساب أو إجراء عملية شراء.</p>
                    
                    <h2 className="text-xl font-bold mt-6">كيف نستخدم معلوماتك</h2>
                    <p>نستخدم المعلومات التي نجمعها من أجل:</p>
                    <ul>
                        <li>توفير وصيانة وتشغيل موقعنا</li>
                        <li>تحسين وتخصيص وتوسيع موقعنا</li>
                        <li>فهم وتحليل كيفية استخدامك لموقعنا</li>
                        <li>تطوير منتجات وخدمات وميزات ووظائف جديدة</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
