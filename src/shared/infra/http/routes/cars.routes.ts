import { Router } from 'express';

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { CreateCarSpecficationController } from '@modules/cars/useCases/createCarSpecification/CreateSpecificationController';
import { ListCategoriesController } from '@modules/cars/useCases/listCategories/ListCategoriesController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListCategoriesController();
const createCarSpecficationController = new CreateCarSpecficationController();

carsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle,
);

carsRoutes.get('/', listAvailableCarsController.handle);

carsRoutes.get(
  '/specifications/:id',
  ensureAuthenticated,
  ensureAdmin,
  createCarSpecficationController.handle,
);

export { carsRoutes };
