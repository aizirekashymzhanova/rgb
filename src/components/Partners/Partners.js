import React from 'react';
import './Partners.css';
import NavBar from '../NavBar/NavBar';

import undpLogo from '../../assets/images/undp.png';
import unicefLogo from '../../assets/images/unicef.png';
import sifoLogo from '../../assets/images/sifo-logo.gif';
import siSdoLogo from '../../assets/images/sdo.jpg';
import siUseLogo from '../../assets/images/foto_u.jpg';

const Partners = () => {
    return (
        <>
            <NavBar />
            <div className="partners__container">
                <span className="partners__title">НАШИ ПАРТНЕРЫ</span>

                <div className="partner__section">
                    <div className="partner__info-sdo">
                        <img className="partner__info__logo" src={siSdoLogo} alt="" />
                        <span className="partner__info__title">Специальная дошкольная образовательная организация №87 для детей с нарушением речи и слуха</span>
                        <span className="partner__info__description">Подписан договор о сотрудничестве со Специальной дошкольной образовательной организацией №87 для детей с нарушением речи и слуха, г.Бишкек <a href=" https://sdoo87.edubish.kg/" className='url_sdo'>(https://sdoo87.edubish.kg/)</a></span>
                        <img className="partner__info__logo_user" src={siUseLogo} alt="" />
                    </div>
                </div>
                
                <div className="partner__section">
                    <div className="partner__info-unicef">
                        <img className="partner__info__logo" src={unicefLogo} alt="" />
                        <span className="partner__info__title">ЮНИСЕФ</span>
                        <span className="partner__info__description">С началом этого года для преодоления последствий пандемии ЮНИСЕФ и ПРООН в Кыргызской Республике оказали поддержку для разработки и запуску двуязычного мобильного приложения «Дилгир» для глухих и слабослышащих детей. Приложение является дополнением к учебнику “Дилгир-1”, над созданием которого работает методический совет Специальной общеобразовательной школы-интернат для глухих детей, совместно с общественным фондом «Технолэнд». Учебник представлен одновременно на русском и кыргызском языках, позволяющий внедрить единую методику обучения на обоих языках.</span>
                    </div>
                </div>

                <div className="partner__section">
                    <div className="partner__info-undp">
                        <img className="partner__info__logo" src={undpLogo} alt="" />
                        <span className="partner__info__title">ПРОГРАММА РАЗВИТИЯ ОРГАНИЗАЦИИ ОБЪЕДИНЕННЫХ НАЦИЙ</span>
                        <span className="partner__info__description">С началом этого года для преодоления последствий пандемии ЮНИСЕФ и ПРООН в Кыргызской Республике оказали поддержку для разработки и запуску двуязычного мобильного приложения «Дилгир» для глухих и слабослышащих детей. Приложение является дополнением к учебнику “Дилгир-1”, над созданием которого работает методический совет Специальной общеобразовательной школы-интернат для глухих детей, совместно с общественным фондом «Технолэнд».            Учебник представлен одновременно на русском и кыргызском языках, позволяющий внедрить единую методику обучения на обоих языках.</span>
                    </div>
                </div>

                <div className="partner__section">
                    <div className="partner__info-sifo">
                        <img className="partner__info__logo" src={sifoLogo} alt="" />
                        <span className="partner__info__title">SEOUL INTERNATIONAL FRIENDSHIP ORGANIZATION</span>
                        <span className="partner__info__description">С началом этого года для преодоления последствий пандемии ЮНИСЕФ и ПРООН в Кыргызской Республике оказали поддержку для разработки и запуску двуязычного мобильного приложения «Дилгир» для глухих и слабослышащих детей. Приложение является дополнением к учебнику “Дилгир-1”, над созданием которого работает методический совет Специальной общеобразовательной школы-интернат для глухих детей, совместно с общественным фондом «Технолэнд». Учебник представлен одновременно на русском и кыргызском языках, позволяющий внедрить единую методику обучения на обоих языках.</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Partners;