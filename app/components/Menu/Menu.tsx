'use client'

import type { Product } from '@/app/types/Product';
import Card from '../Card/Card';
import { ubuntu } from '@/app/styles/fonts';
import { useEffect, useState } from 'react';
import { getDayTime } from '@/app/store/menu';

export default function Menu() {
  const menu = {
    name: 'Cardápio do dia',
  };

  let num = 123
  const cards: Product[] = [
    {
      id: 1,
      name: 'Macarrão',
      image:
        'https://assets.delirec.com/images/tRgRL1d2swS2mSAsVYMtAQkZYIt2/recipe/a5d4732d-3b64-4fa1-811c-b1d7e1fb5c82-Macarr%C3%A3o-com-carne-moida-gallery-0',
      description: 'Alguma descrição',
      price: num.toLocaleString("pt-BR", {style:"currency", currency:"BRL"}),
      product_category: ['Massas', 'Carne'],
    },
    {
      id: 2,
      name: 'Macarrão de frango',
      image:
        'https://assets.delirec.com/images/tRgRL1d2swS2mSAsVYMtAQkZYIt2/recipe/a5d4732d-3b64-4fa1-811c-b1d7e1fb5c82-Macarr%C3%A3o-com-carne-moida-gallery-0',
      description: 'Alguma descrição',
      price: num.toLocaleString("pt-BR", {style:"currency", currency:"BRL"}),
      product_category: ['Massas', 'Carne'],
    },
  ];

  const [menuState, setMenu] = useState<any>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDayTime()

      setMenu(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <p className={`mb-10 lg:mb-20 text-center text-5xl ubuntu-font ${ubuntu.className}`}>
        {menu.name}
      </p>

      <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((product: Product) => {
          return <Card product={product} />;
        })}
      </div>
    </div>
  );
}
