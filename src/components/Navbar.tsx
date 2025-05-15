
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#722F37] py-2 shadow-md' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/c7b2b1e1-8285-4277-8808-ab50ac8bc4f7.png" 
              alt="4 Harmonias Logo" 
              className="h-12 md:h-16" 
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('cerveja')} className="text-white hover:text-[#FFBF00] transition-colors">
              Cerveja
            </button>
            <button onClick={() => scrollToSection('vinhos')} className="text-white hover:text-[#FFBF00] transition-colors">
              Vinhos
            </button>
            <button onClick={() => scrollToSection('churrasco')} className="text-white hover:text-[#FFBF00] transition-colors">
              Churrasco
            </button>
            <button onClick={() => scrollToSection('rock')} className="text-white hover:text-[#FFBF00] transition-colors">
              Rock
            </button>
            <Button 
              onClick={() => scrollToSection('produtos')} 
              className="bg-[#FFBF00] text-[#222] hover:bg-[#FFBF00]/90">
              Produtos
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#722F37] absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('cerveja')} className="text-white py-2 hover:bg-white/10 px-2 rounded text-left">
              Cerveja
            </button>
            <button onClick={() => scrollToSection('vinhos')} className="text-white py-2 hover:bg-white/10 px-2 rounded text-left">
              Vinhos
            </button>
            <button onClick={() => scrollToSection('churrasco')} className="text-white py-2 hover:bg-white/10 px-2 rounded text-left">
              Churrasco
            </button>
            <button onClick={() => scrollToSection('rock')} className="text-white py-2 hover:bg-white/10 px-2 rounded text-left">
              Rock
            </button>
            <Button 
              onClick={() => scrollToSection('produtos')} 
              className="bg-[#FFBF00] text-[#222] hover:bg-[#FFBF00]/90 w-full justify-center">
              Produtos
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
