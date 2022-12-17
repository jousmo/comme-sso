import * as Joi from 'joi';

export const JoiConfig = Joi.object({
  NODE_ENV: Joi.string().required(),
  PORT: Joi.number().required(),
  GLOBAL_PREFIX: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES_IN: Joi.string().required(),
  JWT_IGNORE_EXPIRATION: Joi.boolean().required(),
});
