const { errorStatusList } = require('./constants');

function handleBadRequestError(res) {
  res.status(errorStatusList.badRequest);
  res.send({
    message: 'Ошибка: запрошены некорректные данные.',
  });
}

function handleDefaultError(res) {
  res.status(errorStatusList.internalServerError);
  res.send({
    message: 'На сервере произошла ошибка.',
  });
}

function handleNotFoundError(res) {
  res.status(errorStatusList.notFound);
  res.send({
    message: 'Ошибка: данные не найдены.',
  });
}

function handleUnauthorizedError(res) {
  res.status(errorStatusList.unauthorized);
  res.send({
    message: 'Ошибка авторизации',
  });
}

function handleForbiddenError(res) {
  res.status(errorStatusList.forbidden);
  res.send({
    message: 'Ошибка: у Вас нет прав на совершение данного действия.',
  });
}

module.exports = {
  handleBadRequestError,
  handleDefaultError,
  handleNotFoundError,
  handleUnauthorizedError,
  handleForbiddenError,
};
