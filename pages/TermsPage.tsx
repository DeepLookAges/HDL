
import React from 'react';

const TermsPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-6">شروط الاستخدام</h1>
                <div className="prose prose-lg max-w-none text-slate-700">
                    <p>هذه صفحة شروط الاستخدام. المحتوى هنا هو مجرد مثال.</p>
                    <p>من خلال الوصول إلى موقع HDL، فإنك توافق على الالتزام بشروط الخدمة هذه وجميع القوانين واللوائح المعمول بها، وتوافق على أنك مسؤول عن الامتثال لأي قوانين محلية معمول بها.</p>

                    <h2 className="text-xl font-bold mt-6">الاستخدام المرخص</h2>
                    <p>يتم منح الإذن بتنزيل نسخة واحدة من المواد (المعلومات أو البرامج) مؤقتًا على موقع HDL للاطلاع الشخصي وغير التجاري فقط. هذا هو منح ترخيص، وليس نقل ملكية.</p>
                    
                    <h2 className="text-xl font-bold mt-6">إخلاء المسؤولية</h2>
                    <p>يتم توفير المواد الموجودة على موقع HDL "كما هي". لا تقدم HDL أي ضمانات، صريحة أو ضمنية، وتخلي مسؤوليتها وتنفي بموجب هذا جميع الضمانات الأخرى.</p>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
