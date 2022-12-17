import * as Joi from 'joi';

export const JoiConfig = Joi.object({
  NODE_ENV: Joi.string().required(),
  PORT: Joi.number().required(),
  GLOBAL_PREFIX: Joi.string().required(),
});
