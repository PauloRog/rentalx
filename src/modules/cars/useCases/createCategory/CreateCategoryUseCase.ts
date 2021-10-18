import { inject, injectable } from 'tsyringe';

import { Category } from '@modules/cars/infra/typeorm/entities/Category';

import { AppError } from '../../../../shared/errors/AppError';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<Category> {
    const categoryAlreadyExist = await this.categoriesRepository.findByName(
      name,
    );

    if (categoryAlreadyExist) {
      throw new AppError('Category already exists!');
    }

    const category = this.categoriesRepository.create({ name, description });

    return category;
  }
}

export { CreateCategoryUseCase };
