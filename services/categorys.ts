import { api_base_url } from '@/data/api';
import axios from 'axios';

export class CategoryService {
  static async findAllCategories() {
    const res = await axios.get(`${api_base_url}category/`);
    const data = await res;
    return data;
  }
  static async create(body) {
    const res = await axios.post(`${api_base_url}category/`, body);
    const data = await res;
    return data;
  }
}
