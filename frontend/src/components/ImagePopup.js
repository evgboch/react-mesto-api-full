function ImagePopup({card, onClose}) {
  return(
    <div className={card ? "popup popup_photo popup_opened" : "popup popup_photo"}>
      <div className="popup__photo-container">
        <img src={card ? card.link : "#"} alt={card ? card.name : "#"} className="popup__image"/>
        <h3 className="popup__image-caption">{card ? card.name : "#"}</h3>
        <button className="popup__close-button popup__close-button_photo" type="button" onMouseDown={onClose}></button>
      </div>
    </div>
  );
}

export default ImagePopup;
