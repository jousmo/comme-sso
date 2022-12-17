import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import config from './config/env.config';
import { JoiConfig } from './config/joi.config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      validationSchema: JoiConfig,
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
