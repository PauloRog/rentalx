import { SpecificationsRepository } from '../../repositories/SpecificationsRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationsRepository = SpecificationsRepository.getInstace();
const createCategoryUseCase = new CreateSpecificationUseCase(
  specificationsRepository,
);
const createCategoryController = new CreateSpecificationController(
  createCategoryUseCase,
);

export { createCategoryController };
