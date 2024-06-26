import { api_base_url } from '@/data/api';
import { ICategory } from '@/types/Category';
import axios from 'axios';

export class CategoryService {
  static async findAllCategories() {
    const res = await axios.get(`${api_base_url}category/`);
    const data = await res;
    return data;
  }
  static async create(body: ICategory) {
    const res = await axios.post(`${api_base_url}category/`, body);
    const data = await res;
    return data;
  }
}
