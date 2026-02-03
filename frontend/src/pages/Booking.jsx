import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, CreditCard } from 'lucide-react';

const Booking = () => {
    const location = useLocation();
    const car = location.state?.car;

    // Defaults if accessed directly without state (mostly only feasible via link)
    if (!car) {
        return (
            <div className="min-h-screen pt-24 flex flex-col items-center justify-center bg-white text-text-main">
                <h2 className="text-2xl font-bold mb-4">No Car Selected</h2>
                <Link to="/rentals" className="text-brand-blue underline">Go to Rentals</Link>
            </div>
        )
    }

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [days, setDays] = useState(1);

    // Calculate days when dates change
    useEffect(() => {
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const diffTime = Math.abs(end - start);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            setDays(diffDays > 0 ? diffDays : 1);
        }
    }, [startDate, endDate]);

    const basePrice = car.pricePerDay * days;
    const taxes = Math.round(basePrice * 0.18); // 18% GST (India)
    const insurance = days * 200; // 200/day
    const total = basePrice + taxes + insurance;

    return (
        <div className="bg-white min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-text-main mb-8">Complete Your <span className="text-brand-blue">Booking</span></h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Booking Form */}
                    <div className="lg:col-span-2 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                        <h3 className="text-xl font-bold text-text-main mb-6 flex items-center">
                            <Calendar className="mr-2 text-brand-blue" /> Rental Details
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-text-muted text-sm mb-2">Pickup Date</label>
                                <input
                                    type="date"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-text-main focus:border-brand-blue outline-none"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-text-muted text-sm mb-2">Drop-off Date</label>
                                <input
                                    type="date"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-text-main focus:border-brand-blue outline-none"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <label className="block text-text-muted text-sm mb-2">Pickup Location</label>
                                <input type="text" placeholder="Enter City/Area" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-text-main focus:border-brand-blue outline-none placeholder-gray-400" />
                            </div>
                            <div>
                                <label className="block text-text-muted text-sm mb-2">Drop-off Location</label>
                                <input type="text" placeholder="Enter City/Area" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-text-main focus:border-brand-blue outline-none placeholder-gray-400" />
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-text-main mb-6 flex items-center border-t border-gray-100 pt-8">
                            <CreditCard className="mr-2 text-brand-blue" /> Personal Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-text-muted text-sm mb-2">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-text-main focus:border-brand-blue outline-none placeholder-gray-400" />
                            </div>
                            <div>
                                <label className="block text-text-muted text-sm mb-2">Phone Number</label>
                                <input type="tel" placeholder="+91 98765 43210" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-text-main focus:border-brand-blue outline-none placeholder-gray-400" />
                            </div>
                            <div className="col-span-1 md:col-span-2">
                                <label className="block text-text-muted text-sm mb-2">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-text-main focus:border-brand-blue outline-none placeholder-gray-400" />
                            </div>
                        </div>
                    </div>

                    {/* Summary Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 sticky top-24 shadow-sm">
                            <h3 className="text-xl font-bold text-text-main mb-6">Booking Summary</h3>

                            <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-100">
                                <img src={car.image} alt={car.model} className="w-24 h-16 object-cover rounded-lg" />
                                <div>
                                    <h4 className="font-bold text-text-main">{car.model}</h4>
                                    <p className="text-sm text-text-muted">{car.type} • {car.fuel}</p>
                                </div>
                            </div>

                            <div className="space-y-3 text-sm mb-6">
                                <div className="flex justify-between text-text-muted">
                                    <span>Rate per day</span>
                                    <span>₹{car.pricePerDay}</span>
                                </div>
                                <div className="flex justify-between text-text-muted">
                                    <span>Duration</span>
                                    <span>{days} Days</span>
                                </div>
                                <div className="flex justify-between text-text-muted">
                                    <span>Subtotal</span>
                                    <span>₹{basePrice.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-text-muted">
                                    <span>Taxes (18%)</span>
                                    <span>₹{taxes.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-text-muted">
                                    <span>Insurance</span>
                                    <span>₹{insurance.toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-4 mb-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold text-text-main">Total Amount</span>
                                    <span className="text-2xl font-bold text-brand-blue">₹{total.toLocaleString()}</span>
                                </div>
                            </div>

                            <button className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-brand-blue/20">
                                Confirm Booking
                            </button>
                            <p className="text-center text-xs text-gray-500 mt-4">By booking, you agree to our Terms & Conditions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
