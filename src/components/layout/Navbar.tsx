import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, Search, CircuitBoard } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getCartCount } = useCart();
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    closeMenu();
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Pro Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Support', path: '/support' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-950/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <Container className="py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <CircuitBoard className="h-8 w-8 text-primary-500" />
            <span className="font-mono font-bold text-2xl text-white">NEXUS</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-primary-400 ${
                  location.pathname === link.path ? 'text-primary-400' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button aria-label="Search" className="text-gray-300 hover:text-primary-400 transition-colors">
              <Search size={20} />
            </button>
            <button aria-label="User account" className="text-gray-300 hover:text-primary-400 transition-colors">
              <User size={20} />
            </button>
            <Link to="/cart" className="relative">
              <ShoppingCart className="text-gray-300 hover:text-primary-400 transition-colors" size={20} />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-500 text-dark-950 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link to="/cart" className="relative">
              <ShoppingCart className="text-gray-300" size={20} />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-500 text-dark-950 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
            <button 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-primary-400 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-dark-950 z-40 flex flex-col">
          <Container className="py-6 flex-1 overflow-auto">
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xl font-medium transition-colors hover:text-primary-400 ${
                    location.pathname === link.path ? 'text-primary-400' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-dark-800 flex space-x-4">
                <Button variant="secondary" size="sm" icon={<Search size={16} />}>
                  Search
                </Button>
                <Button variant="secondary" size="sm" icon={<User size={16} />}>
                  Account
                </Button>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;