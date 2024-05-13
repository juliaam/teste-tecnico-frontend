import { ICategory } from '@/types/Category';
import { CategoryService } from '../services/categorys';

export async function getAllCategories() {
  return await CategoryService.findAllCategories();
}

export async function createCategory(body: ICategory) {
  return await CategoryService.create(body);
}
