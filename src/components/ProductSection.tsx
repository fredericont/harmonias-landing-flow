
import React from 'react';
import { Product } from '@/data/productData';

interface ProductSectionProps {
  products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ products }) => {
  return (
    <section id="produtos" className="py-16 md:py-24 bg-[#722F37]/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#222] text-center">Produtos Recomendados</h2>
        <p className="text-lg text-center max-w-2xl mx-auto mb-12 text-gray-700">
          Confira nossa seleção de produtos para aprimorar sua experiência com cerveja, vinho, churrasco e rock
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <a 
              key={product.id} 
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              
              <div className="p-4">
                <div className="inline-block px-2 py-1 rounded text-xs font-medium mb-2" 
                     style={{
                       backgroundColor: 
                         product.category === 'cerveja' ? '#FFBF00' :
                         product.category === 'vinho' ? '#722F37' :
                         product.category === 'churrasco' ? '#B34336' : '#333',
                       color: product.category === 'cerveja' ? '#222' : '#fff'
                     }}>
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </div>
                <h3 className="font-semibold mb-1 text-[#222] line-clamp-2">{product.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2 mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#B34336]">R$ {product.price.toFixed(2)}</span>
                  <span className="text-xs text-gray-500">Comprar ↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
