
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { WHATSAPP_NUMBER } from '../constants';

const MailIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const WhatsAppIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.161l.217.324-1.245 4.565 4.639-1.219.356.216z"/></svg>;


const ContactPage: React.FC = () => {
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('مرحباً، لدي استفسار')}`;
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');
        
        // Manually create FormData from state to ensure reliability
        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('message', formData.message);

        try {
            const response = await fetch('https://formspree.io/f/mrbrykap', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setShowSuccessModal(true); // Show custom success modal
            } else {
                const responseData = await response.json();
                if (responseData && responseData.errors) {
                     alert(`حدث خطأ: ${responseData.errors.map((error: any) => error.message).join(', ')}`);
                } else {
                    alert('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
                }
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
            alert('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
        }
    };


    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-4xl font-bold text-center mb-10">تواصل معنا</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-6">أرسل رسالة</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block font-semibold mb-2">الاسم</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 border rounded-md bg-white text-slate-900" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block font-semibold mb-2">البريد الإلكتروني</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded-md bg-white text-slate-900" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block font-semibold mb-2">رسالتك</label>
                                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full p-3 border rounded-md bg-white text-slate-900"></textarea>
                            </div>
                            <button type="submit" disabled={status === 'sending'} className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-slate-400">
                                {status === 'sending' ? 'جار الإرسال...' : 'إرسال'}
                            </button>
                        </form>
                    </div>
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                             <h2 className="text-2xl font-bold mb-4">معلومات الاتصال</h2>
                             <div className="space-y-4">
                                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <MailIcon />
                                    <a href="mailto:info@hamza-jot.art" className="text-slate-700 hover:text-blue-600">info@hamza-jot.art</a>
                                </div>
                                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <div className="text-green-500"><WhatsAppIcon /></div>
                                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-blue-600">01065129523</a>
                                </div>
                             </div>
                        </div>
                         <div className="bg-white p-8 rounded-lg shadow-md">
                             <h2 className="text-2xl font-bold mb-4">ساعات العمل</h2>
                             <p className="text-slate-700">نحن متاحون للرد على استفساراتكم من السبت إلى الخميس، من الساعة 10 صباحًا حتى 10 مساءً.</p>
                        </div>
                    </div>
                </div>
            </div>

            {showSuccessModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
                    <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-sm text-center">
                        <h3 className="text-xl font-bold text-slate-800 mb-4">تم الإرسال بنجاح!</h3>
                        <p className="text-slate-600 mb-6">شكراً لتواصلك مع HAMZA HILAL</p>
                        <button 
                            onClick={() => {
                                setShowSuccessModal(false);
                                navigate('/');
                            }}
                            className="w-full bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            حسنًا
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactPage;
