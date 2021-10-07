import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRespository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email or password incorrect!', 401);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Email or passwor incorrect!', 401);
    }

    const token = sign({}, '4c4d7423d3e26b06336e6a945c1b1a35', {
      subject: user.id,
      expiresIn: '1d',
    });
    const tokenResponse: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return tokenResponse;
  }
}

export { AuthenticateUserUseCase };
