const Boom = require('boom')

// mongodb duplicate entry error code for unique indices
const DUPLICATE_ERROR = 11000

function throw400 (fields) {
  throw new Boom('Invalid data\n' + JSON.stringify(fields), {
    statusCode: 400,
    data: fields
  })
}

function checkDuplicates (error, fields) {
  if (error.code === DUPLICATE_ERROR) {
    throw400(fields)
  } else {
    throw error
  }
}

module.exports = {
  DUPLICATE_ERROR,
  throw400,
  checkDuplicates
}
