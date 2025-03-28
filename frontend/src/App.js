import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import GetQuote from "./pages/GetQuote";
import "./index.css";
import TopGardenLogo from "./Media/topgarden_logo.png";
import TopGardenLogo2 from "./Media/top_garden.png";

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
        <div className="fixed top-0 w-full z-50 h-25 bg-[#F4F1DE] shadow-lg">
          <header className="container mx-auto flex items-center justify-between px-8 py-6">
            {/* Left Section */}
            <div className="flex items-center justify-center space-x-2">
              <Link to="/" className="hover:scale-110 transition-transform">
                <img
                  src={TopGardenLogo}
                  alt="Top Garden Logo"
                  className="w-auto h-16 mr-4 "
                />
              </Link>
              <div className="text-5xl font-bold text-shadow text-center text-[#4A7A63] tracking-wide hover:scale-105 transition-transform drop-shadow-xl">
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
                    className="text-lg font-medium text-[#4A7A63] hover:text-[#E07A5F] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/reviews"
                    className="text-lg font-medium text-[#4A7A63] hover:text-[#E07A5F] transition-colors"
                  >
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    to="/get-quote"
                    className="text-lg font-medium text-[#4A7A63] hover:text-[#E07A5F] transition-colors"
                  >
                    Get a Quote
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <button className="bg-[#E07A5F] text-white px-6 py-1 rounded-xl font-medium hover:bg-[#4A7A63] hover:scale-105 transition-transform">
                      Login
                    </button>
                  </Link>
                  <Link to="/Signup">
                    <button className="bg-[#E07A5F] text-white px-6 py-1 rounded-xl font-medium hover:bg-[#4A7A63] hover:scale-105 transition-transform">
                      Sign Up
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>

        {/* Main Content */}
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/get-quote" element={<GetQuote />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/signup" element={<Signup />} /> 
          </Routes>
        </div>

        {/* Footer Section */}
        <footer className="bg-black text-white py-7">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-5">
            <div className="text-left mt-10">
              <p className="mb-2 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Northern California
              </p>
              <p className="mb-2 flex items-center">
                <FaPhoneAlt className="mr-2" /> (209) 263-9292
              </p>
              <p className="mb-2 flex items-center">
                <FaEnvelope className="mr-2" /> tgardenl@yahoo.com
              </p>
              <p className="mb-2 flex items-center">
                <FaEnvelope className="mr-2" /> CL#1092124
              </p>
            </div>

            <div>
              <img
                src={TopGardenLogo2}
                alt="Top Garden Logo"
                className="w-auto h-60 mr-12"
              />
            </div>

            <div className="flex flex-col items-center mt-10">
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
          <div className="text-center pt-1">
            <p>© 2024 Top Garden. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;