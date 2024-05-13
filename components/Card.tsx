import { IProduct } from '@/types/Product';
import Image from 'next/image';

type CardProps = {
  product: IProduct;
};

export default function Card({ product }: CardProps) {
  return (
    <div className=" text-center gap-3 flex flex-col items-center">
      <Image
        alt={product.name}
        src={product.image}
        width={200}
        height={200}
        style={{
          border: '1px solid black',
          borderRadius: '30px',
          display: 'inline-block',
        }}
      />
      <p> {product.name}</p>
      <p> {product.description}</p>
      <p> {product.idCategory}</p>
      <p> R${product.price}</p>
    </div>
  );
}
