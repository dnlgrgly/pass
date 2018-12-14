require('dotenv').config()
const logger = require('../models/logger')
// these need a one off sync init
require('../models/passport')
// these require async init and cleanup
const db = require('../models/db')
const server = require('./server')

// graceful start
init()

// graceful shutdown
const stopSignals = ['SIGINT', 'SIGTERM']
stopSignals.forEach(signal => process.once(signal, stop))

// do not init the server if a crucial component can not start up
async function init () {
  try {
    await db.init()
    await server.init()
  } catch (err) {
    logger.error(`Couldn't init the app: ${err}`)
    // exit code for fatal exception
    process.exit(1)
  }
}

async function stop () {
  // start with a normal exit code
  let exitCode = 0
  try {
    await server.close()
  } catch (err) {
    logger.error(`Failed to close the server: ${err}`)
    exitCode = 1
  }

  try {
    await db.close()
  } catch (err) {
    logger.error(`Failed to close the db: ${err}`)
    exitCode = 1
  }
  process.exit(exitCode)
}

module.exports = {
  init,
  stop
}
