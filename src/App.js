import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Contact from './pages/Contact';
import './App.css';

function App() {
    const location = useLocation();

    const pageVariants = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit:    { opacity: 0, y: -10 }
    };

    const pageTransition = {
        duration: 0.25,
        ease: "easeInOut"
    };

    return (
        <div>
            <NavBar />
            <div style={{ marginTop: '0px' }}>
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={
                            <motion.div
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={pageVariants}
                                transition={pageTransition}
                            >
                                <Home />
                            </motion.div>
                        } />
                        <Route path="/about" element={
                            <motion.div
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={pageVariants}
                                transition={pageTransition}
                            >
                                <About />
                            </motion.div>
                        } />
                        <Route path="/events" element={
                            <motion.div
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={pageVariants}
                                transition={pageTransition}
                            >
                                <Events />
                            </motion.div>
                        } />
                        <Route path="/contact" element={
                            <motion.div
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={pageVariants}
                                transition={pageTransition}
                            >
                                <Contact />
                            </motion.div>
                        } />
                    </Routes>
                </AnimatePresence>
            </div>
            <footer className="footer">
                <p>© 2026 IS Club — Kathmandu University School of Management</p>
            </footer>
        </div>
    );
}

function NavBar() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <Link to="/" className="logo-link" onClick={closeMenu}>
                        <div className="logo-section">
                            <span className="kusom-nav">KUSOM</span>
                            <img src="/Images/club_logo.jpeg" alt="IS Club Logo" className="logo-img" />
                            <span className="isclub-nav">IS Club</span>
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <ul className="nav-links">
                        <li><Link to="/"       className={location.pathname === '/'       ? 'active' : ''}>Home</Link></li>
                        <li><Link to="/about"  className={location.pathname === '/about'  ? 'active' : ''}>About Us</Link></li>
                        <li><Link to="/events" className={location.pathname === '/events' ? 'active' : ''}>Events</Link></li>
                        <li><Link to="/contact"className={location.pathname === '/contact'? 'active' : ''}>Contact</Link></li>
                    </ul>

                    {/* Hamburger */}
                    <button
                        className={`hamburger ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(o => !o)}
                        aria-label="Toggle menu"
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </nav>

            {/* Mobile drawer */}
            <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
                <Link to="/"        className={location.pathname === '/'       ? 'active' : ''} onClick={closeMenu}>Home</Link>
                <Link to="/about"   className={location.pathname === '/about'  ? 'active' : ''} onClick={closeMenu}>About Us</Link>
                <Link to="/events"  className={location.pathname === '/events' ? 'active' : ''} onClick={closeMenu}>Events</Link>
                <Link to="/contact" className={location.pathname === '/contact'? 'active' : ''} onClick={closeMenu}>Contact</Link>
            </div>
        </>
    );
}

function AppWrapper() {
    return (
        <Router>
            <App />
        </Router>
    );
}

export default AppWrapper;