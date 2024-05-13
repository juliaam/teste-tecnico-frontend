import { api_base_url } from '@/data/api';
import { IProduct } from '@/types/Product';
import axios from 'axios';

const path = 'product';

export class ProductsService {
  static async findAll() {
    const res = await axios.get(`${api_base_url}${path}/`);
    const data = await res;
    return data;
  }

  static async create(body: IProduct) {
    const res = await axios.post(`${api_base_url}${path}/`, body);
    const data = await res;
    return data;
  }
}
