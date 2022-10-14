const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const BadRequestError = require('../errors/BadRequest');
const ConflictError = require('../errors/Conflict');
const NotFoundError = require('../errors/NotFound');

function getUsersList(req, res, next) {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch(next);
}

function getUser(req, res, next) {
  User.findById(req.params.userId)
    .orFail(() => {
      throw new NotFoundError('Пользователь с указанным идентификатором не найден');
    })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Вы передали некорректные данные'));
      } else {
        next(err);
      }
    });
}

function createUser(req, res, next) {
  const {
    name, about, avatar, email, password,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name, about, avatar, email, password: hash,
    }))
    .then((user) => {
      res.send({
        name: user.name,
        about: user.about,
        avatar: user.avatar,
        email: user.email,
      });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Вы передали некорректные данные'));
      } else if (err.code === 11000) {
        next(new ConflictError('Пользователь с указанной почтой уже существует'));
      } else {
        next(err);
      }
    });
}

function updateUserInfo(req, res, next) {
  const { name, about } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    {
      new: true,
      runValidators: true,
    },
  )
    .orFail(() => {
      throw new NotFoundError('Пользователь с указанным идентификатором не найден');
    })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      if ((err.name === 'ValidationError') || (err.name === 'CastError')) {
        next(new BadRequestError('Вы передали некорректные данные'));
      } else {
        next(err);
      }
    });
}

function updateUserAvatar(req, res, next) {
  const { avatar } = req.body;

  User.findByIdAndUpdate(
    req.user._id,
    { avatar },
    {
      new: true,
      runValidators: true,
    },
  )
    .orFail(() => {
      throw new NotFoundError('Пользователь с указанным идентификатором не найден');
    })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      if ((err.name === 'ValidationError') || (err.name === 'CastError')) {
        next(new BadRequestError('Вы передали некорректные данные'));
      } else {
        next(err);
      }
    });
}

function login(req, res, next) {
  const { email, password } = req.body;

  return User.findUserWithCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        'top-secret-key',
        { expiresIn: '7d' },
      );
      res.send({ token });
    })
    .catch(next);
}

function getOwnInfo(req, res, next) {
  User.findById(req.user._id)
    .orFail(() => {
      throw new NotFoundError('Пользователь с указанным идентификатором не найден');
    })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      if ((err.name === 'ValidationError') || (err.name === 'CastError')) {
        next(new BadRequestError('Вы передали некорректные данные'));
      } else {
        next(err);
      }
    });
}

module.exports = {
  getUsersList,
  getUser,
  createUser,
  updateUserInfo,
  updateUserAvatar,
  login,
  getOwnInfo,
};
