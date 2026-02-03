import React, { useState } from 'react';
import { Search, Calendar, MapPin, ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import CarCard from '../components/CarCard';
import { Link } from 'react-router-dom';

const Home = () => {
    // Dummy Data for Featured Cars
    const featuredCars = [
        {
            id: 1,
            model: "Hyundai Creta SX",
            type: "SUV",
            pricePerDay: 1599,
            fuel: "Petrol",
            transmission: "Automatic",
            seating: 5,
            mileage: "17kmpl",
            image: "https://tse4.mm.bing.net/th/id/OIP.UG5yEDReChH2hsbCc_N4yQHaE6?pid=Api&P=0&h=180"
        },
        {
            id: 2,
            model: "Mahindra Scorpio-N",
            type: "SUV",
            pricePerDay: 2499,
            fuel: "Diesel",
            transmission: "Manual",
            seating: 7,
            mileage: "15kmpl",
            image: "https://images.hindustantimes.com/auto/img/2022/12/28/1600x900/Mahindra_Scorpio-N_1672200636159_1672200636299_1672200636299.jpg"
        },
        {
            id: 3,
            model: "Kia Sonet",
            type: "Compact SUV",
            pricePerDay: 1299,
            fuel: "Petrol",
            transmission: "Automatic",
            seating: 5,
            mileage: "18kmpl",
            image: "https://images.topgear.com.ph/topgear/images/2024/06/06/kia-sonet-2024-6-1717654241.jpg"
        }
    ];

    const dealershipCars = [
        {
            id: 10,
            model: "Tata Nexon Fearless+",
            price: "11,99,000",
            image: "https://gaadiwaadi.com/wp-content/uploads/2025/01/2025-tata-nexon1.jpg"
        },
        {
            id: 11,
            model: "Toyota Innova Hycross",
            price: "25,50,000",
            image: "http://www.team-bhp.com/carpics/2022-toyota-innova-hycross/l/exterior/2022-toyota-innova-hycross-06.jpg"
        },
        {
            id: 12,
            model: "Kia Seltos GTX+",
            price: "19,00,000",
            image: "https://tse1.mm.bing.net/th/id/OIP._12WuM8qYsKML6LjNsrczQHaDt?pid=Api&P=0&h=180 "
        }
    ]

    return (
        <div className="bg-white min-h-screen">

            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                {/* Background Gradient/Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-brand-blue-light to-white z-0">
                    <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/FFFFFF/005CFF?text=Luxury+Fills+The+Space')] opacity-10 bg-cover bg-center"></div>
                    {/* Neon Glow overlay */}
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px]"></div>
                </div>

                <div className="relative z-10 container mx-auto px-4 text-center mt-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-6 font-montserrat"
                    >
                        Luxury Cars. <br />
                        <span className="text-brand-blue">Affordable Rentals.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-xl text-text-muted mb-10 max-w-2xl mx-auto"
                    >
                        Drive your dream car today. Choose from our premium fleet of SUVs, Sedans, and luxury vehicles starting at just <span className="text-brand-blue font-bold">₹1,099/day</span>.
                    </motion.p>

                    {/* Quick Search Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="bg-white p-4 rounded-2xl max-w-4xl mx-auto shadow-2xl shadow-brand-blue/10 flex flex-col md:flex-row gap-4 border border-gray-100"
                    >
                        <div className="flex-1 flex items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 focus-within:border-brand-blue transition-colors">
                            <MapPin className="text-brand-blue mr-3" />
                            <input type="text" placeholder="Pickup Location" className="bg-transparent border-none text-text-main w-full outline-none placeholder-gray-400" />
                        </div>
                        <div className="flex-1 flex items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 focus-within:border-brand-blue transition-colors">
                            <Calendar className="text-brand-blue mr-3" />
                            <input type="date" className="bg-transparent border-none text-text-main w-full outline-none placeholder-gray-400" />
                        </div>
                        <div className="flex-1 flex items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-200 focus-within:border-brand-blue transition-colors">
                            <Calendar className="text-brand-blue mr-3" />
                            <input type="date" className="bg-transparent border-none text-text-main w-full outline-none placeholder-gray-400" />
                        </div>
                        <button className="bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-brand-blue/20">
                            Search
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Featured Rental Cars */}
            <section className="py-20 container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2"><span className="text-brand-blue">Featured</span> Rentals</h2>
                        <p className="text-text-muted">Top picks for your next city drive or weekend getaway.</p>
                    </div>
                    <Link to="/rentals" className="text-brand-blue hover:text-brand-blue-dark transition-colors flex items-center font-medium">View All <ChevronRight size={18} /></Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredCars.map(car => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>
            </section>

            {/* Dealership Section */}
            <section className="py-20 bg-brand-blue-light/50 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -left-20 top-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px]"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                        <div className="mb-6 md:mb-0">
                            <h2 className="text-3xl md:text-4xl font-bold mb-2">Cars for <span className="text-brand-blue">Sale</span></h2>
                            <p className="text-text-muted">Certified pre-owned cars at dealership prices.</p>
                        </div>
                        <Link to="/dealership">
                            <button className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-6 py-2 rounded-lg transition-all font-bold">
                                Visit Dealership
                            </button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {dealershipCars.map(car => (
                            <div key={car.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-brand-blue/10 transition-all group">
                                <div className="h-56 overflow-hidden">
                                    <img src={car.image} alt={car.model} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-text-main">{car.model}</h3>
                                    <p className="text-text-muted text-sm mb-4">Starting from</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-2xl font-bold text-brand-blue">₹{car.price}</span>
                                        <span className="text-xs text-brand-blue border border-brand-blue px-2 py-1 rounded">EMI Available</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews / Trusted Section */}
            <section className="py-20 container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-16 text-text-main">Why Choose <span className="text-brand-blue">LuxeDrive</span>?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-brand-blue/30 transition-colors">
                        <div className="bg-brand-blue-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-blue">
                            <Star size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-text-main">Premium Fleet</h3>
                        <p className="text-text-muted">Top-end models from Hyundai, Tata, Mahindra, and more, maintained in pristine condition.</p>
                    </div>
                    <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-brand-blue/30 transition-colors">
                        <div className="bg-brand-blue-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-blue">
                            <MapPin size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-text-main">Anywhere Delivery</h3>
                        <p className="text-text-muted">We drop the car at your doorstep, airport, or any location of your choice.</p>
                    </div>
                    <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-brand-blue/30 transition-colors">
                        <div className="bg-brand-blue-light w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-blue">
                            <Calendar size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-text-main">Flexible Formatting</h3>
                        <p className="text-text-muted">Daily, weekly, or monthly plans tailored to your specific travel needs.</p>
                    </div>
                </div>
            </section>

        </div>
    );
};


export default Home;
