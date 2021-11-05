import { AppError } from './AppError';

export class IncorrectEmailOrPasswordError extends AppError {
  constructor() {
    super('Incorrect email or password', 401);
  }
}
