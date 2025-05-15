
import React from 'react';
import { ThemeData } from '@/data/themeData';

interface ThemeSectionProps {
  title: string;
  data: ThemeData;
  imagePosition: 'left' | 'right';
  bgColor: string;
  id: string;
}

const ThemeSection: React.FC<ThemeSectionProps> = ({ title, data, imagePosition, bgColor, id }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#222] text-center">{title}</h2>
        
        <div className={`flex flex-col ${imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}>
          {/* Image Column */}
          <div className="w-full md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={data.image} 
                alt={title} 
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
          </div>
          
          {/* Content Column */}
          <div className="w-full md:w-1/2">
            <div className="prose max-w-none">
              <h3 className="text-2xl font-semibold text-[#722F37] mb-4">{data.subtitle}</h3>
              <p className="text-lg text-[#222] mb-8">{data.description}</p>
              
              {/* Render tables or specific content based on the section */}
              {data.type === 'beer' && (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#722F37] text-white">
                        <th className="p-2 text-left">Estilo</th>
                        <th className="p-2 text-left">Classificação</th>
                        <th className="p-2 text-left">Perfil de Sabor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.styles.map((style, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="p-2 border-t">{style.name}</td>
                          <td className="p-2 border-t">{style.classification}</td>
                          <td className="p-2 border-t">{style.flavor}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              
              {data.type === 'wine' && (
                <div>
                  <h4 className="text-xl font-semibold text-[#722F37] mb-3">Tipos de Uvas</h4>
                  <p className="text-lg text-[#222] mb-6">{data.grapeDescription}</p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#722F37] text-white">
                          <th className="p-2 text-left">Tipo</th>
                          <th className="p-2 text-left">Ocasião</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.wineTypes.map((wine, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="p-2 border-t">{wine.type}</td>
                            <td className="p-2 border-t">{wine.occasion}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              
              {data.type === 'bbq' && (
                <div>
                  <h4 className="text-xl font-semibold text-[#722F37] mb-3">Cortes e Pontos</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.cuts.map((cut, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg shadow">
                        <h5 className="font-semibold text-[#B34336]">{cut.name}</h5>
                        <p className="text-sm text-gray-600">Ponto ideal: {cut.cookingPoint}</p>
                        <p className="text-sm">{cut.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {data.type === 'rock' && (
                <div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                    {data.historicShows.map((show, index) => (
                      <div key={index} className="bg-white p-2 rounded-lg shadow-md">
                        <img 
                          src={show.image} 
                          alt={show.name} 
                          className="w-full h-24 object-cover rounded mb-2"
                        />
                        <p className="text-sm font-medium">{show.name}</p>
                        <p className="text-xs text-gray-600">{show.year}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThemeSection;
