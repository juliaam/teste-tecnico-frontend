'use client';
import { ubuntu } from '@/styles/fonts';
import Input from '@/components/form/Input';
import { ChangeEvent, useEffect, useState } from 'react';
import { getAllCategories } from '@/stores/categories';
import { ICategory } from '../types/Category';
import Image from 'next/image';
import Select from 'react-select';
import { IProduct } from '@/types/Product';
import { formatPrice } from '@/utils/formatPrice';
import { createProduct } from '@/stores/products';
import SelectForm from './form/Select';

export function ProductForm() {
  const [categories, setCategorys] = useState<ICategory[]>([]);
  const [price, setPrice] = useState<any>();
  const [formData, setFormData] = useState<IProduct[]>([
    {
      name: '',
      description: '',
      price: 0,
      image: '',
      idCategory: 0,
    },
  ]);
  const [file, setFile] = useState();

  const handleInput = (e: ChangeEvent<HTMLInputElement> | any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    if (fieldName === 'price') {
      setPrice(formatPrice(price));
    }

    if (fieldName === 'file') {
      if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const buffer = event.target.result as ArrayBuffer;
          // Make the transformation on the buffer here
          const transformedBuffer = transformImage(buffer);
          const transformedBlob = new Blob([transformedBuffer], {
            type: 'image/jpeg',
          });
          const transformedUrl = URL.createObjectURL(transformedBlob);
          setFile(transformedUrl);
        };
        reader.readAsArrayBuffer(e.target.files[0]);
      }
    }

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    const product = await createProduct(formData);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllCategories();
      const categories = data.categories;
      console.log(categories);

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
        <form className="max-w-sm mt-10 flex flex-col gap-2" action={submit}>
          <Input label="Nome" name="name" onChange={handleInput} />
          <Input label="Descrição" name="descrition" onChange={handleInput} />
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
            onChange={handleInput}
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
