import { registerAs } from '@nestjs/config';
import * as process from 'process';

export default registerAs('config', () => ({
  environment: process.env.NODE_ENV,
  port: +process.env.PORT,
  globalPrefix: process.env.GLOBAL_PREFIX,
}));
