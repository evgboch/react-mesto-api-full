const NotFoundError = require('../errors/NotFound');

function handleIncorrectPath(req, res, next) {
  next(new NotFoundError('Указанный путь не существует'));
}

module.exports = { handleIncorrectPath };
