import React from "react";
import { Link } from "react-router-dom"

function Register({onRegister}) {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleSubmit(evt) {
    evt.preventDefault();

    onRegister({password, email});
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  return (
    <div className="sign sign_up">
      <form className="sign__form sign__form_up" name="signUpForm" onSubmit={handleSubmit}>
        <h2 className="sign__title sign__title_up">Регистрация</h2>
        <label className="sign__field">
          <input id="email" className="sign__input sign__input_place_top" type="email" name="email" placeholder="Email" required onChange={handleEmailChange} />
        </label>
        <label className="sign__field">
          <input id="password" className="sign__input sign__input_place_bottom" type="password" name="password" placeholder="Пароль" required autoComplete="off" onChange={handlePasswordChange} />
        </label>
        <button className="sign__submit-button sign__submit-button_up" type="submit">Зарегистрироваться</button>
      </form>
      <div className="sign__button-container">
        <p className="sign__bottom-text">Уже зарегистрированы?</p>
        <Link to="/signin" className="sign__in-button">Войти</Link>
      </div>
    </div>
  )
}

export default Register;
