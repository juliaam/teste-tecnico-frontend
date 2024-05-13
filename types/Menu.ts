import { IProduct } from './Product';

export interface IMenu {
  id: number;
  name: string;
  createdAt: string;
  daytime: string;
  products?: Array<IProduct>;
}
