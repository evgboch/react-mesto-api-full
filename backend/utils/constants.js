const errorStatusList = {
  badRequest: 400,
  internalServerError: 500,
  notFound: 404,
  unauthorized: 401,
  forbidden: 403,
  conflict: 409,
};

const linkRegex = /https?:\/\/[www.]?[a-z0-9-]{1,}\.[\S]{2,}/i;

const allowedCors = [
  'https://praktikum.tk',
  'http://praktikum.tk',
  'http://localhost:3000',
  'https://localhost:3000',
  'https://evg.mesto.nomoredomains.icu',
  'http://evg.mesto.nomoredomains.icu',
];

const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

module.exports = {
  errorStatusList,
  linkRegex,
  allowedCors,
  DEFAULT_ALLOWED_METHODS,
};
