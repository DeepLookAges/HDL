
import React from 'react';

interface PaymentMethodProps {
    title: string;
    number: string;
    icon: React.ReactNode;
}

const VodafoneCashIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#E60000"/>
        <path d="M12 5C8.13 5 5 8.13 5 12C5 15.87 8.13 19 12 19C15.87 19 19 15.87 19 12C19 8.13 15.87 5 12 5ZM10.05 15.25L12 11.2L13.95 15.25H10.05ZM15.5 15.25H18L14 9H16.5L12 14.8L7.5 9H10L6 15.25H8.5L12 9.2L15.5 15.25Z" fill="white"/>
    </svg>
);

const OrangeCashIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#FF7900"/>
        <path d="M16 8H8V16H16V8Z" fill="white"/>
    </svg>
);

const FawryIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#FFDD00"/>
        <path d="M12 6L7 12L12 18L17 12L12 6Z" fill="#0033A0"/>
    </svg>
);


const PaymentMethod: React.FC<PaymentMethodProps> = ({ title, number, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <div className="flex justify-center mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-xl font-mono text-slate-700 tracking-widest">{number}</p>
    </div>
);


const PaymentsPage: React.FC = () => {
    return (
        <div className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center mb-4">طرق الدفع المتاحة</h1>
                <p className="text-xl text-center text-slate-600 mb-12">نقبل جميع طرق الدفع الشائعة داخل مصر</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <PaymentMethod title="فودافون كاش" number="01065129523" icon={<VodafoneCashIcon />} />
                    <PaymentMethod title="أورانج كاش" number="01279900098" icon={<OrangeCashIcon />} />
                    <PaymentMethod title="فوري" number="01065129523" icon={<FawryIcon />} />
                </div>
                
                <div className="max-w-3xl mx-auto bg-blue-50 border-r-4 border-blue-500 p-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">تعليمات الدفع</h2>
                    <ol className="list-decimal list-inside space-y-4 text-slate-700">
                        <li>اختر المنتجات التي تريدها وأضفها إلى السلة.</li>
                        <li>توجه إلى صفحة إتمام الدفع واختر طريقة الدفع المناسبة لك.</li>
                        <li>قم بتحويل المبلغ الإجمالي إلى الرقم الموضح للطريقة التي اخترتها.</li>
                        <li>التقط صورة واضحة لإيصال التحويل أو لقطة شاشة لرسالة تأكيد العملية.</li>
                        <li>في صفحة إتمام الدفع، قم برفع صورة الإيصال وأكمل بياناتك.</li>
                        <li>بعد تأكيد الدفع من طرفنا، ستصلك المنتجات فورًا على حسابك داخل الموقع وعلى بريدك الإلكتروني.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default PaymentsPage;
