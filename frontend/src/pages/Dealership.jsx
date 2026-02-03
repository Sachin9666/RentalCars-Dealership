import React, { useState } from 'react';
import { Calculator, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Dealership = () => {
    const cars = [
        {
            id: 101,
            model: "Tata Nexon Fearless+",
            price: 1199000,
            image: "https://placehold.co/600x400/222/005CFF?text=Nexon",
            specs: "Petrol • Manual • Sunroof"
        },
        {
            id: 102,
            model: "Mahindra Scorpio-N Z8L",
            price: 2100000,
            image: "https://placehold.co/600x400/222/005CFF?text=Scorpio-N",
            specs: "Diesel • Automatic • 4x4"
        },
        {
            id: 103,
            model: "Hyundai Creta SX(O)",
            price: 1750000,
            image: "https://placehold.co/600x400/222/005CFF?text=Creta",
            specs: "Petrol • IVT • ADAS"
        },
        {
            id: 104,
            model: "Toyota Innova Hycross",
            price: 2800000,
            image: "https://placehold.co/600x400/222/005CFF?text=Innova",
            specs: "Hybrid • Automatic • 7 Str"
        },
        {
            id: 105,
            model: "Kia Seltos X-Line",
            price: 1950000,
            image: "https://placehold.co/600x400/222/005CFF?text=Seltos",
            specs: "Diesel • Automatic • Matte"
        },
        {
            id: 106,
            model: "Tata Harrier Dark",
            price: 2300000,
            image: "https://placehold.co/600x400/222/005CFF?text=Harrier",
            specs: "Diesel • Automatic • Dark Edition"
        }
    ];

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState(0);
    const [loanAmount, setLoanAmount] = useState(0);
    const [interest, setInterest] = useState(9);
    const [tenure, setTenure] = useState(5);

    const openCalculator = (price) => {
        setSelectedPrice(price);
        setLoanAmount(price * 0.8); // Default 80% loan
        setModalOpen(true);
    };

    const calculateEMI = () => {
        const r = interest / 12 / 100;
        const n = tenure * 12;
        const emi = loanAmount * r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
        return Math.round(emi).toLocaleString();
    };

    return (
        <div className="bg-white min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-4xl font-bold text-text-main">Dealership <span className="text-brand-blue">Showroom</span></h1>
                        <p className="text-text-muted mt-2">Premium certified cars for sale. Best prices guaranteed.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cars.map(car => (
                        <div key={car.id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-[0_4px_25px_rgba(0,92,255,0.1)] transition-all group">
                            <div className="h-60 overflow-hidden relative">
                                <img src={car.image} alt={car.model} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                                    <span className="text-white text-sm font-medium">{car.specs}</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-text-main mb-2">{car.model}</h3>
                                <p className="text-text-muted text-sm mb-4">On-Road Est. Price</p>
                                <div className="flex justify-between items-end mb-6">
                                    <span className="text-3xl font-bold text-brand-blue">₹{car.price.toLocaleString()}</span>
                                </div>

                                <div className="flex space-x-3">
                                    <button className="flex-1 bg-brand-blue text-white font-bold py-2 rounded-lg hover:bg-brand-blue-dark transition-colors">
                                        View Details
                                    </button>
                                    <button
                                        onClick={() => openCalculator(car.price)}
                                        className="px-3 py-2 border border-gray-200 rounded-lg hover:bg-brand-blue-light text-brand-blue transition-colors"
                                        title="EMI Calculator"
                                    >
                                        <Calculator size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* EMI Calculator Modal */}
            <AnimatePresence>
                {modalOpen && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white border border-gray-100 rounded-2xl p-6 w-full max-w-md relative shadow-2xl"
                        >
                            <button onClick={() => setModalOpen(false)} className="absolute top-4 right-4 text-text-muted hover:text-text-main">
                                <X size={24} />
                            </button>
                            <h3 className="text-2xl font-bold text-text-main mb-6 flex items-center">
                                <Calculator className="mr-2 text-brand-blue" /> EMI Calculator
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm text-text-muted display-block">Loan Amount (₹)</label>
                                    <input
                                        type="number"
                                        value={loanAmount}
                                        onChange={(e) => setLoanAmount(Number(e.target.value))}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-text-main focus:border-brand-blue outline-none mt-1"
                                    />
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-1">
                                        <label className="text-sm text-text-muted display-block">Interest Rate (%)</label>
                                        <input
                                            type="number"
                                            value={interest}
                                            onChange={(e) => setInterest(Number(e.target.value))}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-text-main focus:border-brand-blue outline-none mt-1"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label className="text-sm text-text-muted display-block">Tenure (Years)</label>
                                        <input
                                            type="number"
                                            value={tenure}
                                            onChange={(e) => setTenure(Number(e.target.value))}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-text-main focus:border-brand-blue outline-none mt-1"
                                        />
                                    </div>
                                </div>

                                <div className="bg-brand-blue-light rounded-xl p-4 mt-6 text-center border border-brand-blue/10">
                                    <p className="text-text-muted text-sm mb-1">Monthly EMI</p>
                                    <p className="text-3xl font-bold text-brand-blue">₹{calculateEMI()}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Dealership;
