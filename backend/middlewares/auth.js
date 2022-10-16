const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/Unauthorized');

function checkAuthorization(req, res, next) {
  const { authorization } = req.headers;
  const { NODE_ENV, JWT_SECRET } = process.env;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new UnauthorizedError('Необходима авторизация'));
  }

  const token = authorization.replace('Bearer ', '');

  jwt.verify(
    token,
    NODE_ENV === 'production' ? JWT_SECRET : 'top-secret',
    (err, data) => {
      if (err) {
        next(new UnauthorizedError('Необходима авторизация'));
      }
      req.user = data;
      next();
    },
  );
}

module.exports = checkAuthorization;
