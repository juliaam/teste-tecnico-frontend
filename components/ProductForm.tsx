'use client';
import { ubuntu } from '@/styles/fonts';
import Input from '@/components/form/Input';
import { useEffect, useState } from 'react';
import { getAllCategories } from '@/stores/categories';
import Select from './form/Select';
import { Category } from '../types/Category';
import Image from 'next/image';

export function ProductForm() {
  const [categories, setCategorys] = useState<Category[]>([]);

  const [file, setFile] = useState();

  function handleChange(e: any) {
    if (e.target.files && e.target.files[0]) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCategories();
      const categories = data.categories;

      setCategorys(categories);
    };

    fetchData();
  }, []);

  return (
    <div>
      <p className={`${ubuntu.className} text-4xl lg:text-center`}>
        Formulário de produto
      </p>
      <div className="flex justify-evenly">
        <form className="max-w-sm mt-10 flex flex-col gap-2">
          <Input label="Nome" />
          <Input label="Descrição" />
          <Input label="Preço" />

          <Select
            label="Categorias"
            options={categories.map((category) => ({
              value: category.id,
              label: category.name,
            }))}
          />
          <Input
            label="Imagem"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="text-black bg-white hover:bg-white-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Confirmar
          </button>
        </form>
        <div className="mt-10">
          <p>Preview de imagem:</p>
          {file ? (
            <Image
              className="border border-white/10 rounded-md"
              src={file}
              alt="image"
              width={400}
              height={400}
            />
          ) : (
            <div>Escolha uma imagem para preview</div>
          )}
        </div>
      </div>
    </div>
  );
}
