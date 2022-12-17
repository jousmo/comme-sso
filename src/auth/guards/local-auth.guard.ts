import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { StrategiesTypes } from '../enums/strategies.enum';

@Injectable()
export class LocalAuthGuard extends AuthGuard(StrategiesTypes.local) {}
