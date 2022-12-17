import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { RoutesTypes, SubRoutesTypes } from './enums/routes.enum';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Public } from '../auth/decorators/public.decorator';

@UseGuards(JwtAuthGuard)
@Controller(RoutesTypes.users)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Get(SubRoutesTypes.public)
  getUserPublic() {
    return this.usersService.getUserPublic();
  }

  @Get(SubRoutesTypes[':uuid'])
  getUserByUUID(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return this.usersService.getUserByUUID(uuid);
  }
}
