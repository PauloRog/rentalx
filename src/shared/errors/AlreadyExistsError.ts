import { AppError } from './AppError';

export class AlreadyExistsError extends AppError {
  constructor(type: string) {
    super(`${type} already exists!'`, 401);
  }
}
