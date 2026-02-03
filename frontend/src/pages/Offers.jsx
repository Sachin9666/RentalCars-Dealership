import React from 'react';
import { Gift, Copy } from 'lucide-react';

const Offers = () => {
    const offers = [
        {
            id: 1,
            title: "Diwali Dhamaka",
            description: "Get flat 20% off on all SUV rentals. Celebrate the festival of lights with luxury.",
            code: "DIWALI20",
            discount: "20% OFF",
            color: "bg-gradient-to-r from-orange-500 to-red-600"
        },
        {
            id: 2,
            title: "Weekend Getaway",
            description: "Book for 3 days and pay for only 2. Valid on all hatchbacks and sedans.",
            code: "WEEKEND32",
            discount: "Pay 2 Get 3", // Logic might differ but text is key
            color: "bg-gradient-to-r from-purple-500 to-indigo-600"
        },
        {
            id: 3,
            title: "Dealership Exchange",
            description: "Exchange your old car and get a bonus up to ₹50,000 on purchase.",
            code: "EXCHANGE50",
            discount: "₹50k Bonus",
            color: "bg-gradient-to-r from-emerald-500 to-teal-600"
        },
        {
            id: 4,
            title: "Ugadi Special",
            description: "New beginnings with a new ride. Flat 15% off on all bookings this month.",
            code: "UGADI15",
            discount: "15% OFF",
            color: "bg-gradient-to-r from-yellow-500 to-orange-400"
        }
    ];

    return (
        <div className="bg-white min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-text-main mb-2 text-center">Exclusive <span className="text-brand-blue">Offers</span></h1>
                <p className="text-text-muted text-center mb-12">Grab the best deals for your next journey.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {offers.map(offer => (
                        <div key={offer.id} className="relative group overflow-hidden rounded-2xl border border-gray-100 hover:border-brand-blue/50 transition-all shadow-sm">
                            <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity ${offer.color}`}></div>

                            <div className="relative p-8 flex flex-col h-full bg-white/80 backdrop-blur-sm">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-3 rounded-xl ${offer.color} bg-opacity-20 text-white shadow-lg`}>
                                        <Gift size={24} />
                                    </div>
                                    <span className="text-2xl font-bold text-brand-blue">{offer.discount}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-text-main mb-2">{offer.title}</h3>
                                <p className="text-text-muted mb-6 flex-grow">{offer.description}</p>

                                <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-3 flex justify-between items-center group-hover:border-brand-blue transition-colors">
                                    <span className="text-text-muted text-sm">Use Code:</span>
                                    <div className="flex items-center space-x-2">
                                        <span className="text-xl font-mono font-bold text-text-main tracking-wider">{offer.code}</span>
                                        <button className="text-text-muted hover:text-brand-blue transition-colors">
                                            <Copy size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Offers;
