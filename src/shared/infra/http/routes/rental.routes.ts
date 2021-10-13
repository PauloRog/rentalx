import { Router } from 'express';

import { CreateRentalController } from '@modules/rentals/useCases/createRental/CreateRentalController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const rentalRoutes = Router();

const createRentalUserController = new CreateRentalController();

rentalRoutes.post('/', ensureAuthenticated, createRentalUserController.handle);

export { rentalRoutes };
