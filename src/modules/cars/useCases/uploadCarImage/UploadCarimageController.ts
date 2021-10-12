import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UploadCarimageUseCase } from './UploadCarImageUseCase';

interface IFiles {
  filename: string;
}

class UploadCarimageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const images = request.files as IFiles[];
    const uploadCarimageUseCase = container.resolve(UploadCarimageUseCase);
    const images_name = images.map(file => file.filename);

    await uploadCarimageUseCase.execute({
      car_id: id,
      images_name,
    });

    return response.status(201).send();
  }
}

export { UploadCarimageController };
