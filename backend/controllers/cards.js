const Card = require('../models/card');
const BadRequestError = require('../errors/BadRequest');
const ForbiddenError = require('../errors/Forbidden');
const NotFoundError = require('../errors/NotFound');

function getCardsList(req, res, next) {
  Card.find({})
    .then((cards) => {
      res.send(cards);
    })
    .catch(next);
}

function createCard(req, res, next) {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => {
      res.send(card);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Вы передали некорректные данные'));
      } else {
        next(err);
      }
    });
}

function deleteCard(req, res, next) {
  Card.findById(req.params.cardId)
    .orFail(() => {
      throw new NotFoundError('Карточка с указанным идентификатором не найдена');
    })
    .then((card) => {
      if (card.owner.toString() === req.user._id) {
        card.remove()
          .then(() => {
            res.send({
              message: 'Карточка удалена',
            });
          })
          .catch(next);
      } else {
        throw new ForbiddenError('Вы не можете удалять чужие карточки');
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Вы передали некорректные данные'));
      } else {
        next(err);
      }
    });
}

function likeCard(req, res, next) {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    {
      new: true,
      runValidators: true,
    },
  )
    .orFail(() => {
      throw new NotFoundError('Карточка с указанным идентификатором не найдена');
    })
    .then((card) => {
      res.send(card);
    })
    .catch((err) => {
      if ((err.name === 'ValidationError') || (err.name === 'CastError')) {
        next(new BadRequestError('Вы передали некорректные данные'));
      } else {
        next(err);
      }
    });
}

function dislikeCard(req, res, next) {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    {
      new: true,
      runValidators: true,
    },
  )
    .orFail(() => {
      throw new NotFoundError('Карточка с указанным идентификатором не найдена');
    })
    .then((card) => {
      res.send(card);
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
  getCardsList,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
