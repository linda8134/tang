import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            Particle
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-gray-300 hover:text-white">
              Products
            </Link>
            <Link to="/developers" className="text-gray-300 hover:text-white">
              Developers
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
            <button className="btn-primary">
              Launch App
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {/* Add hamburger icon here */}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header; 