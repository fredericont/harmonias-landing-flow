
export interface BeerStyle {
  name: string;
  classification: string;
  flavor: string;
}

export interface WineType {
  type: string;
  occasion: string;
}

export interface BbqCut {
  name: string;
  cookingPoint: string;
  description: string;
}

export interface HistoricShow {
  name: string;
  year: string;
  image: string;
}

export interface ThemeData {
  type: 'beer' | 'wine' | 'bbq' | 'rock';
  subtitle: string;
  image: string;
  description: string;
  styles?: BeerStyle[];
  grapeDescription?: string;
  wineTypes?: WineType[];
  cuts?: BbqCut[];
  historicShows?: HistoricShow[];
}

// Beer Data
export const beerData: ThemeData = {
  type: 'beer',
  subtitle: 'A História da Cerveja no Brasil',
  image: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  description: 'A cerveja chegou ao Brasil com a colonização holandesa no século XVII, mas ganhou popularidade com a chegada da família real portuguesa em 1808. Hoje, o Brasil é o terceiro maior produtor de cerveja do mundo, com um mercado artesanal em expansão que valoriza sabores locais e técnicas tradicionais.',
  styles: [
    { name: 'Pilsen', classification: 'Lager', flavor: 'Leve e refrescante' },
    { name: 'IPA', classification: 'Ale', flavor: 'Amargo e cítrico' },
    { name: 'Stout', classification: 'Ale', flavor: 'Torrado e chocolate' },
    { name: 'Weiss', classification: 'Ale', flavor: 'Frutado e condimentado' },
    { name: 'Porter', classification: 'Ale', flavor: 'Maltado e torrado' },
    { name: 'Sour', classification: 'Wild Ale', flavor: 'Ácido e complexo' },
    { name: 'Red Ale', classification: 'Ale', flavor: 'Caramelo e tostado' },
    { name: 'Belgian Dubbel', classification: 'Ale', flavor: 'Frutas secas e especiarias' },
    { name: 'American Pale Ale', classification: 'Ale', flavor: 'Cítrico e floral' },
    { name: 'Bock', classification: 'Lager', flavor: 'Maltado e encorpado' },
  ],
};

// Wine Data
export const wineData: ThemeData = {
  type: 'wine',
  subtitle: 'A Arte do Vinho',
  image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  description: 'O vinho tem sido parte da cultura humana há mais de 8.000 anos. No Brasil, a tradição vinícola começou com os imigrantes italianos no século XIX, principalmente na Serra Gaúcha. Hoje, os vinhos brasileiros ganham reconhecimento internacional pela qualidade e características únicas do nosso terroir.',
  grapeDescription: 'Existem milhares de variedades de uvas, mas apenas algumas dezenas são amplamente utilizadas na produção de vinhos. Cada tipo de uva imprime características únicas no sabor, aroma e estrutura do vinho.',
  wineTypes: [
    { type: 'Tinto', occasion: 'Carnes vermelhas, massas e queijos maturados' },
    { type: 'Branco', occasion: 'Peixes, frutos do mar e saladas' },
    { type: 'Rosé', occasion: 'Aperitivos, comidas leves e churrasco' },
    { type: 'Espumante', occasion: 'Celebrações, entradas e sobremesas' },
    { type: 'Fortificado', occasion: 'Sobremesas, chocolate e queijos azuis' },
  ],
};

// BBQ Data
export const bbqData: ThemeData = {
  type: 'bbq',
  subtitle: 'A Tradição do Churrasco',
  image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  description: 'O churrasco é parte fundamental da cultura brasileira, especialmente no Sul do país. Da técnica gaúcha do fogo de chão até os diferentes estilos regionais, o Brasil desenvolveu uma verdadeira arte do preparo da carne na brasa, valorizando a qualidade e o respeito pelo tempo de cocção.',
  cuts: [
    { name: 'Picanha', cookingPoint: 'Ao ponto', description: 'Corte triangular com capa de gordura que garante suculência e sabor característico.' },
    { name: 'Ancho', cookingPoint: 'Ao ponto/Mal passado', description: 'Parte do contrafilé com marmoreio intenso e sabor pronunciado.' },
    { name: 'Fraldinha', cookingPoint: 'Ao ponto', description: 'Corte saboroso e macio quando bem preparado, ideal para churrasco.' },
    { name: 'Costela', cookingPoint: 'Bem passada', description: 'Requer cocção lenta para ficar macia e desmanchar.' },
    { name: 'Maminha', cookingPoint: 'Ao ponto', description: 'Corte magro e saboroso, versátil no preparo.' },
    { name: 'Cupim', cookingPoint: 'Bem passado', description: 'Textura única e derrete na boca quando bem preparado.' },
  ],
};

// Rock Data
export const rockData: ThemeData = {
  type: 'rock',
  subtitle: 'A História do Rock',
  image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  description: 'O rock surgiu nos anos 1950 como uma revolução cultural e musical que nunca mais parou. Das raízes do blues e country ao rock progressivo, metal e alternativo, o gênero evoluiu em inúmeras vertentes que influenciam gerações. No Brasil, o rock teve seu boom nos anos 1980 com bandas que misturavam influências internacionais com nossa identidade cultural.',
  historicShows: [
    { name: 'Queen no Rock in Rio', year: '1985', image: 'https://images.unsplash.com/photo-1617388324434-807abd0e9a29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' },
    { name: 'Nirvana Unplugged', year: '1993', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' },
    { name: 'Live Aid', year: '1985', image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' },
    { name: 'Pink Floyd em Veneza', year: '1989', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80' },
    { name: 'Beatles no telhado', year: '1969', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' },
    { name: 'Woodstock', year: '1969', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' },
  ],
};
