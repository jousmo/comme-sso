import { Profile, Strategy } from 'passport-google-oauth20';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from '../../config/env.config';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(config.KEY)
    private readonly configService: ConfigType<typeof config>,
    private readonly authService: AuthService,
  ) {
    super({
      clientID: configService.google.clientID,
      clientSecret: configService.google.clientSecret,
      callbackURL: configService.google.callbackURL,
      scope: configService.google.scope,
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const {
      id,
      emails: { 0: email },
    } = profile;
    const user = await this.authService.validateSocialUser(email.value, id);
    if (!user) throw new UnauthorizedException();

    return user;
  }
}
