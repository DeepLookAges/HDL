import React, { useState } from 'react';

interface FAQItemProps {
    question: string;
    answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full text-right flex justify-between items-center py-4 font-semibold text-lg">
                <span>{question}</span>
                <span className="text-2xl font-light">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <div className="pb-4 pt-2 text-slate-600 leading-relaxed prose">{answer}</div>}
        </div>
    );
};


const FAQPage: React.FC = () => {
    const faqs: FAQItemProps[] = [
        {
            question: "ما هي Hamza Digital Lab؟",
            answer: (
                <>
                    <p>Hamza Digital Lab هو موقع يقدم منتجات رقمية متنوعة مثل:</p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>تصميمات رقمية</li>
                        <li>فيديوهات</li>
                        <li>كورسات تعليمية</li>
                        <li>أدوات رقمية متنوعة</li>
                    </ul>
                    <p className="mt-2">نحن نهدف لتقديم محتوى عالي الجودة يسهل على المستخدمين شراء واستخدام المنتجات الرقمية بسهولة.</p>
                </>
            )
        },
        {
            question: "كيف يمكنني شراء المنتجات الرقمية؟",
            answer: (
                <ol className="list-decimal list-inside space-y-1">
                    <li>اختر المنتج الذي تريده من الموقع.</li>
                    <li>أضفه إلى سلة التسوق وأكمل عملية الدفع عبر وسائل الدفع المتاحة.</li>
                    <li>بعد الدفع، ستتمكن من تحميل المنتج مباشرة أو الوصول إليه حسب نوعه (مثل الكورسات أو الفيديوهات).</li>
                </ol>
            )
        },
        {
            question: "هل يمكن استرجاع أو استبدال المنتجات؟",
            answer: (
                <>
                    <p>جميع المشتريات الرقمية نهائية.</p>
                    <p>الاسترجاع أو الاستبدال يتم فقط في حالات محددة، مثل: وجود خلل في الملف الرقمي أو مشكلة تقنية واضحة.</p>
                    <p>يرجى التواصل معنا عبر واتساب: 01065129523 لحل أي مشكلة.</p>
                </>
            )
        },
        {
            question: "هل أحتاج لإنشاء حساب؟",
            answer: (
                <>
                    <p>بعض المنتجات أو الكورسات تتطلب إنشاء حساب للوصول إليها.</p>
                    <p>الحساب يضمن إدارة المشتريات والمتابعة للمنتجات والكورسات المشتراة.</p>
                </>
            )
        },
        {
            question: "ما طرق الدفع المتاحة؟",
            answer: (
                 <div className="space-y-4">
                    <p>نحن نوفر لك طرق دفع آمنة ومرنة لتسهيل شراء المنتجات:</p>
                    <div>
                        <strong className="block text-slate-800">فودافون كاش</strong>
                        <p>رقم الحساب: 01065129523</p>
                        <p>بعد الدفع، أرسل إشعار الدفع عبر واتساب لتأكيد طلبك.</p>
                    </div>
                    <div>
                        <strong className="block text-slate-800">أورانج كاش</strong>
                        <p>رقم الحساب: 01279900098</p>
                        <p>بعد الدفع، أرسل إشعار الدفع عبر واتساب لتأكيد طلبك.</p>
                    </div>
                     <div>
                        <strong className="block text-slate-800">فوري</strong>
                        <p>رقم الحساب: 01065129523</p>
                        <p>بعد الدفع، أرسل إشعار الدفع عبر واتساب لتأكيد طلبك.</p>
                    </div>
                    <p className="pt-2">جميع المدفوعات آمنة ونسعى لتسليم المنتجات الرقمية فور استلام الدفع.</p>
                </div>
            )
        },
        {
            question: "هل المنتجات الرقمية محمية بحقوق الملكية؟",
            answer: (
                <>
                    <p>نعم، جميع التصميمات، الفيديوهات، والكورسات محمية بموجب حقوق الملكية الفكرية الخاصة بـ Hamza Digital Lab.</p>
                    <p>يُمنع نسخ، توزيع، أو إعادة بيع أي منتج بدون إذن كتابي مسبق.</p>
                </>
            )
        },
        {
            question: "هل يمكنني استخدام المنتجات للأغراض التجارية أو الشخصية؟",
            answer: (
                <>
                    <p>يمكنك استخدام المنتجات للأغراض الشخصية أو المشاريع الخاصة بك، إلا إذا كان هناك قيود محددة مذكورة عند المنتج نفسه.</p>
                    <p>لأي استخدام تجاري واسع أو إعادة بيع، يجب التواصل معنا للحصول على الترخيص المناسب.</p>
                </>
            )
        },
        {
            question: "كيف أتواصل مع الدعم الفني؟",
            answer: "لأي استفسارات أو مشاكل فنية، يمكنك مراسلتنا عبر واتساب: 01065129523. نحن نسعى للرد على جميع الاستفسارات بأسرع وقت ممكن."
        }
    ];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-10">الأسئلة الشائعة</h1>
                <div className="bg-white p-8 rounded-lg shadow-md">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQPage;