import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      uuid: '44833f3a-20d0-4542-982a-fe59dfb8a0d4',
      email: 'pepito@test.com',
      password: '12345',
      roles: ['admin'],
      sub: null,
    },
    {
      uuid: 'fdf628db-924c-45fc-8285-f6d46af93747',
      email: 'maria@test.com',
      password: '54321',
      roles: ['user'],
      sub: null,
    },
    {
      uuid: 'd9ab9ec2-c448-44f9-b2f9-e1c466da56e7',
      email: 'jose.uscanga.molina@gmail.com',
      password: 'null',
      roles: ['admin'],
      sub: '105992103664346905979',
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
