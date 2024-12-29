import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import Portfolio from './pages/Portfolio';
import GetQuote from './pages/GetQuote';
import "./index.css";
import topGardenLogo from './Media/top_garden2_crop.png';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#4D8C66] to-[#4A7A63] text-[#F4F1DE] py-4">
          <header className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <div>
              <img src={topGardenLogo} alt="Top Garden Logo" className="w-32" />
            </div>
            {/* Title */}
            <div className="text-5xl font-bold text-[#E07A5F] tracking-wide absolute right-1/2 transform translate-x-1/2 hover:scale-105 transition-transform">
              <h1 style={{ textShadow: '1px 1px 0px black' }}>Top Garden</h1>
            </div>
            {/* Navigation */}
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link
                    to="/"
                    className="relative text-xl text-[#F4F1DE] after:block after:h-[2px] after:bg-[#000000] after:w-0 after:transition-all after:duration-400 hover:after:w-full"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="relative text-xl text-[#F4F1DE] after:block after:h-[2px] after:bg-[#000000] after:w-0 after:transition-all after:duration-400 hover:after:w-full"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Reviews"
                    className="relative text-xl text-[#F4F1DE] after:block after:h-[2px] after:bg-[#000000] after:w-0 after:transition-all after:duration-400 hover:after:w-full"
                  >
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    to="/get-quote"
                    className="relative text-xl text-[#F4F1DE] after:block after:h-[2px] after:bg-[#000000] after:w-0 after:transition-all after:duration-400 hover:after:w-full"
                  >
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/get-quote" element={<GetQuote />} />
        </Routes>

        {/* Footer Section */}
        <footer className="bg-black text-white py-10">
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
                <FaFacebookF className="text-[#4267B2] text-xl cursor-pointer" />
                <FaTwitter className="text-[#1DA1F2] text-xl cursor-pointer" />
                <FaInstagram className="text-[#E4405F] text-xl cursor-pointer" />
              </div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            </div>
          </div>

          <div className="text-center mt-6 border-t border-gray-700 pt-4">
            <p>© 2024 Top Garden. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
