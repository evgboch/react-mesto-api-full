import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Card from "./Card";
import avatar from "../images/default-user.png";

function Main({cards, onCardLike, onCardDelete, onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {
  const currentUser = React.useContext(CurrentUserContext);

  return(
    <main className="content">
      <section className="profile content__profile">
        <div className="profile__info">
          <div className="profile__avatar-container">
            <div className="profile__avatar" style={currentUser ? {backgroundImage: `url(${currentUser.avatar})`} : {backgroundImage: `url(${avatar})`}}/>
            <div className="profile__avatar-overlay" onClick={onEditAvatar}></div>
          </div>
          <div className="profile__text-container">
            <div className="profile__title-container">
              <h1 className="profile__title">{currentUser ? currentUser.name : "User"}</h1>
              <button className="profile__edit-button" onClick={onEditProfile} type="button"></button>
            </div>
            <p className="profile__subtitle">{currentUser ? currentUser.about : "Info"}</p>
          </div>
        </div>
        <button className="profile__add-button" onClick={onAddPlace} type="button"></button>
      </section>

      <section className="photo-cards" aria-label="Фотокарточки">
        <ul className="photo-cards__grid">
          {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
