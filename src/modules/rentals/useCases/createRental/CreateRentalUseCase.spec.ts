import { RentalsRepositoryInMemory } from '@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory';
import { DayjsDateProvider } from '@shared/container/providers/DateProvider/implementations/DayjsDateProvider';
import { AppError } from '@shared/errors/AppError';

import { CreateRentalUseCase } from './CreateRentalUseCase';

let createRentalUseCase: CreateRentalUseCase;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let dayjsDateProvider: DayjsDateProvider;

describe('Create Rental', () => {
  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    dayjsDateProvider = new DayjsDateProvider();
    createRentalUseCase = new CreateRentalUseCase(
      rentalsRepositoryInMemory,
      dayjsDateProvider,
    );
  });

  it('Should be able to create a new rental', async () => {
    const rental = await createRentalUseCase.execute({
      user_id: '123',
      car_id: '123',
      expected_return_date: new Date(),
    });

    expect(rental).toHaveProperty('id');
  });

  it('Should not be able to create a new rental if another open to the same user', async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: '123',
        car_id: '123',
        expected_return_date: new Date(),
      });

      await createRentalUseCase.execute({
        user_id: '123',
        car_id: '123',
        expected_return_date: new Date(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to create a new rental if another open to the same car', async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: '321',
        car_id: '123',
        expected_return_date: new Date(),
      });

      await createRentalUseCase.execute({
        user_id: '123',
        car_id: '123',
        expected_return_date: new Date(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
