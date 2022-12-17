import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { RoutesTypes, SubRoutesTypes } from './enums/routes.enum';
import { Public } from '../auth/decorators/public.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesTypes } from '../auth/enums/roles.enum';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller(RoutesTypes.users)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Get(SubRoutesTypes.public)
  getUserPublic() {
    return this.usersService.getUserPublic();
  }

  @Roles(RolesTypes.Admin)
  @Get(SubRoutesTypes[':uuid'])
  getUserByUUID(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.usersService.getUserByUUID(uuid);
  }
}
