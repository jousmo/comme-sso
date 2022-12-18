import * as session from 'express-session';
import * as passport from 'passport';
import { NestFactory } from '@nestjs/core';
import { ConfigType } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import config from './config/env.config';

(async () => {
  const app = await NestFactory.create(AppModule);
  const {
    globalPrefix,
    port,
    session: { secret, saveUninitialized, resave, cookieMaxAge },
  }: ConfigType<typeof config> = app.get(config.KEY);

  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.use(
    session({
      secret,
      saveUninitialized,
      resave,
      cookie: {
        maxAge: cookieMaxAge,
      },
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(port);
})();
