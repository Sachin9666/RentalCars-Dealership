import React from 'react';
import { Fuel, Settings, Users, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
    return (
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-xl hover:shadow-brand-blue/10 group">
            <div className="relative h-48 overflow-hidden">
                <img src={car.image || 'https://placehold.co/600x400/1a1a1a/E6B325?text=LuxeDrive'} alt={car.model} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-brand-blue border border-brand-blue/20 shadow-sm">
                    {car.type}
                </div>
            </div>

            <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-text-main truncate">{car.model}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm text-text-muted mb-6">
                    <div className="flex items-center space-x-2">
                        <Fuel size={16} className="text-brand-blue" />
                        <span>{car.fuel}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Settings size={16} className="text-brand-blue" />
                        <span>{car.transmission}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Users size={16} className="text-brand-blue" />
                        <span>{car.seating} Seats</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Gauge size={16} className="text-brand-blue" />
                        <span>{car.mileage}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                        <p className="text-xs text-text-muted">Daily Rate</p>
                        <p className="text-lg font-bold text-brand-blue">₹{car.pricePerDay.toLocaleString()}<span className="text-sm font-normal text-text-muted">/day</span></p>
                    </div>
                    <Link to={`/car-details/${car.id}`}>
                        <button className="px-4 py-2 bg-brand-blue hover:bg-brand-blue-dark text-white rounded-lg text-sm font-semibold transition-colors shadow-md">
                            Rent Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
