const { errorStatusList } = require('../utils/constants');

class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = errorStatusList.badRequest;
  }
}

module.exports = BadRequestError;
