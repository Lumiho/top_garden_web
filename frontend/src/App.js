import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import GetQuote from "./pages/GetQuote";
import ThankYou from "./pages/ThankYou";
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
  const [navOpen, setNavOpen] = useState(false);

  // 👇 Captions for image gallery in Home
  const galleryCaptions = [
    "Maintenance",
    "Irrigation",
    "Maintenance",
    "Landscaping",
    "Design",
  ];

  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <div className="fixed top-0 w-full z-50 bg-[#F4F1DE] shadow-lg">
          <header className="container mx-auto flex items-center justify-between px-8 py-6">
            {/* Left Section */}
            <div className="flex items-center space-x-2">
              <Link to="/" className="hover:scale-110 transition-transform">
                <img
                  src={TopGardenLogo}
                  alt="Top Garden Logo"
                  className="w-auto h-16 mr-3"
                />
              </Link>
              <div className="text-4xl md:text-5xl font-bold text-[#4A7A63] hover:scale-105 transition-transform drop-shadow-[0_1px_1px_rgba(0,0,0,.5)]">
                <Link to="/" className="font-heading">
                  Top Garden
                </Link>
                <div className="md:text-xl text-[#E07A5F] italic mt-1 ml-8">
                     Landscaping & Design
                </div>
              </div>
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden">
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="text-[#4A7A63] text-3xl focus:outline-none"
              >
                ☰
              </button>
            </div>

            {/* Right Navigation */}
            <nav
              className={`flex-col md:flex md:flex-row md:items-center absolute md:static top-[100%] left-0 w-full md:w-auto bg-[#F4F1DE] md:bg-transparent px-8 md:px-0 transition-all duration-300 ease-in-out ${navOpen ? "flex" : "hidden"
                }`}
            >
              <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 py-4 md:py-0">
                <li>
                  <Link
                    to="/"
                    onClick={() => setNavOpen(false)}
                    className="text-lg font-medium text-[#4A7A63] hover:text-[#E07A5F]"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/reviews"
                    onClick={() => setNavOpen(false)}
                    className="text-lg font-medium text-[#4A7A63] hover:text-[#E07A5F]"
                  >
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    to="/get-quote"
                    onClick={() => setNavOpen(false)}// bg-[#E07A5F] text-white px-4 py-1 rounded-xl font-medium hover:bg-[#4A7A63] hover:scale-105 transition-transform
                    className="text-lg font-medium text-white bg-[#E07A5F] px-4 py-1 rounded-xl font-medium hover:bg-[#4A7A63] hover:scale-105 transition-transform"
                  >
                    Get a Quote
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>

        {/* Main Content */}
        <div className="pt-28">
          <Routes>
            <Route path="/" element={<Home captions={galleryCaptions} />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/get-quote" element={<GetQuote />} />
            <Route path="/thank-you" element={<ThankYou />} />
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
                CL#1092124
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
          <div className="text-center pt-1 ml-9">
            <p>© 2024 Top Garden. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
