import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import Portfolio from './pages/Portfolio';
import GetQuote from './pages/GetQuote';
import "./index.css";
import topGardenLogo from './Media/top_garden.png';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header with Navbar */}
        <div className="bg-[#4A7A63] text-[#F4F1DE] py-4">
          <header className="container mx-auto flex justify-between items-center">
            <div>
              <img src={topGardenLogo} alt="Top Garden Logo" className="size-20" />
            </div>
            <div className="text-3xl font-bold text-[#E07A5F]">
              <h1>Top Garden</h1>
            </div>
            <nav>
              <ul className="flex space-x-6">
                <li><Link to="/" className="hover:underline text-[#F4F1DE]">Home</Link></li>
                <li><Link to="/portfolio" className="hover:underline text-[#F4F1DE]">Portfolio</Link></li>
                <li><Link to="/Reviews" className="hover:underline text-[#F4F1DE]">Reviews</Link></li>
                <li><Link to="/get-quote" className="hover:underline text-[#F4F1DE]">Get a Quote</Link></li>
              </ul>
            </nav>
          </header>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/get-quote" element={<GetQuote />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-[#E07A5F] text-[#F4F1DE] text-center py-6">
          <p>&copy; 2024 Top Garden Website. All rights reserved.</p>
          <ul className="flex justify-center space-x-6 mt-4">
            <li><a href="#privacy" className="hover:underline text-[#F4F1DE]">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:underline text-[#F4F1DE]">Terms of Service</a></li>
          </ul>
        </footer>
      </div>
    </Router>
  );
}

export default App;
