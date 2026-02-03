import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Car, Heart, LogOut } from 'lucide-react';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [activeTab, setActiveTab] = useState('bookings');
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.href = "/";
    };

    if (!user) return null;

    return (
        <div className="bg-white min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8">

                    {/* Sidebar */}
                    <aside className="md:w-1/4">
                        <div className="bg-white border border-gray-100 rounded-xl p-6 text-center mb-6 shadow-sm">
                            <div className="w-24 h-24 bg-brand-blue rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-brand-blue/30">
                                {user.name.charAt(0).toUpperCase()}
                            </div>
                            <h2 className="text-xl font-bold text-text-main">{user.name}</h2>
                            <p className="text-text-muted text-sm">{user.email}</p>
                        </div>

                        <nav className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                            <button
                                onClick={() => setActiveTab('bookings')}
                                className={`w-full text-left px-6 py-4 border-b border-gray-50 hover:bg-gray-50 transition-colors flex items-center ${activeTab === 'bookings' ? 'text-brand-blue bg-brand-blue-light' : 'text-text-muted'}`}
                            >
                                <Car size={18} className="mr-3" /> My Bookings
                            </button>
                            <button
                                onClick={() => setActiveTab('wishlist')}
                                className={`w-full text-left px-6 py-4 border-b border-gray-50 hover:bg-gray-50 transition-colors flex items-center ${activeTab === 'wishlist' ? 'text-brand-blue bg-brand-blue-light' : 'text-text-muted'}`}
                            >
                                <Heart size={18} className="mr-3" /> My Wishlist
                            </button>
                            <button
                                onClick={() => setActiveTab('profile')}
                                className={`w-full text-left px-6 py-4 border-b border-gray-50 hover:bg-gray-50 transition-colors flex items-center ${activeTab === 'profile' ? 'text-brand-blue bg-brand-blue-light' : 'text-text-muted'}`}
                            >
                                <User size={18} className="mr-3" /> Profile Settings
                            </button>
                            <button
                                onClick={handleLogout}
                                className="w-full text-left px-6 py-4 hover:bg-red-500/20 text-red-500 transition-colors flex items-center"
                            >
                                <LogOut size={18} className="mr-3" /> Logout
                            </button>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="md:w-3/4">
                        <div className="bg-white border border-gray-100 rounded-xl p-8 min-h-[400px] shadow-sm">
                            {activeTab === 'bookings' && (
                                <div>
                                    <h2 className="text-2xl font-bold text-text-main mb-6">My Bookings</h2>
                                    <div className="space-y-4">
                                        {/* Dummy Booking Item */}
                                        <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 flex flex-col md:flex-row items-center justify-between">
                                            <div className="flex items-center space-x-4 mb-4 md:mb-0">
                                                <div className="w-24 h-16 bg-gray-200 rounded-md overflow-hidden">
                                                    <img src="https://tse4.mm.bing.net/th/id/OIP.UG5yEDReChH2hsbCc_N4yQHaE6?pid=Api&P=0&h=180" alt="Car" className="w-full h-full object-cover" />
                                                </div>9
                                                <div>
                                                    <h3 className="font-bold text-text-main">Hyundai Creta SX</h3>
                                                    <p className="text-sm text-text-muted">Jan 25, 2026 - Jan 28, 2026</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-brand-blue font-bold">₹5,660</p>
                                                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Confirmed</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-500 text-center mt-8">No more past bookings.</p>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'wishlist' && (
                                <div>
                                    <h2 className="text-2xl font-bold text-text-main mb-6">My Wishlist</h2>
                                    <p className="text-text-muted">Your wishlist is empty. Browse cars to add them here.</p>
                                </div>
                            )}
                            {activeTab === 'profile' && (
                                <div>
                                    <h2 className="text-2xl font-bold text-text-main mb-6">Profile Settings</h2>
                                    <div className="max-w-md">
                                        <label className="block text-text-muted text-sm mb-2">Display Name</label>
                                        <input type="text" value={user.name} readOnly className="w-full bg-gray-100 border border-gray-200 rounded-lg p-3 text-gray-500 mb-4 cursor-not-allowed" />
                                        <label className="block text-text-muted text-sm mb-2">Email Address</label>
                                        <input type="email" value={user.email} readOnly className="w-full bg-gray-100 border border-gray-200 rounded-lg p-3 text-gray-500 mb-6 cursor-not-allowed" />
                                        <p className="text-xs text-brand-blue">Edit functionality coming soon.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </main>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
