import React, { useContext, useState } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import NavBar from '../NavBar/NavBar';
import './SignIn.css'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { LanguageContext } from '../../contexts/LanguageContext';

const SignIn = () => {

    const { language } = useContext(LanguageContext);


    return (
        <>
            <NavBar />
            <div className="sign-in">
                <div className="sign-in__container">
                    {language === 'ru' ? <span className="sign-in__title">Вход</span> : <span className="sign-in__title">Log in</span>}
                    <LoginForm />
                </div>
            </div>
        </>
    );
};

export default SignIn;