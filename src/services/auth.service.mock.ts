import { User } from '../entities/user.entity';

export function authServiceMock(_email: string, _password: string): User {
  return {
    name: 'John Doe',
    avatar_url: '',
  };
}
