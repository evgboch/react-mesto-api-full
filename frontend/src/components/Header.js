import { Link, Route, Switch } from "react-router-dom";

function Header({email, onSignOut}) {
    return(
      <header className="header page__header">
        <div className="header__logo"></div>
        <div className="header__button-container">
          <Switch>
            <Route exact path="/">
              <p className="header__email">{email}</p>
              <Link to="/signin" className="header__button header__button_logged-in" onMouseDown={onSignOut}>
                Выйти
              </Link>
            </Route>
            <Route path="/signin">
              <Link to="/signup" className="header__button">
                Регистрация
              </Link>
            </Route>
            <Route path="/signup">
              <Link to="/signin" className="header__button">
                Войти
              </Link>
            </Route>
          </Switch>
        </div>
      </header>
    );
}

export default Header;
