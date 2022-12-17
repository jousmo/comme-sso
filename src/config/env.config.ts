import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  environment: process.env.NODE_ENV,
  port: +process.env.PORT,
  globalPrefix: process.env.GLOBAL_PREFIX,
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
    ignoreExpiration: process.env.JWT_IGNORE_EXPIRATION === 'true',
  },
}));
