const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const usersRouter = require('./users');
const cardsRouter = require('./cards');
const incorrectPathRouter = require('./incorrectPath');
const checkAuthorization = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');
const { linkRegex } = require('../utils/constants');

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
router.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), login);
router.post('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(linkRegex),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), createUser);
router.use(checkAuthorization);
router.use('/users', usersRouter);
router.use('/cards', cardsRouter);
router.use('*', incorrectPathRouter);

module.exports = router;
