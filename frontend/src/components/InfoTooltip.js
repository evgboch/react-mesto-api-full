import successTip from "../images/success-tip.png";
import failTip from "../images/fail-tip.png";

function InfoTooltip({isOpen, infoTip, onClose}) {
  return(
    <div className={isOpen ? "popup popup_opened" : "popup"}>
      <div className="popup__container popup__container_tip">
        <img className="popup__tip-image" src={
          (infoTip === "success") ? successTip : failTip
        }/>
        <h2 className="popup__title popup__title_tip">{
          (infoTip === "success") ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."
        }</h2>
        <button className="popup__close-button" type="button" onMouseDown={onClose}></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
