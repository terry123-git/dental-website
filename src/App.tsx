import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Dashboard from './pages/Dashboard';
import FloatingAppointment from './components/FloatingAppointment';
import ScrollToTop from './components/ScrollToTop';
import DentalChatbot from './components/chatbot/DentalChatbot';
import GradientBackground from './components/GradientBackground';

function App() {
  return (
    <Router>
      <GradientBackground className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <FloatingAppointment />
        <DentalChatbot />
        <ScrollToTop />
      </GradientBackground>
    </Router>
  );
}

export default App;