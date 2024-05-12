import type { Product } from '@/app/types/Product';
import Card from '../Card/Card';

export default function Menu() {
  const cards: Product[] = [
    {
      id: 1,
      name: 'Macarrão',
      image: 'img',
      description: 'Alguma descrição',
      price: 123,
      product_category: ['Massas', 'Carne'],
    },
    {
      id: 2,
      name: 'Macarrão de frango',
      image: 'img',
      description: 'Alguma descrição',
      price: 22,
      product_category: ['Massas', 'Frango'],
    },
    {
      id: 2,
      name: 'Macarrão de frango',
      image: 'img',
      description: 'Alguma descrição',
      price: 22,
      product_category: ['Massas', 'Frango'],
    },
    {
      id: 2,
      name: 'Macarrão de frango',
      image: 'img',
      description: 'Alguma descrição',
      price: 22,
      product_category: ['Massas', 'Frango'],
    },
    {
      id: 2,
      name: 'Macarrão de frango',
      image: 'img',
      description: 'Alguma descrição',
      price: 22,
      product_category: ['Massas', 'Frango'],
    },
    {
      id: 2,
      name: 'Macarrão de frango',
      image: 'img',
      description: 'Alguma descrição',
      price: 22,
      product_category: ['Massas', 'Frango'],
    },
    {
      id: 2,
      name: 'Macarrão de frango',
      image: 'img',
      description: 'Alguma descrição',
      price: 22,
      product_category: ['Massas', 'Frango'],
    },
    {
      id: 2,
      name: 'Macarrão de frango',
      image: 'img',
      description: 'Alguma descrição',
      price: 22,
      product_category: ['Massas', 'Frango'],
    },
    {
      id: 2,
      name: 'Macarrão de frango',
      image: 'img',
      description: 'Alguma descrição',
      price: 22,
      product_category: ['Massas', 'Frango'],
    },
    {
      id: 2,
      name: 'Macarrão de frango',
      image: 'img',
      description: 'Alguma descrição',
      price: 22,
      product_category: ['Massas', 'Frango'],
    },
    {
      id: 2,
      name: 'Macarrão de frango',
      image: 'img',
      description: 'Alguma descrição',
      price: 22,
      product_category: ['Massas', 'Frango'],
    },
    {
      id: 2,
      name: 'Macarrão de frango',
      image: 'img',
      description: 'Alguma descrição',
      price: 22,
      product_category: ['Massas', 'Frango'],
    },

    {
      id: 2,
      name: 'Macarrão de frango',
      image: 'img',
      description: 'Alguma descrição',
      price: 22,
      product_category: ['Massas', 'Frango'],
    },
    {
      id: 2,
      name: 'Macarrão de frango',
      image: 'img',
      description: 'Alguma descrição',
      price: 22,
      product_category: ['Massas', 'Frango'],
    },
  ];

  return (
    <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((product: Product) => {
        return <Card product={product} />;
      })}
    </div>
  );
}
