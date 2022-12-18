import * as Joi from 'joi';

export const JoiConfig = Joi.object({
  NODE_ENV: Joi.string().required(),
  PORT: Joi.number().required(),
  GLOBAL_PREFIX: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES_IN: Joi.string().required(),
  JWT_IGNORE_EXPIRATION: Joi.boolean().required(),
  GOOGLE_CLIENT_ID: Joi.string().required(),
  GOOGLE_CLIENT_SECRET: Joi.string().required(),
  GOOGLE_CALLBACK: Joi.string().required(),
  SESSION_SECRET: Joi.string().required(),
  SESSION_SAVE_UNINITIALIZED: Joi.boolean().required(),
  SESSION_RESAVE: Joi.boolean().required(),
  SESSION_COOKIE_MAX_AGE: Joi.number().required(),
  GOOGLE_PERMISSION_SCOPE: Joi.string().required(),
});
