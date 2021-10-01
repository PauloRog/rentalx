import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoryRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const categoryAlreadyExist = categoryRepository.findByName(name);

  if (categoryAlreadyExist) {
    return response.status(400).json({ error: 'Category already exists!' });
  }

  const category = categoryRepository.create({ name, description });

  return response.status(201).json(category);
});

categoriesRoutes.get('/', (request, response) => {
  const categories = categoryRepository.read();

  response.json(categories);
});

export { categoriesRoutes };
