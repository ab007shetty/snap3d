import { Menu, X, Zap } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
          <header className="bg-white/80 backdrop-blur-md border-b border-teal-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                Snap 3D
              </span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-teal-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-teal-600 transition-colors">How It Works</a>
              <a href="#testimonials" className="text-gray-700 hover:text-teal-600 transition-colors">Testimonials</a>
              <a href="#pricing" className="text-gray-700 hover:text-teal-600 transition-colors">Pricing</a>
            </nav>
            
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-teal-600 hover:text-teal-700 transition-colors">Sign In</button>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                Get Started
              </button>
            </div>
            
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-teal-100">
            <div className="px-4 py-2 space-y-2">
              <a href="#features" className="block py-2 text-gray-700 hover:text-teal-600">Features</a>
              <a href="#how-it-works" className="block py-2 text-gray-700 hover:text-teal-600">How It Works</a>
              <a href="#testimonials" className="block py-2 text-gray-700 hover:text-teal-600">Testimonials</a>
              <a href="#pricing" className="block py-2 text-gray-700 hover:text-teal-600">Pricing</a>
              <hr className="border-teal-100" />
              <button className="block w-full text-left py-2 text-teal-600">Sign In</button>
              <button className="block w-full bg-teal-600 text-white py-2 rounded-lg mt-2">Get Started</button>
            </div>
          </div>
        )}
      </header>
  );
}
