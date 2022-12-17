import { SetMetadata } from '@nestjs/common';
import { RolesTypes } from '../enums/roles.enum';
import { KeysTypes } from '../enums/keys.enum';

export const ROLES_KEY = KeysTypes.roles;

export const Roles = (...roles: RolesTypes[]) => {
  return SetMetadata(ROLES_KEY, roles);
};
