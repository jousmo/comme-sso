import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { RolesTypes } from '../enums/roles.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<RolesTypes[]>(
      ROLES_KEY,
      context.getHandler(),
    );

    if (!roles) return true;

    const { user } = context.switchToHttp().getRequest();

    return roles.some((role) => user.roles?.includes(role));
  }
}
