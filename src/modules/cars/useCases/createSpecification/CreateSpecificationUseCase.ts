import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationRepository: ISpecificationsRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const specificationAlreadyExist =
      this.specificationRepository.findByName(name);

    if (specificationAlreadyExist) {
      throw new AppError('Category already exists!', 403);
    }

    await this.specificationRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
