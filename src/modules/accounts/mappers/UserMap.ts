import { classToClass } from 'class-transformer';

import { IUserResponseDTO } from '../dtos/IUserResponseDTO';
import { User } from '../infra/typeorm/entities/User';

class UserMap {
  static toDTO({
    email,
    name,
    username,
    id,
    avatar,
    driver_license,
    avatarUrl,
  }: User): IUserResponseDTO {
    const user = classToClass({
      id,
      name,
      email,
      username,
      avatar,
      driver_license,
      avatarUrl,
    });

    return user;
  }
}

export { UserMap };
