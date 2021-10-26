import { ICreateUserTokenDTO } from '../dtos/ICreateUserTokenDTO';
import { UserToken } from '../infra/typeorm/entities/UserToken';

interface IUserTokensRepository {
  create({
    user_id,
    expires_date,
    refresh_token,
  }: ICreateUserTokenDTO): Promise<UserToken>;
  findByRefreshToken(
    user_id: string,
    refresh_token: string,
  ): Promise<UserToken>;
  deleteById(id: string): Promise<void>;
}

export { IUserTokensRepository };
