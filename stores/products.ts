import { ProductsService } from '../services/products';

export async function getAllProducts() {
  return await ProductsService.findAllProducts();
}
