import { Router } from 'express';

import { CreateRentalController } from '@modules/rentals/useCases/createRental/CreateRentalController';
import { DevolutionRentalController } from '@modules/rentals/useCases/devolutionRental/DevolutionRentalController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const rentalRoutes = Router();

const createRentalUserController = new CreateRentalController();
const devolutionRentalUserController = new DevolutionRentalController();

rentalRoutes.post('/', ensureAuthenticated, createRentalUserController.handle);
rentalRoutes.post(
  '/devolution/:id',
  ensureAuthenticated,
  devolutionRentalUserController.handle,
);

export { rentalRoutes };
