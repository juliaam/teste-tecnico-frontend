import { api_base_url } from '@/data/api';

export class MenuService {
  static async getMenuByDaytime() {
    const res = await fetch(`${api_base_url}menu/daytime`);
    const data = await res.json();
    return data;
  }
}
