import { NavLink } from 'react-router';
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
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-lg font-bold text-primary">~/</span>
            <span className="font-mono text-sm text-foreground">jdup3.dev</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden space-x-1 md:flex">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'rounded-sm px-3 py-2 font-mono text-sm transition-all duration-200',
                      'hover:bg-secondary hover:text-primary',
                      isActive
                        ? 'border-b-2 border-primary bg-primary/10 text-primary'
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
            className="rounded-sm p-2 transition-colors hover:bg-secondary md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative flex h-5 w-5 flex-col justify-center">
              <span
                className={cn(
                  'block h-0.5 w-5 bg-foreground transition-all duration-300',
                  isMenuOpen ? 'translate-y-0.5 rotate-45' : '-translate-y-1'
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
                  isMenuOpen ? '-translate-y-0.5 -rotate-45' : 'translate-y-1'
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            'overflow-hidden transition-all duration-300 md:hidden',
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
                      'block rounded-sm px-3 py-2 font-mono text-sm transition-all duration-200',
                      'hover:bg-secondary hover:text-primary',
                      isActive
                        ? 'border-l-2 border-primary bg-primary/10 text-primary'
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
