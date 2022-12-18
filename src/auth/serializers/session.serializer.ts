import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from '../auth.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly authService: AuthService) {
    super();
  }

  serializeUser(user, done): any {
    done(null, user);
  }

  deserializeUser(payload, done): any {
    const { email, sub } = payload;
    const user = this.authService.validateSocialUser(email, sub);

    return user ? done(null, user) : done(null, null);
  }
}
