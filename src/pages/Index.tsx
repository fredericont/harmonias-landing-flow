
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ThemeSection from '@/components/ThemeSection';
import ProductSection from '@/components/ProductSection';
import Footer from '@/components/Footer';
import { beerData, wineData, bbqData, rockData } from '@/data/themeData';
import { products } from '@/data/productData';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* Beer Section - Image on right */}
      <ThemeSection 
        title="Cerveja"
        data={beerData}
        imagePosition="right"
        bgColor="bg-[#F5E5FC]/30"
        id="cerveja"
      />
      
      {/* Wine Section - Image on left */}
      <ThemeSection 
        title="Vinhos"
        data={wineData}
        imagePosition="left"
        bgColor="bg-[#F5DEB3]/30"
        id="vinhos"
      />
      
      {/* BBQ Section - Image on right */}
      <ThemeSection 
        title="Churrasco"
        data={bbqData}
        imagePosition="right"
        bgColor="bg-[#F5E5FC]/30"
        id="churrasco"
      />
      
      {/* Rock Section - Image on left */}
      <ThemeSection 
        title="Rock"
        data={rockData}
        imagePosition="left"
        bgColor="bg-[#F5DEB3]/30"
        id="rock"
      />
      
      {/* Products Section */}
      <ProductSection products={products} />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
