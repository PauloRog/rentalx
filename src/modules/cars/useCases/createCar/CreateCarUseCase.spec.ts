import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '@shared/errors/AppError';

import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('Create Car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it('should be able to create a new car', async () => {
    await createCarUseCase.execute({
      name: 'Name Car',
      description: 'Description Car',
      daily_rate: 12,
      license_plate: 'License Plate',
      fine_amount: 20,
      brand: 'isis',
      category_id: 'category id',
    });
  });

  it('should not be able to create a car with exists license plate', () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: 'Name Car',
        description: 'Description Car',
        daily_rate: 12,
        license_plate: 'APE-1032',
        fine_amount: 20,
        brand: 'isis',
        category_id: 'category id',
      });

      await createCarUseCase.execute({
        name: 'Name Car',
        description: 'Description Car',
        daily_rate: 12,
        license_plate: 'APE-1032',
        fine_amount: 20,
        brand: 'isis',
        category_id: 'category id',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to create a car with available true by default', async () => {
    const car = await createCarUseCase.execute({
      name: 'Name Car',
      description: 'Description Car',
      daily_rate: 12,
      license_plate: 'APE-1032',
      fine_amount: 20,
      brand: 'isis',
      category_id: 'category id',
    });

    expect(car.available).toBe(true);
  });
});
