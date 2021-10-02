import { Category } from '../model/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesReposity {
  create({ name, description }: ICreateCategoryDTO): void;
  read(): Category[];
  findByName(name: string): Category;
}

export { ICategoriesReposity, ICreateCategoryDTO };
