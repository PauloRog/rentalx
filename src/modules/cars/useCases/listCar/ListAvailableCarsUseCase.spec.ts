import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listAvailableCarUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory,
    );
  });

  it('should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car One',
      description: 'Description Car',
      daily_rate: 12,
      license_plate: 'APE-1032',
      fine_amount: 20,
      brand: 'isis',
      category_id: 'category id',
    });
    const cars = await listAvailableCarUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car TWO',
      description: 'Description Car',
      daily_rate: 12,
      license_plate: 'APE-1032',
      fine_amount: 20,
      brand: 'isis',
      category_id: 'category id',
    });
    const cars = await listAvailableCarUseCase.execute({
      name: 'Car TWO',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car TWO',
      description: 'Description Car',
      daily_rate: 12,
      license_plate: 'APE-1032',
      fine_amount: 20,
      brand: 'isis',
      category_id: 'category id',
    });
    const cars = await listAvailableCarUseCase.execute({
      brand: 'isis',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by category id', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car TWO',
      description: 'Description Car',
      daily_rate: 12,
      license_plate: 'APE-1032',
      fine_amount: 20,
      brand: 'isis',
      category_id: 'category id',
    });
    const cars = await listAvailableCarUseCase.execute({
      category_id: 'category id',
    });

    expect(cars).toEqual([car]);
  });
});
