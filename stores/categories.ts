import { CategoryService } from '../services/categorys';

export async function getAllCategories() {
  return await CategoryService.findAllCategories();
}

export async function createCategory(body) {
  return await CategoryService.create(body);
}
