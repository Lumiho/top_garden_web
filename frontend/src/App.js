import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
// import Portfolio from "./pages/Portfolio";
import GetQuote from "./pages/GetQuote";
import "./index.css";
import topGardenLogo from "./Media/top_garden2_crop.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

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
                  src={topGardenLogo}
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
                {/* <li>
                  <Link
                    to="/portfolio"
                    className="text-lg font-medium text-[#F4F1DE] hover:text-[#E07A5F] transition-colors"
                  >
                    Portfolio
                  </Link>
                </li> */}
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
        <footer className="bg-black text-white py-10">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-6">
            {/* Left Section */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-4">Top Garden</h3>
              <p className="mb-2 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Remote, CA
              </p>
              <p className="mb-2 flex items-center">
                <FaPhoneAlt className="mr-2" /> 2092639292
              </p>
              <p className="mb-2 flex items-center">
                <FaEnvelope className="mr-2" /> info@topgarden.com
              </p>
            </div>

            {/* Middle Section: Leaflet Map */}
            <div className="w-full md:w-1/3 h-48 md:h-64 relative">
              <MapContainer
                center={[37.8199, -122.4783]}
                zoom={13}
                className="w-full h-full rounded"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                <Marker position={[37.8199, -122.4783]}>
                  <Popup>Golden Gate Bridge, San Francisco, CA</Popup>
                </Marker>
              </MapContainer>
            </div>

            {/* Right Section: Follow Us */}
            <div className="mb-6 md:mb-0">
              <div className="flex space-x-4 mb-4">
                <FaFacebookF className="text-[#4267B2] text-3xl cursor-pointer" />
                <a
                  href="https://www.instagram.com/topgarden_landscaping"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-[#E4405F] text-3xl cursor-pointer hover:scale-110 transition-transform" />
                </a>
              </div>
              <h3 className="text-2xl font-bold mb-4">Follow Us!</h3>
            </div>
          </div>

          <div className="text-center mt-6 pt-4">
            <p>© 2024 Top Garden. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
