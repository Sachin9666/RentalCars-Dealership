import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

const Filters = () => {
    return (
        <div className="bg-white border border-gray-100 p-6 rounded-xl h-fit sticky top-24 shadow-sm">
            <div className="flex items-center space-x-2 mb-6 text-brand-blue">
                <SlidersHorizontal size={20} />
                <h3 className="text-xl font-bold">Filters</h3>
            </div>

            {/* Price Range */}
            <div className="mb-8">
                <label className="block text-sm font-medium mb-3 text-text-muted">Price Range (Per Day)</label>
                <input type="range" min="1000" max="10000" className="w-full accent-brand-blue h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                <div className="flex justify-between text-xs text-text-muted mt-2">
                    <span>₹1,000</span>
                    <span>₹10,000+</span>
                </div>
            </div>

            {/* Car Type */}
            <div className="mb-8 pl-1">
                <h4 className="text-sm font-bold text-text-main mb-3">Car Type</h4>
                <div className="space-y-2">
                    {['Sedan', 'SUV', 'Hatchback', 'Luxury', 'Convertible'].map(type => (
                        <label key={type} className="flex items-center space-x-3 cursor-pointer group">
                            <input type="checkbox" className="form-checkbox h-4 w-4 text-brand-blue rounded focus:ring-0 bg-transparent border-gray-300 checked:bg-brand-blue transition-all" />
                            <span className="text-text-muted group-hover:text-brand-blue transition-colors">{type}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Transmission */}
            <div className="mb-8 pl-1">
                <h4 className="text-sm font-bold text-text-main mb-3">Transmission</h4>
                <div className="space-y-2">
                    {['Automatic', 'Manual'].map(type => (
                        <label key={type} className="flex items-center space-x-3 cursor-pointer group">
                            <input type="checkbox" className="form-checkbox h-4 w-4 text-brand-blue rounded focus:ring-0 bg-transparent border-gray-300 checked:bg-brand-blue transition-all" />
                            <span className="text-text-muted group-hover:text-brand-blue transition-colors">{type}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Fuel */}
            <div className="mb-8 pl-1">
                <h4 className="text-sm font-bold text-text-main mb-3">Fuel Type</h4>
                <div className="space-y-2">
                    {['Petrol', 'Diesel', 'Electric', 'Hybrid'].map(type => (
                        <label key={type} className="flex items-center space-x-3 cursor-pointer group">
                            <input type="checkbox" className="form-checkbox h-4 w-4 text-brand-blue rounded focus:ring-0 bg-transparent border-gray-300 checked:bg-brand-blue transition-all" />
                            <span className="text-text-muted group-hover:text-brand-blue transition-colors">{type}</span>
                        </label>
                    ))}
                </div>
            </div>

            <button className="w-full py-2 border border-brand-blue text-brand-blue rounded-lg hover:bg-brand-blue hover:text-white transition-all font-medium">
                Apply Filters
            </button>
        </div>
    );
};

export default Filters;
