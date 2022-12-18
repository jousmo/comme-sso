import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.getUserByEmail(email);

    if (user && user.password === pass) {
      delete user.password;
      return user;
    }

    return null;
  }

  async validateSocialUser(email: string, sub: string): Promise<any> {
    const user = await this.usersService.getUserByEmail(email);

    if (user && user.sub === sub) {
      delete user.password;
      return user;
    }

    return null;
  }

  async generateJWT(user) {
    const payload = { email: user.email, sub: user.uuid, roles: user.roles };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
