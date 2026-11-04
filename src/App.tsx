import { Routes, Route, useLocation } from 'react-router';
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Experience from '@/pages/Experience';
import Contact from '@/pages/Contact';
import { AnimationProvider } from '@/contexts/AnimationContext';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-background font-mono">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:rounded-sm focus:bg-secondary focus:px-3 focus:py-2 focus:text-sm focus:text-primary"
      >
        Skip to main content
      </a>
      <AnimationProvider>
        <ScrollToTop />
        <Navigation />
        <main
          id="main-content"
          tabIndex={-1}
          className="container mx-auto max-w-5xl px-4 py-12 focus:outline-hidden sm:px-6"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="border-t border-border">
          <div className="container mx-auto max-w-5xl px-4 py-6 font-mono text-xs text-muted-foreground sm:px-6">
            <a
              href="https://github.com/JDup3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              github.com/JDup3
            </a>
          </div>
        </footer>
      </AnimationProvider>
    </div>
  );
}

export default App;
