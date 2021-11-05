import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { IUserResponseDTO } from '@modules/accounts/dtos/IUserResponseDTO';
import { UserMap } from '@modules/accounts/mappers/UserMap';
import { AlreadyExistsError } from '@shared/errors/AlreadyExistsError';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    name,
    username,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<IUserResponseDTO> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AlreadyExistsError('User');
    }
    const passwordHash = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      username,
      email,
      password: passwordHash,
      driver_license,
    });

    return UserMap.toDTO(user);
  }
}

export { CreateUserUseCase };
