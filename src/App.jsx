import React from 'react';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Divisons from './Components/Divisons/Divisons';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonial from './Components/Testimonial/Testimonial';
import Contect from './Components/contect/Contect';
import Footer from './Components/Footer/Footer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="main-content">

        {/* Programs Section */}
        <section id="divisions" className="section">
          <Title subTitle="Our Program" title="What We Offer" />
          <Divisons />
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <About />
        </section>

        {/* Campus Gallery Section */}
        <section id="campus" className="section">
          <Title subTitle="Gallery" title="Campus Photos" />
          <Campus />
        </section>

        {/* Testimonial Section */}
        <section id="testimonial" className="section">
          <Title subTitle="TESTIMONIAL" title="What Students Say" />
          <Testimonial />
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <Title subTitle="Contact Us" title="Get in Touch" />
          <Contect />
        </section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default App;
