import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({isOpen, onClose, onUpdateUser, buttonText}) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  function handleNameFieldChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionFieldChange(evt) {
    setDescription(evt.target.value);
  }

  return(
    <PopupWithForm name="profile" title="Редактировать профиль" buttonText={buttonText} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <label className="popup__field">
        <input id="name" className="popup__input popup__input_place_top" type="text" name="nameField" placeholder="Жак-Ив Кусто" required minLength="2" maxLength="40" value={name} onChange={handleNameFieldChange}/>
        <span id="name-error" className="popup__error"></span>
      </label>
      <label className="popup__field">
        <input id="description" className="popup__input popup__input_place_bottom" type="text" name="descriptionField" placeholder="Исследователь океана" required minLength="2" maxLength="400" value={description} onChange={handleDescriptionFieldChange}/>
        <span id="description-error" className="popup__error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
