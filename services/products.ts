import { api_base_url } from '@/data/api';

const path = 'product';

export class ProductsService {
  static async findAllProducts() {
    const res = await fetch(`${api_base_url}${path}/`);
    const data = await res.json();
    return data;
  }
}
