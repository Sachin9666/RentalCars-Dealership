import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rentals from './pages/Rentals';
import Dealership from './pages/Dealership';
import CarDetails from './pages/CarDetails';
import Booking from './pages/Booking';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Offers from './pages/Offers';
import Contact from './pages/Contact';
import AnimationLoader from './pages/AnimationLoader';



function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <AnimationLoader finishLoading={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-text-main font-poppins">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/dealership" element={<Dealership />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/car-details/:id" element={<CarDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}



export default App;
