const winston = require('winston')
const config = require('../config')

module.exports = winston.createLogger({
  level: config.logger.level,
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  ]
})
