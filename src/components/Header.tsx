import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path 
      ? "text-blue-400 font-semibold" 
      : "text-gray-400 hover:text-white transition-colors";
  };

  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-extrabold text-white tracking-tighter">
              SHAWN<span className="text-blue-500">.</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/about" className={isActive('/about')}>About</Link>
            <Link to="/resume" className={isActive('/resume')}>Resume</Link>
            <Link to="/projects" className={isActive('/projects')}>Projects</Link>
            <Link to="/skills" className={isActive('/skills')}>Skills</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
          </nav>
          <div className="hidden md:flex">
            <Link 
              to="/contact" 
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md shadow-blue-500/20"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
