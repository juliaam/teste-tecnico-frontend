'use client';

import React, { ChangeEvent, useState } from 'react';
import { createCategory } from '@/stores/categories';

import Input from '@/components/form/Input';

export function CategoryForm() {
  const [formData, setFormData] = useState({ name: '' });

  const handleInput = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(() => ({
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
