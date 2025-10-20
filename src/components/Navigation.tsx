import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

function Navigation() {
  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <span className="text-primary font-mono text-lg font-bold">~/</span>
            <span className="text-foreground font-mono text-sm">jdup3.dev</span>
          </div>
          <ul className="flex space-x-1">
            <li>
              <NavLink
                to="/"
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
                home.tsx
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
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
                about.tsx
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
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
                experience.tsx
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
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
                contact.tsx
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
