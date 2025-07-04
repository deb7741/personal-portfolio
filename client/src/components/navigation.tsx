import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold gradient-text">
            Debjyoti Chowbey
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#about" className="nav-link text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="#skills" className="nav-link text-gray-700 hover:text-blue-600 font-medium">Skills</a>
            <a href="#portfolio" className="nav-link text-gray-700 hover:text-blue-600 font-medium">Portfolio</a>
            <a href="#contact" className="nav-link text-gray-700 hover:text-blue-600 font-medium">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-blue-600">
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#home" onClick={closeMobileMenu} className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#about" onClick={closeMobileMenu} className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#skills" onClick={closeMobileMenu} className="text-gray-700 hover:text-blue-600 font-medium">Skills</a>
              <a href="#portfolio" onClick={closeMobileMenu} className="text-gray-700 hover:text-blue-600 font-medium">Portfolio</a>
              <a href="#contact" onClick={closeMobileMenu} className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
