import { Product } from '@/app/types/Product';
import Image from 'next/image';

type CardProps = {
  product: Product;
};

export default function Card({ product }: CardProps) {
  return (
    <div className="container bg-red-500 p-7 text-center">
      <div> Imagem </div>
      <p> {product.name}</p>
      <p> {product.product_category}</p>
      <p>{product.price.toString()}</p>
    </div>
  );
}
