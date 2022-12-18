import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  environment: process.env.NODE_ENV,
  port: +process.env.PORT,
  globalPrefix: process.env.GLOBAL_PREFIX,
  session: {
    secret: process.env.SESSION_SECRET,
    saveUninitialized: process.env.SESSION_SAVE_UNINITIALIZED === 'true',
    resave: process.env.SESSION_RESAVE === 'true',
    cookieMaxAge: +process.env.SESSION_COOKIE_MAX_AGE,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
    ignoreExpiration: process.env.JWT_IGNORE_EXPIRATION === 'true',
  },
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK,
    scope: JSON.parse(process.env.GOOGLE_PERMISSION_SCOPE),
  },
}));
