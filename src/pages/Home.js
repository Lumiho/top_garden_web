import React from 'react';
import exampleImg from '../Media/irrigationImg.png';
import '../Components/Home.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-no-repeat text-[#F4F1DE] h-[70vh] flex flex-col justify-center text-center"
        style={{
          textShadow: '1px 1px 0px black',
          backgroundImage: `url(${exampleImg})`,
        }}
      >
        <h1 className="text-7xl md:text-8xl font-bold">Welcome to Top Garden</h1>
        <p className="mt-4 text-xl md:text-3xl">
          Turning your outdoor spaces into dreamscapes.
        </p>
      </section>

      {/* About Section */}
      <section className="bg-[#F4F1DE] py-16 px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Section */}
          <div className="lg:w-1/2 space-y-6 animate-fadeIn" style={{ animationDuration: '1s' }}>
            <h2 className="text-3xl mx-10 font-bold text-[#4A7A63]" style={{ textShadow: '.1px .1px 0px black' }}>
              About Us
            </h2>
            <p className="text-lg text-[#4A7A63] mx-10">
              Welcome to Top Garden! We are a team of passionate landscaping and irrigation experts dedicated to
              transforming outdoor spaces into stunning dreamscapes. With over 10 years of experience in the industry,
              we pride ourselves on delivering exceptional designs, efficient irrigation systems, and tailored
              maintenance plans.
            </p>
            <p className="text-lg text-[#4A7A63] mx-10">
              Our mission is to help homeowners and businesses create sustainable, beautiful, and functional outdoor
              spaces that enhance the quality of life and promote environmental stewardship. Whether it's creating a
              serene garden or installing a cutting-edge irrigation system, we ensure that every project is crafted with
              care and attention to detail.
            </p>
            <p className="text-lg text-[#4A7A63] mx-10">
              Let us help you bring your vision to life. Contact us today to get started!
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center" style={{ animation: 'fadeIn 1s ease-in-out' }}>
            <img src={exampleImg} alt="Our Team" className="w-full max-w-md rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#4A7A63] text-[#F4F1DE] py-10">
        <h2 className="text-3xl font-bold text-center mb-6 text-[#E07A5F]" style={{ textShadow: '1px 1px 0px black' }}>
          Contact Us
        </h2>
        <p className="text-center mb-8">Let us help you transform your outdoor spaces!</p>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-[#F4F1DE] rounded text-[#4A7A63] focus:outline-none focus:ring-2 focus:ring-[#E07A5F]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-[#F4F1DE] rounded text-[#4A7A63] focus:outline-none focus:ring-2 focus:ring-[#E07A5F]"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-[#F4F1DE] rounded text-[#4A7A63] focus:outline-none focus:ring-2 focus:ring-[#E07A5F]"
            rows="4"
          />
          <button
            type="submit"
            className="w-full bg-[#E07A5F] text-[#F4F1DE] py-2 rounded hover:bg-[#d46653]"
            style={{ textShadow: '.5px .5px 0px black' }}
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#000000] text-white py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-6">
          {/* Left Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Top Garden</h3>
            <p className="mb-2 flex items-center">
              <FaMapMarkerAlt className="mr-2" /> 123 Green Street, San Francisco, CA
            </p>
            <p className="mb-2 flex items-center">
              <FaPhoneAlt className="mr-2" /> +1 123 456 7890
            </p>
            <p className="mb-2 flex items-center">
              <FaEnvelope className="mr-2" /> info@topgarden.com
            </p>
          </div>

          {/* Middle Section: Google Map */}
          <div className="w-full md:w-1/3 h-48 md:h-64 relative">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Golden+Gate+Bridge,San+Francisco,CA"
              className="w-full h-full border-0 rounded"
              allowFullScreen
            ></iframe>
          </div>

          {/* Right Section: Follow Us */}
          <div className="mb-6 md:mb-0">
            <div className="flex space-x-4 mb-4">
              <FaFacebookF className="text-[#4267B2] text-xl" />
              <FaTwitter className="text-[#1DA1F2] text-xl" />
              <FaInstagram className="text-[#E4405F] text-xl" />
            </div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          </div>
        </div>

        <div className="text-center mt-6 border-t border-gray-700 pt-4">
          <p>© 2024 Top Garden. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;