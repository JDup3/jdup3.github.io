import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { cn } from '../lib/utils';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'home.tsx' },
    { to: '/about', label: 'about.tsx' },
    { to: '/experience', label: 'experience.tsx' },
    { to: '/contact', label: 'contact.tsx' },
  ];

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <span className="text-primary font-mono text-lg font-bold">~/</span>
            <span className="text-foreground font-mono text-sm">jdup3.dev</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'px-3 py-2 text-sm font-mono transition-all duration-200 rounded-sm',
                      'hover:bg-secondary hover:text-primary',
                      isActive
                        ? 'bg-primary/10 text-primary border-b-2 border-primary'
                        : 'text-muted-foreground'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-sm hover:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 relative flex flex-col justify-center">
              <span
                className={cn(
                  'block h-0.5 w-5 bg-foreground transition-all duration-300',
                  isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
                )}
              />
              <span
                className={cn(
                  'block h-0.5 w-5 bg-foreground transition-all duration-300',
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                )}
              />
              <span
                className={cn(
                  'block h-0.5 w-5 bg-foreground transition-all duration-300',
                  isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            'md:hidden transition-all duration-300 overflow-hidden',
            isMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'
          )}
        >
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'block px-3 py-2 text-sm font-mono transition-all duration-200 rounded-sm',
                      'hover:bg-secondary hover:text-primary',
                      isActive
                        ? 'bg-primary/10 text-primary border-l-2 border-primary'
                        : 'text-muted-foreground'
                    )
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
