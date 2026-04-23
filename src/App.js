import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Teams from './pages/Teams';
import Leaders from './pages/Leaders';
import Events from './pages/Events';
import Contact from './pages/Contact';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <nav className="navbar">
                    <div className="nav-container">
                        <div className="logo-section">
                            <span className="kusom-nav">KUSOM</span>
                            <img src="/Images/club_logo.jpeg" alt="IS Club Logo" className="logo-img" />
                            <span className="isclub-nav">IS Club</span>
                        </div>
                        <ul className="nav-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/teams">Teams</Link></li>
                            <li><Link to="/leaders">Leaders</Link></li>
                            <li><Link to="/events">Events</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>
                <div style={{ marginTop: '80px' }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/teams" element={<Teams />} />
                        <Route path="/leaders" element={<Leaders />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <footer className="footer">
                    <p>© 2026 IS Club — Kathmandu University School of Management</p>
                </footer>
            </div>
        </Router>
    );
}
export default App;
