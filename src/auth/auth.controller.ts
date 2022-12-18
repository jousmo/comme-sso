import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { RoutesTypes, SubRoutesTypes } from './enums/routes.enum';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { GoogleAuthGuard } from './guards/google-auth.guard';

@Controller(RoutesTypes.auth)
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post(SubRoutesTypes.login)
  login(@Request() req) {
    return this.authService.generateJWT(req.user);
  }

  @UseGuards(GoogleAuthGuard)
  @Get(SubRoutesTypes.googleLogin)
  googleLogin() {
    return { msg: 'Google Authentication' };
  }

  @UseGuards(GoogleAuthGuard)
  @Get(SubRoutesTypes.googleRedirect)
  googleRedirect(@Request() req) {
    return this.authService.generateJWT(req.user);
  }
}
