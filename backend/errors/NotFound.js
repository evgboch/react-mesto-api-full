const { errorStatusList } = require('../utils/constants');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = errorStatusList.notFound;
  }
}

module.exports = NotFoundError;
