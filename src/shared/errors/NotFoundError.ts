import { AppError } from './AppError';

export class NotFoundError extends AppError {
  constructor(type: string) {
    super(`${type} not found!`, 404);
  }
}
