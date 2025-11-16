
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login, user } = useAuth();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        const success = login(email, password);
        if (success) {
            // A bit of a hack to get the user role right after login
            const loggedInUser = email === 'admin@hdl.com' ? { role: 'Admin' } : { role: 'Customer' };
            navigate(loggedInUser.role === 'Admin' ? '/admin' : '/dashboard');
        } else {
            setError('البريد الإلكتروني أو كلمة المرور غير صحيحة.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-100 py-12">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">تسجيل الدخول</h1>
                    <p className="text-slate-500 mt-2">مرحباً بعودتك!</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                     {error && <p className="bg-red-100 text-red-700 p-3 rounded-md text-center">{error}</p>}
                    <div>
                        <label htmlFor="email" className="block font-semibold mb-2">البريد الإلكتروني</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-3 border rounded-md bg-white text-slate-900" placeholder="you@example.com" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-semibold mb-2">كلمة المرور</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full p-3 border rounded-md bg-white text-slate-900" placeholder="********" />
                    </div>
                    <div className="flex items-center justify-between">
                        <a href="#" className="text-sm text-blue-600 hover:underline">هل نسيت كلمة المرور؟</a>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors text-lg">
                        دخول
                    </button>
                    <p className="text-center text-sm text-slate-600">
                        ليس لديك حساب؟ <Link to="/signup" className="font-semibold text-blue-600 hover:underline">أنشئ حسابًا جديدًا</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;