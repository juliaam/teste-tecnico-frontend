'use client';

import { Plus, Search } from 'lucide-react';
import Link from 'next/link';
import SelectForm from '../form/Select';
import { ChangeEvent, useEffect, useState } from 'react';
import { ICategory } from '@/types/Category';
import { getAllCategories } from '@/stores/categories';

export default function TableHeader() {
  const [categories, setCategories] = useState<ICategory[]>();
  const [categorySearch, setCategoriesSearch] = useState<any>();

  const searchTable = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategoriesSearch(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllCategories();
      const categories = data.categories;

      setCategories(categories);
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-bold"> Produtos </h1>
      <div className="flex gap-3">
        <div>
          <Link href="/menu/form">
            <button className="border border-white/10 rounded-lg p-2 flex items-center gap-2">
              <p> Adicionar cardápio</p>
              <Plus size={18} />
            </button>
          </Link>
        </div>
        <div>
          <Link href="products/form">
            <button className=" border border-white/10 rounded-lg p-2 flex items-center gap-2">
              <p> Adicionar produtos</p>
              <Plus size={18} />
            </button>
          </Link>
        </div>
        <div>
          <SelectForm
            onChange={searchTable}
            options={categories?.map((category) => ({
              value: category.id,
              label: category.name,
            }))}
          />
        </div>
      </div>
    </div>
  );
}
