import { SetMetadata } from '@nestjs/common';
import { KeysTypes } from '../enums/keys.enum';

export const IS_PUBLIC_KEY = KeysTypes.isPublic;
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
