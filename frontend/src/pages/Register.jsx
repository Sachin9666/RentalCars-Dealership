import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock } from 'lucide-react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // Dummy Auth Logic
        if (email && password && name) {
            localStorage.setItem('user', JSON.stringify({ email, name }));
            window.location.href = "/dashboard"; // Force reload to update Navbar state
        }
    };

    return (
        <div className="min-h-screen pt-20 flex items-center justify-center bg-[url('https://placehold.co/1920x1080/FFFFFF/005CFF?text=LuxeDrive+Registration')] bg-cover bg-center">
            <div className="absolute inset-0 bg-brand-blue/10 backdrop-blur-[2px]"></div>

            <div className="relative z-10 bg-white border border-gray-100 p-8 rounded-2xl shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-text-main mb-2 text-center">Create Account</h2>
                <p className="text-text-muted text-center mb-8">Join the exclusive LuxeDrive club</p>

                <form onSubmit={handleRegister} className="space-y-6">
                    <div className="relative">
                        <User className="absolute top-3 left-3 text-text-muted" size={20} />
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 pl-10 pr-4 text-text-main focus:border-brand-blue outline-none transition-colors"
                            required
                        />
                    </div>
                    <div className="relative">
                        <Mail className="absolute top-3 left-3 text-text-muted" size={20} />
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 pl-10 pr-4 text-text-main focus:border-brand-blue outline-none transition-colors"
                            required
                        />
                    </div>
                    <div className="relative">
                        <Lock className="absolute top-3 left-3 text-text-muted" size={20} />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 pl-10 pr-4 text-text-main focus:border-brand-blue outline-none transition-colors"
                            required
                        />
                    </div>

                    <button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-brand-blue/20">
                        Register
                    </button>
                </form>

                <p className="text-text-muted text-center mt-6">
                    Already have an account? <Link to="/login" className="text-brand-blue hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
