import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background font-mono">
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
