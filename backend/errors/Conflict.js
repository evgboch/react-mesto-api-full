const { errorStatusList } = require('../utils/constants');

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = errorStatusList.conflict;
  }
}

module.exports = ConflictError;
