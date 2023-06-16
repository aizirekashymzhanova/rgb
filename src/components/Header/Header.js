import React, { useContext, useState, useEffect } from "react";
import "./Header.css";
import headerVideo from "../../assets/videos/deaf.mp4";
import headerLogo from "../../assets/images/technoland-logo.png";
import { useHistory } from "react-router";
import Video from "react-responsive-video";
import { Link } from "react-router-dom";
import { authContext } from "../../contexts/AuthContext";
import SideBar from "../SideBar/SideBar";
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { LanguageContext } from '../../contexts/LanguageContext';

const Header = () => {
  const history = useHistory();
  const { isAuth, loginUser, isUserLogedIn, logoutUser, authMessage } =
    useContext(authContext);
  const [passwordInpType, setpasswordInpType] = useState("password");

  useEffect(() => {
    isUserLogedIn();
  }, []);

  const initialState = {
    userData: {
      email: "",
      password: "",
    },
    errorMsg: "",
    successMsg: "",
  };

  const { language } = useContext(LanguageContext);

  const [state, setState] = useState(initialState);

  function changesHandler(event) {
    setState({
      ...state,
      userData: {
        ...state.userData,
        [event.target.name]: event.target.value,
      },
    });
  }

  function handleSubmitClick(event) {
    event.preventDefault();
    loginUser(state.userData, history);
  }

  function myFunction(event) {
    event.preventDefault();
    let x = document.getElementById("myTopnav");
    if (x.className === "subcontent__navbar") {
      x.className += " responsive";
    } else {
      x.className = "subcontent__navbar";
    }
  }

  function toggleInpType() {
    passwordInpType === "password"
      ? setpasswordInpType("text")
      : setpasswordInpType("password");
  }

  return (
    <div className="header">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

      <Video className="video" mp4={headerVideo} objectFit={`cover`} />

      <div className="content">
        <div className="subcontent__navbar" id="myTopnav">
          <div className="subcontent__navbar__logo">
            <img className="navbar__logo" src={headerLogo} alt="ОФ Технолэнд" />
            {language === 'ru' ? <span className="navbar__logo__title">ОФ ТЕХНОЛЭНД</span> : <span className="navbar__logo__title">OF TECHNOLAND</span>}
            
          </div>
          <ul>
            <li>
              <Link to="/">{language === 'ru' ? <span>ГЛАВНАЯ</span> : <span>MAIN</span>}</Link>
            </li>
            <li>
              <Link to="/about">{language === 'ru' ? <span>О НАС</span> : <span>ABOUT US</span>}</Link>
            </li>
            {/* <li>
              <Link to="/news">НОВОСТИ</Link>
            </li> */}
            <li>
              <Link to="/contacts">{language === 'ru' ? <span>КОНТАКТЫ</span> : <span>CONTACTS</span>}</Link>
            </li>
            <li>
              <Link to="/partners">{language === 'ru' ? <span>НАШИ ПАРТНЕРЫ</span> : <span>OUR PARTNERS</span>}</Link>
            </li>
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
          {isAuth ? (
            <span
              onClick={() => logoutUser(history)}
              className="navbar__log-in-out-btn"
            >
              <button className="sign-in-btn">
              {language === 'ru' ? <span>ВЫЙТИ</span> : <span>EXIT</span>}
              </button>
            </span>
          ) : (
            <Link className="navbar__log-in-out-btn" to="/login">
              <button className="sign-in-btn">
              {language === 'ru' ? <span>ВОЙТИ</span> : <span>LOGIN</span>}
              </button>
            </Link>
          )}
        </div>
        <div className="subcontent">
          <div className="subcontent__text-block">

          {language === 'ru' ? <p className="subcontent__title">
              Мы верим в мир, в котором каждый ребёнок имеет доступ к
              образованию.
            </p> : <p className="subcontent__title">
              We believe in a world in which every child has access to education.
            </p>}

            {language === 'ru' ? <p className="subcontent__title">
            В Кыргызстане детям с ограниченными возможностями здоровья нередко
              отказывают в предоставлении качественного инклюзивного образования
              вопреки тому, что в 2019 году Кыргызстан ратифицировал Конвенцию о
              правах инвалидов.
            </p> : <p className="subcontent__title">
            In Kyrgyzstan, children with disabilities are often denied quality inclusive education despite the fact that Kyrgyzstan ratified the Convention on Rights of Persons with Disabilities.
            </p>}
          </div>
          {!isAuth ? (
            <div className="subcontent__login-block">
              <form
                onSubmit={handleSubmitClick}
                className="subcontent__login-form"
              >
                {language === 'ru' ? <span className="subcontent__login-form__title">
                  Материалы для скачивания
                </span> : <span className="subcontent__login-form__title">Downloadable materials</span>}

                {language === 'ru' ? <span className="subcontent__login-form__description">
                Для доступа к учебным материалам требуется авторизация
                </span> : <span className="subcontent__login-form__description">Authorization is required to access the training materials</span>}

                <div className="subcontent__email-block">
                {language === 'ru' ? <label>Эл. почта</label> : <label>E-mail</label>}
        
                  <input
                    onChange={changesHandler}
                    name="email"
                    type="text"
                    className="subcontent__login-inp"
                    placeholder="Адрес эл. почты"
                  />
                </div>
                <div className="subcontent__password-block">
                {language === 'ru' ? <label>Пароль</label> : <label>Password</label>}
                  <input
                    onChange={changesHandler}
                    name="password"
                    type={passwordInpType}
                    className="subcontent__password-inp"
                    placeholder="Пароль"
                  />
                </div>
                <div className="subcontent__checkbox-block">
                  <input type="checkbox" onClick={toggleInpType} />
                  {language === 'ru' ? <label>Показать пароль</label> : <label>Show password</label>}
                  
                </div>
                <span className="subcontent__login-form__error">
                  {authMessage}
                </span>
                {language === 'ru' ? <button
                  type="submit"
                  className="subcontent__login-form__button"
                >
                  Войти
                </button> : <button
                  type="submit"
                  className="subcontent__login-form__button"
                >
                  Log in
                </button>}
                <div className="btn_registr">
                {language === 'ru' ? <a href="/register_user">Зарегистрироваться</a> : <a href="/register_user">Sign up</a>}
                  
                </div>
              </form>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
