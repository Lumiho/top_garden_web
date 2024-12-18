import logo from './Media/SHUBA.gif';
import './App.css';
import './Components/Header_Footer.css'

function Header() {
  return (
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
  );
}

function MainContent() {
  return (
    <main>
      <p>What</p>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Top Garden Website. All rights reserved.</p>
      <ul>
        <li><a href="#privacy">Privacy Policy</a></li>
        <li><a href="#terms">Terms of Service</a></li>
      </ul>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          <code>HELLLOOOO</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          What am I doing
        </a>
      </header>

      <body>
        <MainContent />
      </body>


      <Footer />
    </div>
  );
}


export default App;
