const router = require('express').Router();
const { Joi, celebrate } = require('celebrate');
const {
  getUsersList, getUser, updateUserInfo, updateUserAvatar, getOwnInfo,
} = require('../controllers/users');
const { linkRegex } = require('../utils/constants');

router.get('/me', getOwnInfo);
router.get('/', getUsersList);

router.get('/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().required().hex().length(24),
  }),
}), getUser);

router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().pattern(linkRegex),
  }),
}), updateUserAvatar);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), updateUserInfo);

module.exports = router;
