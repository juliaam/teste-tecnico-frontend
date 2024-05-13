import { api_base_url } from '@/data/api';
import { IMenu } from '@/types/Menu';
import axios from 'axios';

export class MenuService {
  static async getByDaytime() {
    const res = await axios.get(`${api_base_url}menu/daytime`);
    const data = await res;
    return data;
  }

  static async create(body: IMenu) {
    const res = await axios.post(`${api_base_url}menu/`, body);
    const data = await res;
    return data;
  }
}
