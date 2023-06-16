import React, { useContext, useEffect, useState } from "react";
import './Partners.css';
import NavBar from '../NavBar/NavBar';

import undpLogo from '../../assets/images/undp.png';
import unicefLogo from '../../assets/images/unicef.png';
import sifoLogo from '../../assets/images/sifo-logo.gif';
import siSdoLogo from '../../assets/images/sdo.jpg';
import siUseLogo from '../../assets/images/foto_u.jpg';
import LogoSchool from '../../assets/images/logo_shcool.png';
import new_Phone from '../../assets/images/new_phote.jpg';
import balalyk_foto from '../../assets/images/balalyk.jpg';
import balalyk_logo from '../../assets/images/balalyk_logo.jpg';
import internat from '../../assets/images/internat.jpg';
import karasuu from '../../assets/images/karasuu.jpg';
import fablab from '../../assets/images/fablab.jpg';
import fablab_logo from '../../assets/images/fablab_logo.jpg';
import sifo from '../../assets/images/sifo.jpg';
import about from '../../assets/images/about.jpg';

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { LanguageContext } from '../../contexts/LanguageContext';

const Partners = () => {
    const { language } = useContext(LanguageContext);

    return (
        <>
            <NavBar />

            {language === 'ru' ?  <div className="partners__container">
                <span className="partners__title">НАШИ ПАРТНЕРЫ</span>

                <div className="partner__section">
                    <div className="partner__info-sdo">
                        <div className='logo_title'>
                            <img className="partner__info__logo" src={siSdoLogo} alt="" />
                            <span className="partner__info__title">Специальная дошкольная образовательная организация №87 для детей с нарушением речи и слуха</span>
                        </div>
                        {/* <span className="partner__info__description">Подписан договор о сотрудничестве со Специальной дошкольной образовательной организацией №87 для детей с нарушением речи и слуха, г.Бишкек <a href=" https://sdoo87.edubish.kg/" className='url_sdo'>(https://sdoo87.edubish.kg/)</a></span> */}
                        <img className="partner__info__logo_user" src={siUseLogo} alt="" />
                    </div>
                </div>

                <div className="partner__section">
                    <div className="partner__info-sifo">
                        <div className='logo_title'>
                            <img className="partner__info__logo" src={sifoLogo} alt="" />
                            <span className="partner__info__title">SEOUL INTERNATIONAL FRIENDSHIP ORGANIZATION</span>
                        </div> 
                        {/* <span className="partner__info__description">С началом этого года для преодоления последствий пандемии ЮНИСЕФ и ПРООН в Кыргызской Республике оказали поддержку для разработки и запуску двуязычного мобильного приложения «Дилгир» для глухих и слабослышащих детей. Приложение является дополнением к учебнику “Дилгир-1”, над созданием которого работает методический совет Специальной общеобразовательной школы-интернат для глухих детей, совместно с общественным фондом «Технолэнд». Учебник представлен одновременно на русском и кыргызском языках, позволяющий внедрить единую методику обучения на обоих языках.</span> */}
                        <img className="partner__info__logo_user" src={sifo} alt="" />
                    </div>
                </div>

                <div className="partner__section">
                    <div className="partner__info-sdo">
                        <div className='logo_title'>
                            <img className="partner__info__logo" src={fablab_logo} alt="" />
                            <span className="partner__info__title">FabLab Bishkek</span>
                        </div>
                        <img className="partner__info__logo_user" src={fablab} alt="" />
                    </div>
                </div>

                <div className="partner__section">
                    <div className="partner__info-sdo">
                        <span className="partner__info__title">Специальная общеобразовательная школа-интернат для слепых и слабовидящих детей г.Ош</span>
                        <img className="partner__info__logo_user" src={internat} alt="" />
                    </div>
                </div>

                <div className="partner__section">
                    <div className="partner__info-sdo">
                        <span className="partner__info__title">Кара Суйская Специальная Общеобразовательная школа интернат для глухих детей</span>
                        <img className="partner__info__logo_user" src={karasuu} alt="" />
                    </div>
                </div>

                <div className="partner__section">
                    <div className="partner__info-sdo">
                        <div className='logo_title'>
                            <img className="partner__info__logo" src={balalyk_logo} alt="" />
                            <span className="partner__info__title">Центр Детского Творчества "Шайыр балалык"</span>
                        </div>
                        <img className="partner__info__logo_user" src={balalyk_foto} alt="" />
                    </div>
                </div>

                <div className="partner__section">
                    <div className="partner__info-sdo">
                        <div className='logo_title'>
                            <img className="partner__info__logo" src={LogoSchool} alt="" />
                            <span className="partner__info__title">Специальная общеобразовательная школа-интернат для глухих детей КР</span>
                        </div>
                        <img className="partner__info__logo_user" src={new_Phone} alt="" />
                    </div>
                </div>


                <div className="partner__section">
                    <div className="partner__info-sdo">
                        <div className='logo_title'>
                            <span className="partner__info__title">Специальная общеобразовательная школа-интернат для слепых и слабовидящих детей г.Бишкек.</span>
                        </div>
                        <img className="partner__info__logo_user" src={about} alt="" />
                    </div>
                </div>

            </div> :  <div className="partners__container">
                <span className="partners__title">OUR PARTNERS</span>

                <div className="partner__section">
                    <div className="partner__info-sdo">
                        <div className='logo_title'>
                            <img className="partner__info__logo" src={siSdoLogo} alt="" />
                            <span className="partner__info__title">Special pre-school educational organization № 87 for children with speech and hearing disorders</span>
                        </div>
                        {/* <span className="partner__info__description">Подписан договор о сотрудничестве со Специальной дошкольной образовательной организацией №87 для детей с нарушением речи и слуха, г.Бишкек <a href=" https://sdoo87.edubish.kg/" className='url_sdo'>(https://sdoo87.edubish.kg/)</a></span> */}
                        <img className="partner__info__logo_user" src={siUseLogo} alt="" />
                    </div>
                </div>

                <div className="partner__section">
                    <div className="partner__info-sifo">
                        <div className='logo_title'>
                            <img className="partner__info__logo" src={sifoLogo} alt="" />
                            <span className="partner__info__title">SEOUL INTERNATIONAL FRIENDSHIP ORGANIZATION</span>
                        </div> 
                        {/* <span className="partner__info__description">С началом этого года для преодоления последствий пандемии ЮНИСЕФ и ПРООН в Кыргызской Республике оказали поддержку для разработки и запуску двуязычного мобильного приложения «Дилгир» для глухих и слабослышащих детей. Приложение является дополнением к учебнику “Дилгир-1”, над созданием которого работает методический совет Специальной общеобразовательной школы-интернат для глухих детей, совместно с общественным фондом «Технолэнд». Учебник представлен одновременно на русском и кыргызском языках, позволяющий внедрить единую методику обучения на обоих языках.</span> */}
                        <img className="partner__info__logo_user" src={sifo} alt="" />
                    </div>
                </div>

                <div className="partner__section">
                    <div className="partner__info-sdo">
                        <div className='logo_title'>
                            <img className="partner__info__logo" src={fablab_logo} alt="" />
                            <span className="partner__info__title">FabLab Bishkek</span>
                        </div>
                        <img className="partner__info__logo_user" src={fablab} alt="" />
                    </div>
                </div>

                <div className="partner__section">
                    <div className="partner__info-sdo">
                        <span className="partner__info__title">Special General Education Boarding School for Blind and Visually Impaired Children in Osh</span>
                        <img className="partner__info__logo_user" src={internat} alt="" />
                    </div>
                </div>

                <div className="partner__section">
                    <div className="partner__info-sdo">
                        <span className="partner__info__title">Kara Sui Special General Education Boarding School for Deaf Childrenй</span>
                        <img className="partner__info__logo_user" src={karasuu} alt="" />
                    </div>
                </div>

                <div className="partner__section">
                    <div className="partner__info-sdo">
                        <div className='logo_title'>
                            <img className="partner__info__logo" src={balalyk_logo} alt="" />
                            <span className="partner__info__title">Children's Creativity Center "Shayyr balalyk"</span>
                        </div>
                        <img className="partner__info__logo_user" src={balalyk_foto} alt="" />
                    </div>
                </div>

                <div className="partner__section">
                    <div className="partner__info-sdo">
                        <div className='logo_title'>
                            <img className="partner__info__logo" src={LogoSchool} alt="" />
                            <span className="partner__info__title">Special General Education Boarding School for Deaf Children of the Kyrgyz Republic</span>
                        </div>
                        <img className="partner__info__logo_user" src={new_Phone} alt="" />
                    </div>
                </div>


                <div className="partner__section">
                    <div className="partner__info-sdo">
                        <div className='logo_title'>
                            <span className="partner__info__title">Special General Education Boarding School for Blind and Visually Impaired Children in Bishkek.</span>
                        </div>
                        <img className="partner__info__logo_user" src={about} alt="" />
                    </div>
                </div>

            </div>}

           
        </>
    );
};

export default Partners;