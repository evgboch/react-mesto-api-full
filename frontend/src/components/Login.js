import React from "react";

function Login({ onLogin }) {
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleSubmit(evt) {
    evt.preventDefault();

    onLogin({password, email});
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  return(
    <div className="sign">
      <form className="sign__form sign__form_in" name="signInForm" onSubmit={handleSubmit}>
        <h2 className="sign__title sign__title_in">Вход</h2>
        <label className="sign__field">
          <input id="email" className="sign__input sign__input_place_top" type="email" name="email" placeholder="Email" required onChange={handleEmailChange} />
        </label>
        <label className="sign__field">
          <input id="password" className="sign__input sign__input_place_bottom" type="password" name="password" placeholder="Пароль" required autoComplete="off" onChange={handlePasswordChange} />
        </label>
        <button className="sign__submit-button sign__submit-button_in" type="submit">Войти</button>
      </form>
    </div>
  )
}

export default Login;
