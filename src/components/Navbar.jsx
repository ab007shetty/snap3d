import { Menu, X, Sparkles } from 'lucide-react';
import {Link} from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <header className="bg-white shadow-xl border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                  Snap 3D
                </span>
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">How It Works</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Testimonials</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Pricing</a>
            </nav>
            
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Sign In</button>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all font-medium shadow-sm">
                Get Started
              </button>
            </div>
            
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-2 space-y-2">
              <a href="#features" className="block py-3 text-gray-700 hover:text-blue-600 font-medium">Features</a>
              <a href="#how-it-works" className="block py-3 text-gray-700 hover:text-blue-600 font-medium">How It Works</a>
              <a href="#testimonials" className="block py-3 text-gray-700 hover:text-blue-600 font-medium">Testimonials</a>
              <a href="#pricing" className="block py-3 text-gray-700 hover:text-blue-600 font-medium">Pricing</a>
              <hr className="border-gray-200" />
              <button className="block w-full text-left py-3 text-gray-700 font-medium">Sign In</button>
              <button className="block w-full bg-blue-600 text-white py-3 rounded-lg mt-2 font-medium">Get Started</button>
            </div>
          </div>
        )}
      </header>
  );
}
