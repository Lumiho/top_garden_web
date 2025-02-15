import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
// import Portfolio from "./pages/Portfolio";
import GetQuote from "./pages/GetQuote";
import "./index.css";
import TopGardenLogo from "./Media/topgarden_logo.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <div className="fixed top-0 w-full z-50 h-25 bg-gradient-to-r from-[#4D8C66] to-[#4A7A63] shadow-lg">
          <header className="container mx-auto flex items-center justify-between px-8 py-6">

            {/* Left Section */}
            <div className="flex items-center justify-center space-x-2">
              <Link to="/" className="hover:scale-110 transition-transform">
                <img
                  src={TopGardenLogo}
                  alt="Top Garden Logo"
                  className="w-16 h-14 mr-4 "
                />
              </Link>
              <div className="text-5xl font-bold text-shadow text-center text-[#F4F1DE] tracking-wide hover:scale-105 transition-transform drop-shadow-xl">

                <Link to="/" className="font-heading">
                  Top Garden
                </Link>
              </div>
            </div>

            {/* Right Navigation */}
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link
                    to="/"
                    className="text-lg font-medium text-[#F4F1DE] hover:text-[#E07A5F] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Reviews"
                    className="text-lg font-medium text-[#F4F1DE] hover:text-[#E07A5F] transition-colors"
                  >
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    to="/get-quote"
                    className="text-lg font-medium text-[#F4F1DE] hover:text-[#E07A5F] transition-colors"
                  >
                    Get a Quote
                  </Link>
                </li>
                <li>
                  <button className="bg-[#E07A5F] text-white px-6 py-1 rounded-xl font-medium hover:bg-[#4A7A63] hover:scale-105 transition-transform">
                    Login
                  </button>
                </li>
              </ul>
            </nav>
          </header>
        </div>

        {/* Main Content */}
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
            <Route path="/Reviews" element={<Reviews />} />
            <Route path="/get-quote" element={<GetQuote />} />
          </Routes>
        </div>

        {/* Footer Section */}
        <footer className="bg-black text-white py-7">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5">

            {/* Left Section: Contact Info */}
            <div className="text-left">
              {/* <h3 className="text-xl font-bold mb-3">Top Garden</h3> */}
              <p className="mb-2 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Remote, CA
              </p>
              <p className="mb-2 flex items-center">
                <FaPhoneAlt className="mr-2" /> (209) 263-9292
              </p>
              <p className="mb-2 flex items-center">
                <FaEnvelope className="mr-2" /> info@topgarden.com
              </p>
            </div>

            {/* Center Section: Logo */}
            <div>
              <img
                src={TopGardenLogo}
                alt="Top Garden Logo"
                className="w-40 h-40"
              />
            </div>

            {/* Right Section: Social Media */}
            <div className="flex flex-col items-center">
              <div className="flex space-x-6">
                <a
                  href="https://www.facebook.com/p/Top-Garden-Landscaping-Design-100070947193816"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="text-[#4267B2] text-4xl cursor-pointer hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.instagram.com/topgarden_landscaping"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-[#E4405F] text-4xl cursor-pointer hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Notice */}
          <div className="text-center mt-6 pt-4">
            <p>© 2024 Top Garden. All rights reserved.</p>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;
