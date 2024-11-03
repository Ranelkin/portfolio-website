import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/webdev', label: 'Webentwicklung' },
    { path: '/automation', label: 'Automatisierung' }
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Ranel Karimov</h1>
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`${
                isActive(path) 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'hover:text-blue-600 dark:text-gray-200'
              } transition-colors`}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-6">
          {['Projekte', 'Leistungen', 'Erfahrung', 'Kontakt'].map(item => (
            <a key={item} href={`#${item}`} className="relative hover:text-blue-600 dark:text-gray-200 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-blue-600 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform">{item}</a>
          ))}
          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;