import { Router } from 'express';
import multer from 'multer';

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { CreateCarSpecficationController } from '@modules/cars/useCases/createCarSpecification/CreateSpecificationController';
import { ListCategoriesController } from '@modules/cars/useCases/listCategories/ListCategoriesController';
import { UploadCarimageController } from '@modules/cars/useCases/uploadCarImage/UploadCarimageController';

import uploadConfig from '../../../../config/upload';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListCategoriesController();
const createCarSpecficationController = new CreateCarSpecficationController();
const uploadCarimageController = new UploadCarimageController();
const uploadImage = multer(uploadConfig.upload('./tmp/cars'));

carsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle,
);

carsRoutes.get('/', listAvailableCarsController.handle);

carsRoutes.post(
  '/specifications/:id',
  ensureAuthenticated,
  ensureAdmin,
  createCarSpecficationController.handle,
);

carsRoutes.post(
  '/images/:id',
  ensureAuthenticated,
  ensureAdmin,
  uploadImage.array('images'),
  uploadCarimageController.handle,
);

export { carsRoutes };
