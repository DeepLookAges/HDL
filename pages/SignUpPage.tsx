
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignUpPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signup } = useAuth();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('كلمتا المرور غير متطابقتين.');
            return;
        }

        const success = signup(name, email, password);

        if (success) {
            navigate('/dashboard'); // Redirect to dashboard after successful signup
        } else {
            setError('هذا البريد الإلكتروني مستخدم بالفعل.');
        }
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-100 py-12">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">إنشاء حساب جديد</h1>
                    <p className="text-slate-500 mt-2">انضم إلينا اليوم!</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && <p className="bg-red-100 text-red-700 p-3 rounded-md text-center">{error}</p>}
                    <div>
                        <label htmlFor="name" className="block font-semibold mb-2">الاسم الكامل</label>
                        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required className="w-full p-3 border rounded-md bg-white text-slate-900" placeholder="اسمك الكامل" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-semibold mb-2">البريد الإلكتروني</label>
                        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full p-3 border rounded-md bg-white text-slate-900" placeholder="you@example.com" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-semibold mb-2">كلمة المرور</label>
                        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full p-3 border rounded-md bg-white text-slate-900" placeholder="********" />
                    </div>
                     <div>
                        <label htmlFor="confirm-password" className="block font-semibold mb-2">تأكيد كلمة المرور</label>
                        <input type="password" id="confirm-password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required className="w-full p-3 border rounded-md bg-white text-slate-900" placeholder="********" />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-lg">
                        إنشاء الحساب
                    </button>
                    <p className="text-center text-sm text-slate-600">
                        لديك حساب بالفعل؟ <Link to="/login" className="font-semibold text-blue-600 hover:underline">سجل الدخول</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;