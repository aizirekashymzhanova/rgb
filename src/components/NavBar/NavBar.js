import React, { useContext, useState } from 'react';
import './NavBar.css'

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import headerLogo from '../../assets/images/technoland-logo.png';
import CallIcon from '@material-ui/icons/Call';
import { Link, useHistory } from 'react-router-dom';
import { newsContext } from '../../contexts/NewsContext';
import { authContext } from '../../contexts/AuthContext';

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { LanguageContext } from '../../contexts/LanguageContext';

const NavBar = () => {

    const { language } = useContext(LanguageContext);

    const [searchValue, setSearchValue] = useState('');
    const { getNews } = useContext(newsContext);
    const { isAuth, logoutUser } = useContext(authContext);
    const history = useHistory();

    function handleSearchValueChange(event) {
        setSearchValue(event.target.value);
        const search = new URLSearchParams(history.location.search);
        search.set("search", searchValue);
        history.push(`${history.location.pathname}?${search.toString()}`);
        getNews();
    }

    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="subcontent__navbar__logo">
                    <img className="navbar__logo" src={headerLogo} alt="ОФ Технолэнд" />
                    {language === 'ru' ? <Link to="/" className="navbar__text-logo">ОФ ТЕХНОЛЭНД</Link> : <Link to="/" className="navbar__text-logo">OF TECHNOLAND</Link>}
                </div>
                <div className="navbar__actions">
                    {
                        window.location.pathname === '/news' || window.location.pathname === '/admin-panel-news' ?
                            <input onChange={handleSearchValueChange} value={searchValue} className="navbar__search-inp" placeholder="Поиск новостей" />
                            :
                            ''
                    }
                    {language === 'ru' ? <Link to="/" className="navbar__link">ГЛАВНАЯ</Link> : <Link to="/" className="navbar__link">HOME</Link>}
                    {language === 'ru' ? <Link to="/contacts" className="navbar__link">КОНТАКТЫ</Link> : <Link to="/contacts" className="navbar__link">CONTACTS</Link>}
                    <LanguageSwitcher />
                    {
                        isAuth ?
                        
                            <span onClick={() => logoutUser(history)} className="navbar__login-btn">
                                 {language === 'ru' ? <span>Выйти</span> : <span>Log out</span>}
                            </span>
                            :
                            
                            <Link to="/login" className="navbar__login-btn">{language === 'ru' ? <span>Войти</span> : <span>Log in</span>}</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;