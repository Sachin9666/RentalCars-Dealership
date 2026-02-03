import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-white min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-text-main mb-2 text-center">Contact <span className="text-brand-blue">Us</span></h1>
                <p className="text-text-muted text-center mb-12">We are here to assist you with your luxury experience.</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information & Form */}
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-white border border-gray-100 p-6 rounded-xl flex flex-col items-center text-center hover:border-brand-blue transition-colors shadow-sm">
                                <Phone className="text-brand-blue mb-4" size={32} />
                                <h3 className="text-text-main font-bold mb-2">Call Us</h3>
                                <p className="text-text-muted text-sm">+91 98765 43210</p>
                                <p className="text-text-muted text-sm">+91 80 1234 5678</p>
                            </div>
                            <div className="bg-white border border-gray-100 p-6 rounded-xl flex flex-col items-center text-center hover:border-brand-blue transition-colors shadow-sm">
                                <Mail className="text-brand-blue mb-4" size={32} />
                                <h3 className="text-text-main font-bold mb-2">Email Us</h3>
                                <p className="text-text-muted text-sm">support@luxedrive.com</p>
                                <p className="text-text-muted text-sm">sales@luxedrive.com</p>
                            </div>
                        </div>

                        <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
                            <h2 className="text-2xl font-bold text-text-main mb-6">Send us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input type="text" placeholder="Your Name" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-text-main focus:border-brand-blue outline-none placeholder-gray-400" />
                                    <input type="email" placeholder="Your Email" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-text-main focus:border-brand-blue outline-none placeholder-gray-400" />
                                </div>
                                <input type="text" placeholder="Subject" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-text-main focus:border-brand-blue outline-none placeholder-gray-400" />
                                <textarea rows="4" placeholder="Message" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-text-main focus:border-brand-blue outline-none placeholder-gray-400"></textarea>

                                <button className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-brand-blue/20">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="h-[500px] lg:h-auto rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.979032738743!2d77.59456271482193!3d12.973596790854492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1645431600000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
