'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { getAllCategories } from '@/stores/categories';
import { createProduct } from '@/stores/products';
import { ICategory } from '../types/Category';
import { IProduct } from '@/types/Product';
import Input from '@/components/form/Input';
import Select from 'react-select';

export function ProductForm() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [formData, setFormData] = useState<IProduct>({
    name: '',
    description: '',
    price: 0,
    image: '',
    idCategory: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllCategories();
      setCategories(data.categories);
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

  const setCategoryForm = (category: any) => {
    setFormData((prevState) => ({
      ...prevState,
      idCategory: category.value,
    }));
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
          <div>
            <label>
              Categorias
              <Select
                placeholder="Selecione"
                className="text-black"
                options={categories.map((category) => ({
                  value: category.id,
                  label: category.name,
                }))}
                onChange={setCategoryForm}
              />
            </label>
          </div>
          <Input
            label="Imagem"
            placeholder="Insira o link da imagem"
            type="text"
            name="image"
            onChange={handleInput}
          />
          <button
            type="submit"
            className="text-black bg-white hover:bg-white-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
}
