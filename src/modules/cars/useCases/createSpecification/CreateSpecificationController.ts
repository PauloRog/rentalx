import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    const createSpecificationUseCase = container.resolve(
      CreateSpecificationUseCase,
    );

    const specification = await createSpecificationUseCase.execute({
      name,
      description,
    });

    delete specification.created_at;

    return response.status(201).json(specification);
  }
}

export { CreateSpecificationController };
