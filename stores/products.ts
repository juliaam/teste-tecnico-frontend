import { IProduct } from '@/types/Product';
import { ProductsService } from '../services/products';

export async function getAllProducts() {
  return await ProductsService.findAll();
}
export async function createProduct(body: IProduct) {
  return await ProductsService.create(body);
}
