import logo from './Media/top_garden.png';
import './App.css';
import './Components/Header_Footer.css'
import './Components/Portfolio.css'

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <header>
          <div>
            <img src="media/top_garden2_crop.png" alt="Top Garden Logo" />
          </div>
          <div className="logo">
            <h1>Top Garden</h1>
          </div>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="/subpage/reviews.js">Reviews</a></li>
            </ul>
          </nav>
        </header>
      </div>

      <div className='Portfolio'>
        <main>
          <p>Helloooo</p>
          <div>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </main>
      </div>

      <div className='Footer'>
        <footer>
          <p>&copy; 2024 Top Garden Website. All rights reserved.</p>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </footer>
      </div>
    </div>
  );
}


export default App;
