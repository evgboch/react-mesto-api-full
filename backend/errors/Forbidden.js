const { errorStatusList } = require('../utils/constants');

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = errorStatusList.forbidden;
  }
}

module.exports = ForbiddenError;
