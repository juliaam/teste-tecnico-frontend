'use client';

import { useEffect, useState } from 'react';
import { getAllProducts } from '@/stores/products';
import Image from 'next/image';
import { Pencil, Trash } from 'lucide-react';
import Link from 'next/link';

export default function Table() {
  const [products, setProducts] = useState([
    {
      id: 0,
      name: '',
      description: '',
      image: '',
      price: 0,
      idCategory: 0,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProducts();
      const products = data.products;

      setProducts(products);
    };

    fetchData();
  }, []);

  return (
    <div className="border border-white/10 ">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-white uppercase bg-red-600 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Produto
            </th>
            <th scope="col" className="px-6 py-3">
              Descrição
            </th>
            <th scope="col" className="px-6 py-3">
              Categoria
            </th>
            <th scope="col" className="px-6 py-3">
              Imagem
            </th>
            <th scope="col" className="px-6 py-3">
              Preço
            </th>
            <th scope="col" className="px-6 py-3">
              Ação
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td className="px-6 py-4">{product.name}</td>
                <td className="px-6 py-4">{product.description}</td>
                <td className="px-6 py-4">{product.idCategory}</td>
                <td className="px-6 py-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={75}
                    height={75}
                  />
                </td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-4">
                    <Link href={`/products/form/${product.id}`}>
                      <button className="border border-white/20 rounded-md p-1.5">
                        <Pencil size={20} />
                      </button>
                    </Link>
                    <button className="border border-white/20 rounded-md p-1.5">
                      <Trash size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
