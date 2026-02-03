import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Fuel, Settings, Users, Gauge, CheckCircle, Calendar, ShieldCheck } from 'lucide-react';

const CarDetails = () => {
    const { id } = useParams();

    // Mock Data Lookup (In real app, fetch from API)
    const car = {
        id: id,
        model: "Hyundai Creta SX",
        type: "SUV",
        pricePerDay: 1599,
        fuel: "Petrol",
        transmission: "Automatic",
        seating: 5,
        mileage: "17kmpl",
        image: "https://placehold.co/800x500/222/E6B325?text=Hyundai+Creta+SX",
        specs: {
            engine: "1497 cc",
            power: "113 bhp",
            torque: "144 Nm",
            bootSpace: "433 Litres"
        },
        features: ["Panoramic Sunroof", "10.25-inch Touchscreen", "Ventilated Seats", "ADAS Level 2", "Wireless Charging", "Bose Sound System"]
    };

    return (
        <div className="bg-white min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4">

                {/* Breadcrumb / Back */}
                <Link to="/rentals" className="text-text-muted hover:text-brand-blue mb-6 inline-block">← Back to Rentals</Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Section */}
                    <div>
                        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-2xl mb-6">
                            <img src={car.image} alt={car.model} className="w-full h-full object-cover" />
                        </div>
                        {/* Thumbnails (Placeholder) */}
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="rounded-lg overflow-hidden border border-gray-100 cursor-pointer hover:border-brand-blue transition-all">
                                    <img src={`https://placehold.co/200x150/FFFFFF/005CFF?text=View+${i}`} alt="Thumbnail" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Details Section */}
                    <div>
                        <h1 className="text-4xl font-bold text-text-main mb-2">{car.model}</h1>
                        <div className="flex items-center space-x-4 mb-6">
                            <span className="bg-brand-blue-light text-brand-blue px-3 py-1 rounded-full text-sm font-medium">{car.type}</span>
                            <div className="flex items-center text-brand-blue">
                                <span className="text-yellow-500 mr-1">★</span> 4.8 (120 Reviews)
                            </div>
                        </div>

                        <div className="text-3xl font-bold text-brand-blue mb-8">
                            ₹{car.pricePerDay}<span className="text-lg text-text-muted font-normal">/day</span>
                        </div>

                        {/* Key Specs Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <div className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100">
                                <Fuel className="mx-auto text-brand-blue mb-2" size={20} />
                                <p className="text-xs text-text-muted">Fuel</p>
                                <p className="text-text-main font-semibold">{car.fuel}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100">
                                <Settings className="mx-auto text-brand-blue mb-2" size={20} />
                                <p className="text-xs text-text-muted">Transmission</p>
                                <p className="text-text-main font-semibold">{car.transmission}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100">
                                <Users className="mx-auto text-brand-blue mb-2" size={20} />
                                <p className="text-xs text-text-muted">Seating</p>
                                <p className="text-text-main font-semibold">{car.seating} Seats</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl text-center border border-gray-100">
                                <Gauge className="mx-auto text-brand-blue mb-2" size={20} />
                                <p className="text-xs text-text-muted">Mileage</p>
                                <p className="text-text-main font-semibold">{car.mileage}</p>
                            </div>
                        </div>

                        {/* Detailed Specs Table */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-text-main mb-4">Specifications</h3>
                            <div className="grid grid-cols-2 gap-y-4 text-sm">
                                <div className="flex justify-between border-b border-gray-100 pb-2 mr-4">
                                    <span className="text-text-muted">Engine</span>
                                    <span className="text-text-main">{car.specs.engine}</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="text-text-muted">Power</span>
                                    <span className="text-text-main">{car.specs.power}</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-100 pb-2 mr-4">
                                    <span className="text-text-muted">Torque</span>
                                    <span className="text-text-main">{car.specs.torque}</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="text-text-muted">Boot Space</span>
                                    <span className="text-text-main">{car.specs.bootSpace}</span>
                                </div>
                            </div>
                        </div>

                        {/* Features Information */}
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-text-main mb-4">Features</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {car.features.map((feature, index) => (
                                    <div key={index} className="flex items-center text-text-muted text-sm">
                                        <CheckCircle size={16} className="text-brand-blue mr-2" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-4">
                            <Link to="/booking" state={{ car }} className="flex-1">
                                <button className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-blue/20">
                                    Book Now
                                </button>
                            </Link>
                            <button className="px-6 py-4 border border-gray-200 rounded-xl hover:bg-gray-50 text-text-main font-semibold transition-colors">
                                Enquire
                            </button>
                        </div>

                        <p className="mt-4 text-xs text-gray-500 flex items-center">
                            <ShieldCheck size={14} className="mr-1 text-green-500" /> Secure booking with 100% money-back guarantee.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;
