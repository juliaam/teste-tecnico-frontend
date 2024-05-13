'use client';

import { ubuntu } from '@/styles/fonts';
import Input from './form/Input';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { createMenu } from '@/stores/menu';
import Select from 'react-select';
import { getAllProducts } from '@/stores/products';
import { IProduct } from '@/types/Product';

export default function MenuForm() {
  const [products, setProducts] = useState<IProduct[]>();
  const [formData, setFormData] = useState({
    name: '',
    daytime: 'night',
    products: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllProducts();
      const products = data.products;

      setProducts(products);
    };

    fetchData();
  }, []);

  const setProductsForm = (products) => {
    setFormData((prevState) => ({
      ...prevState,
      products: products.map((product) => product.value),
    }));
  };

  const setDaytimeForm = (daytime: { value: string; label: string }) => {
    setFormData((prevState) => ({
      ...prevState,
      daytime: daytime.value,
    }));
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement> | any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));

    createMenu(formData);
  };

  const submit = async (e) => {
    e.preventDefault();

    const menu = await createMenu(formData);
  };

  return (
    <div>
      <p className={`${ubuntu.className} text-4xl text-center`}>
        Formulário de cardápio
      </p>

      <form
        className="justify-center mt-10 flex flex-col gap-2"
        onSubmit={submit}
      >
        <Input label="Nome" name="name" onChange={handleInput} />
        <label>
          Horário
          <Select
            className=" text-black"
            placeholder="Selecione..."
            options={[
              { label: 'Noturno', value: 'night' },
              { label: 'Diurno', value: 'day' },
            ]}
            onChange={setDaytimeForm}
          />
        </label>
        <label>
          Produtos
          <Select
            className=" text-black block"
            name="Produtos"
            options={products?.map((product) => ({
              label: product.name,
              value: product.id,
            }))}
            isMulti
            onChange={setProductsForm}
          />
        </label>

        <button
          type="submit"
          className="text-black bg-white hover:bg-white-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Confirmar
        </button>
      </form>
    </div>
  );
}
