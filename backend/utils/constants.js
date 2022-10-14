const errorStatusList = {
  badRequest: 400,
  internalServerError: 500,
  notFound: 404,
  unauthorized: 401,
  forbidden: 403,
  conflict: 409,
};

const linkRegex = /https?:\/\/[www.]?[a-z0-9-]{1,}\.[\S]{2,}/i;

module.exports = { errorStatusList, linkRegex };
