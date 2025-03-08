
import { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2 group">
            <Shield className="w-8 h-8 text-cyber-blue transition-transform duration-300 group-hover:scale-110" />
            <span className="font-bold text-xl text-cyber-dark">HackXtreme</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#missions" className="nav-link text-cyber-dark font-medium">Missions</a>
            <a href="#levels" className="nav-link text-cyber-dark font-medium">Levels</a>
            <a href="#ai-features" className="nav-link text-cyber-dark font-medium">AI Features</a>
            <a href="#learning-modes" className="nav-link text-cyber-dark font-medium">Learning Modes</a>
            <Button className="cyber-button">
              Start Learning
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? 
              <X className="w-6 h-6 text-cyber-dark" /> : 
              <Menu className="w-6 h-6 text-cyber-dark" />
            }
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#missions" className="text-cyber-dark font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Missions</a>
              <a href="#levels" className="text-cyber-dark font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Levels</a>
              <a href="#ai-features" className="text-cyber-dark font-medium py-2" onClick={() => setMobileMenuOpen(false)}>AI Features</a>
              <a href="#learning-modes" className="text-cyber-dark font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Learning Modes</a>
              <Button className="cyber-button w-full">
                Start Learning
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
