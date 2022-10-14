function PopupWithForm({name, title, buttonText, isOpen, onClose, onSubmit, children}) {
  return(
    <div className={isOpen ? `popup popup_${name} popup_opened` : `popup popup_${name}`}>
      <form className={`popup__container popup__container_${name}`} name="popupProfileForm" onSubmit={onSubmit}>
        <h2 className={`popup__title popup__title_${name}`}>{title}</h2>
        {children}
        <button className={`popup__submit-button popup__submit-button_${name}`} type="submit">{buttonText}</button>
        <button className={`popup__close-button popup__close-button_${name}`} type="button" onMouseDown={onClose}></button>
      </form>
    </div>
  );
}

export default PopupWithForm;
