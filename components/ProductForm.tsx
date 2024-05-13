'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { getAllCategories } from '@/stores/categories';
import { createProduct } from '@/stores/products';
import { ICategory } from '../types/Category';
import { IProduct } from '@/types/Product';
import { formatPrice } from '@/utils/formatPrice';
import Input from '@/components/form/Input';
import SelectForm from './form/Select';
import Image from 'next/image';

export function ProductForm() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [formData, setFormData] = useState<IProduct>({
    name: '',
    description: '',
    price: 0,
    image: '',
    idCategory: 0,
  });
  const [file, setFile] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getAllCategories();
        setCategories(data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchData();
  }, []);

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === 'idCategory' || name === 'price' ? +value : value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const url = event.target.result as string;
        setFile(url);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createProduct(formData);
  };

  return (
    <div>
      <p className="text-4xl lg:text-center font-ubuntu">
        Formulário de produto
      </p>
      <div className="flex justify-evenly">
        <form
          className="max-w-sm mt-10 flex flex-col gap-2"
          onSubmit={handleSubmit}
        >
          <Input label="Nome" type="text" name="name" onChange={handleInput} />
          <Input
            label="Descrição"
            type="text"
            name="description"
            onChange={handleInput}
          />
          <Input
            label="Preço"
            name="price"
            type="number"
            onChange={handleInput}
          />
          <label>
            Categorias
            <SelectForm
              className="text-black"
              options={categories.map((category) => ({
                value: category.id,
                label: category.name,
              }))}
              name="idCategory"
              onChange={handleInput}
            />
          </label>
          <Input
            name="image"
            label="Imagem"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <button
            type="submit"
            className="text-black bg-white hover:bg-white-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
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
              alt="Imagem"
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
