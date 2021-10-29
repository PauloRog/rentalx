import { inject, injectable } from 'tsyringe';

import { CarImagesRepository } from '@modules/cars/infra/typeorm/repositories/CarImagesRepository';
import { IStorageProvider } from '@shared/container/providers/StorageProvider/IStorageProvider';

interface IRequest {
  car_id: string;
  images_name: string[];
}

@injectable()
class UploadCarImageUseCase {
  constructor(
    @inject('CarImagesRepository')
    private carImagesRepository: CarImagesRepository,
    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  async execute({ car_id, images_name }: IRequest): Promise<void> {
    images_name.map(async image => {
      await this.carImagesRepository.create(car_id, image);
      await this.storageProvider.save(image, 'cars');
    });
  }
}

export { UploadCarImageUseCase };
