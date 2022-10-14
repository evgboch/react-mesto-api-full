import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({card, onCardClick, onCardLike, onCardDelete}) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `photo-cards__delete-button ${isOwn && "photo-cards__delete-button_active"}`
  );
  const isLiked = card.likes.some(like => like._id === currentUser._id);
  const cardLikeButtonClassName = (
    `photo-cards__like-button ${isLiked && "photo-cards__like-button_active"}`
  );

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="photo-cards__element">
      <div className="photo-cards__picture" style={{backgroundImage: `url(${card.link})`}} onMouseDown={handleClick}></div>
      <div className="photo-cards__title-container">
        <h2 className="photo-cards__title">{card.name}</h2>
        <div className="photo-cards__like-container">
          <button className={cardLikeButtonClassName} type="button" onMouseDown={handleLikeClick}></button>
          <p className="photo-cards__like-counter">{card.likes.length}</p>
        </div>
      </div>
      <button className={cardDeleteButtonClassName} onMouseDown={handleDeleteClick}></button>
    </li>
  );
}

export default Card;
