import { api_base_url } from '@/data/api';
import axios from 'axios';

export class CategoryService {
  static async findAllCategories() {
    const res = await axios(`${api_base_url}category/`);
    const data = await res;
    return data;
  }
}
