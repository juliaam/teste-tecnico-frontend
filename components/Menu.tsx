'use client';

import Card from './Card';
import { ubuntu } from '@/styles/fonts';
import { useEffect, useState } from 'react';
import { getDayTime } from '@/stores/menu';

export default function Menu() {
  const [menu, setMenu] = useState({
    id: 0,
    name: '',
    createdAt: '',
    daytime: '',
  });
  const [cards, setCards] = useState([
    {
      id: 0,
      name: '',
      image: '',
      description: '',
      price: '',
      idCategory: 0,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDayTime();
      const menu = data.menu;
      const { products, ...rest } = menu;

      setMenu(rest);
      setCards(products);
    };

    fetchData();
  }, []);

  return (
    <div>
      <p
        className={`mb-10 lg:mb-20 text-center text-5xl ubuntu-font ${ubuntu.className}`}
      >
        {menu.name}
      </p>

      <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((product) => {
          return <Card product={product} />;
        })}
      </div>
    </div>
  );
}
