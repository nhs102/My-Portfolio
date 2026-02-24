import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import resumePdf from '../assets/files/Shawn Resume (Platform).pdf';

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path 
      ? "text-blue-400 font-semibold" 
      : "text-gray-400 hover:text-white transition-colors";
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#050b14]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-extrabold text-white tracking-tighter">
              SHAWN<span className="text-blue-500">.</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/about" className={isActive('/about')}>About</Link>
            <Link to="/resume" className={isActive('/resume')}>Resume</Link>
            <Link to="/projects" className={isActive('/projects')}>Projects</Link>
            <Link to="/skills" className={isActive('/skills')}>Skills</Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href={resumePdf}
              download="Shawn_Nam_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors border border-white/10"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <Link 
              to="/contact" 
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md shadow-blue-500/20"
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#050b14] border-b border-white/10 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-xl">
            <Link to="/" onClick={toggleMobileMenu} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/')}`}>Home</Link>
            <Link to="/about" onClick={toggleMobileMenu} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about')}`}>About</Link>
            <Link to="/resume" onClick={toggleMobileMenu} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/resume')}`}>Resume</Link>
            <Link to="/projects" onClick={toggleMobileMenu} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/projects')}`}>Projects</Link>
            <Link to="/skills" onClick={toggleMobileMenu} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/skills')}`}>Skills</Link>
            
            <div className="pt-4 flex flex-col gap-3">
              <a 
                href={resumePdf}
                download="Shawn_Nam_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors border border-white/10"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <Link 
                to="/contact" 
                onClick={toggleMobileMenu}
                className="block w-full text-center px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md shadow-blue-500/20"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
