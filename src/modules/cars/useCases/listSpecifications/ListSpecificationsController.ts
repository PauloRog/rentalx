import { Request, Response } from 'express';

import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

class ListSpecificationsController {
  constructor(private listSpecificationsUseCas: ListSpecificationsUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const specifications = await this.listSpecificationsUseCas.execute();

    return response.json(specifications);
  }
}

export { ListSpecificationsController };
