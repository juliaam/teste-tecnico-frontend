import { CategoryService } from '../services/categorys';

export async function getAllCategories() {
  return await CategoryService.findAllCategories();
}
