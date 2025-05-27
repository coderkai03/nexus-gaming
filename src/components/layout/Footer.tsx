import React from 'react';
import { Link } from 'react-router-dom';
import { CircuitBoard, Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import Container from '../ui/Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <CircuitBoard className="h-8 w-8 text-primary-500" />
              <span className="font-mono font-bold text-2xl text-white">NEXUS</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Elevating your gaming experience with precision-engineered peripherals designed for peak performance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-mono font-bold text-white mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/shop?category=keyboard" className="text-gray-400 hover:text-primary-400 transition-colors">Keyboards</Link></li>
              <li><Link to="/shop?category=mouse" className="text-gray-400 hover:text-primary-400 transition-colors">Mice</Link></li>
              <li><Link to="/shop?category=headset" className="text-gray-400 hover:text-primary-400 transition-colors">Headsets</Link></li>
              <li><Link to="/shop?category=accessory" className="text-gray-400 hover:text-primary-400 transition-colors">Accessories</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-primary-400 transition-colors">All Products</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-primary-400 transition-colors">Blog</Link></li>
              {/* <li><Link to="/gallery" className="text-gray-400 hover:text-primary-400 transition-colors">Pro Gallery</Link></li> */}
              <li><Link to="/careers" className="text-gray-400 hover:text-primary-400 transition-colors">Careers</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-primary-400 transition-colors">Support</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail size={18} className="text-primary-500 mr-2" />
                <a href="mailto:support@nexus.com" className="text-gray-400 hover:text-primary-400 transition-colors">support@nexus.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary-500 mr-2" />
                <a href="tel:1-800-NEXUS" className="text-gray-400 hover:text-primary-400 transition-colors">1-800-NEXUS</a>
              </li>
              <li className="text-gray-400 mt-4">
                Mon-Fri: 9am - 6pm EST<br />
                Sat: 10am - 4pm EST<br />
                Sun: Closed
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; 2025 NEXUS Technologies. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mb-4 md:mb-0">
              Made with <span role="img" aria-label="love">❤️</span> by <a href="https://seopraxis.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-500 transition-colors">SEO Praxis</a>
            </p>
            {/* <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-500 hover:text-primary-400 transition-colors text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-500 hover:text-primary-400 transition-colors text-sm">Terms of Service</Link>
              <Link to="/shipping" className="text-gray-500 hover:text-primary-400 transition-colors text-sm">Shipping Policy</Link>
            </div> */}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;