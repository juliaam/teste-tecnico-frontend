import { api_base_url } from '@/data/api';

export class CategoryService {
  static async findAllCategories() {
    const res = await fetch(`${api_base_url}category/`);
    const data = await res.json();
    return data;
  }
}
