import { MenuService } from '../services/menu';
import { IMenu } from '@/types/Menu';

export async function getDayTime() {
  return await MenuService.getByDaytime();
}
export async function createMenu(body: IMenu) {
  return await MenuService.create(body);
}
