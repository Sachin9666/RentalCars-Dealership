import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const user = localStorage.getItem('user'); // Temporary auth check

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Rentals', path: '/rentals' },
        { name: 'Dealership', path: '/dealership' },
        { name: 'Offers', path: '/offers' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-100 bg-white/90 backdrop-blur-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
                    <span className="self-center text-2xl font-bold whitespace-nowrap text-text-main group-hover:text-brand-blue transition-colors duration-300">
                        Lux<span className="text-brand-blue">Drive</span>
                    </span>

                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors"
                >
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {user ? (
                        <Link to="/dashboard">
                            <button type="button" className="text-white bg-brand-blue hover:bg-brand-blue-dark focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all shadow-[0_4px_15px_rgba(0,92,255,0.2)]">
                                Dashboard
                            </button>
                        </Link>
                    ) : (
                        <div className="flex space-x-4">
                            <Link to="/login" className="text-text-main hover:text-brand-blue font-medium py-2 transition-colors">Login</Link>
                            <Link to="/register">
                                <button type="button" className="text-white bg-brand-blue hover:bg-brand-blue-dark focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all shadow-[0_4px_15px_rgba(0,92,255,0.2)]">
                                    Register
                                </button>
                            </Link>
                        </div>
                    )}
                </div>

                <div className="hidden md:flex items-center justify-between w-full md:w-auto md:order-1">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-text-main font-medium">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className="block py-2 px-3 rounded hover:text-brand-blue md:p-0 transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden w-full overflow-hidden bg-white border-t border-gray-100"
                    >
                        <ul className="flex flex-col p-4 font-medium text-text-main space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="block py-2 px-3 rounded hover:bg-brand-blue-light hover:text-brand-blue transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
                                {user ? (
                                    <Link to="/dashboard" onClick={() => setIsOpen(false)} className="w-full text-center text-white bg-brand-blue py-2 rounded-lg font-bold">Dashboard</Link>
                                ) : (
                                    <>
                                        <Link to="/login" onClick={() => setIsOpen(false)} className="w-full text-center text-text-main border border-gray-200 py-2 rounded-lg hover:bg-gray-50">Login</Link>
                                        <Link to="/register" onClick={() => setIsOpen(false)} className="w-full text-center text-white bg-brand-blue py-2 rounded-lg shadow-[0_4px_10px_rgba(0,92,255,0.3)]">Register</Link>
                                    </>
                                )}
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
