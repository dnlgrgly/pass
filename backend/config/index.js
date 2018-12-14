const joi = require("joi");

const envSchema = joi.attempt(
  process.env,
  joi
    .object({
      PORT: joi
        .number()
        .integer()
        .min(0)
        .max(65535),
      JWT_SECRET: joi
        .string()
        .min(6)
        .required(),
      DB_URI: joi
        .string()
        .uri({ scheme: "mongodb" })
        .required(),
      DB_NAME: joi.string().required(),
      DB_POOL_SIZE: joi
        .number()
        .integer()
        .min(1)
        .max(30)
        .required(),
      LOG_LEVEL: joi
        .string()
        .valid("none", "error", "warn", "info", "verbose", "debug", "silly")
        .required(),
      HTTP_LOG_FORMAT: joi
        .string()
        .valid("combined", "common", "dev", "short", "tiny", "none")
        .required()
    })
    .unknown()
    .required()
);

const env = joi.attempt(process.env, envSchema);

module.exports = {
  logger: {
    level: env.LOG_LEVEL,
    httpFormat: env.HTTP_LOG_FORMAT
  },
  db: {
    uri: env.DB_URI,
    name: env.DB_NAME,
    poolSize: env.DB_POOL_SIZE
  },
  server: {
    port: env.PORT,
    jwtSecret: env.JWT_SECRET
  }
};
