const { errorStatusList } = require('../utils/constants');

class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = errorStatusList.unauthorized;
  }
}

module.exports = UnauthorizedError;
