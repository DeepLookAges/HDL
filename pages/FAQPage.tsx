
import React, { useState } from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full text-right flex justify-between items-center py-4 font-semibold">
                <span>{question}</span>
                <span>{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <div className="pb-4 text-slate-600">{answer}</div>}
        </div>
    );
};


const FAQPage: React.FC = () => {
    const faqs = [
        {
            question: "كيف أستلم المنتج بعد الشراء؟",
            answer: "فور تأكيد عملية الدفع، ستجد روابط التحميل مباشرة في لوحة التحكم الخاصة بك في قسم 'تحميلاتي'. كما سيتم إرسال نسخة من الروابط إلى بريدك الإلكتروني المسجل."
        },
        {
            question: "ما هي طرق الدفع المتاحة؟",
            answer: "نقبل حاليًا الدفع عبر فودافون كاش، أورانج كاش، وفوري. يمكنك الاطلاع على التفاصيل الكاملة في صفحة طرق الدفع."
        },
        {
            question: "هل يمكنني استخدام المنتجات في مشاريع تجارية؟",
            answer: "نعم، معظم منتجاتنا تأتي مع ترخيص يسمح بالاستخدام الشخصي والتجاري. يرجى مراجعة تفاصيل الترخيص المرفقة مع كل منتج للتأكد."
        },
        {
            question: "ماذا لو واجهت مشكلة في تحميل المنتج؟",
            answer: "إذا واجهت أي مشكلة، لا تتردد في التواصل مع فريق الدعم الفني عبر واتساب أو من خلال صفحة التواصل. سنكون سعداء بمساعدتك في أسرع وقت ممكن."
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
