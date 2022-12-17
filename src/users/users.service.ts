import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      uuid: '44833f3a-20d0-4542-982a-fe59dfb8a0d4',
      email: 'pepito@test.com',
      password: '12345',
    },
    {
      uuid: 'fdf628db-924c-45fc-8285-f6d46af93747',
      email: 'maria@test.com',
      password: '54321',
    },
  ];

  private readonly userPublic = [
    {
      uuid: '44833f3a-20d0-4542-982a-fe59dfb8a0d4',
      email: 'public@test.com',
      name: 'public',
    },
  ];
  getUserByUUID(uuid: string) {
    return this.users.find((user) => user.uuid === uuid);
  }

  getUserByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }

  getUserPublic() {
    return this.userPublic;
  }
}
