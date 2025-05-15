
import React from 'react';
import { Youtube, Instagram, Music } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#722F37] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">4 Harmonias</h2>
            <p className="text-sm opacity-80 mt-1">Rock • Churrasco • Cerveja • Vinhos</p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://www.instagram.com/4harmonias" target="_blank" rel="noopener noreferrer" 
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://www.youtube.com/channel/4harmonias" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors">
              <Youtube size={24} />
            </a>
            <a href="https://www.tiktok.com/@4harmonias" target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors">
              <Music size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-white/70 mb-4 md:mb-0">
              © {new Date().getFullYear()} 4 Harmonias. Todos os direitos reservados.
            </div>
            
            <nav>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
                <li><a href="#cerveja" className="text-sm hover:text-[#FFBF00] transition-colors">Cerveja</a></li>
                <li><a href="#vinhos" className="text-sm hover:text-[#FFBF00] transition-colors">Vinhos</a></li>
                <li><a href="#churrasco" className="text-sm hover:text-[#FFBF00] transition-colors">Churrasco</a></li>
                <li><a href="#rock" className="text-sm hover:text-[#FFBF00] transition-colors">Rock</a></li>
                <li><a href="#produtos" className="text-sm hover:text-[#FFBF00] transition-colors">Produtos</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
