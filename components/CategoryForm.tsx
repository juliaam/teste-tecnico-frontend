'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { createCategory, getAllCategories } from '@/stores/categories';
import { ICategory } from '../types/Category';
import Input from '@/components/form/Input';
import { CategoryService } from '@/services/categorys';

export function CategoryForm() {
  const [category, setCategories] = useState<ICategory[]>([]);
  const [formData, setFormData] = useState<CategoryService>({ name: '' });

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
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createCategory(formData);
  };

  return (
    <div>
      <p className="text-4xl lg:text-center font-ubuntu">
        Formulário de categoria
      </p>
      <div className="flex justify-evenly">
        <form
          className="max-w-sm mt-10 flex flex-col gap-2"
          onSubmit={handleSubmit}
        >
          <Input label="Nome" type="text" name="name" onChange={handleInput} />
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
