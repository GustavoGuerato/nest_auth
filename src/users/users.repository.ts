export interface UsersRepository {
  create(data: CreateUserData): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}

export interface CreateUserData {
  username: string;
  email: string;
  passwordHash: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  passwordHash: string;
}