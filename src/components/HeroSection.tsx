
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToContent = () => {
    document.getElementById('cerveja')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: "url('/lovable-uploads/9251a0c2-8844-4c74-b448-a561e78f67b1.png')" }}
      ></div>
      
      {/* Dark Overlay - using a stronger overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mx-auto w-64 md:w-80 mb-8">
          <img 
            src="/lovable-uploads/c7b2b1e1-8285-4277-8808-ab50ac8bc4f7.png" 
            alt="4 Harmonias Logo" 
            className="w-full" 
          />
        </div>
        
        <p className="text-xl md:text-2xl mb-8">
          Um canal sobre as melhores harmonias da vida: 
          <span className="block mt-2">
            <span className="font-semibold">Rock</span> • 
            <span className="font-semibold"> Churrasco</span> • 
            <span className="font-semibold"> Cerveja</span> • 
            <span className="font-semibold"> Vinhos</span>
          </span>
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <a href="https://www.youtube.com/channel/4harmonias" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#FFBF00] hover:bg-[#FFBF00]/90 text-[#222] font-semibold px-8 py-6 text-lg">
              Inscreva-se no Canal
            </Button>
          </a>
          <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg" onClick={scrollToContent}>
            Conheça Mais
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 w-full flex justify-center animate-bounce">
        <Button variant="ghost" onClick={scrollToContent} className="text-white hover:bg-white/10">
          <ChevronDown size={32} />
        </Button>
      </div>
      
      <div className="hidden md:block absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-gradient-to-br from-[#FFBF00] to-[#B34336] opacity-20 blur-3xl"></div>
      <div className="hidden md:block absolute -top-12 -right-12 w-64 h-64 rounded-full bg-gradient-to-br from-[#F5DEB3] to-[#722F37] opacity-20 blur-3xl"></div>
    </div>
  );
};

export default HeroSection;
