
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'cerveja' | 'vinho' | 'churrasco' | 'rock';
  link: string;
}

export const products: Product[] = [
  // Cerveja
  {
    id: 1,
    name: 'Kit Degustação de Cervejas Artesanais',
    description: 'Conjunto com 6 cervejas artesanais premiadas de diferentes estilos',
    price: 149.90,
    image: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    category: 'cerveja',
    link: 'https://www.amazon.com.br',
  },
  {
    id: 2,
    name: 'Conjunto de Copos para Cerveja',
    description: 'Kit com 6 copos especiais para diferentes estilos de cerveja',
    price: 189.90,
    image: 'https://images.unsplash.com/photo-1613685303213-1f2ab164c733?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
    category: 'cerveja',
    link: 'https://www.amazon.com.br',
  },
  
  // Vinho
  {
    id: 3,
    name: 'Kit Sommelier Profissional',
    description: 'Conjunto completo com saca-rolhas, aerador, termômetro e mais',
    price: 249.90,
    image: 'https://images.unsplash.com/photo-1584916201218-f4242deb085d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80',
    category: 'vinho',
    link: 'https://www.amazon.com.br',
  },
  {
    id: 4,
    name: 'Taças de Cristal para Vinho Tinto',
    description: 'Conjunto com 4 taças premium de cristal para vinho tinto',
    price: 299.90,
    image: 'https://images.unsplash.com/photo-1561461056-77525e259128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
    category: 'vinho',
    link: 'https://www.amazon.com.br',
  },
  
  // Churrasco
  {
    id: 5,
    name: 'Kit Churrasco Profissional',
    description: 'Conjunto com 10 peças em aço inox e madeira nobre',
    price: 379.90,
    image: 'https://images.unsplash.com/photo-1523986490752-c28064f26be3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    category: 'churrasco',
    link: 'https://www.amazon.com.br',
  },
  {
    id: 6,
    name: 'Churrasqueira Portátil',
    description: 'Churrasqueira compacta a carvão para camping e viagens',
    price: 199.90,
    image: 'https://images.unsplash.com/photo-1534177616066-ef3bcf56e4a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    category: 'churrasco',
    link: 'https://www.amazon.com.br',
  },
  
  // Rock
  {
    id: 7,
    name: 'Vinil Clássico de Rock',
    description: 'Álbum remasterizado em vinil de alta qualidade',
    price: 199.90,
    image: 'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'rock',
    link: 'https://www.amazon.com.br',
  },
  {
    id: 8,
    name: 'Fone de Ouvido Profissional',
    description: 'Fone over-ear com alta definição para apreciar cada detalhe musical',
    price: 599.90,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'rock',
    link: 'https://www.amazon.com.br',
  },
];
