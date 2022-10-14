import React from "react";
import PopupWithForm from "./PopupWithForm"

function AddPlacePopup({isOpen, onClose, onAddPlace, buttonText}) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onAddPlace({
      name: name,
      link: link
    });
  }

  function handleNameFieldChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkFieldChange(evt) {
    setLink(evt.target.value);
  }

  return (
    <PopupWithForm name="card" title="Новое место" buttonText={buttonText} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} >
      <label className="popup__field">
        <input id="place" className="popup__input popup__input_place_top" type="text" name="name" placeholder="Название" required minLength="2" maxLength="30" value={name} onChange={handleNameFieldChange} />
        <span id="place-error" className="popup__error"></span>
      </label>
      <label className="popup__field">
        <input id="link" className="popup__input popup__input_place_bottom" type="url" name="link" placeholder="Ссылка на картинку" required value={link} onChange={handleLinkFieldChange} />
        <span id="link-error" className="popup__error"></span>
      </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
