interface IUserResponseDTO {
  email: string;
  name: string;
  username: string;
  id: string;
  avatar: string;
  driver_license: string;
  avatarUrl(): string;
}

export { IUserResponseDTO };
