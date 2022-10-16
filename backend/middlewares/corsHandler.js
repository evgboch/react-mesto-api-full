const { allowedCors, DEFAULT_ALLOWED_METHODS } = require('../utils/constants');

// eslint-disable-next-line consistent-return
function corsHandler(req, res, next) {
  const { method } = req;
  const { origin } = req.headers;
  const requestHeaders = req.headers['access-control-request-headers'];

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }

  next();
}

module.exports = { corsHandler };
