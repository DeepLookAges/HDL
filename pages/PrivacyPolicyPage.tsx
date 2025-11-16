import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-6 text-center">سياسة الخصوصية – Hamza Digital Lab</h1>
                <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
                    <p>في Hamza Digital Lab، خصوصيتك مهمة جدًا بالنسبة لنا. نلتزم بحماية معلوماتك الشخصية ونوضح لك كيف نجمعها، نستخدمها، ونحميها عند استخدامك لموقعنا وخدماتنا.</p>
                    
                    <h2 className="text-xl font-bold mt-6 pt-4 border-t">1. المعلومات التي نجمعها</h2>
                    <p>قد نقوم بجمع المعلومات التالية منك عند استخدام الموقع أو شراء أي منتج أو كورس:</p>
                    <ul className="list-disc list-inside">
                        <li>الاسم والبريد الإلكتروني عند التسجيل أو الشراء</li>
                        <li>بيانات الدفع والمشتريات الرقمية</li>
                        <li>معلومات متعلقة بالتفاعل مع الموقع مثل الصفحات التي تزورها والمنتجات التي تهتم بها</li>
                    </ul>
                    
                    <h2 className="text-xl font-bold mt-6 pt-4 border-t">2. استخدام المعلومات</h2>
                    <p>نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
                     <ul className="list-disc list-inside">
                        <li>تحسين تجربة المستخدم على الموقع</li>
                        <li>معالجة الطلبات والمشتريات الرقمية</li>
                        <li>التواصل معك بشأن المنتجات، التحديثات، أو العروض الخاصة</li>
                        <li>حماية الموقع من الاحتيال أو الاستخدام غير القانوني</li>
                    </ul>

                    <h2 className="text-xl font-bold mt-6 pt-4 border-t">3. مشاركة المعلومات</h2>
                    <p>نلتزم بعدم بيع أو مشاركة معلوماتك الشخصية مع أطراف خارجية إلا في الحالات التالية:</p>
                     <ul className="list-disc list-inside">
                        <li>للشركات التي تقدم خدمات الدفع أو الشحن الرقمي لتسهيل المعاملات</li>
                        <li>إذا تطلب القانون ذلك أو لحماية حقوقنا القانونية</li>
                    </ul>

                    <h2 className="text-xl font-bold mt-6 pt-4 border-t">4. حماية المعلومات</h2>
                    <p>نستخدم أساليب أمان قياسية لحماية بياناتك من الوصول غير المصرح به أو التسريب، بما في ذلك تشفير بيانات الدفع وتأمين قواعد البيانات.</p>
                    
                    <h2 className="text-xl font-bold mt-6 pt-4 border-t">5. ملفات تعريف الارتباط (Cookies)</h2>
                    <p>موقعنا قد يستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح وتحليل سلوك المستخدم. يمكنك التحكم في إعدادات الكوكيز من متصفحك.</p>

                    <h2 className="text-xl font-bold mt-6 pt-4 border-t">6. حقوقك</h2>
                     <ul className="list-disc list-inside">
                        <li>يمكنك طلب الوصول إلى بياناتك الشخصية أو تعديلها أو حذفها</li>
                        <li>يمكنك إلغاء الاشتراك من أي رسالة تسويقية تتلقاها منا</li>
                    </ul>

                    <h2 className="text-xl font-bold mt-6 pt-4 border-t">7. التحديثات على سياسة الخصوصية</h2>
                    <p>نحتفظ بالحق في تحديث هذه السياسة من وقت لآخر. أي تغييرات سنقوم بإبلاغك من خلال الموقع أو عبر وسيلة التواصل المناسبة.</p>
                    
                    <h2 className="text-xl font-bold mt-6 pt-4 border-t">للتواصل معنا:</h2>
                    <p>إذا كان لديك أي استفسار حول سياسة الخصوصية أو بياناتك، يمكنك مراسلتنا عبر واتساب على الرقم: 01065129523</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;