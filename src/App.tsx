import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Check if window.scrollTo is available (not in test environments)
    try {
      window.scrollTo(0, 0);
    } catch (error) {
      // Ignore scrollTo errors in test environments
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-background font-mono">
      <ScrollToTop />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 py-12 max-w-5xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
