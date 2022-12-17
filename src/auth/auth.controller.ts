import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { RoutesTypes, SubRoutesTypes } from './enums/routes.enum';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';

@Controller(RoutesTypes.auth)
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post(SubRoutesTypes.login)
  login(@Request() req) {
    return this.authService.login(req.user);
  }
}
