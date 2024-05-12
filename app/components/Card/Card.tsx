import { Product } from '@/app/types/Product';
import Image from 'next/image';

type CardProps = {
  product: Product;
};

export default function Card({ product }: CardProps) {
  return (
    <div className="p-5 text-center gap-3 flex flex-col items-center">
      <Image alt={product.name} src={product.image} width={200} height={200} style={{ border: '1px solid black', borderRadius: '30px', display: 'inline-block' }}/>
      <p> {product.name}</p>
      <p> {product.product_category}</p>
      <p>{product.price}</p>
    </div>
  );
}
