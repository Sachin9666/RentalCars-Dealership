import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white text-text-main pt-16 pb-8 border-t border-gray-100">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Brand Column */}
                    <div>
                        <Link to="/" className="flex items-center space-x-2 mb-4 group">
                            <span className="text-2xl font-bold whitespace-nowrap text-text-main group-hover:text-brand-blue transition-colors duration-300">
                                Luxe<span className="text-brand-blue">Drive</span>
                            </span>
                        </Link>
                        <p className="text-text-muted mb-6">
                            Experience the thrill of luxury. Premium car rentals and dealership services tailored for your journey.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-text-muted hover:text-brand-blue hover:bg-brand-blue-light p-2 rounded-full transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-text-muted hover:text-brand-blue hover:bg-brand-blue-light p-2 rounded-full transition-all">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-text-muted hover:text-brand-blue hover:bg-brand-blue-light p-2 rounded-full transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-text-muted hover:text-brand-blue hover:bg-brand-blue-light p-2 rounded-full transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-brand-blue">Quick Links</h3>
                        <ul className="space-y-4">
                            {['Home', 'Rentals', 'Dealership', 'Offers', 'About Us', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="text-text-muted hover:text-brand-blue transition-colors flex items-center">
                                        <span className="mr-2 text-brand-blue">›</span> {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-brand-blue">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start text-text-muted">
                                <MapPin size={20} className="mr-3 mt-1 text-brand-blue" />
                                <span>123 Luxury Lane, Auto City,<br />Bangalore, KA 560001</span>
                            </li>
                            <li className="flex items-center text-text-muted">
                                <Phone size={20} className="mr-3 text-brand-blue" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center text-text-muted">
                                <Mail size={20} className="mr-3 text-brand-blue" />
                                <span>support@luxedrive.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-brand-blue">Newsletter</h3>
                        <p className="text-text-muted mb-4">Subscribe to get the latest offers and car updates.</p>
                        <form className="flex flex-col space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-gray-50 border border-gray-200 text-text-main text-sm rounded-lg focus:ring-brand-blue focus:border-brand-blue block w-full p-2.5 placeholder-gray-400"
                            />
                            <button type="submit" className="text-white bg-brand-blue hover:bg-brand-blue-dark focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center transition-all">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-text-muted text-sm mb-4 md:mb-0">
                        © 2026 LuxeDrive. All Rights Reserved.
                    </p>
                    <div className="flex space-x-6 text-sm text-text-muted">
                        <a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-brand-blue transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-brand-blue transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
