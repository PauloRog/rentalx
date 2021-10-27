import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ResetPasswordUseCase } from './ResetPasswordUseCase';

class ResetPasswordController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { token } = request.query;
    const { password } = request.body;
    const resetPasswordUserUseCase = container.resolve(ResetPasswordUseCase);

    await resetPasswordUserUseCase.execute({ token: String(token), password });

    return response.send();
  }
}

export { ResetPasswordController };
