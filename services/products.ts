import { api_base_url } from '@/data/api';
import axios from 'axios';

const path = 'product';

export class ProductsService {
  static async findAllProducts() {
    const res = await axios(`${api_base_url}${path}/`);
    const data = await res;
    return data;
  }
}
