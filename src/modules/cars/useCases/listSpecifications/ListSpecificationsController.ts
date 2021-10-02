import { Request, Response } from 'express';

import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

class ListSpecificationsController {
  constructor(private listSpecificationsUseCas: ListSpecificationsUseCase) {}

  handle(request: Request, response: Response): Response {
    const specifications = this.listSpecificationsUseCas.execute();

    return response.json(specifications);
  }
}

export { ListSpecificationsController };
