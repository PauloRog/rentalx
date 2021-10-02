import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listSpecificationsController } from '../modules/cars/useCases/listSpecifications';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

specificationsRoutes.get('/', (request, response) => {
  return listSpecificationsController.handle(request, response);
});

export { specificationsRoutes };
